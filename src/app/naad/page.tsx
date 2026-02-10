"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Disc, 
  Mic2, 
  Music, 
  Guitar, 
  Zap, 
  Ticket,
  CalendarDays
} from 'lucide-react';

// --- DATA: Grouped by Day ---
const SCHEDULE_DATA = {
  day1: [
    {
      id: 1,
      title: "Shadaj",
      subtitle: "The Genesis",
      type: "Opening Night",
      time: "5:30 PM — 8:30 PM",
      location: "CAT Hall",
      description: "The grand opening ceremony of NAAD'26. Witness the ceremonial lighting of the lamp followed by a classical fusion showcase that sets the spiritual tone for the days to come.",
      img: "/Shadaj.jpg?q=80&w=1200",
      sponsor: "Coke Studio",
      accent: "from-orange-500/20 to-red-500/20"
    }
  ],
  day2: [
    {
      id: 2,
      title: "Dhun",
      subtitle: "Strings & Keys",
      type: "Solo Instrumental",
      time: "9:00 AM — 12:00 PM",
      location: "CAT Hall",
      description: "A battle of dexterity and soul. Guitarists, violinists, and percussionists take the stage to weave stories without words.",
      img: "/dhun.jpg?q=80&w=1200",
      sponsor: "Yamaha",
      accent: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      title: "Alankar",
      subtitle: "Eastern Vocals",
      type: "Solo Singing",
      time: "9:00 AM — 12:00 PM",
      location: "Lecture Hall 1",
      description: "The purity of raga meets contemporary style. A competition celebrating the rich heritage of Eastern vocal traditions.",
      img: "/Alankaar.jpg?q=80&w=1200",
      sponsor: "T-Series",
      accent: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 5,
      title: "Mandra Mayhem",
      subtitle: "Battle of Bands",
      type: "Flagship Event",
      time: "12:00 PM — 5:30 PM",
      location: "CAT Hall",
      description: "THE MAIN EVENT. High-gain amps, thundering drums, and raw energy. The best bands in the circuit clash for the ultimate title.",
      img: "/MandraMayhem.jpg?q=80&w=1200",
      isHighlight: true,
      sponsor: "Gibson",
      accent: "from-red-600/20 to-orange-600/20"
    },
    {
      id: 4,
      title: "Raageshri",
      subtitle: "Classical Vocals",
      type: "Solo Classical",
      time: "12:00 PM — 3:00 PM",
      location: "Lecture Hall 1",
      description: "A test of patience, pitch, and perfection. Strictly classical, strictly sublime.",
      img: "/Rageshree.jpg?q=80&w=1200",
      sponsor: "Sangeet Natak",
      accent: "from-yellow-500/20 to-amber-500/20"
    },
    {
      id: 6,
      title: "Karaoke",
      subtitle: "Open Mic",
      type: "Informal",
      time: "5:30 PM — 7:30 PM",
      location: "I.C. Arena",
      description: "No judges, no pressure. Just you, the mic, and a crowd ready to sing along.",
      img: "/karoke.jpg?q=80&w=1200",
      sponsor: "Smule",
      accent: "from-pink-500/20 to-rose-500/20"
    }
  ],
  day3: [
    {
      id: 7,
      title: "Euphony",
      subtitle: "Western Vocals",
      type: "Solo Singing",
      time: "9:00 AM — 1:00 PM",
      location: "CAT Hall",
      description: "From Jazz standards to Pop anthems. A showcase of vocal range and stage presence in Western genres.",
      img: "/euphony.jpg?q=80&w=1200",
      sponsor: "Spotify",
      accent: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 8,
      title: "Spitfire",
      subtitle: "Rap Battle",
      type: "Hip Hop",
      time: "12:00 PM — 4:00 PM",
      location: "I.C. Arena",
      description: "Bars, flow, and delivery. Rappers go head-to-head in a test of lyrical wit and rhythm.",
      img: "/Spitfire.jpg?q=80&w=1200",
      sponsor: "RedBull",
      accent: "from-purple-500/20 to-indigo-500/20"
    },
    {
      id: 9,
      title: "Antakshari",
      subtitle: "Musical Game",
      type: "Informal",
      time: "1:00 PM — 4:00 PM",
      location: "Lecture Hall 1",
      description: "The classic game of songs. Gather your team and test your Bollywood memory.",
      img: "/Antakshari.jpeg?q=80&w=1200",
      sponsor: "Saregama",
      accent: "from-teal-500/20 to-cyan-500/20"
    },
    {
      id: 10,
      title: "Nishaad",
      subtitle: "Grand Finale",
      type: "Closing Ceremony",
      time: "4:30 PM — 8:30 PM",
      location: "CAT Hall",
      description: "The final showdown. Winners of all solo categories compete for the title of 'Voice of NAAD'.",
      img: "/nishaad.jpg?q=80&w=1200",
      isHighlight: true,
      sponsor: "Dhwani",
      accent: "from-amber-500/20 to-yellow-500/20"
    }
  ]
};

