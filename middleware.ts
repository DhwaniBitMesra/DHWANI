import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export async function middleware(request: NextRequest) {
	let response = NextResponse.next({
		request,
	});

	const supabase = createServerClient(supabaseUrl!, supabaseKey!, {
		cookies: {
			getAll() {
				return request.cookies.getAll();
			},
			setAll(cookiesToSet) {
				cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
				response = NextResponse.next({
					request,
				});
				cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
			},
		},
	});

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (request.nextUrl.pathname.startsWith("/account") && !user) {
		const redirectUrl = request.nextUrl.clone();
		redirectUrl.pathname = "/enter";
		redirectUrl.searchParams.set("next", request.nextUrl.pathname);
		return NextResponse.redirect(redirectUrl);
	}

	return response;
}

export const config = {
	matcher: ["/account/:path*"],
};
