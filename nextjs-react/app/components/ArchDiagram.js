/**
 * ArchDiagram — architecture diagrams in the Google / AWS / Microsoft style.
 *
 * Pure server component: renders a deterministic SVG from a small spec.
 * Visual language: white canvas + dot grid, tinted stage containers with
 * label pills, white nodes with icon chips, labeled arrows, dashed feedback
 * loop, title bar with accent, legend chips.
 */

const PALETTE = {
  blue: { c: "#1a73e8", tint: "#e8f0fe" },
  green: { c: "#188038", tint: "#e6f4ea" },
  amber: { c: "#b06000", tint: "#fdf0dd" },
  red: { c: "#d93025", tint: "#fce8e6" },
  purple: { c: "#8430ce", tint: "#f3e8fd" },
  teal: { c: "#00796b", tint: "#e0f2f1" },
  slate: { c: "#475569", tint: "#eef2f7" },
  indigo: { c: "#4f46e5", tint: "#eef2ff" },
  pink: { c: "#db2777", tint: "#fde7ef" },
  cyan: { c: "#0891b2", tint: "#e0f5fa" },
};

const ICONS = {
  user: <g><circle cx="12" cy="8" r="3.2" /><path d="M5.5 19.5c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" /></g>,
  users: <g><circle cx="9" cy="9" r="3" /><path d="M3.5 19c.7-2.9 2.9-4.5 5.5-4.5s4.8 1.6 5.5 4.5" /><circle cx="16.5" cy="8" r="2.4" /><path d="M15.8 13.7c2.4.2 4.2 1.7 4.8 4.3" /></g>,
  chat: <path d="M4 5.5h16v10H9.5L4 19.5z" strokeLinejoin="round" />,
  memory: <g><path d="M12 4l8 4-8 4-8-4z" strokeLinejoin="round" /><path d="M4 12.5l8 4 8-4" /><path d="M4 16.5l8 4 8-4" /></g>,
  database: <g><ellipse cx="12" cy="6" rx="7" ry="2.6" /><path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" /><path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" /></g>,
  search: <g><circle cx="10.5" cy="10.5" r="5.5" /><path d="M14.7 14.7L20 20" /></g>,
  doc: <g><path d="M7 3h7l4 4v14H7z" strokeLinejoin="round" /><path d="M14 3v4h4" /><path d="M10 12h6M10 15.5h6" /></g>,
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinejoin="round" />,
  gear: <g><circle cx="12" cy="12" r="3" /><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" /></g>,
  loop: <g><path d="M4 12a8 8 0 0 1 13.6-5.7" /><path d="M20 12a8 8 0 0 1-13.6 5.7" /><path d="M17.6 2.9v3.4h-3.4" /><path d="M6.4 21.1v-3.4h3.4" /></g>,
  shield: <path d="M12 3l7 2.8v5.4c0 4.6-3 7.6-7 9.3-4-1.7-7-4.7-7-9.3V5.8z" strokeLinejoin="round" />,
  lock: <g><rect x="5.5" y="10.5" width="13" height="9" rx="2" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" /></g>,
  chart: <g><path d="M4 4v16h16" /><path d="M8 15.5v-4M12 15.5V8M16 15.5V9.5" /></g>,
  network: <g><circle cx="12" cy="5.5" r="2.2" /><circle cx="5.5" cy="17.5" r="2.2" /><circle cx="18.5" cy="17.5" r="2.2" /><path d="M10.9 7.4L6.7 15.6M13.1 7.4l4.2 8.2M7.7 17.5h8.6" /></g>,
  graph: <g><circle cx="5.5" cy="7" r="2" /><circle cx="18.5" cy="6" r="2" /><circle cx="12" cy="13" r="2" /><circle cx="6" cy="18.5" r="2" /><circle cx="18" cy="18.5" r="2" /><path d="M7.3 8.2l3.4 3.4M16.8 7.4l-3.5 4M7.4 17.6l3.2-3.2M13.9 14.3l2.9 2.9" /></g>,
  book: <g><path d="M12 5.5C10 4 7 3.5 4 3.8v14.7c3-.3 6 .2 8 1.7 2-1.5 5-2 8-1.7V3.8c-3-.3-6 .2-8 1.7z" /><path d="M12 5.5v14.7" /></g>,
  globe: <g><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17" /><path d="M12 3.5c2.7 2.3 4 5.2 4 8.5s-1.3 6.2-4 8.5c-2.7-2.3-4-5.2-4-8.5s1.3-6.2 4-8.5z" /></g>,
  check: <g><circle cx="12" cy="12" r="8.5" /><path d="M8.2 12.4l2.6 2.6 5-5.4" /></g>,
  alert: <g><path d="M12 4L21 19.5H3z" strokeLinejoin="round" /><path d="M12 10v4.2" /><path d="M12 16.9v.01" /></g>,
  robot: <g><rect x="5" y="8" width="14" height="10" rx="2.5" /><path d="M12 8V5" /><circle cx="12" cy="3.8" r="1.1" /><circle cx="9" cy="12.5" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="12.5" r="1" fill="currentColor" stroke="none" /><path d="M9.5 16h5" /></g>,
  clock: <g><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></g>,
  code: <path d="M8.5 7L4 12l4.5 5M15.5 7L20 12l-4.5 5" />,
  sparkles: <g><path d="M12 4l1.8 4.7 4.7 1.8-4.7 1.8L12 17l-1.8-4.7-4.7-1.8 4.7-1.8z" strokeLinejoin="round" /><path d="M18.5 15.5v5M16 18h5" /></g>,
  eye: <g><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" /></g>,
  server: <g><rect x="4" y="4.5" width="16" height="6" rx="1.5" /><rect x="4" y="13.5" width="16" height="6" rx="1.5" /><path d="M7.5 7.5h.01M7.5 16.5h.01" /></g>,
  target: <g><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></g>,
  cloud: <path d="M7 18.5a4.5 4.5 0 1 1 .8-8.9 5.5 5.5 0 0 1 10.6 1.9 3.6 3.6 0 0 1-.9 7z" strokeLinejoin="round" />,
  play: <g><circle cx="12" cy="12" r="8.5" /><path d="M10 8.8l6 3.2-6 3.2z" fill="currentColor" strokeLinejoin="round" /></g>,
  scale: <g><path d="M12 4v16M5 7.5h14" /><path d="M5 7.5l-2.8 6h5.6zM19 7.5l-2.8 6h5.6z" strokeLinejoin="round" /><path d="M8.5 20h7" /></g>,
};

