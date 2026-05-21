"use client";

import Link from "next/link";

import styles from "./social-glass-icons.module.css";

type SocialLink = {
  id: "linkedin" | "telegram" | "email" | "github" | "whatsapp";
  label: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
  icon: React.ReactNode;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jing-an-lam-bbb9463aa",
    ariaLabel: "LinkedIn profile",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M5.39 1C4.07 1 3 2.07 3 3.4S4.07 5.83 5.39 5.83 7.78 4.73 7.78 3.4 6.71 1 5.39 1ZM17.06 7.36C15.05 7.36 13.9 8.42 13.35 9.47h-.06V7.65H9.33V21h4.12v-6.61c0-1.74.13-3.42 2.28-3.42 2.11 0 2.15 2.05 2.15 3.5V21H22v-7.33c0-3.59-.77-6.3-4.94-6.3ZM3.33 7.65V21h4.13V7.65H3.33Z" />
      </svg>
    ),
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/lam_980515",
    ariaLabel: "Telegram @lam_980515",
    external: true,
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden>
        <path d="M95 9.9c-1.3-1.1-3.4-1.2-7-.1-2.5.8-24.7 9.2-44.3 17.3-17.6 7.3-31.9 13.7-33.6 14.5-1.9.6-6 2.4-6.2 5.2-.1 1.8 1.4 3.4 4.3 4.7 3.1 1.6 16.8 6.2 19.7 7.1 1 3.4 6.9 23.3 7.2 24.5.4 1.8 1.6 2.8 2.2 3.2.1.1.3.3.5.4.3.2.7.3 1.2.3.7 0 1.5-.3 2.2-.8 3.7-3 10.1-9.7 11.9-11.6 7.9 6.2 16.5 13.1 17.3 13.9.1.1.1.1.1.1 1.9 1.6 3.9 2.5 5.7 2.5.6 0 1.2-.1 1.8-.3 2.1-.7 3.6-2.7 4.1-5.4 0-.1.1-.5.3-1.2 3.4-14.8 6.1-27.8 8.3-38.7 2.1-10.7 3.8-21.2 4.8-26.8.2-1.4.4-2.5.5-3.2 1.5-2.4 1.7-4.7.2-6Z M30 58.3l47.7-31.6c.1-.1.3-.2.4-.3 0 0 0 0 0 0 .1 0 .1-.1.2-.1.1 0 .1 0 .2-.1-.1.1-.2.4-.4.6L66 38.1c-8.4 7.7-19.4 17.8-26.7 24.4 0 0 0 0 0 .1 0 0-.1.1-.1.1 0 0 0 .1-.1.1 0 .1 0 .1-.1.2 0 0 0 .1 0 .1 0 0 0 0 0 .1-.5 5.6-1.4 15.2-1.8 19.5 0 0 0 0 0-.1 2.6 18.7-8.2 37.8-13.1 43.7-17.5Z" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:luopidkkop@gmail.com",
    ariaLabel: "Email luopidkkop@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/luopidop",
    ariaLabel: "GitHub profile luopidop",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.64-3.37-1.38-3.37-1.38-.45-1.18-1.12-1.5-1.12-1.5-.92-.65.07-.64.07-.64 1.02.07 1.55 1.07 1.55 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .84-.27 2.75 1.02A9.3 9.3 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.42.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/12763931514",
    ariaLabel: "WhatsApp +1 276 393 1514",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
];

function SocialGlassIcons() {
  return (
    <div className={styles.shell}>
    <ul className={styles.list} aria-label="Social links">
      {SOCIAL_LINKS.map((item) => (
        <li key={item.id} className={styles.iconContent}>
          <Link
            href={item.href}
            className={styles.link}
            data-social={item.id}
            aria-label={item.ariaLabel}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className={styles.filled} aria-hidden />
            {item.icon}
          </Link>
          <span className={styles.tooltip}>{item.label}</span>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default SocialGlassIcons;
