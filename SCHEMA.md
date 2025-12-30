# Hygraph Schema Definition

To enable dynamic content for your website, please create the following models in your Hygraph project:

## 1. TeamMember
*   **Display Name**: `Team Member`
*   **API ID**: `TeamMember`
*   **Plural API ID**: `TeamMembers`
*   **Fields**:
    *   `name` (Single Line Text, Required, Title)
    *   `role` (Single Line Text, Required)
    *   `bio` (Multi Line Text)
    *   `slug` (Slug, based on `name`)
    *   `image` (Asset, Required)
    *   `skills` (Multi Value String) - *Or create a separate Skill model if preferred*
    *   `categories` (Multi Value Enumeration or String) - Values: `executive`, `vocalist`, `instrumentalist`, `developer`, `video_editor`, `k21`, `k22`, `k23`, `k24`
    *   `instagramUrl` (Single Line Text, URL)
    *   `linkedinUrl` (Single Line Text, URL)
    *   `githubUrl` (Single Line Text, URL)
    *   `email` (Single Line Text, Email)

## 2. Event
*   **Display Name**: `Event`
*   **API ID**: `Event`
*   **Plural API ID**: `Events`
*   **Fields**:
    *   `title` (Single Line Text, Required, Title)
    *   `slug` (Slug, based on `title`)
    *   `description` (Multi Line Text)
    *   `date` (Date & Time)
    *   `location` (Single Line Text)
    *   `iconName` (Single Line Text) - e.g., "Music", "Mic", "Star", "Calendar" (matches LucideReact icons)
    *   `category` (Single Line Text)
    *   `gradientFrom` (Single Line Text) - e.g., "from-purple-900/50"
    *   `gradientTo` (Single Line Text) - e.g., "to-blue-900/50"

## 3. Post (News)
*   **Display Name**: `Post`
*   **API ID**: `Post`
*   **Plural API ID**: `Posts`
*   **Fields**:
    *   `title` (Single Line Text, Required, Title)
    *   `slug` (Slug, based on `title`)
    *   `excerpt` (Multi Line Text, Required)
    *   `content` (Rich Text)
    *   `date` (Date)
    *   `category` (Single Line Text) - e.g., "Achievement", "Announcement"
    *   `coverImage` (Asset)

## 4. GalleryImage
*   **Display Name**: `Gallery Image`
*   **API ID**: `GalleryImage`
*   **Plural API ID**: `GalleryImages`
*   **Fields**:
    *   `title` (Single Line Text, Title) - Used for Alt text
    *   `image` (Asset, Required)
    *   `colSpan` (Integer) - e.g., `1` or `2` (maps to `md:col-span-2` or `4`)

## 5. MusicTrack
*   **Display Name**: `Music Track`
*   **API ID**: `MusicTrack`
*   **Plural API ID**: `MusicTracks`
*   **Fields**:
    *   `title` (Single Line Text, Title)
    *   `embedUrl` (Single Line Text, URL) - SoundCloud Embed URL or ID
    *   `artist` (Single Line Text)

---
**After creating these models, you can start adding content directly in Hygraph.**
