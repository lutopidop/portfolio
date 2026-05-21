"use client";

import Link from "next/link";

import styles from "./social-tooltip-icon.module.css";

type SocialTooltipIconProps = {
  href: string;
  label: string;
  brandColor?: string;
  initials: string;
  name: string;
  username: string;
  about: string;
  ariaLabel: string;
  icon: React.ReactNode;
};

function SocialTooltipIcon({
  href,
  label,
  brandColor = "#0A66C2",
  initials,
  name,
  username,
  about,
  ariaLabel,
  icon,
}: SocialTooltipIconProps) {
  return (
    <div
      className={styles.container}
      style={{ "--brand-color": brandColor } as React.CSSProperties}
    >
      <div className={styles.tooltip}>
        <div className={styles.profile}>
          <div className={styles.user}>
            <div className={styles.avatar}>{initials}</div>
            <div className={styles.details}>
              <div className={styles.displayName}>{name}</div>
              <div className={styles.username}>{username}</div>
            </div>
          </div>
          <div className={styles.about}>{about}</div>
        </div>
      </div>

      <Link
        href={href}
        className={styles.iconLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        <div className={styles.layer}>
          <span />
          <span />
          <span />
          <span />
          <span className={styles.iconFace}>{icon}</span>
        </div>
        <div className={styles.label}>{label}</div>
      </Link>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5.3909 1C4.07086 1 3 2.0742 3 3.40057C3 4.72693 4.06999 5.82599 5.38914 5.82599C6.70828 5.82599 7.78004 4.72693 7.78004 3.40057C7.78004 2.07511 6.71095 1 5.3909 1ZM17.0556 7.36364C15.048 7.36364 13.8992 8.41859 13.3482 9.46768H13.2899V7.64595H9.33333V21H13.456V14.3896C13.456 12.6477 13.5869 10.9645 15.732 10.9645C17.8465 10.9645 17.8773 12.9506 17.8773 14.4996V21H21.9947H22V13.6651C22 10.076 21.232 7.36364 17.0556 7.36364ZM3.32868 7.64595V21H7.45489V7.64595H3.32868Z"
        fill="#0A66C2"
      />
    </svg>
  );
}

export function LinkedInSocialIcon() {
  return (
    <SocialTooltipIcon
      href="https://www.linkedin.com/in/jing-an-lam-bbb9463aa"
      label="LinkedIn"
      brandColor="#0A66C2"
      initials="JL"
      name="Jing An Lam"
      username="@jing-an-lam"
      about="Shopify Developer · Singapore"
      ariaLabel="LinkedIn profile"
      icon={<LinkedInIcon />}
    />
  );
}

export default SocialTooltipIcon;
