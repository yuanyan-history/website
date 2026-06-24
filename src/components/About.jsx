import photo from '../assets/yuan-yan.jpg'
import linkedinLogo from '../assets/linkedin-logo.png'
import gmailLogo from '../assets/gmail-logo.png'
import { BookOpen, Globe, GraduationCap } from 'lucide-react'

const socialIconStyle = {
  width: '36px',
  height: '36px',
  display: 'block',
  objectFit: 'contain',
  background: 'transparent',
}

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  borderBottom: 'none',
  background: 'transparent',
  transition: 'transform 0.15s',
}

function SocialIconLink({ href, title, children, external = false }) {
  return (
    <a
      href={href}
      title={title}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      style={socialLinkStyle}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {children}
    </a>
  )
}

export default function About() {
  return (
    <section>
      {/* Two-column layout: photo left, content right */}
      <div className="about-layout">
        {/* Left: photo + name */}
        <div className="about-left">
          <img
            src={photo}
            alt="Yuan Yan"
            className="about-photo"
            style={{ animation: 'floatIn 0.8s ease both' }}
          />
          <div style={{ animation: 'floatIn 0.8s ease 0.15s both' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
              <h1 style={{ fontFamily: 'sans-serif', margin: 0, fontSize: '3rem', color: '#4a7a55' }}>Yuan Yan</h1>
              <SocialIconLink
                href="https://www.linkedin.com/in/dr-yuan-yan-323890352"
                title="LinkedIn"
                external
              >
                <img src={linkedinLogo} alt="LinkedIn" style={socialIconStyle} />
              </SocialIconLink>
              <SocialIconLink href="mailto:yuan.yan2025@gmail.com" title="Email">
                <img src={gmailLogo} alt="Gmail" style={socialIconStyle} />
              </SocialIconLink>
            </div>
            <p style={{ color: 'var(--muted)', margin: 0, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Researcher & Writer
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', animation: 'floatIn 0.8s ease 0.3s both' }}>
            {[
              { icon: <GraduationCap size={13} />, label: 'PhD, Cambridge' },
              { icon: <BookOpen size={13} />, label: 'Book in progress' },
              { icon: <Globe size={13} />, label: 'US–China relations' },
            ].map(({ icon, label }) => (
              <span key={label} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                border: '1px solid #88bb98', color: '#1a2e1e',
                fontFamily: 'sans-serif', fontSize: '0.72rem', fontWeight: 500,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '4px 10px',
              }}>
                {icon}{label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: bio text */}
        <div style={{ flex: 1, animation: 'floatIn 0.8s ease 0.25s both' }}>
          <div>
            <p>
              I am a researcher and writer specialising in <strong>US-China relations</strong> and geopolitical strategy.
              Having recently completed my <strong>PhD</strong> at the <strong>University of Cambridge</strong>, I moved to London to explore
              the field of <strong>geopolitical risk analysis</strong>, while writing a book on how America's leading China
              experts influenced US China policy during the Cold War. I also write op-eds and reports on
              the evolving dynamics of US-China competition.
            </p>
            <p>
              I am interested in <strong>how expertise shapes statecraft</strong> and how governments and businesses
              formulate strategy in periods of geopolitical change. I aim to translate my research into
              insights that help policymakers, businesses, and the public understand the geopolitical
              forces that shape the 21st century.
            </p>
            <p>
              When I am not reading, thinking, or writing about geopolitics, I enjoy cooking, watercolour
              painting, and tending to the plants on my balcony.
            </p>
            <p>
              If you want to connect or to see my CV, please feel free to message me on{' '}
              <a href="https://www.linkedin.com/in/dr-yuan-yan-323890352" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {' '}or email{' '}
              <a href="mailto:yuan.yan2025@gmail.com">yuan.yan2025@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
