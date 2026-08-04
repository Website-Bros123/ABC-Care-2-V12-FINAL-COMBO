/* Lightweight inline SVG icon set — no external icon dependency. */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export function MonogramIcon({ letter, ...props }) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="Baloo 2, sans-serif"
        fontWeight="800"
        fontSize="13"
        fill="currentColor"
      >
        {letter}
      </text>
    </svg>
  );
}

export function StarShapeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2 4.8 5.2.5-4 3.4 1.3 5.1L12 13.6 7.5 16.3l1.3-5.1-4-3.4 5.2-.5z" />
    </svg>
  );
}

export function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6z" />
      <circle cx="19.5" cy="18" r="1.4" />
      <circle cx="4.5" cy="6" r="1" />
    </svg>
  );
}

export function DotClusterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="5" cy="5" r="2.2" />
      <circle cx="14" cy="4" r="1.3" />
      <circle cx="19" cy="10" r="2.2" />
      <circle cx="4" cy="15" r="1.4" />
      <circle cx="11" cy="18" r="2.4" />
      <circle cx="20" cy="19" r="1.3" />
    </svg>
  );
}

export function SquiggleIcon(props) {
  return (
    <svg viewBox="0 0 60 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" {...props}>
      <path d="M2 8c4-7 8 7 12 0s8-7 12 0 8 7 12 0 8-7 12 0" />
    </svg>
  );
}

export function HeartCutoutIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 20.3S3 14.6 3 8.6C3 5.6 5.3 3.5 8 3.5c1.8 0 3.2 1 4 2.4.8-1.4 2.2-2.4 4-2.4 2.7 0 5 2.1 5 5.1 0 6-9 11.7-9 11.7z" />
    </svg>
  );
}

export function BlobShapeIcon(props) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path d="M32 8c15-6 33-2 42 10 9 12 12 29 3 40-9 11-27 13-42 10C20 65 5 55 4 40 3 25 17 14 32 8z" />
    </svg>
  );
}

export function CameraIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 8h3l2-2h6l2 2h3v11H4z" />
      <circle cx="12" cy="13" r="3.4" />
    </svg>
  );
}

export function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function HeartPulseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12.5 20s-7.5-4.6-9.3-9.4C2 7.4 3.8 4.6 6.9 4.3c1.9-.2 3.4.8 4.1 2 .7-1.2 2.2-2.2 4.1-2 3.1.3 4.9 3.1 3.7 6.3-.5 1.3-1.5 2.6-2.6 3.7" />
      <path d="M3.5 12h3l1.5-3 2.5 5 1.5-2.5h5.3" />
    </svg>
  );
}

export function FirstAidIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M12 11v5M9.5 13.5h5" />
    </svg>
  );
}

export function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.6M12 18.9v2.6M4.6 4.6l1.9 1.9M17.5 17.5l1.9 1.9M2.5 12h2.6M18.9 12h2.6M4.6 19.4l1.9-1.9M17.5 6.5l1.9-1.9" />
    </svg>
  );
}

export function BadgeCheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5l2.2 1.3 2.5-.3 1 2.3 2.2 1.3-.6 2.4.6 2.4-2.2 1.3-1 2.3-2.5-.3L12 20.5l-2.2-1.3-2.5.3-1-2.3-2.2-1.3.6-2.4-.6-2.4 2.2-1.3 1-2.3 2.5.3z" />
      <path d="M9 12.2l2 2 4-4.2" />
    </svg>
  );
}

export function BookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5z" />
    </svg>
  );
}

export function AbacusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M4 9.5h16M4 14.5h16" />
      <circle cx="8.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FlaskIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9.5 3.5h5M10 4v5.5L5.5 18a1.8 1.8 0 0 0 1.6 2.6h9.8a1.8 1.8 0 0 0 1.6-2.6L14 9.5V4" />
      <path d="M8 15.5h8" />
    </svg>
  );
}

export function PaletteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5a8.5 8 0 1 0 0 16c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.7 1.7-1.7H16a4 4 0 0 0 4-4c0-4.3-3.6-6.2-8-6.2z" />
      <circle cx="8" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="8.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function NoteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 18.5a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6z" />
      <path d="M11.3 16.2V5.5l7-1.5v10.7" />
      <path d="M18.3 16.2a2.3 2.3 0 1 1-4.6 0 2.3 2.3 0 0 1 4.6 0z" />
    </svg>
  );
}

export function HandIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M8 11V5a1.5 1.5 0 0 1 3 0v5.5M11 10.3V4a1.5 1.5 0 0 1 3 0v6.3M14 10.5V6a1.5 1.5 0 0 1 3 0v8c0 3.6-2.5 6.5-6 6.5-2.4 0-4-1-5.3-3l-2.4-4.2a1.4 1.4 0 0 1 2.3-1.6L8 14" />
    </svg>
  );
}

export function BabyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="8.5" r="4" />
      <path d="M9 8c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5" />
      <path d="M6 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5" />
    </svg>
  );
}

export function BlocksIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1.2" />
      <rect x="13" y="4" width="7" height="7" rx="1.2" />
      <rect x="8.5" y="13" width="7" height="7" rx="1.2" />
    </svg>
  );
}

export function PencilIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 20l1-4.2L15.5 5.3a1.8 1.8 0 0 1 2.6 0l.6.6a1.8 1.8 0 0 1 0 2.6L8.2 19z" />
      <path d="M13 7.5l3.5 3.5" />
    </svg>
  );
}

export function BackpackIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M7 9V6.5a5 5 0 0 1 10 0V9" />
      <rect x="5" y="9" width="14" height="12" rx="2.5" />
      <path d="M9 13.5h6M9 9v-1M9.5 21v-6h5v6" />
    </svg>
  );
}

export function AppleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 8.2c1-1.4 2.6-2 4-1.6-.2 1.6-1.6 3-3 3M12 8.2c-.6-.8-1.6-1.2-2.6-1.2-3 0-5.4 2.7-5.4 6.3 0 4 2.7 7.7 5 7.7 1 0 1.5-.5 2.5-.5s1.4.5 2.5.5c2.1 0 4.5-3.1 5-6.6-2-.6-3.3-2.4-3.3-4.3 0-1.2.5-2.3 1.3-3.1" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 3.5h3l1.5 4-2 1.6a11 11 0 0 0 5.4 5.4l1.6-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4.5 5.1 1.5 1.5 0 0 1 6 3.5z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s7-6.6 7-11.6A7 7 0 0 0 5 9.4C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.4-2.9h-2.9V8.7c0-.9.2-1.5 1.5-1.5H16.5V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.4H7.6v2.9h2.5V21z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.3 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.3-3.5-8.5s1.2-6.2 3.5-8.5z" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6-4.5-4.1 6-.7z" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5.5 8.5l6.5 7 6.5-7" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 12h15M13 5.5L19.5 12 13 18.5" />
    </svg>
  );
}

export function CloudIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 18a4.2 4.2 0 0 1-.7-8.3 5 5 0 0 1 9.6-2A4.6 4.6 0 0 1 18 18z" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
