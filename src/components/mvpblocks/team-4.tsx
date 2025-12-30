'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { X, Instagram, Linkedin, Github, Mail, Music2, Disc, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuroraBackground } from '../ui/aurora-bento-grid';

type SocialMediaLinks = {
  instagram?: string;
  linkedin?: string;
  github?: string;
  email?: string;
};

export type TeamMember = {
  id: number | string;
  name: string;
  role: string;
  image: string;
  categories: string[];
  bio?: string;
  skills?: string[];
  socialMedia?: SocialMediaLinks;
};

export type TeamSectionProps = {
  title?: string;
  subtitle?: string;
  teamMembers: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  secondaryColor?: string;
  className?: string;
  categories?: { id: string; label: string }[];
};

const defaultCategories = [
  { id: 'all', label: 'All Artists' },
  { id: 'executive', label: 'Producers (Exec)' },
  { id: 'vocalist', label: 'Vocals' },
  { id: 'instrumentalist', label: 'Instruments' },
  { id: 'developer', label: 'Tech Crew' },
  { id: 'video editor', label: 'Visuals' },
];

export default function Team4({
  title = 'The Ensemble',
  subtitle = 'Meet the artists, producers, and crew behind the sound of Dhwani.',
  teamMembers,
  backgroundColor = '#000000',
  textColor = '#ffffff',
  secondaryColor = '#9CA3AF',
  className,
  categories = defaultCategories,
}: TeamSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredTeamMembers =
    activeCategory === 'all'
      ? teamMembers
      : teamMembers.filter((member) =>
        member.categories.includes(activeCategory)
      );

  return (
    <>
      <section
        className={cn('relative w-full py-20 min-h-screen overflow-hidden', className)}
        style={{ backgroundColor, color: textColor }}
      >
        <AuroraBackground />

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          {/* Header */}
          <div className="mb-16 text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-300"
            >
              <Disc className="w-3 h-3 animate-spin-slow" />
              <span>Dhwani Records Presents</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Ensemble</span>
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-400 font-mono text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300',
                  activeCategory === cat.id
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Vinyl Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 px-4 sm:px-0">
            {filteredTeamMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative cursor-pointer"
              >
                {/* Vinyl Record (Behind Sleeve) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-black border-[8px] border-zinc-900 shadow-xl transition-transform duration-500 ease-out group-hover:translate-x-12 group-hover:rotate-[360deg] flex items-center justify-center z-0">
                  {/* Record Grooves */}
                  <div className="absolute inset-2 border border-zinc-800 rounded-full opacity-50"></div>
                  <div className="absolute inset-4 border border-zinc-800 rounded-full opacity-50"></div>
                  <div className="absolute inset-8 border border-zinc-800 rounded-full opacity-50"></div>

                  {/* Record Label */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[8px] text-center p-1 text-white font-bold leading-tight uppercase relative z-10">
                    <span className="animate-pulse">DHWANI</span>
                  </div>
                </div>

                {/* Album Sleeve */}
                <div className="relative z-10 aspect-square rounded-lg shadow-2xl overflow-hidden bg-zinc-900 border border-white/10 transition-transform duration-300 group-hover:-translate-x-4 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  {/* Card Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />

                  {/* Sleeve Texture Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none mix-blend-overlay"></div>

                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-1">{member.name}</h3>
                    <p className="text-xs font-mono text-indigo-300 uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liner Notes Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left: Album Art */}
              <div className="w-full md:w-1/2 relative min-h-[400px]">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900"></div>

                <div className="absolute bottom-8 left-8">
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">{selectedMember.name}</h2>
                  <div className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-sm">
                    {selectedMember.role}
                  </div>
                </div>
              </div>

              {/* Right: Liner Notes */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <div className="flex items-center gap-2 mb-8 opacity-50">
                  <Music2 className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">Liner Notes</span>
                </div>

                <div className="prose prose-invert prose-sm mb-12">
                  <p className="text-zinc-300 leading-relaxed font-light">
                    {selectedMember.bio || "No biography available for this artist."}
                  </p>
                </div>

                {/* Skills Tracklist */}
                <div className="mb-12">
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Skill Tracklist</h3>
                  <ul className="space-y-3">
                    {selectedMember.skills?.map((skill, i) => (
                      <li key={i} className="flex items-center justify-between text-sm group cursor-default">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-zinc-600 text-xs group-hover:text-indigo-400 transition-colors">
                            {(i + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="text-zinc-300 group-hover:text-white transition-colors">{skill}</span>
                        </div>
                        <Play className="w-3 h-3 text-zinc-700 group-hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Footer */}
                <div className="mt-auto pt-8 border-t border-white/10 flex gap-4">
                  {selectedMember.socialMedia?.instagram && (
                    <a href={selectedMember.socialMedia.instagram} target="_blank" className="p-3 bg-zinc-800 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {selectedMember.socialMedia?.linkedin && (
                    <a href={selectedMember.socialMedia.linkedin} target="_blank" className="p-3 bg-zinc-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {selectedMember.socialMedia?.github && (
                    <a href={selectedMember.socialMedia.github} target="_blank" className="p-3 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {selectedMember.socialMedia?.email && (
                    <a href={`mailto:${selectedMember.socialMedia.email}`} className="p-3 bg-zinc-800 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
