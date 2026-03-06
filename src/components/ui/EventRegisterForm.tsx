"use client";

import { useState } from "react";
import { Loader2, Plus, X } from "lucide-react";

interface EventRegisterFormProps {
  eventId: number;
  eventName: string;
  isGroupEvent: boolean;
  onSuccess: () => void;
  onCancel: () => void;
}

interface TeamMember {
  naad_id: string;
  role: string;
}

export default function EventRegisterForm({
  eventId,
  eventName,
  isGroupEvent,
  onSuccess,
  onCancel,
}: EventRegisterFormProps) {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState<TeamMember[]>([{ naad_id: "", role: "" }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addMember = () => {
    setMembers([...members, { naad_id: "", role: "" }]);
  };

  const removeMember = (index: number) => {
    if (members.length > 1) {
      setMembers(members.filter((_, i) => i !== index));
    }
  };

  const updateMember = (index: number, field: keyof TeamMember, value: string) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const body: { team_name?: string; members?: { naad_id: number; role: string }[] } = {};

      if (isGroupEvent) {
        if (!teamName.trim()) {
          setError("Team name is required for group events");
          setLoading(false);
          return;
        }
        body.team_name = teamName;

        const validMembers = members.filter(
          (m) => m.naad_id.trim() && m.role.trim()
        );

        if (validMembers.length === 0) {
          setError("Please add at least one team member");
          setLoading(false);
          return;
        }

        body.members = validMembers.map((m) => ({
          naad_id: parseInt(m.naad_id),
          role: m.role,
        }));
      }

      const response = await fetch(`/api/naad/events/${eventId}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json() as { error?: string };

      if (!response.ok) {
        setError(data.error || "Failed to register");
        setLoading(false);
        return;
      }

      onSuccess();
    } catch (err) {
      setError("Network error. Please try again.");
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-8 border-b border-white/10 sticky top-0 bg-zinc-900 z-10">
          <h2 className="text-2xl font-black text-white mb-2">Register for {eventName}</h2>
          <p className="text-zinc-400 text-sm">
            {isGroupEvent
              ? "Enter your team details and add all members with their NAAD IDs"
              : "Confirm your registration for this event"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {isGroupEvent && (
            <>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Team Name *
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Enter your team name"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-zinc-400">
                    Team Members
                  </label>
                  <button
                    type="button"
                    onClick={addMember}
                    className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1"
                  >
                    <Plus size={16} /> Add Member
                  </button>
                </div>

                <div className="space-y-4">
                  {members.map((member, index) => (
                    <div
                      key={index}
                      className="flex gap-3 items-start p-4 bg-black/30 rounded-xl border border-white/5"
                    >
                      <div className="flex-1 space-y-3">
                        <input
                          type="number"
                          value={member.naad_id}
                          onChange={(e) => updateMember(index, "naad_id", e.target.value)}
                          placeholder="NAAD ID (e.g., 42)"
                          className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                        />
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => updateMember(index, "role", e.target.value)}
                          placeholder="Role (e.g., Vocalist, Guitarist)"
                          className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                        />
                      </div>
                      {members.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeMember(index)}
                          className="text-red-400 hover:text-red-300 p-2"
                        >
                          <X size={20} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {!isGroupEvent && (
            <div className="p-6 bg-black/30 rounded-xl border border-white/5 text-center">
              <p className="text-zinc-400">
                You are registering as an individual participant. Click confirm to complete your
                registration.
              </p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-3 bg-zinc-800 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Registering...
                </>
              ) : (
                "Confirm Registration"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
