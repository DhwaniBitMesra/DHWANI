'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { X, Instagram, Linkedin, Github, Mail } from 'lucide-react';

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
  teamMembers: TeamMember[]; // Make required
  backgroundColor?: string;
  textColor?: string;
  secondaryColor?: string;
  className?: string;
  categories?: { id: string; label: string }[];
};



const defaultCategories = [
  { id: 'all', label: 'All' },
  { id: 'executive', label: 'Executive' },
  { id: 'vocalist', label: 'Vocalists' },
  { id: 'instrumentalist', label: 'Instrumentalists' },
  { id: 'developer', label: 'Developers' },
  { id: 'video editor', label: 'Video Editors' },
  { id: 'k21', label: 'K21' },
  { id: 'k22', label: 'K22' },
  { id: 'k23', label: 'K23' },
  { id: 'k24', label: 'K24' },
];

export default function Team4({
  title = 'Meet the Dhwani Family',
  subtitle = 'The talented individuals who make the music happen. From vocalists to developers, we are one team.',
  teamMembers, // Now required
  backgroundColor = '#000000',
  textColor = '#ffffff',
  secondaryColor = '#9CA3AF',
  className,
  categories = defaultCategories,
}: TeamSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Filter team members by category
  const filteredTeamMembers =
    activeCategory === 'all'
      ? teamMembers
      : teamMembers.filter((member) =>
        member.categories.includes(activeCategory)
      );

  const titleParts = title.split(/(Dhwani)/);

  return (
    <>
      <section
        className={cn('w-full py-16', className)}
        style={{ backgroundColor, color: textColor }}
      >
        <div className="-z-1 absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl leading-tight md:text-5xl font-bold">
              {titleParts.map((part, index) =>
                part.toLowerCase() === 'dhwani' ? (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {part}
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                ),
              )}
            </h2>
            <p
              className="mx-auto max-w-3xl text-base"
              style={{ color: secondaryColor }}
            >
              {subtitle}
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                  activeCategory === cat.id
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'border border-white/20 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white',
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredTeamMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="relative overflow-hidden rounded-2xl transition-all hover:scale-105 duration-300 group border border-white/10 bg-white/5 cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative z-10 mx-auto -mt-[3rem] max-w-[90%] rounded-xl border border-white/10 bg-black/80 backdrop-blur-md px-3 py-4 text-center shadow-xl">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm font-medium text-blue-400">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram-like Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-lg bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Header Image */}
            <div className="relative h-64 w-full">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>

            {/* Profile Info */}
            <div className="relative -mt-16 px-6 pb-6">
              <div className="flex items-end gap-4 mb-4">
                <div className="relative w-24 h-24 rounded-full border-4 border-gray-900 overflow-hidden shadow-xl">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 pb-1">
                  <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-blue-400 font-medium">{selectedMember.role}</p>
                </div>
              </div>

              {/* Bio */}
              {selectedMember.bio && (
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {selectedMember.bio}
                </p>
              )}

              {/* Skills */}
              {selectedMember.skills && selectedMember.skills.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories as Tags */}
              <div className="mb-4">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.categories.map((cat, index) => (
                    <span key={index} className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              {selectedMember.socialMedia && (
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  {selectedMember.socialMedia.instagram && (
                    <a href={selectedMember.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                      <Instagram className="w-5 h-5 text-pink-400" />
                    </a>
                  )}
                  {selectedMember.socialMedia.linkedin && (
                    <a href={selectedMember.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </a>
                  )}
                  {selectedMember.socialMedia.github && (
                    <a href={selectedMember.socialMedia.github} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                      <Github className="w-5 h-5 text-gray-300" />
                    </a>
                  )}
                  {selectedMember.socialMedia.email && (
                    <a href={`mailto:${selectedMember.socialMedia.email}`}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                      <Mail className="w-5 h-5 text-green-400" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
