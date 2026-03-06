-- NAAD System Database Setup
-- Run this in your Supabase SQL Editor

-- 1. Create naad_users table (Generates the sequential NAAD ID)
CREATE TABLE IF NOT EXISTS naad_users (
  naad_id SERIAL PRIMARY KEY, -- Automatically starts at 1, 2, 3...
  auth_user_id UUID REFERENCES auth.users(id) UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 2. Create events table
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  is_group_event BOOLEAN DEFAULT FALSE
);

-- 3. Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id INTEGER REFERENCES events(id) NOT NULL,
  team_name TEXT, 
  leader_naad_id INTEGER REFERENCES naad_users(naad_id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 4. Create registration_members table
CREATE TABLE IF NOT EXISTS registration_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id UUID REFERENCES registrations(id) ON DELETE CASCADE,
  naad_id INTEGER REFERENCES naad_users(naad_id) NOT NULL,
  role TEXT NOT NULL, -- e.g., 'Vocalist', 'Drummer', or just 'Participant' for solo
  UNIQUE(registration_id, naad_id) -- Prevents adding the same person twice to one entry
);

-- 5. Insert all NAAD events
INSERT INTO events (id, name, slug, is_group_event) VALUES
  (2, 'Dhun', 'dhun', FALSE),
  (3, 'Alankar', 'alankar', FALSE),
  (4, 'Raageshri', 'raageshri', FALSE),
  (5, 'Mandra Mayhem', 'mandra-mayhem', TRUE),
  (6, 'Karaoke', 'karaoke', FALSE),
  (7, 'Euphony', 'euphony', FALSE),
  (8, 'Spitfire', 'spitfire', FALSE),
  (9, 'Antakshari', 'antakshari', TRUE)
ON CONFLICT (id) DO NOTHING;

-- 6. Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_naad_users_auth_user_id ON naad_users(auth_user_id);
CREATE INDEX IF NOT EXISTS idx_registrations_event_id ON registrations(event_id);
CREATE INDEX IF NOT EXISTS idx_registrations_leader_naad_id ON registrations(leader_naad_id);
CREATE INDEX IF NOT EXISTS idx_registration_members_registration_id ON registration_members(registration_id);
CREATE INDEX IF NOT EXISTS idx_registration_members_naad_id ON registration_members(naad_id);

-- 7. Enable Row Level Security (RLS)
ALTER TABLE naad_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE registration_members ENABLE ROW LEVEL SECURITY;

-- 8. Create RLS Policies

-- naad_users: Users can read their own data, insert themselves, anyone can read
DROP POLICY IF EXISTS "Users can view all naad_users" ON naad_users;
CREATE POLICY "Users can view all naad_users" ON naad_users FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can insert their own naad_user" ON naad_users;
CREATE POLICY "Users can insert their own naad_user" ON naad_users FOR INSERT 
  WITH CHECK (auth.uid() = auth_user_id);

DROP POLICY IF EXISTS "Users can update their own naad_user" ON naad_users;
CREATE POLICY "Users can update their own naad_user" ON naad_users FOR UPDATE 
  USING (auth.uid() = auth_user_id);

-- events: Anyone can read events
DROP POLICY IF EXISTS "Anyone can view events" ON events;
CREATE POLICY "Anyone can view events" ON events FOR SELECT USING (true);

-- registrations: Anyone authenticated can create, anyone can read
DROP POLICY IF EXISTS "Authenticated users can view all registrations" ON registrations;
CREATE POLICY "Authenticated users can view all registrations" ON registrations FOR SELECT 
  USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Authenticated users can insert registrations" ON registrations;
CREATE POLICY "Authenticated users can insert registrations" ON registrations FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

-- registration_members: Anyone authenticated can read, insert if they're the registration leader
DROP POLICY IF EXISTS "Authenticated users can view registration members" ON registration_members;
CREATE POLICY "Authenticated users can view registration members" ON registration_members FOR SELECT 
  USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Authenticated users can insert registration members" ON registration_members;
CREATE POLICY "Authenticated users can insert registration members" ON registration_members FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

-- Completion message
DO $$ 
BEGIN 
  RAISE NOTICE 'NAAD system database setup completed successfully!'; 
END $$;
