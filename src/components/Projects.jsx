import usMap from '../assets/us-archival-map.png'

const bookHighlights = [
  '5 archival trips to the United States for my doctoral research, solo-travelling 13 American cities.',
  'Integrated large volumes of declassified materials across 21 US archives and open-source intelligence into coherent, evidence-based qualitative analysis.',
  '30+ structured elite interviews with senior policymakers (including former US National Security Council staff and Assistant Secretaries of State), think tank leaders, academics, and foundation/NGO officials across three national policy ecosystems.',
  'Translated interview and network data into stakeholder maps, identifying key brokers, gatekeepers, and clusters relevant to America\u2019s China policy formation and transnational policy diffusion.',
]

export default function Projects() {
  return (
    <section>
      <h2 className="float-in">Projects</h2>

      {/* Single project entry */}
      <div className="float-in-1" style={{ borderTop: '1px solid #9abfa8', paddingTop: '22px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e2e1a', marginBottom: '0.75rem' }}>
          Book Manuscript
        </h3>
        <p style={{ marginBottom: '1.25rem', fontSize: '17px', textAlign: 'justify' }}>
          I am working on a book manuscript based on my doctoral thesis, and am currently in contact with the
          editors of Cambridge University Press to publish a book based on my thesis.
        </p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {bookHighlights.map((point, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '17px', color: '#1a2e1e', lineHeight: 1.7 }}>
              <span style={{
                flexShrink: 0, marginTop: '6px',
                width: '10px', height: '10px', borderRadius: '50%',
                border: '1.5px solid #4a6e52', display: 'inline-block',
              }} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Map image — half size on desktop, full width on mobile */}
      <div className="float-in-2" style={{ marginTop: '2.5rem' }}>
        <img
          src={usMap}
          alt="Places I have been in the US for archival work"
          className="projects-map"
        />
      </div>
    </section>
  )
}
