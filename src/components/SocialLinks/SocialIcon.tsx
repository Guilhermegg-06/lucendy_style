type SocialIconName = "calendar" | "tiktok" | "instagram" | "whatsapp" | "map";

export default function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.7" r="1" className="fill" /></svg>;
  if (name === "tiktok") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 3v11.2a4.6 4.6 0 1 1-3.7-4.5v3.1a1.7 1.7 0 1 0 .7 1.4V3h3a5 5 0 0 0 4.8 4v3a8 8 0 0 1-4.8-1.6" /></svg>;
  if (name === "whatsapp") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.2-4.4a8.4 8.4 0 1 1 15.8-4.3Z" /><path d="M8.2 7.6c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.5l.8 1.9c.1.3 0 .5-.2.7l-.6.8c.8 1.6 1.8 2.6 3.5 3.4l.8-.9c.2-.2.4-.3.7-.2l2 .9c.3.1.4.4.4.7-.1 1.3-1.1 2.4-2.4 2.5-2.3.2-5.3-1.4-7.2-3.6-1.7-2-2.5-4.5-1.6-6.2Z" /></svg>;
  if (name === "map") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /><path d="m9.5 15 1.6 1.6 3.7-3.8" /></svg>;
}
