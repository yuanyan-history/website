const DARK  = '#2a4d2e'
const MID   = '#3a6b40'
const LIGHT = '#4d8c56'
const VINE  = '#5a3a1a'

// A single drooping leaf branching off a vine
// side: 1 = right, -1 = left
function DrapeLeaf({ x, y, side, scale = 1, fill = MID, opacity = 0.75 }) {
  // Heart-shaped leaf pointing outward-downward
  const s = side
  return (
    <g transform={`translate(${x},${y})`} opacity={opacity}>
      {/* Leaf petiole (short stem to leaf) */}
      <line x1="0" y1="0" x2={s * 10 * scale} y2={6 * scale} stroke={VINE} strokeWidth="0.8" />
      {/* Leaf blade — heart/teardrop shape */}
      <path
        transform={`translate(${s * 10 * scale}, ${6 * scale})`}
        d={`
          M 0,0
          C ${s*-4},${-9*scale} ${s*-14},${-8*scale} ${s*-12},0
          C ${s*-14},${7*scale}  ${s*-4},${13*scale}  0,${11*scale}
          C ${s*4},${13*scale}   ${s*14},${7*scale}  ${s*12},0
          C ${s*14},${-8*scale}  ${s*4},${-9*scale}  0,0
          Z
        `}
        fill={fill}
      />
      {/* Centre vein */}
      <line
        x1={s * 10 * scale} y1={6 * scale}
        x2={s * 10 * scale} y2={16 * scale}
        stroke={fill} strokeWidth="0.5" opacity="0.5"
        transform={`translate(0,0)`}
      />
    </g>
  )
}

// One hanging strand: a wavy vine with alternating leaves all the way down
function Strand({ anchorX, totalLength, leafSpacing = 48, phaseOffset = 0, swayAmp = 6, vineColor = VINE, leafColors, opacityBase = 0.85 }) {
  const colors = leafColors || [DARK, MID, LIGHT, MID, DARK]
  const points = []

  for (let i = 0; i * leafSpacing < totalLength; i++) {
    const y = i * leafSpacing + 10
    // Gentle sinusoidal sway
    const sway = Math.sin((y * 0.04) + phaseOffset) * swayAmp
    points.push({ y, x: anchorX + sway, side: i % 2 === 0 ? 1 : -1 })
  }

  // Build smooth vine path through points using cubic bezier
  let d = `M ${anchorX},0`
  points.forEach(({ x, y }) => { d += ` L ${x},${y}` })

  return (
    <g>
      <path d={d} fill="none" stroke={vineColor} strokeWidth="1.3" opacity="0.55" strokeLinecap="round" />
      {points.map(({ x, y, side }, i) => (
        <DrapeLeaf
          key={i}
          x={x} y={y}
          side={side}
          scale={0.85 + (i % 3) * 0.12}
          fill={colors[i % colors.length]}
          opacity={Math.max(0.3, opacityBase - i * 0.012)}
        />
      ))}
    </g>
  )
}

export default function IvyBackground() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* ── LEFT side — 5 strands of varying length ── */}
      <Strand anchorX={18}  totalLength={920} leafSpacing={50} phaseOffset={0.0} swayAmp={5}  leafColors={[DARK, MID, MID, LIGHT, DARK]} />
      <Strand anchorX={58}  totalLength={780} leafSpacing={44} phaseOffset={1.2} swayAmp={7}  leafColors={[MID, LIGHT, DARK, MID, LIGHT]} />
      <Strand anchorX={96}  totalLength={640} leafSpacing={52} phaseOffset={2.5} swayAmp={6}  leafColors={[LIGHT, DARK, MID, LIGHT, MID]}  opacityBase={0.75} />
      <Strand anchorX={132} totalLength={500} leafSpacing={46} phaseOffset={0.8} swayAmp={8}  leafColors={[DARK, MID, LIGHT, DARK, MID]}   opacityBase={0.65} />
      <Strand anchorX={164} totalLength={360} leafSpacing={54} phaseOffset={3.1} swayAmp={5}  leafColors={[MID, LIGHT, MID, DARK, LIGHT]}  opacityBase={0.55} />

      {/* ── RIGHT side — 5 strands of varying length ── */}
      <Strand anchorX={1422} totalLength={920} leafSpacing={50} phaseOffset={0.5} swayAmp={5}  leafColors={[DARK, MID, MID, LIGHT, DARK]} />
      <Strand anchorX={1382} totalLength={760} leafSpacing={44} phaseOffset={1.8} swayAmp={7}  leafColors={[MID, LIGHT, DARK, MID, LIGHT]} />
      <Strand anchorX={1344} totalLength={600} leafSpacing={52} phaseOffset={3.0} swayAmp={6}  leafColors={[LIGHT, DARK, MID, LIGHT, MID]}  opacityBase={0.75} />
      <Strand anchorX={1308} totalLength={460} leafSpacing={46} phaseOffset={1.1} swayAmp={8}  leafColors={[DARK, MID, LIGHT, DARK, MID]}   opacityBase={0.65} />
      <Strand anchorX={1276} totalLength={320} leafSpacing={54} phaseOffset={2.4} swayAmp={5}  leafColors={[MID, LIGHT, MID, DARK, LIGHT]}  opacityBase={0.55} />
    </svg>
  )
}
