"use client";

import { Separator } from "@/components/ui/separator";
import { BadgeQuestionMark } from "@aliimam/icons";
import { Instagram, Youtube } from "lucide-react";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_#333_1px,_transparent_1px)] opacity-15 [background-size:20px_20px] pointer-events-none" />

      {/* Navigation */}
      <header className="flex justify-between items-center px-8 pt-8 relative z-10">
        <div className="text-2xl font-black italic tracking-tighter">DHWANI.club</div>
        <nav className="hidden md:flex gap-8 text-sm font-mono uppercase tracking-widest">
          <Link href="/" className="text-white hover:text-blue-500 transition-colors">Index</Link>
          <Link href="#studio" className="text-gray-400 hover:text-blue-500 transition-colors">Studio</Link>
          <Link href="#legacy" className="text-gray-400 hover:text-blue-500 transition-colors">Legacy</Link>
          <Link href="/lounge" className="text-blue-400 hover:text-blue-300 transition-colors font-bold">The Lounge</Link>
          <Link href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</Link>
        </nav>
      </header>

      <main className="relative pt-12 pb-20 max-w-7xl mx-auto">
        <div className="flex relative gap-2 px-6 md:items-center w-full flex-col justify-center">

          {/* Row 1 */}
          <div className="md:flex gap-6 items-center w-full justify-between">
            <p className="text-xs text-zinc-500 md:text-sm text-start md:text-right leading-relaxed max-w-[220px] font-mono mb-4 md:mb-0">
              EST. 1998<br />
              BIT MESRA, RANCHI<br />
              OFFICIAL MUSIC SOC.
            </p>
            <h1 className="text-6xl md:text-8xl xl:text-[10rem] font-light leading-none tracking-tighter">
              AMPLIFY
            </h1>
          </div>

          {/* Row 2 */}
          <div className="md:flex gap-6 items-center w-full justify-center">
            <h1 className="text-6xl md:text-8xl xl:text-[10rem] flex flex-wrap items-center font-bold leading-none tracking-tighter italic">
              <span>Y</span>
              <BadgeQuestionMark
                type="solid"
                className="lg:size-32 size-12 md:size-20 text-blue-600 animate-pulse mx-2"
              />
              <span>UR</span>
            </h1>
            <p className="text-xs text-zinc-500 md:text-sm pt-4 md:pt-0 leading-relaxed max-w-[250px] font-mono ml-4">
              Where sound meets soul. Jam, perform, and create history with us.
            </p>
          </div>

          {/* Row 3 */}
          <div className="md:flex gap-6 items-center w-full justify-start">
            {/* Decorative SVG instead of the shape */}
            <div className="hidden lg:block mr-8">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="18" r="3" fill="currentColor" />
                <circle cx="18" cy="16" r="3" fill="currentColor" />
              </svg>
            </div>
            <h1 className="text-6xl md:text-8xl xl:text-[10rem] font-light leading-none tracking-tighter flex items-center">
              <span>SOUND</span>
              <div className="block lg:hidden ml-4">
                <ArrowRight className="w-12 h-12 text-blue-500" />
              </div>
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-7xl w-full px-6 gap-3 mt-12">
          <div className="md:flex md:mx-8 grid md:justify-end items-center gap-3">
            <Separator className="w-full my-6 mx-auto max-w-3xl bg-zinc-800" />
            <div className="text-xs whitespace-nowrap md:text-sm text-zinc-500 font-mono">
              JHARKHAND, INDIA 835215
            </div>
            <div className="flex w-full items-end gap-3 justify-end">
              <span className="text-2xl md:text-4xl font-thin text-zinc-400">WE ARE</span>
              <span className="text-3xl md:text-5xl font-black italic text-blue-600">
                DHWANI
              </span>
            </div>
          </div>
        </div>

        <div className="md:px-20 px-6 gap-12 items-end md:flex pt-12">
          <div className="relative w-full md:w-[500px] h-64 md:h-80 shadow-2xl border border-zinc-800 rounded-2xl overflow-hidden mb-8 md:mb-0 group">
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop"
              alt="Concert Crowd"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
            <Link href="/lounge" className="absolute bottom-4 right-4 z-20 px-4 py-2 bg-white text-black font-bold rounded-full text-xs hover:scale-105 transition-transform">
              Enter Lounge ↗
            </Link>
          </div>
          <p className="text-xs text-zinc-500 md:text-sm pt-8 leading-relaxed max-w-md">
            Join the official music society of BIT Mesra. From classical ragas to heavy metal riffs, we find harmony in chaos.
          </p>
        </div>

        <div className="absolute bottom-8 right-8 md:right-12 flex gap-6">
          <a href="#" className="hover:text-blue-500 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-red-500 transition-colors"><Youtube className="w-5 h-5" /></a>
        </div>

        <div className="hidden lg:flex fixed right-0 top-1/2 h-36 items-center transform -translate-y-1/2 z-50">
          <div className="bg-blue-600 text-white py-6 px-3 text-sm font-bold shadow-lg shadow-blue-900/20 rounded-l-lg hover:pr-4 transition-all cursor-pointer">
            <span className="rotate-180 [writing-mode:vertical-rl] tracking-widest">
              UPCOMING EVENTS
            </span>
          </div>
        </div>
      </main>

    </div>
  );
}
