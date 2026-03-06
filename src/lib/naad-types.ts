// NAAD System Types

export interface NaadUser {
  naad_id: number;
  auth_user_id: string;
  full_name: string;
  phone: string | null;
  created_at: string;
}

export interface Event {
  id: number;
  name: string;
  slug: string;
  is_group_event: boolean;
}

export interface Registration {
  id: string;
  event_id: number;
  team_name: string | null;
  leader_naad_id: number;
  created_at: string;
}

export interface RegistrationMember {
  id: string;
  registration_id: string;
  naad_id: number;
  role: string;
}

export interface RegistrationWithDetails extends Registration {
  event: Event;
  leader: NaadUser;
  members: Array<RegistrationMember & { user: NaadUser }>;
}
