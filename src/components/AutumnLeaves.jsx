function RealisticMapleLeaf({ style, rotate = 0, seed = 0 }) {
  const id = `leaf-${seed}`
  const gradId = `grad-${seed}`
  const shadowId = `shadow-${seed}`
  const noiseId = `noise-${seed}`

  // Color palettes for different autumn leaves
  const palettes = [
    { tip: '#c0390a', mid: '#e05010', base: '#b82808', vein: 'rgba(80,15,5,0.45)' },
    { tip: '#d96b08', mid: '#f08018', base: '#c05508', vein: 'rgba(90,30,5,0.4)' },
    { tip: '#b83010', mid: '#d54808', base: '#a02208', vein: 'rgba(75,15,5,0.45)' },
  ]
  const p = palettes[seed % palettes.length]

  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
      aria-hidden="true"
    >
      <defs>
        {/* Radial gradient for natural leaf coloring — brighter center, darker edges */}
        <radialGradient id={gradId} cx="48%" cy="38%" r="62%" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor={p.mid} />
          <stop offset="45%" stopColor={p.tip} />
          <stop offset="85%" stopColor={p.base} />
          <stop offset="100%" stopColor="#701808" />
        </radialGradient>

        {/* Subtle texture via turbulence */}
        <filter id={noiseId} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>

        {/* Drop shadow */}
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="3.5" floodColor="rgba(30,10,0,0.5)" />
        </filter>
      </defs>

      <g filter={`url(#${shadowId})`}>
        {/* Main leaf body — detailed 5-lobe maple leaf shape */}
        <path
          d="
            M 50,6
            C 51,9 53,13 52,17
            C 56,13 61,12 64,15
            C 61,19 57,22 56,26
            C 60,24 65,24 67,28
            C 63,31 59,33 57,37
            C 61,37 65,39 65,43
            C 61,45 57,44 55,48
            C 58,51 60,55 58,59
            C 54,57 51,54 50,59
            C 50,66 50,73 50,79
            C 48,73 48,66 48,59
            C 47,54 44,57 42,59
            C 40,55 42,51 45,48
            C 43,44 39,45 35,43
            C 35,39 39,37 43,37
            C 41,33 37,31 33,28
            C 35,24 40,24 44,26
            C 43,22 39,19 36,15
            C 39,12 44,13 48,17
            C 47,13 49,9 50,6 Z
          "
          fill={`url(#${gradId})`}
          filter={`url(#${noiseId})`}
          style={{ mixBlendMode: 'normal' }}
        />

        {/* Leaf veins — central and 4 secondary veins */}
        <line x1="50" y1="12" x2="50" y2="76" stroke={p.vein} strokeWidth="1.1" strokeLinecap="round" />
        {/* Upper-right vein */}
        <path d="M 50,28 Q 58,22 64,16" fill="none" stroke={p.vein} strokeWidth="0.75" strokeLinecap="round" />
        {/* Upper-left vein */}
        <path d="M 50,28 Q 42,22 36,16" fill="none" stroke={p.vein} strokeWidth="0.75" strokeLinecap="round" />
        {/* Right vein */}
        <path d="M 50,38 Q 59,34 65,28" fill="none" stroke={p.vein} strokeWidth="0.7" strokeLinecap="round" />
        {/* Left vein */}
        <path d="M 50,38 Q 41,34 35,28" fill="none" stroke={p.vein} strokeWidth="0.7" strokeLinecap="round" />
        {/* Lower-right */}
        <path d="M 50,48 Q 55,46 57,43" fill="none" stroke={p.vein} strokeWidth="0.6" strokeLinecap="round" />
        {/* Lower-left */}
        <path d="M 50,48 Q 45,46 43,43" fill="none" stroke={p.vein} strokeWidth="0.6" strokeLinecap="round" />

        {/* Stem */}
        <line x1="50" y1="76" x2="50" y2="86" stroke="#7a3010" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default function AutumnLeaves() {
  return (
    <>
      {/* Top-right — large, slightly tilted */}
      <RealisticMapleLeaf
        seed={0}
        rotate={22}
        style={{ width: 150, height: 150, top: '10px', right: '20px', opacity: 0.82 }}
      />
      {/* Bottom-left — large, opposite tilt */}
      <RealisticMapleLeaf
        seed={1}
        rotate={-40}
        style={{ width: 160, height: 160, bottom: '30px', left: '10px', opacity: 0.78 }}
      />
    </>
  )
}
