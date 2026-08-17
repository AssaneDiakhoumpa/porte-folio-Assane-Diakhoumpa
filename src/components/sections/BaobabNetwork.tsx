// À placer dans : src/components/sections/BaobabNetwork.tsx

export default function BaobabNetwork() {
  return (
    <svg
      viewBox="0 0 400 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "auto" }}
    >
      {/* Tronc */}
      <line x1="200" y1="420" x2="200" y2="260" stroke="#24316b" strokeWidth="6" />

      {/* Branches (lignes = flux de données) */}
      <g stroke="#24316b" strokeWidth="2.5">
        <line x1="200" y1="260" x2="120" y2="190" />
        <line x1="200" y1="260" x2="280" y2="190" />
        <line x1="200" y1="260" x2="200" y2="170" />
        <line x1="120" y1="190" x2="70" y2="120" />
        <line x1="120" y1="190" x2="140" y2="110" />
        <line x1="280" y1="190" x2="330" y2="120" />
        <line x1="280" y1="190" x2="260" y2="110" />
        <line x1="200" y1="170" x2="200" y2="90" />
        <line x1="200" y1="170" x2="160" y2="100" />
        <line x1="200" y1="170" x2="240" y2="100" />
      </g>

      {/* Nœuds (données) */}
      {[
        [200, 260, 5],
        [120, 190, 4],
        [280, 190, 4],
        [200, 170, 4],
        [70, 120, 3.5],
        [140, 110, 3.5],
        [330, 120, 3.5],
        [260, 110, 3.5],
        [200, 90, 4],
        [160, 100, 3],
        [240, 100, 3],
      ].map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill="#00d9ff"
          opacity={0.85}
          className="node-pulse"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}

      {/* Base / racines évoquées */}
      <ellipse cx="200" cy="418" rx="60" ry="6" fill="#131f4f" />

      <style>{`
        .node-pulse {
          animation: pulse 2.8s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .node-pulse { animation: none; opacity: 0.9; }
        }
      `}</style>
    </svg>
  );
}