const FONT = "'Inter', 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif";
const M = 22;
const GAP = 44;
const CONTENT_W = 1060;

function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i += 1) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

function wrapText(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if (!cur) cur = w;
    else if (`${cur} ${w}`.length <= maxChars) cur += ` ${w}`;
    else {
      lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function measureNode(node, nodeW) {
  const titleLines = wrapText(node.title, Math.max(8, Math.floor((nodeW - 46) / 6.9)));
  const descLines = node.desc ? wrapText(node.desc, Math.max(12, Math.floor((nodeW - 22) / 5.55))) : [];
  const h = 10 + Math.max(26, titleLines.length * 15) + (descLines.length ? 6 + descLines.length * 13 : 0) + 9;
  return { titleLines, descLines, h };
}

function pillWidth(text, fontSize, weight) {
  const perChar = weight >= 700 ? fontSize * 0.62 : fontSize * 0.54;
  return Math.ceil(text.length * perChar);
}

export default function ArchDiagram({
  title,
  subtitle,
  caption,
  accent = "#1a73e8",
  stages,
  edgeLabels = [],
  feedback,
  legend = [],
}) {
  const n = stages.length;
  if (!n) return null;
  const uid = `ad${hash(title + JSON.stringify(stages))}`;

  const stageW = Math.max(150, Math.min(240, Math.floor((CONTENT_W - (n - 1) * GAP) / n)));
  const nodeW = stageW - 24;

  const stageHeights = stages.map((stage) => {
    const inner = stage.nodes.reduce((sum, node) => sum + measureNode(node, nodeW).h, 0);
    const gaps = Math.max(0, stage.nodes.length - 1) * 9;
    return 14 + inner + gaps + 12;
  });
  const maxStageH = Math.max(...stageHeights);

  const stageX = stages.map((_, i) => M + i * (stageW + GAP));
  const y0 = M + (subtitle ? 58 : 44);
  const W = stageX[n - 1] + stageW + M;
  const H = y0 + maxStageH + (feedback ? 58 : 18);

  const edgeY = [];
  for (let i = 0; i < n - 1; i += 1) {
    edgeY.push(y0 + Math.min(stageHeights[i], stageHeights[i + 1]) / 2);
  }

  let legendRight = W - M;
  const legendChips = legend.map((item) => {
    const color = PALETTE[item.color] ? PALETTE[item.color].c : accent;
    const w = 16 + pillWidth(item.label, 10.5, 600) + 14;
    const chip = { ...item, color, w, x: legendRight - w };
    legendRight -= w + 10;
    return chip;
  });

  let nodeCursor = { y: 0 };
  return (
    <figure className="arch-diagram">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`${uid}-dots`} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.1" fill="#dbe3ee" />
          </pattern>
          <filter id={`${uid}-sh`} x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.6" floodColor="#0f172a" floodOpacity="0.10" />
          </filter>
          <marker id={`${uid}-arw`} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7.5" markerHeight="7.5" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#64748b" />
          </marker>
          <marker id={`${uid}-arwf`} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7.5" markerHeight="7.5" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#94a3b8" />
          </marker>
        </defs>

        <rect x="0" y="0" width={W} height={H} rx="14" fill="#ffffff" />
        <rect x="0" y="0" width={W} height={H} rx="14" fill={`url(#${uid}-dots)`} opacity="0.5" />

        <rect x={M} y={M + 4} width="4" height="19" rx="2" fill={accent} />
        <text x={M + 14} y={M + 19} fontFamily={FONT} fontSize="16.5" fontWeight="700" fill="#0f172a">{title}</text>
        {subtitle ? (
          <text x={M + 14} y={M + 39} fontFamily={FONT} fontSize="12" fill="#64748b">{subtitle}</text>
        ) : null}
        {legendChips.map((chip, i) => (
          <g key={`lg-${i}`}>
            <rect x={chip.x} y={M - 2} width={chip.w} height="19" rx="9.5" fill="#ffffff" stroke="#dbe3ee" />
            <circle cx={chip.x + 11} cy={M + 7.5} r="3.5" fill={chip.color} />
            <text x={chip.x + 19} y={M + 11} fontFamily={FONT} fontSize="10.5" fontWeight="600" fill="#475569">{chip.label}</text>
          </g>
        ))}


        {/* stage containers */}
        {stages.map((stage, i) => {
          const pal = PALETTE[stage.color] || PALETTE.blue;
          const x = stageX[i];
          const y = y0;
          const h = stageHeights[i];
          const label = String(stage.label).toUpperCase();
          const lw = 24 + pillWidth(label, 11, 700);
          nodeCursor = { y: y + 14 };
          return (
            <g key={`stage-${i}`}>
              <rect x={x} y={y} width={stageW} height={h} rx="12" fill={pal.tint} stroke={pal.c} strokeOpacity="0.45" strokeWidth="1.5" />
              <rect x={x + stageW / 2 - lw / 2} y={y - 11} width={lw} height="22" rx="11" fill="#ffffff" stroke={pal.c} strokeWidth="1.2" />
              <circle cx={x + stageW / 2 - lw / 2 + 12} cy={y} r="3.5" fill={pal.c} />
              <text
                x={x + stageW / 2 - lw / 2 + 20}
                y={y + 3.5}
                fontFamily={FONT}
                fontSize="11"
                fontWeight="700"
                letterSpacing="0.6"
                fill="#334155"
              >{label}</text>
              {stage.nodes.map((node, k) => {
                const m = measureNode(node, nodeW);
                const nx = x + 12;
                const ny = nodeCursor.y;
                nodeCursor.y += m.h + 9;
                return (
                  <g key={`node-${i}-${k}`}>
                    <rect x={nx} y={ny} width={nodeW} height={m.h} rx="8" fill="#ffffff" stroke="#d8e0ec" filter={`url(#${uid}-sh)`} />
                    <rect x={nx + 9} y={ny + 9} width="24" height="24" rx="6.5" fill={pal.tint} />
                    <g
                      transform={`translate(${nx + 13}, ${ny + 13}) scale(0.66)`}
                      stroke={pal.c}
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      style={{ color: pal.c }}
                    >
                      {ICONS[node.icon] || ICONS.gear}
                    </g>
                    {m.titleLines.map((line, li) => (
                      <text
                        key={`t-${li}`}
                        x={nx + 41}
                        y={ny + 21 + li * 15}
                        fontFamily={FONT}
                        fontSize="12"
                        fontWeight="600"
                        fill="#1e293b"
                      >{line}</text>
                    ))}
                    {m.descLines.map((line, li) => (
                      <text
                        key={`d-${li}`}
                        x={nx + 11}
                        y={ny + 10 + Math.max(26, m.titleLines.length * 15) + 15 + li * 13}
                        fontFamily={FONT}
                        fontSize="10.5"
                        fill="#64748b"
                      >{line}</text>
                    ))}
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* edges */}
        {stages.slice(0, -1).map((_, i) => {
          const x1 = stageX[i] + stageW;
          const x2 = stageX[i + 1];
          const y = edgeY[i];
          const label = edgeLabels[i];
          const mx = (x1 + x2) / 2;
          const labW = label ? pillWidth(label, 10.5, 600) + 12 : 0;
          return (
            <g key={`edge-${i}`}>
              <path
                d={`M ${x1} ${y} C ${x1 + GAP * 0.45} ${y}, ${x2 - GAP * 0.45} ${y}, ${x2 - 5} ${y}`}
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
                markerEnd={`url(#${uid}-arw)`}
              />
              {label ? (
                <g>
                  <rect x={mx - labW / 2} y={y - 19} width={labW} height="16" rx="8" fill="#ffffff" stroke="#dbe3ee" />
                  <text x={mx} y={y - 7.5} textAnchor="middle" fontFamily={FONT} fontSize="10.5" fontWeight="600" fill="#475569">{label}</text>
                </g>
              ) : null}
            </g>
          );
        })}

        {/* feedback loop */}
        {feedback ? (() => {
          const x1 = stageX[n - 1] + stageW / 2;
          const x2 = stageX[0] + stageW / 2;
          const yBottom = y0 + maxStageH;
          const yLow = yBottom + 34;
          const label = feedback.label || "feedback";
          const lw2 = pillWidth(label, 10.5, 600) + 16;
          return (
            <g>
              <path
                d={`M ${x1} ${yBottom - 6} L ${x1} ${yLow} L ${x2} ${yLow} L ${x2} ${yBottom + 4}`}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="6 5"
                markerEnd={`url(#${uid}-arwf)`}
              />
              <rect x={(x1 + x2) / 2 - lw2 / 2} y={yLow - 8} width={lw2} height="16" rx="8" fill="#ffffff" stroke="#dbe3ee" />
              <text x={(x1 + x2) / 2} y={yLow + 3.5} textAnchor="middle" fontFamily={FONT} fontSize="10.5" fontWeight="600" fill="#64748b">{label}</text>
            </g>
          );
        })() : null}
      </svg>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

