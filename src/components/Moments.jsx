import AutumnLeaves from './AutumnLeaves'

const moments = [
  {
    year: '2025',
    entries: [
      { text: 'Experienced −25°C for the first time during an archival trip to Madison, Wisconsin.' },
      { text: 'Spent four months at Boston University as a Visiting Fellow.' },
    ],
  },
  {
    year: '2024',
    entries: [
      { text: 'Taught my first university class. I was far more nervous than my students.' },
      { text: 'Was elected Welfare Officer at my college.' },
      { text: 'Visited Pisa, Florence, and Milan in December. Italy was beautiful, but mostly cold, rainy, and determined to keep me damp.' },
    ],
  },
  {
    year: '2023',
    entries: [
      { text: 'Took my first solo trip through Eastern Europe (Romania, Hungary, Slovakia, Czech Republic, and Poland).' },
      { text: 'Had my first (and thankfully brief) visit to a police station at the Romania–Hungary border.' },
      { text: 'Spent three months on my second U.S. archival trip (Ann Arbor, New York, Atlanta, Austin, Seattle, San Francisco, and Washington, DC).' },
      { text: 'Walked from my Airbnb to the Lyndon B. Johnson Library in Austin during a 42°C heat wave. Questionable decision.' },
    ],
  },
  {
    year: '2022',
    entries: [
      { text: 'Volunteered with an NGO supporting asylum seekers and attended its annual conference in Amsterdam and The Hague.' },
      { text: 'Became a part-time waitress at a Chinese restaurant in Cambridge; saw snow for the first time while working a Saturday night shift.' },
      { text: 'Made my first archival research trip to the United States (New York, New Haven, and Boston).' },
      { text: 'Met my partner at the Christmas Party in my college.' },
    ],
  },
  {
    year: '2021',
    entries: [
      { text: 'Left China for the UK to begin my graduate studies — my first time living abroad.' },
      { text: 'Spent 10 days in quarantine during Covid in Cambridge.' },
      { text: "Celebrated freedom with my first restaurant meal... and immediately discovered I couldn't understand British English when ordering." },
    ],
  },
]

export default function Moments() {
  return (
    <section style={{ position: 'relative' }}>
      <AutumnLeaves />
      <h2 className="float-in">Moments</h2>
      <p className="float-in-1" style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2.5rem', fontStyle: 'italic' }}>
        A collection of memorable adventures, firsts, mishaps, and stories worth keeping.
      </p>

      {/* Timeline container */}
      <div className="float-in-2" style={{ position: 'relative', paddingLeft: '48px' }}>

        {/* Vertical timeline line */}
        <div style={{
          position: 'absolute',
          left: '14px',
          top: '8px',
          bottom: '8px',
          width: '2px',
          background: 'linear-gradient(to bottom, #2a5c35, #88bb98, #2a5c35)',
          borderRadius: '2px',
        }} />

        {(() => {
          let globalIdx = 0
          return moments.map(({ year, entries }, yi) => (
          <div key={year} style={{ position: 'relative', marginBottom: yi < moments.length - 1 ? '2.5rem' : 0 }}>

            {/* Year marker dot */}
            <div style={{
              position: 'absolute',
              left: '-42px',
              top: '4px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: '#a8d5b5',
              border: '2px solid #2a5c35',
              boxShadow: '0 0 0 3px rgba(42,92,53,0.15)',
              zIndex: 1,
              animation: `fadeUp 0.6s ease ${globalIdx * 0.5}s both`,
            }} />

            {/* Year label */}
            <div style={{
              fontSize: '1.1rem', fontFamily: 'sans-serif', fontWeight: 700,
              color: '#2a5c35', letterSpacing: '0.06em',
              marginBottom: '0.75rem',
              animation: `fadeUp 0.6s ease ${globalIdx++ * 0.5}s both`,
            }}>
              {year}
            </div>

            {/* Entries */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {entries.map(({ text }) => {
                const delay = `${globalIdx++ * 0.5}s`
                return (
                <li key={text} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                  fontSize: '1.1rem', color: '#1a2e1e', lineHeight: 1.65,
                  animation: `fadeUp 0.6s ease ${delay} both`,
                }}>
                  <span style={{
                    flexShrink: 0, marginTop: '7px',
                    width: '8px', height: '8px', borderRadius: '50%',
                    border: '1.5px solid #4a6e52', display: 'inline-block',
                  }} />
                  <span>{text}</span>
                </li>
                )
              })}
            </ul>
          </div>
          ))
        })()}
      </div>
    </section>
  )
}
