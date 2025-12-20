import {
  Music,
  Mic,
  Lightbulb,
  Headphones,
  Users,
  Heart,
  LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the feature item type
type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: 'left' | 'right';
  cornerStyle?: string;
};

// Create feature data arrays for left and right columns
const leftFeatures: FeatureItem[] = [
  {
    icon: Music,
    title: 'Jam Sessions',
    description:
      'Regular jam sessions to find your rhythm, experiment with genres, and sync with fellow musicians.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Mic,
    title: 'Live Events',
    description:
      'Take the stage at Bitotsav, Pantheon, and other flagship events. Experience the thrill of live performance.',
    position: 'left',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Lightbulb,
    title: 'Workshops',
    description:
      'Learn from seniors and alumni about music theory, instrument techniques, and audio production.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: Headphones,
    title: 'Studio Access',
    description:
      'Get access to our dedicated practice room and recording equipment to hone your skills.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Users,
    title: 'Alumni Network',
    description:
      'Connect with our strong lineage of musicians working across the globe in various industries.',
    position: 'right',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Heart,
    title: 'Community',
    description:
      'Join a family of music lovers. Whether you are into Classical, Rock, Jazz, or Pop, you belong here.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];

// Feature card component
const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          'relative rounded-2xl px-4 pt-4 pb-4 text-sm',
          'bg-white/5 border border-white/10 ring-0 transition-all hover:bg-white/10',
          feature.cornerStyle,
        )}
      >
        <div className="text-blue-400 mb-3 text-[2rem]">
          <Icon size={32} />
        </div>
        <h2 className="text-white mb-2.5 text-2xl font-bold">{feature.title}</h2>
        <p className="text-gray-400 text-base text-pretty">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="from-blue-500/0 via-blue-500 to-blue-500/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,rgba(59,130,246,0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function DhwaniFeatures() {
  return (
    <section className="py-20 bg-black overflow-hidden" id="features">
      <div className="-z-1 absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>
      <div className="relative z-10 mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="bg-white/5 text-white border border-white/10 relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm">
              <span className="relative z-1 flex items-center gap-2">
                Why Join Us?
              </span>
              <span className="from-purple-500/0 via-purple-500 to-purple-500/0 absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,rgba(168,85,247,0.25)_0%,transparent_100%)]"></span>
            </div>
            <h2 className="text-white mb-2 text-center text-3xl font-bold sm:mb-2.5 md:text-[2.5rem] leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              More Than Just A Club
            </h2>
            <p className="text-gray-400 mx-auto max-w-[18rem] text-center text-pretty">
              We are a collective of passionate artists creating moments that resonate.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
