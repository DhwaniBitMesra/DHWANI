"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, Trophy, Loader2, Music2 } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mapSupabaseUser, type AuthUser } from "@/lib/auth-user";
import type { NaadUser } from "@/lib/naad-types";
import { EVENT_DETAILS } from "../data";

type Registration = {
  id: string;
  event_id: number;
  team_name: string | null;
  created_at: string;
  events: {
    id: number;
    name: string;
    slug: string;
    is_group_event: boolean;
  };
};

export default function MyRegistrationsPage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [naadUser, setNaadUser] = useState<NaadUser | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const supabase = createBrowserSupabaseClient();
        const { data: { user: rawUser } } = await supabase.auth.getUser();
        const authUser = rawUser ? mapSupabaseUser(rawUser) : null;
        setUser(authUser);

        if (authUser) {
          // Get NAAD user details
          const naadResponse = await fetch("/api/naad/register");
          const naadData = await naadResponse.json() as { registered: boolean; naad_user: NaadUser };
          
          if (naadData.registered) {
            setNaadUser(naadData.naad_user);

            // Get registrations
            const regsResponse = await fetch("/api/naad/my-registrations");
            const regsData = await regsResponse.json() as { registrations: Registration[] };
            setRegistrations(regsData.registrations || []);
          }
        }
      } catch (err) {
        console.error("Failed to load registrations:", err);
      } finally {
        setLoading(false);
      }
    };

    void loadData();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </main>
    );
  }

  if (!user || !naadUser) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Access Denied</h1>
          <p className="text-zinc-400 mb-8">You need to register for NAAD first.</p>
          <Link
            href="/naad/register"
            className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
          >
            Register Now
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10">
        <Link
          href="/naad"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-mono uppercase tracking-widest">Back to NAAD</span>
        </Link>

        {/* Header with NAAD ID */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between flex-wrap gap-6 mb-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
                  My Events
                </h1>
                <p className="text-xl text-zinc-400">Welcome back, {user.displayName.split(" ")[0]}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">Your NAAD ID</p>
                <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                  <span className="text-2xl font-black font-mono text-indigo-300">
                    NAAD-26-{naadUser.naad_id.toString().padStart(4, "0")}
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        </div>

        {/* Registrations Grid */}
        {registrations.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900 border border-white/10 mb-6">
              <Music2 className="w-8 h-8 text-zinc-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-zinc-300">No Events Yet</h2>
            <p className="text-zinc-500 mb-8 max-w-md mx-auto">
              You haven't registered for any events. Browse the lineup and join the competition!
            </p>
            <Link
              href="/naad"
              className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Explore Events
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrations.map((reg, i) => {
              const eventDetails = EVENT_DETAILS[reg.events.slug];
              
              return (
                <motion.div
                  key={reg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/naad/${reg.events.slug}`}
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-300">
                      {/* Event Image */}
                      {eventDetails?.img && (
                        <div className="relative h-48 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={eventDetails.img}
                            alt={reg.events.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                          
                          {/* Event Type Badge */}
                          {eventDetails?.type && (
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                                {eventDetails.type}
                              </span>
                            </div>
                          )}
                          
                          {/* Registered Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30">
                              <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                                ✓ Registered
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-black tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                          {reg.events.name}
                        </h3>
                        
                        {reg.team_name && (
                          <div className="flex items-center gap-2 text-sm text-indigo-400 mb-3">
                            <Users size={14} />
                            <span className="font-semibold">{reg.team_name}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {new Date(reg.created_at).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                          {eventDetails?.location && (
                            <div className="flex items-center gap-1">
                              <MapPin size={12} />
                              {eventDetails.location}
                            </div>
                          )}
                        </div>

                        {eventDetails?.isHighlight && (
                          <div className="mt-4 flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-widest">
                            <Trophy size={14} />
                            Flagship Event
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Action Buttons */}
        {registrations.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              href="/naad"
              className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Register for More Events
            </Link>
          </motion.div>
        )}
      </div>
    </main>
  );
}
