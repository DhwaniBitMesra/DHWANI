import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENT_DETAILS, EVENTS } from "../data";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Trophy, 
  Users, 
  Info, 
  AlertCircle, 
  CheckCircle2, 
  Music2, 
  Mic2,
  ArrowLeft
} from "lucide-react";

type NaadEventPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export default async function NaadEventPage({ params }: NaadEventPageProps) {
  const { slug } = await params;
  const event = EVENT_DETAILS[slug];

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-indigo-500/30 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] w-full overflow-hidden flex flex-col justify-end pb-20">
        {/* Background Image with Cinematic Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={event.img}
            alt={event.title}
            className="h-full w-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <Link
            href="/naad"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors mb-8 group"
          >
            <div className="p-2 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
               <ArrowLeft size={14} />
            </div>
            Back to Lineup
          </Link>

          <div className="flex flex-col md:flex-row items-end gap-8 justify-between border-b border-white/10 pb-12">
            <div className="max-w-4xl">
               <div className="flex items-center gap-3 mb-6">
                  <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${event.accent} border border-white/10 text-[10px] font-bold uppercase tracking-widest`}>
                     {event.type}
                  </span>
                  {event.isHighlight && (
                    <span className="px-4 py-1.5 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <Trophy size={12} /> Flagship
                    </span>
                  )}
               </div>
               
               <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-4 leading-[0.9]">
                 {event.title}
               </h1>
               <p className="text-2xl md:text-3xl font-serif italic text-white/60">
                 {event.subtitle}
               </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm">
               <div className="flex flex-col gap-1">
                  <span className="text-white/40 uppercase tracking-widest text-[10px]">Time</span>
                  <div className="flex items-center gap-2 font-mono text-white">
                     <Clock size={16} className="text-indigo-400"/> {event.time}
                  </div>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-white/40 uppercase tracking-widest text-[10px]">Venue</span>
                  <div className="flex items-center gap-2 font-mono text-white">
                     <MapPin size={16} className="text-indigo-400"/> {event.location}
                  </div>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-white/40 uppercase tracking-widest text-[10px]">Day</span>
                  <div className="flex items-center gap-2 font-mono text-white">
                     <Calendar size={16} className="text-indigo-400"/> {event.day.toUpperCase()}
                  </div>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-white/40 uppercase tracking-widest text-[10px]">Format</span>
                  <div className="flex items-center gap-2 font-mono text-white">
                     <Music2 size={16} className="text-indigo-400"/> {event.details.teamSize}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILS SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
          
          {/* LEFT COLUMN: Main Info */}
          <div className="space-y-16">
            
            {/* Overview */}
            <div>
               <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6 flex items-center gap-2">
                  <Info size={16} /> The Stage
               </h3>
               <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
                  {event.description} <span className="opacity-60">{event.details.overview}</span>
               </p>
            </div>

            {/* Rules Grid */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400 mb-6 flex items-center gap-2">
                     <CheckCircle2 size={16} /> Rules
                  </h3>
                  <ul className="space-y-4">
                     {event.details.rules.map((rule, i) => (
                        <li key={i} className="flex gap-4 text-sm text-zinc-400 leading-relaxed">
                           <span className="font-mono text-white/20">0{i+1}</span>
                           {rule}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-400 mb-6 flex items-center gap-2">
                     <AlertCircle size={16} /> Regulations
                  </h3>
                  <ul className="space-y-4">
                     {event.details.regulations.map((reg, i) => (
                        <li key={i} className="flex gap-4 text-sm text-zinc-400 leading-relaxed">
                           <span className="font-mono text-white/20">0{i+1}</span>
                           {reg}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Rounds */}
            <div>
               <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6 flex items-center gap-2">
                  <Mic2 size={16} /> Flow of Events
               </h3>
               <div className="flex flex-wrap gap-4">
                  {event.details.rounds.map((round, i) => (
                     <div key={i} className="px-6 py-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-xs font-bold font-mono">
                           {i+1}
                        </span>
                        <span className="text-lg font-serif italic text-white/90">{round}</span>
                     </div>
                  ))}
               </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <div className="lg:sticky lg:top-8 h-fit space-y-6">
            
            {/* Registration Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-white/10 shadow-2xl">
               <div className="flex justify-between items-start mb-8">
                  <div>
                     <span className="text-[10px] uppercase tracking-widest text-zinc-500">Prize Pool</span>
                     <div className="text-3xl font-black text-white mt-1">
                        {event.details.prizes[0].split(':')[1]}
                     </div>
                  </div>
                  <Trophy className="text-yellow-500" size={32} />
               </div>

               <div className="space-y-4 mb-8">
                  {event.details.prizes.map((prize, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm text-zinc-400 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-yellow-500' : 'bg-zinc-600'}`} />
                        {prize}
                     </div>
                  ))}
               </div>

               <Link
                  href="/naad/coming-soon"
                  className="block w-full py-4 text-center bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300"
               >
                  Register Now
               </Link>
               <p className="text-center text-[10px] text-zinc-600 mt-4 uppercase tracking-widest">
                  *Limited Slots Available
               </p>
            </div>

            {/* Contact Card */}
            <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5">
               <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Event Heads</h4>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                     <Users size={18} />
                  </div>
                  <div>
                     <div className="text-sm text-white font-bold">Production Team</div>
                     <div className="text-xs text-zinc-500 font-mono">{event.details.contact}</div>
                  </div>
               </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}