import { gql } from 'graphql-request';
import { hygraph } from './hygraph';
import { teamMembers, events, newsItems, galleryImages, musicItems } from '@/data/fallback';
import teamMembersJson from '@/data/team-members.json';

// --- Queries ---

const TEAM_QUERY = gql`
  query GetTeamMembers {
    teamMembers(first: 100) {
      id
      name
      role
      bio
      image {
        url
      }
      skills
      categories
      instagramUrl
      linkedinUrl
      githubUrl
      email
    }
  }
`;

const EVENTS_QUERY = gql`
  query GetEvents {
    events(orderBy: date_DESC) {
      id
      title
      slug
      description
      date
      location
      iconName
      category
      gradientFrom
      gradientTo
    }
  }
`;

const POSTS_QUERY = gql`
  query GetPosts {
    posts(orderBy: date_DESC) {
      id
      title
      slug
      excerpt
      date
      category
      coverImage {
        url
      }
    }
  }
`;

const GALLERY_QUERY = gql`
  query GetGalleryImages {
    galleryImages(first: 100) {
      id
      title
      image {
        url
      }
      colSpan
    }
  }
`;

const MUSIC_QUERY = gql`
  query GetMusic {
    musicTracks {
      id
      title
      embedUrl
      description
    }
  }
`;

// --- Fetchers with Fallback ---

export async function getTeam() {
  return (teamMembersJson as any[]).map((member, index) => ({
    id: member.id ?? member.slug ?? index + 1,
    name: member.name,
    role: member.role,
    bio: member.bio,
    image: member.image || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/person-with-winter-hat-scarf-cold-5KFfWSpCqM4Ksf7yXgiVhxSweVw5tH.jpg",
    categories: member.categories || [],
    skills: member.skills || [],
    socialMedia: {
      instagram: member.instagramUrl || undefined,
      linkedin: member.linkedinUrl || undefined,
      github: member.githubUrl || undefined,
      email: member.email || undefined
    }
  }));
}

export async function getEvents() {
  try {
    const { events: data } = await hygraph.request<any>(EVENTS_QUERY);
    if (!data || data.length === 0) throw new Error("No data");

    // Transform or format dates if needed
    return data.map((event: any) => ({
      ...event,
      span: "md:col-span-4" // Default span, or fetch if added to model
    }));
  } catch (error) {
    console.warn("Using fallback data for Events:", error);
    return events;
  }
}

export async function getNews() {
  try {
    const { posts: data } = await hygraph.request<any>(POSTS_QUERY);
    if (!data || data.length === 0) throw new Error("No data");

    return data.map((post: any) => ({
      ...post,
      iconName: "Award", // Default icon
      span: "md:col-span-4",
      gradientFrom: "from-blue-900/50",
      gradientTo: "to-cyan-900/50"
    }));
  } catch (error) {
    console.warn("Using fallback data for News:", error);
    return newsItems;
  }
}

export async function getGallery() {
  try {
    const { galleryImages: data } = await hygraph.request<any>(GALLERY_QUERY);
    if (!data || data.length === 0) throw new Error("No data");

    return data
      .filter((img: any) => img.image && img.image.url)
      .map((img: any) => ({
        src: img.image.url,
        alt: img.title || "Gallery Image",
        span: img.colSpan ? `md:col-span-${img.colSpan}` : "md:col-span-2"
      }));
  } catch (error) {
    console.warn("Using fallback data for Gallery:", error);
    return galleryImages;
  }
}

export async function getMusic() {
  try {
    const { musicTracks: data } = await hygraph.request<any>(MUSIC_QUERY);
    if (!data || data.length === 0) throw new Error("No data");

    return data;
  } catch (error) {
    console.warn("Using fallback data for Music:", error);
    return musicItems;
  }
}
