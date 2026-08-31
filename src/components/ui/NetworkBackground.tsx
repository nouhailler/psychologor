const NODES: [number, number][] = [
  [60, 80], [180, 40], [320, 120], [460, 60], [560, 160],
  [120, 220], [260, 260], [420, 240], [40, 340], [340, 380],
  [520, 340], [200, 400], [600, 260], [480, 420], [100, 140],
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [2, 7], [3, 7], [4, 7],
  [5, 6], [5, 8], [6, 9], [7, 10], [6, 11], [9, 11], [10, 12], [10, 13], [9, 13],
  [0, 14], [5, 14], [1, 14],
];

export function NetworkBackground({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g opacity="0.5" stroke="currentColor" strokeWidth="1">
        {EDGES.map(([a, b], i) => (
          <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
        ))}
      </g>
      <g fill="currentColor">
        {NODES.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 4 : 2.4} opacity={i % 3 === 0 ? 0.9 : 0.55} />
        ))}
      </g>
    </svg>
  );
}
