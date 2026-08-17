// À placer dans : src/components/sections/ServiceIcon.tsx

const paths: Record<string, React.ReactNode> = {
  Workflow: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M9 6h6M15 8.5 12 15H9" />
    </>
  ),
  Database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  ShieldCheck: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  ArrowLeftRight: (
    <>
      <path d="M7 8h13M7 8l3-3M7 8l3 3" />
      <path d="M17 16H4M17 16l-3-3M17 16l-3 3" />
    </>
  ),
  BarChart3: (
    <>
      <path d="M4 20V10M11 20V4M18 20v-7" />
    </>
  ),
  Container: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="1" />
      <path d="M3 11h18M8 7V4h8v3" />
    </>
  ),
  Globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" />
    </>
  ),
};

export default function ServiceIcon({ name }: { name?: string }) {
  const path = (name && paths[name]) || paths["Database"];
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}