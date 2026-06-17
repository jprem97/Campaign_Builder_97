export default function Logo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <filter id="logoShadow" x="-2" y="-1" width="36" height="36">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#4f46e5" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logoGrad)" filter="url(#logoShadow)" />
      <path
        d="M10 12.5C10 11.67 10.67 11 11.5 11H20.5C21.33 11 22 11.67 22 12.5V19.5C22 20.33 21.33 21 20.5 21H17L14.5 23.5V21H11.5C10.67 21 10 20.33 10 19.5V12.5Z"
        fill="white"
        fillOpacity="0.95"
      />
      <circle cx="14" cy="16.25" r="1" fill="#c7d2fe" />
      <circle cx="16.5" cy="16.25" r="1" fill="#a5b4fc" />
      <circle cx="19" cy="16.25" r="1" fill="#818cf8" />
    </svg>
  );
}
