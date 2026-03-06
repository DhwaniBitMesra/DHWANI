// Admin Configuration
// Add authorized admin emails here

export const ADMIN_EMAILS = [
  "dhwani.bitmesra@gmail.com",
  "sarthakshreshtha345@gmail.com",
  "aryajha1612@gmail.com"
  // Add more admin emails below
];

export function isAdmin(email: string | undefined | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}
