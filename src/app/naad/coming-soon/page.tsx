"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const targetDate = new Date("2026-03-13T00:00:00");

const pad = (value: number) => value.toString().padStart(2, "0");

const getCountdown = (): Countdown => {
  const now = new Date();
  const distance = Math.max(targetDate.getTime() - now.getTime(), 0);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days: days.toString(),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds)
  };
};

export default function NaadComingSoon() {
  const [countdown, setCountdown] = useState<Countdown>(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/20 to-emerald-500/10 blur-3xl" />
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">NAAD 2026</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">Coming Soon</h1>
          <p className="max-w-2xl text-lg text-white/70">
            The stage is being tuned. Registrations open on March 13, 2026. Stay in rhythm.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Days", value: countdown.days },
            { label: "Hours", value: countdown.hours },
            { label: "Minutes", value: countdown.minutes },
            { label: "Seconds", value: countdown.seconds }
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur"
            >
              <div className="text-3xl font-bold tracking-[0.2em]">{item.value}</div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-6 flex items-end gap-3">
          {[40, 64, 48, 72, 44, 60, 52, 70, 46, 62].map((height, index) => (
            <span
              key={index}
              className="eq-bar w-2 rounded-full bg-white/70"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/naad"
            className="rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-white/80 hover:text-white"
          >
            Back to NAAD
          </Link>
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-black"
          >
            Home
          </Link>
        </div>
      </section>

      <style jsx>{`
        .eq-bar {
          animation: pulse 1.4s ease-in-out infinite;
        }
        .eq-bar:nth-child(2) {
          animation-delay: 0.1s;
        }
        .eq-bar:nth-child(3) {
          animation-delay: 0.2s;
        }
        .eq-bar:nth-child(4) {
          animation-delay: 0.3s;
        }
        .eq-bar:nth-child(5) {
          animation-delay: 0.4s;
        }
        .eq-bar:nth-child(6) {
          animation-delay: 0.5s;
        }
        .eq-bar:nth-child(7) {
          animation-delay: 0.6s;
        }
        .eq-bar:nth-child(8) {
          animation-delay: 0.7s;
        }
        .eq-bar:nth-child(9) {
          animation-delay: 0.8s;
        }
        .eq-bar:nth-child(10) {
          animation-delay: 0.9s;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scaleY(0.6);
            opacity: 0.5;
          }
          50% {
            transform: scaleY(1.4);
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
