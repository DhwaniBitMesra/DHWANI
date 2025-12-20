'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type SocialMediaLinks = {
  instagram?: string;
  linkedin?: string;
  github?: string;
  email?: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  categories: string[];
  socialMedia?: SocialMediaLinks;
};

type TeamSectionProps = {
  title?: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  secondaryColor?: string;
  className?: string;
  categories?: { id: string; label: string }[];
};


const dhwaniTeamMembers: TeamMember[] = [
  // Executive Body
  {
    id: 1,
    name: 'Aditi Sharma',
    role: 'President',
    categories: ['executive', 'vocalist', 'k21'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'General Secretary',
    categories: ['executive', 'instrumentalist', 'guitarist', 'k22'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // K21 Batch
  {
    id: 3,
    name: 'Siddharth Singh',
    role: 'Lead Guitarist',
    categories: ['instrumentalist', 'guitarist', 'k21'],
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Anjali Gupta',
    role: 'Classical Vocalist',
    categories: ['vocalist', 'k21'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // K22 Batch
  {
    id: 5,
    name: 'Vikram Malhotra',
    role: 'Drummer',
    categories: ['instrumentalist', 'drummer', 'k22'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Priya Das',
    role: 'Keyboardist',
    categories: ['instrumentalist', 'pianist', 'k22'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // K23 Batch
  {
    id: 7,
    name: 'Arjun Mehta',
    role: 'Video Editor',
    categories: ['video editor', 'creative', 'k23'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Sneha Roy',
    role: 'Web Developer',
    categories: ['developer', 'tech', 'k23'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // K24 Batch
  {
    id: 9,
    name: 'Rohan Kumar',
    role: 'Rhythm Guitarist',
    categories: ['instrumentalist', 'guitarist', 'k24'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Ishita Patel',
    role: 'Western Vocalist',
    categories: ['vocalist', 'k24'],
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
];

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
  teamMembers = dhwaniTeamMembers,
  backgroundColor = '#000000',
  textColor = '#ffffff',
  secondaryColor = '#9CA3AF',
  className,
  categories = defaultCategories,
}: TeamSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter team members by category
  const filteredTeamMembers =
    activeCategory === 'all'
      ? teamMembers
      : teamMembers.filter((member) =>
        member.categories.includes(activeCategory)
      );

  const titleParts = title.split(/(Dhwani)/);

  return (
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
              className="relative overflow-hidden rounded-2xl transition-all hover:scale-105 duration-300 group border border-white/10 bg-white/5"
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
  );
}
