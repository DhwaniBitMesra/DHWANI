import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Secure Gateway - Dhwani | Access Restricted",
	description: "Authorized personnel only. Login to access the Dhwani Member Lounge and Studio.",
};

export default function EnterLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
