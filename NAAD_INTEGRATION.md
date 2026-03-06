# NAAD Registration System - Complete Integration

## 🎯 Overview

A complete NAAD event registration system has been integrated into your Dhwani website with the following features:

- **User Authentication**: Supabase-powered auth (already in place)
- **NAAD ID Generation**: Sequential auto-incrementing IDs (NAAD-26-0001, NAAD-26-0002, etc.)
- **Event Registration**: Support for both solo and group/team events
- **Admin Dashboard**: View all registrations and participant details

## 📋 Database Schema

The system uses 4 main tables:

### 1. `naad_users`
Stores NAAD registrations with auto-incrementing NAAD IDs
- `naad_id` (SERIAL PRIMARY KEY) - Auto-generated starting from 1
- `auth_user_id` (UUID) - References Supabase auth.users
- `full_name` (TEXT)
- `phone` (TEXT, optional)
- `created_at` (TIMESTAMP)

### 2. `events`
Stores event information
- `id` (INTEGER PRIMARY KEY)
- `name` (TEXT)
- `slug` (TEXT UNIQUE)
- `is_group_event` (BOOLEAN)

### 3. `registrations`
Stores individual/team registrations
- `id` (UUID)
- `event_id` (INTEGER) - References events
- `team_name` (TEXT, nullable)
- `leader_naad_id` (INTEGER) - References naad_users
- `created_at` (TIMESTAMP)

### 4. `registration_members`
Stores team members for group events
- `id` (UUID)
- `registration_id` (UUID) - References registrations
- `naad_id` (INTEGER) - References naad_users
- `role` (TEXT) - e.g., "Vocalist", "Drummer"

## 🚀 Setup Instructions

### Step 1: Run Database Migration

1. Open your Supabase project dashboard
2. Go to the SQL Editor
3. Copy and paste the contents of `naad-setup.sql`
4. Execute the SQL script

This will:
- Create all necessary tables
- Insert the 8 NAAD events (Dhun, Alankar, Raageshri, Mandra Mayhem, Karaoke, Euphony, Spitfire, Antakshari)
- Set up Row Level Security (RLS) policies
- Create performance indexes

### Step 2: Verify Environment Variables

Ensure your `.env.local` has:
```env
NEXT_PUBLIC_SUPABASE_URL=https://qntjpsshgqlfihvdtzpj.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_...
```

### Step 3: Test the System

1. Start the dev server: `npm run dev`
2. Navigate to `/naad`
3. Click "Get Your NAAD ID"
4. Complete the registration form
5. Once you have a NAAD ID, visit any event page (e.g., `/naad/dhun`)
6. Click "Register Now" to register for that event

## 📁 New Files Created

### API Routes
- `/src/app/api/naad/register/route.ts` - NAAD registration (GET/POST)
- `/src/app/api/naad/events/[eventId]/register/route.ts` - Event registration (GET/POST)

### Components
- `/src/components/ui/EventRegisterForm.tsx` - Modal form for event registration
- `/src/components/ui/NaadPass.tsx` - Updated to show real NAAD ID from database

### Pages
- `/src/app/naad/register/page.tsx` - Updated with registration form and NAAD ID display
- `/src/app/naad/[slug]/page.tsx` - Updated to client component with registration button
- `/src/app/admin/naad-registrations/page.tsx` - Admin dashboard to view all registrations

### Types
- `/src/lib/naad-types.ts` - TypeScript types for NAAD system

## 🎮 User Flow

### For Participants

1. **Login**: User creates account via Supabase auth (`/enter`)
2. **Get NAAD ID**: User visits `/naad/register` and fills in their details
   - System generates sequential NAAD ID (e.g., NAAD-26-0001)
   - Digital pass is displayed
3. **Browse Events**: User visits `/naad` to see all events
4. **Register for Event**: User clicks on any event (e.g., `/naad/dhun`)
   - For **solo events**: Simple confirmation
   - For **group events** (Mandra Mayhem, Antakshari):
     - Enter team name
     - Add team members by their NAAD IDs
     - Specify each member's role

