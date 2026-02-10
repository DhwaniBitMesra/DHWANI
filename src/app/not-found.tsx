import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Error 404</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
          This beat got lost
        </h1>
        <p className="mt-4 text-white/70">
          The page you are looking for is out of range. Head back and keep the music going.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-black"
          >
            Home
          </Link>
          <Link
            href="/naad"
            className="rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-white/80 hover:text-white"
          >
            NAAD
          </Link>
        </div>
      </div>
    </main>
  );
}
