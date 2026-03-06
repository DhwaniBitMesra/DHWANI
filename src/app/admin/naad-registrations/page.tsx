"use client";

import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mapSupabaseUser, type AuthUser } from "@/lib/auth-user";
import { Loader2, Users, Calendar, Trophy, ArrowLeft, Shield, AlertTriangle } from "lucide-react";
import Link from "next/link";
import type { RegistrationWithDetails } from "@/lib/naad-types";
import { isAdmin } from "@/lib/admin-config";

interface EventRegistrations {
  eventId: number;
  eventName: string;
  registrations: RegistrationWithDetails[];
}

export default function AdminNaadRegistrations() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [eventData, setEventData] = useState<EventRegistrations[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    { id: 2, name: "Dhun" },
    { id: 3, name: "Alankar" },
    { id: 4, name: "Raageshri" },
    { id: 5, name: "Mandra Mayhem" },
    { id: 6, name: "Karaoke" },
    { id: 7, name: "Euphony" },
    { id: 8, name: "Spitfire" },
    { id: 9, name: "Antakshari" },
  ];

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    const loadUser = async () => {
      const {
        data: { user: rawUser },
      } = await supabase.auth.getUser();
      const authUser = rawUser ? mapSupabaseUser(rawUser) : null;
      setUser(authUser);

      // Check if user is admin
      const authorized = isAdmin(authUser?.primaryEmail);
      setIsAuthorized(authorized);

      if (!authorized) {
        setLoading(false);
        return;
      }

      // Load registration data for all events
      const dataPromises = events.map(async (event) => {
        try {
          const response = await fetch(`/api/naad/events/${event.id}/register`);
          if (response.ok) {
            const data = await response.json() as { registrations?: RegistrationWithDetails[] };
            return {
              eventId: event.id,
              eventName: event.name,
              registrations: data.registrations || [],
            };
          }
        } catch (err) {
          console.error(`Failed to fetch registrations for ${event.name}:`, err);
        }
        return {
          eventId: event.id,
          eventName: event.name,
          registrations: [],
        };
      });

      const results = await Promise.all(dataPromises);
      setEventData(results);
      setLoading(false);
    };

    void loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ? mapSupabaseUser(session.user) : null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Authentication Required</h1>
          <p className="text-zinc-400 mb-8">You must be logged in to access the admin panel.</p>
          <Link
            href="/enter?next=/admin/naad-registrations"
            className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-200 transition-colors"
          >
            Login to Continue
          </Link>
        </div>
      </main>
    );
  }

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
          <p className="text-zinc-400 mb-4">
            You don't have permission to access this admin panel.
          </p>
          <p className="text-zinc-600 text-sm mb-8">
            Logged in as: <span className="text-zinc-400 font-mono">{user.primaryEmail}</span>
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/naad"
              className="px-6 py-3 bg-zinc-800 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-700 transition-colors"
            >
              Back to NAAD
            </Link>
            <Link
              href="/account"
              className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-200 transition-colors"
            >
              My Account
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const currentEvent = selectedEvent
    ? eventData.find((e) => e.eventId === selectedEvent)
    : null;

  const totalRegistrations = eventData.reduce((sum, e) => sum + e.registrations.length, 0);
  const totalParticipants = eventData.reduce((sum, e) => {
    return sum + e.registrations.reduce((total, reg: RegistrationWithDetails) => {
      return total + 1 + (reg.members?.length || 0);
    }, 0);
  }, 0);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/naad"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-mono uppercase tracking-widest">Back to NAAD</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-5xl font-black">NAAD Admin Panel</h1>
              <p className="text-zinc-600 text-sm mt-1">Logged in as: {user.primaryEmail}</p>
            </div>
          </div>
          <p className="text-zinc-400">View all event registrations and participant details</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-zinc-400 uppercase tracking-widest">Total Events</span>
              <Calendar className="w-5 h-5 text-indigo-400" />
            </div>
            <p className="text-4xl font-black text-white">{events.length}</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-zinc-400 uppercase tracking-widest">Total Registrations</span>
              <Trophy className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-4xl font-black text-white">{totalRegistrations}</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-zinc-400 uppercase tracking-widest">Total Participants</span>
              <Users className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-4xl font-black text-white">{totalParticipants}</p>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eventData.map((event) => (
            <button
              key={event.eventId}
              onClick={() =>
                setSelectedEvent(selectedEvent === event.eventId ? null : event.eventId)
              }
              className={`p-6 rounded-2xl border transition-all duration-300 text-left relative overflow-hidden ${
                selectedEvent === event.eventId
                  ? "bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "bg-zinc-900/50 border-white/10 hover:border-white/20 hover:bg-zinc-900"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-6 h-6" />
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    selectedEvent === event.eventId
                      ? "bg-white text-indigo-600"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {event.registrations.length}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{event.eventName}</h3>
              <p className="text-sm text-zinc-400">
                {event.registrations.length === 0
                  ? "No registrations"
                  : event.registrations.length === 1
                  ? "1 registration"
                  : `${event.registrations.length} registrations`}
              </p>
              
              {/* Total participants count */}
              {event.registrations.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-zinc-500">
                    Total Participants:{" "}
                    <span className="text-white font-bold">
                      {event.registrations.reduce((total, reg: RegistrationWithDetails) => {
                        return total + 1 + (reg.members?.length || 0);
                      }, 0)}
                    </span>
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Registration Details */}
        {currentEvent && currentEvent.registrations.length > 0 && (
          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h2 className="text-3xl font-black">{currentEvent.eventName} Registrations</h2>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const totalParticipants = currentEvent.registrations.reduce(
                      (total, reg: RegistrationWithDetails) => total + 1 + (reg.members?.length || 0),
                      0
                    );
                    alert(
                      `${currentEvent.eventName}\n\n` +
                      `Total Registrations: ${currentEvent.registrations.length}\n` +
                      `Total Participants: ${totalParticipants}`
                    );
                  }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  View Stats
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {currentEvent.registrations.map((reg: RegistrationWithDetails) => (
                <div
                  key={reg.id}
                  className="p-6 bg-black/50 border border-white/5 rounded-xl hover:border-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {reg.team_name && (
                        <h4 className="text-xl font-bold text-white mb-1">{reg.team_name}</h4>
                      )}
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Users size={14} />
                        Leader: {reg.leader?.full_name || "Unknown"} (NAAD-26-
                        {reg.leader_naad_id.toString().padStart(4, "0")})
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                      {new Date(reg.created_at).toLocaleDateString()}
                    </span>
                  </div>

                  {reg.members && reg.members.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                        Team Members
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {reg.members.map((member: any) => (
                          <div
                            key={member.id}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                          >
                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">
                              {member.user?.full_name?.[0] || "?"}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-white truncate">
                                {member.user?.full_name || "Unknown"}
                              </p>
                              <p className="text-xs text-zinc-500">
                                {member.role} • NAAD-26-{member.naad_id.toString().padStart(4, "0")}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {currentEvent && currentEvent.registrations.length === 0 && (
          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-12 text-center">
            <Users className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-zinc-400 mb-2">No Registrations Yet</h3>
            <p className="text-zinc-500">
              No one has registered for {currentEvent.eventName} yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
