'use client';

import { Instagram, Linkedin, Twitter, Youtube, Music } from 'lucide-react';
import Image from 'next/image';

const footerColumns = [
  {
    title: 'Explore',
    links: [
      { name: 'Home', href: '#hero' },
      { name: 'Events', href: '#events' },
      { name: 'Music', href: '#music' },
      { name: 'Team', href: '#team' },
      { name: 'Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Club',
    links: [
      { name: 'News', href: '#news' },
      { name: 'Legacy', href: '#legacy' },
      { name: 'Contact', href: '#contact' },
      { name: 'Join Us', href: '#contact' },
    ],
  },
  {
    title: 'Socials',
    links: [{ name: 'Instagram', href: 'https://instagram.com/dhwanibitmesra' }, { name: 'LinkedIn', href: '#' }, { name: 'YouTube', href: '#' }],
  },
];

const legalLinks = [
  'Privacy Policy',
  'Terms of Service',
  'Cookie Policy',
];

const socialIcons = [
  { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/dhwanibitmesra' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
  { icon: <Youtube className="h-5 w-5" />, href: '#' },
];

export default function FooterNewsletter() {
  return (
    <footer className="bg-black text-white relative w-full pt-20 pb-10 border-t border-white/10">
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div className="bg-blue-600/10 absolute top-1/3 left-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-purple-600/10 absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-effect mb-16 rounded-2xl p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Stay tuned with Dhwani
              </h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for the latest updates on events, jams, and musical releases.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-white/10 bg-black/50 text-white placeholder-gray-500 focus:ring-blue-500 rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none w-full"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 rounded-lg px-6 py-3 font-medium transition hover:scale-105 duration-200">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="hidden justify-end md:flex relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-[100px] opacity-20"></div>
              <Music className="w-48 h-48 text-white/20 relative z-10 rotate-12" />
            </div>
          </div>
        </div>
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6 flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 flex h-10 w-10 items-center justify-center rounded-lg">
                <Music className="text-white h-6 w-6" />
              </div>
              <span className="text-xl font-bold">DHWANI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The Music Club of BIT Mesra. Where distinct notes come together to form a beautiful melody.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="bg-white/5 hover:bg-white/10 hover:text-blue-400 flex h-10 w-10 items-center justify-center rounded-full transition duration-300 text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-lg font-semibold text-white">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={typeof link === 'string' ? link : link.name}>
                    <a
                      href={typeof link === 'string' ? '#' : link.href}
                      className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm"
                    >
                      {typeof link === 'string' ? link : link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-white/10 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-gray-500 mb-4 text-sm md:mb-0">
            © {new Date().getFullYear()} Dhwani Music Club. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((text) => (
              <a
                key={text}
                href="#"
                className="text-gray-500 hover:text-white transition duration-200 text-sm"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
