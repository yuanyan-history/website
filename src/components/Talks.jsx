const talks = [
  {
    title: '"The Tea-Leaf Reader: Richard H. Solomon, the National Security Council, and the US-China Negotiations, 1971–1976"',
    venue: 'Annual Meeting, Association for Asian Studies (AAS), Vancouver',
    date: 'March 2026',
  },
  {
    title: 'Postgraduate Research Lightning Round',
    venue: '2025 Organization of American Historians (OAH) Annual Meeting, Chicago',
    date: 'April 3–6, 2025',
  },
  {
    title: 'Manuscript Presenter, Dissertation Writing Workshop',
    venue: 'Department of History, Boston University',
    date: 'March 2025',
  },
  {
    title: 'Poster Session, No. 3',
    venue: 'American Historical Association (AHA) Annual Meeting, New York',
    date: 'January 3–6, 2025',
  },
  {
    title: 'Lecturer (Contract)',
    venue: 'Delivered lectures, seminars, and supervisions on Cold War studies and US history to approximately 55 undergraduate students',
    date: 'Feb 2024 – Nov 2025',
  },
  {
    title: '"In Search of a \'Chinese Tommy Thompson\': Edwin O. Reischauer and Cold War Asia"',
    venue: 'Postgraduate Seminar, Sidney Sussex College, Cambridge',
    date: 'November 2024',
  },
  {
    title: '"\'From Laymen, Through Specialists, to Policymakers\': Sinologists and America\'s China Policy (1966–68)"',
    venue: 'American History Workshop, Cambridge',
    date: 'November 2024',
  },
  {
    title: 'Paper Presenter',
    venue: 'Annual Meeting, American History Research Association of China, Chengdu',
    date: 'November 1–3, 2024',
  },
  {
    title: '"Sinologists, China Studies, and America\'s China Policy"',
    venue: 'Bentley Historical Library, University of Michigan',
    date: 'September 2024',
  },
  {
    title: '"\'Walking on Two Tracks\': A. Doak Barnett, China Studies, and America\'s China Policy (1959–69)"',
    venue: 'Graduate American History Conference, Cambridge',
    date: 'May 2022',
  },
]

export default function Talks() {
  return (
    <section>
      <h2 className="float-in">Talks</h2>
      <p className="float-in-1" style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2.5rem', fontStyle: 'italic', textAlign: 'justify' }}>
        Conferences, panels, and public lectures.
      </p>

      <div className="float-in-2" style={{ position: 'relative', paddingLeft: '48px' }}>
        {/* Vertical timeline line */}
        <div style={{
          position: 'absolute',
          left: '14px', top: '8px', bottom: '8px',
          width: '2px',
          background: 'linear-gradient(to bottom, #2a5c35, #88bb98, #2a5c35)',
          borderRadius: '2px',
        }} />

        {talks.map((talk, i) => (
          <div key={i} style={{
            position: 'relative',
            marginBottom: i < talks.length - 1 ? '1.75rem' : 0,
            display: 'flex', alignItems: 'flex-start', gap: '10px',
            animation: `fadeUp 0.6s ease ${i * 0.5}s both`,
          }}>
            {/* Bullet dot */}
            <span style={{
              position: 'absolute',
              left: '-42px', top: '6px',
              width: '10px', height: '10px', borderRadius: '50%',
              border: '1.5px solid #4a6e52',
              background: '#a8d5b5',
              display: 'inline-block', flexShrink: 0,
              zIndex: 1,
            }} />

            <div>
              <p style={{ margin: 0, fontSize: '17px', color: '#1a2e1e', lineHeight: 1.6, fontWeight: 500, textAlign: 'left' }}>
                {talk.title}
              </p>
              <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--muted)', fontFamily: 'sans-serif', textAlign: 'left' }}>
                {talk.venue} · {talk.date}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