### For Admins

1. Visit `/admin/naad-registrations`
2. View registration counts for all events
3. Click on any event to see detailed participant list
4. For team events, see all team members and their roles

## 🎨 UI Features

### NAAD Pass Component
- Glass-morphism design with subtle animations
- Displays user's full name, email, and profile picture
- Shows unique NAAD ID with special formatting
- QR code placeholder for future expansion

### Event Registration Form
- Dynamic form based on event type (solo vs group)
- Real-time validation
- Add/remove team members
- Role assignment for each member

### Admin Dashboard
- Grid view of all events with registration counts
- Expandable registration details
- Team member information with roles
- Timestamp tracking

## 🔐 Security

All tables have Row Level Security (RLS) enabled:

- **naad_users**: Users can only insert their own record, everyone can read
- **events**: Public read access
- **registrations**: Authenticated users can create and view
- **registration_members**: Authenticated users can create and view

## 📊 Events Included

| ID | Event Name | Type | Group Event |
|----|------------|------|-------------|
| 2 | Dhun (Solo Instrumental) | Solo | No |
| 3 | Alankar (Eastern Vocals) | Solo | No |
| 4 | Raageshri (Classical Vocals) | Solo | No |
| 5 | Mandra Mayhem (Battle of Bands) | Flagship | **Yes** |
| 6 | Karaoke (Open Mic) | Informal | No |
| 7 | Euphony (Western Vocals) | Solo | No |
| 8 | Spitfire (Rap Battle) | Hip Hop | No |
| 9 | Antakshari (Musical Game) | Informal | **Yes** |

## 🎯 Key Registration Rules

### Group Events (Mandra Mayhem & Antakshari)
- Leader registers the team using their NAAD ID
- Leader adds all team members by entering their NAAD IDs
- Each member must specify their role (e.g., "Vocalist", "Guitarist", "Drummer")
- System validates that all NAAD IDs exist
- Prevents duplicate registrations

### Solo Events
- One-click registration
- User must have NAAD ID first
- Automatically links to their NAAD user record

## 🐛 Error Handling

The system includes comprehensive error handling:

- **Missing NAAD ID**: Redirects user to `/naad/register`
- **Not logged in**: Redirects to `/enter` with return path
- **Invalid NAAD IDs**: Shows error message when team member IDs don't exist
- **Duplicate registration**: Prevents registering for same event twice
- **Network errors**: Graceful error messages with retry option

## 🎨 Design Highlights

- **Dark theme** with indigo accents matching Dhwani's brand
- **Smooth animations** using Framer Motion
- **Glassmorphism** effects for depth
- **Responsive design** for mobile and desktop
- **Accessibility** considerations (keyboard navigation, ARIA labels)

## 📱 Mobile Optimization

All pages and components are fully responsive:
- Stacked layouts on mobile
- Touch-friendly buttons
- Optimized form inputs for mobile keyboards
- Smooth scrolling and animations

## 🔮 Future Enhancements

Potential additions:
- Real QR code generation for NAAD passes
- Email confirmations for registrations
- Payment integration for event fees
- Waitlist management for full events
- Real-time registration updates
- Export registrations to CSV
- Advanced admin filters and search

## ✅ Testing Checklist

- [ ] Run `naad-setup.sql` in Supabase
- [ ] Restart dev server
- [ ] Test NAAD registration flow
- [ ] Test solo event registration (e.g., Dhun)
- [ ] Test group event registration (e.g., Mandra Mayhem)
- [ ] Verify NAAD ID is displayed correctly
- [ ] Check admin dashboard shows all registrations
- [ ] Test on mobile devices
- [ ] Verify all data appears in Supabase dashboard

## 🎉 You're All Set!

The complete NAAD registration system is now integrated. Users can register for NAAD, get their unique IDs, and register for events. Admins can view all registrations through the dashboard.
