"use client";

import { Separator } from "@/components/ui/separator";
import { BadgeQuestionMark } from "@aliimam/icons";
import { Instagram, Youtube, ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { StringText } from "./string-text";
import { AudioVisualizer } from "./audio-visualizer";
import MusicArtwork from "./music-artwork";

export function HeroSection() {
  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden flex flex-col justify-between">
      {/* Background Pattern */}
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_#333_1px,_transparent_1px)] opacity-15 [background-size:20px_20px] pointer-events-none" />

      {/* Header removed to use global Navbar */}
      <div className="pt-24"></div>

      <main className="relative pt-12 pb-20 max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        <div className="flex relative gap-2 px-6 md:items-center w-full flex-col justify-center bg-transparent z-20">

          {/* Row 1 */}
          <div className="md:flex gap-6 items-center w-full justify-between">
            <p className="text-xs text-zinc-500 md:text-sm text-start md:text-right leading-relaxed max-w-[220px] font-mono mb-4 md:mb-0">
              EST. 1998<br />
              BIT MESRA, RANCHI<br />
              OFFICIAL MUSIC SOC.
            </p>
            <h1 className="text-6xl md:text-8xl xl:text-[10rem] font-light leading-none tracking-tighter">
              <StringText text="AMPLIFY" />
            </h1>
          </div>

          {/* Row 2 */}
          <div className="md:flex gap-6 items-center w-full justify-center">
            <h1 className="text-6xl md:text-8xl xl:text-[10rem] flex flex-wrap items-center font-bold leading-none tracking-tighter italic">
              <StringText text="Y" />
              <BadgeQuestionMark
                type="solid"
                className="lg:size-32 size-12 md:size-20 text-blue-600 animate-pulse mx-2"
              />
              <StringText text="UR" />
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
              <StringText text="SOUND" />
              <div className="block lg:hidden ml-4">
                <ArrowRight className="w-12 h-12 text-blue-500" />
              </div>
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-7xl w-full px-6 gap-3 mt-12 z-20">
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
{/* 
        <div className="md:px-20 px-6 gap-12 items-end md:flex pt-12 z-20">
          <div className="relative w-full md:w-auto mb-8 md:mb-0">
            <div className="relative z-10">
              <MusicArtwork
                artist="Dhwani"
                music="Anthem Vol. 1"
                albumArt="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop"
                isSong={false}
              />
            </div>
            <Link href="/music" className="absolute -bottom-4 -right-8 z-30 px-6 py-2 bg-white text-black font-black uppercase italic -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl [clip-path:polygon(0_0,100%_0,100%_100%,5%_100%)] hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
              Enter Lounge ↗
            </Link>
          </div>

          <p className="text-xs text-zinc-500 md:text-sm pt-8 leading-relaxed max-w-md">
            Join the official music society of BIT Mesra. From classical ragas to heavy metal riffs, we find harmony in chaos.
          </p>
        </div> */}

        {/* <div className="absolute bottom-8 right-8 md:right-12 flex gap-6 z-30">
          <a href="#" className="hover:text-blue-500 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-red-500 transition-colors"><Youtube className="w-5 h-5" /></a>
        </div> */}

        <div className="hidden lg:flex fixed right-0 top-1/2 h-36 items-center transform -translate-y-1/2 z-50">
          <div className="bg-blue-600 text-white py-6 px-3 text-sm font-bold shadow-lg shadow-blue-900/20 rounded-l-lg hover:pr-4 transition-all cursor-pointer">
            <span className="rotate-180 [writing-mode:vertical-rl] tracking-widest">
              UPCOMING EVENTS
            </span>
          </div>
        </div>
      </main>

      {/* Audio Visualizer at the very bottom */}
      <div className="relative w-full h-[100px] mt-auto z-10 pointer-events-none">
        <AudioVisualizer />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

    </div>
  );
}