export default function NaadExperience() {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <main className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen font-sans selection:bg-white/20">
      <HeroSection />
      
      <section className="relative z-10 -mt-20 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex flex-col items-center mb-16 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex p-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
          >
            {['day1', 'day2', 'day3'].map((day, i) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`relative px-8 py-3 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-500 ${
                  activeDay === day ? 'text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                {activeDay === day && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <CalendarDays size={14} />
                  {i === 0 ? "Fri 13" : i === 1 ? "Sat 14" : "Sun 15"}
                </span>
              </button>
            ))}
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-light text-center tracking-tight text-white/90">
             {activeDay === 'day1' ? 'The Awakening' : activeDay === 'day2' ? 'The Crescendo' : 'The Finale'}
          </h2>
        </div>

        {/* Dynamic Schedule Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-12"
          >
            {SCHEDULE_DATA[activeDay as keyof typeof SCHEDULE_DATA].map((event: any) => (
              <EventCard key={event.id} event={event} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}

// --- SUB-COMPONENTS ---

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Portrait images for the split background
  const images = [
    "/Naadhero1.jpeg?q=80&w=1200", // Singer
    "/Naadhero2.jpeg?q=80&w=1200", // Mic/Retro
    "/Naadhero3.jpeg?q=80&w=1200", // Crowd
    "/Naadhero4.jpeg?q=80&w=1200"  // Band
  ];

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex flex-col justify-center items-center text-center bg-black">
      
      {/* Cinematic Background - Split into 4 Interactive Columns */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 flex flex-row">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative flex-1 h-full overflow-hidden group border-r border-white/5 last:border-r-0"
          >
            {/* Image: Grayscale by default, Color + Scale on Hover */}
            <img 
              src={src} 
              alt={`Naad Moment ${index + 1}`}
              className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:grayscale-0"
            />
            
            {/* Overlay: Dark by default, fades out on Hover */}
            <div className="absolute inset-0 bg-black/60 transition-colors duration-700 ease-in-out group-hover:bg-black/0" />
          </div>
        ))}

        {/* Bottom Fade to blend into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none" />
      </motion.div>

      {/* Content - pointer-events-none allows hover on images behind text */}
      <div className="relative z-30 px-6 pointer-events-none">
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
         >
           <p className="text-sm md:text-base tracking-[0.4em] text-white/70 uppercase mb-6 drop-shadow-md">
             Dhwani Presents
           </p>
           {/* mix-blend-difference ensures text is visible even when image becomes bright */}
           <h1 className="text-[15vw] md:text-[10rem] leading-[0.85] font-black tracking-tighter text-white mix-blend-difference">
             NAAD
           </h1>
           <div className="flex items-center justify-center gap-6 mt-8">
             <div className="h-px w-12 bg-white/50" />
             <p className="text-xl md:text-2xl font-light tracking-widest text-white/90 drop-shadow-md">
               2026
             </p>
             <div className="h-px w-12 bg-white/50" />
           </div>
         </motion.div>
      </div>
    </section>
  );
}
function EventCard({ event }: { event: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/5 shadow-2xl ${event.isHighlight ? 'md:col-span-1 min-h-[600px]' : 'min-h-[450px]'}`}
    >
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {/* Image Side */}
        <div className="relative overflow-hidden h-[300px] md:h-full">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={event.img + (event.img.includes('?') ? '&' : '?') + 'q=80&w=1200'}
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          {/* Mobile Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:hidden z-20" />
          
          <div className="absolute top-6 left-6 z-20">
             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest text-white">
          {getIcon(event.type)} {event.type}
             </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16">
          {/* Subtle Background Glow */}
          <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${event.accent} blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6 opacity-60">
               <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider">
                  <Clock size={16} /> {event.time}
               </div>
               <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider">
                  <MapPin size={16} /> {event.location}
               </div>
            </div>

            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tighter text-white">
              {event.title}
            </h3>
            <p className="text-lg text-white/50 italic font-serif mb-8">
              {event.subtitle}
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
              {event.description}
            </p>

            <div className="flex items-center gap-8 border-t border-white/5 pt-8">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Presented By</span>
                <span className="text-sm font-bold text-zinc-300">{event.sponsor}</span>
              </div>
              
              <button className="ml-auto w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getIcon(type: string) {
  if (type.includes("Instrumental")) return <Guitar size={14} />;
  if (type.includes("Singing") || type.includes("Vocal")) return <Mic2 size={14} />;
  if (type.includes("Rap")) return <Zap size={14} />;
  if (type.includes("Band") || type.includes("Flagship")) return <Music size={14} />;
  return <Disc size={14} />;
}

function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-[0.03]">
         <h1 className="text-[25vw] font-black text-white">NAAD</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">NAAD '26</h2>
              <p className="text-zinc-500">Birla Institute of Technology, Mesra</p>
           </div>
           
           <div className="flex gap-8">
              {['Instagram', 'Youtube', 'Spotify'].map((social) => (
                 <a key={social} href="#" className="text-zinc-500 hover:text-white transition-colors uppercase text-sm tracking-widest">
                    {social}
                 </a>
              ))}
           </div>

           <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors uppercase text-xs tracking-widest font-bold">
              Back to Top
           </button>
        </div>
        
        <div className="mt-20 text-center text-zinc-700 text-[10px] uppercase tracking-widest">
           © 2026 Dhwani Music Club. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}