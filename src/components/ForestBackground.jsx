// Pine tree silhouette centred at (0,0), trunk at bottom
function PineTree({ x, y, height, width, fill, opacity }) {
  const w = width
  const h = height
  const trunkW = w * 0.12
  const trunkH = h * 0.18
  // Three layered triangle tiers
  return (
    <g transform={`translate(${x}, ${y})`} opacity={opacity}>
      {/* Trunk */}
      <rect x={-trunkW / 2} y={0} width={trunkW} height={trunkH} fill={fill} />
      {/* Bottom tier */}
      <polygon points={`0,${-h} ${-w * 0.5},${-h * 0.3} ${w * 0.5},${-h * 0.3}`} fill={fill} />
      {/* Middle tier */}
      <polygon points={`0,${-h * 0.82} ${-w * 0.38},${-h * 0.38} ${w * 0.38},${-h * 0.38}`} fill={fill} />
      {/* Top tier */}
      <polygon points={`0,${-h * 0.62} ${-w * 0.24},${-h * 0.52} ${w * 0.24},${-h * 0.52}`} fill={fill} />
    </g>
  )
}

// Bare deciduous tree (winter/atmospheric)
function BareTree({ x, y, height, fill, opacity }) {
  const h = height
  return (
    <g transform={`translate(${x}, ${y})`} opacity={opacity}>
      {/* Trunk */}
      <line x1="0" y1="0" x2="0" y2={-h * 0.55} stroke={fill} strokeWidth={h * 0.04} strokeLinecap="round" />
      {/* Main branches */}
      <line x1="0" y1={-h * 0.3} x2={-h * 0.28} y2={-h * 0.65} stroke={fill} strokeWidth={h * 0.025} strokeLinecap="round" />
      <line x1="0" y1={-h * 0.3} x2={ h * 0.28} y2={-h * 0.65} stroke={fill} strokeWidth={h * 0.025} strokeLinecap="round" />
      <line x1="0" y1={-h * 0.45} x2={-h * 0.18} y2={-h * 0.78} stroke={fill} strokeWidth={h * 0.018} strokeLinecap="round" />
      <line x1="0" y1={-h * 0.45} x2={ h * 0.18} y2={-h * 0.78} stroke={fill} strokeWidth={h * 0.018} strokeLinecap="round" />
      {/* Sub-branches */}
      <line x1={-h*0.28} y1={-h*0.65} x2={-h*0.38} y2={-h*0.82} stroke={fill} strokeWidth={h*0.012} strokeLinecap="round" />
      <line x1={-h*0.28} y1={-h*0.65} x2={-h*0.16} y2={-h*0.84} stroke={fill} strokeWidth={h*0.012} strokeLinecap="round" />
      <line x1={ h*0.28} y1={-h*0.65} x2={ h*0.38} y2={-h*0.82} stroke={fill} strokeWidth={h*0.012} strokeLinecap="round" />
      <line x1={ h*0.28} y1={-h*0.65} x2={ h*0.16} y2={-h*0.84} stroke={fill} strokeWidth={h*0.012} strokeLinecap="round" />
    </g>
  )
}

export default function ForestBackground() {
  const ground = 900 // SVG height = ground level

  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Ground mist gradient */}
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(200,220,200,0)" />
          <stop offset="100%" stopColor="rgba(180,210,185,0.35)" />
        </linearGradient>
        {/* Light rays from top */}
        <radialGradient id="sun" cx="50%" cy="0%" r="60%">
          <stop offset="0%"   stopColor="rgba(240,230,160,0.18)" />
          <stop offset="100%" stopColor="rgba(240,230,160,0)" />
        </radialGradient>
        {/* Fog layer */}
        <linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(210,230,210,0)" />
          <stop offset="100%" stopColor="rgba(210,230,215,0.28)" />
        </linearGradient>
      </defs>

      {/* Sunlight from above */}
      <rect x="0" y="0" width="1440" height="900" fill="url(#sun)" />

      {/* ── FAR background trees (lightest, smallest) ── */}
      <PineTree x={80}   y={ground} height={280} width={70}  fill="#4a7a52" opacity={0.30} />
      <PineTree x={160}  y={ground} height={320} width={80}  fill="#4a7a52" opacity={0.28} />
      <PineTree x={240}  y={ground} height={260} width={65}  fill="#527d59" opacity={0.28} />
      <PineTree x={1200} y={ground} height={290} width={72}  fill="#4a7a52" opacity={0.30} />
      <PineTree x={1280} y={ground} height={310} width={78}  fill="#4a7a52" opacity={0.28} />
      <PineTree x={1360} y={ground} height={270} width={68}  fill="#527d59" opacity={0.28} />

      {/* ── MID background trees ── */}
      <PineTree x={30}   y={ground} height={380} width={90}  fill="#3d6645" opacity={0.45} />
      <PineTree x={110}  y={ground} height={420} width={100} fill="#375e40" opacity={0.42} />
      <PineTree x={190}  y={ground} height={350} width={85}  fill="#3d6645" opacity={0.40} />
      <BareTree x={270}  y={ground} height={310}             fill="#3a5540" opacity={0.30} />
      <PineTree x={1170} y={ground} height={390} width={92}  fill="#3d6645" opacity={0.45} />
      <PineTree x={1250} y={ground} height={410} width={98}  fill="#375e40" opacity={0.42} />
      <PineTree x={1330} y={ground} height={360} width={88}  fill="#3d6645" opacity={0.40} />
      <BareTree x={1390} y={ground} height={300}             fill="#3a5540" opacity={0.30} />

      {/* ── NEAR foreground trees (darkest, tallest) ── */}
      <PineTree x={-20}  y={ground} height={580} width={110} fill="#243d2a" opacity={0.70} />
      <PineTree x={70}   y={ground} height={520} width={95}  fill="#2a4430" opacity={0.65} />
      <BareTree x={155}  y={ground} height={440}             fill="#253528" opacity={0.45} />
      <PineTree x={220}  y={ground} height={490} width={100} fill="#243d2a" opacity={0.55} />
      <PineTree x={1220} y={ground} height={500} width={100} fill="#243d2a" opacity={0.55} />
      <BareTree x={1285} y={ground} height={450}             fill="#253528" opacity={0.45} />
      <PineTree x={1370} y={ground} height={530} width={98}  fill="#2a4430" opacity={0.65} />
      <PineTree x={1460} y={ground} height={590} width={112} fill="#243d2a" opacity={0.70} />

      {/* Ground mist at the bottom */}
      <rect x="0" y="700" width="1440" height="200" fill="url(#fog)" />

      {/* Light atmospheric haze over the whole scene */}
      <rect x="0" y="0" width="1440" height="900" fill="url(#mist)" />
    </svg>
  )
}
