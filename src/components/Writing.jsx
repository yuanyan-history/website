import phrCover from '../assets/phr-cover.png'
import ghrCover from '../assets/ghr-cover.png'
import taomoCover from '../assets/taomo-zhou-cover.png'
import missionaryCover from '../assets/missionary-confucius-cover.png'
import oxfordAnalytica from '../assets/oxford-analytica.png'

const categories = [
  {
    label: 'Op-eds',
    posts: [
      {
        title: "Not China's H-1B: The Rocky Road Ahead for the K Visa",
        publisher: 'The Diplomat',
        image: 'https://thediplomat.com/wp-content/uploads/2025/12/sizes/td-story-s-2/thediplomat_2025-12-19-035822.jpg',
        href: 'https://thediplomat.com/2025/12/not-chinas-h-1b-the-rocky-road-ahead-for-the-k-visa/',
      },
      {
        title: 'The Triangular Fortress in U.S.–Taiwan Relations',
        publisher: 'Modern Diplomacy',
        image: 'https://moderndiplomacy.eu/wp-content/uploads/2022/04/taiwan-taipei.jpg',
        href: 'https://moderndiplomacy.eu/2026/02/21/the-triangular-fortress-in-u-s-taiwan-relations/',
      },
    ],
  },
  {
    label: 'Reports',
    posts: [
      {
        title: 'China-US trade leverage moves will have lasting impact',
        publisher: 'Oxford Analytica',
        image: oxfordAnalytica,
        imageFit: 'contain',
        imagePosition: 'center center',
        imageBg: '#ffffff',
        href: null,
      },
      {
        title: "What China's Zero-tariff Policy Means for South Africa",
        publisher: 'SET Advisory',
        image: 'https://setadvisory.com/wp-content/uploads/01decd2e-af4a-4ce0-baa3-3581d9a2195e.jpg',
        href: 'https://setadvisory.com/chinaszerotariffpolicy/',
      },
      {
        title: 'The Manus Case and Cross-border Tech Control',
        publisher: 'BISI',
        image: 'http://static1.squarespace.com/static/65a3d12806652261eeb5b510/65b23ef918c196780c15dd28/69fff95e5f2d151ca35fc81f/1778562118942/image1.png?format=1500w',
        href: 'https://bisi.org.uk/reports/the-manus-case-and-cross-border-tech-control',
      },
      {
        title: "What China's New Supply Chain Regulations Mean to Multinational Corporations",
        publisher: 'BISI',
        image: 'http://static1.squarespace.com/static/65a3d12806652261eeb5b510/65b23ef918c196780c15dd28/69ed41c1fcf10243db9244ce/1777352533177/image1.png?format=1500w',
        href: 'https://bisi.org.uk/reports/what-chinas-new-supply-chain-regulations-mean-to-multinational-corporations',
      },
      {
        title: "China's Oil Price Adjustment Reflects Pressures from Continuing Iran Conflict",
        publisher: 'BISI',
        image: 'http://static1.squarespace.com/static/65a3d12806652261eeb5b510/65b23ef918c196780c15dd28/69cbcd34bb1c016d4f7016d7/1776056454439/image1.png?format=1500w',
        href: 'https://bisi.org.uk/reports/china-oil-price-adjustment-reflects-pressures-from-continuing-iran-conflict',
      },
    ],
  },
  {
    label: 'Book Reviews',
    posts: [
      {
        title: 'Book Review: From Missionary Education to Confucius Institutes',
        publisher: 'Brill — Journal of America-East Asia Relations',
        image: missionaryCover,
        imagePosition: '20% center',
        href: 'https://brill-com.ezp.lib.cam.ac.uk/downloadpdf/view/journals/jaer/32/2/article-p228_008.pdf',
      },
      {
        title: 'Taomo Zhou, Migration in the Time of Revolution: China, Indonesia and the Cold War (Cornell University Press, 2019)',
        publisher: 'Newsletter for Research in Chinese Studies 38, no.4 (2020): 31–32',
        image: taomoCover,
        href: 'https://www.airitilibrary.com/',
      },
    ],
  },
  {
    label: 'Peer-Reviewed Articles',
    posts: [
      {
        title: '"Channeling Expertise: Sinologists and America\'s China Policy, 1966–1968," Pacific Historical Review (accepted July 2025, forthcoming)',
        publisher: 'Pacific Historical Review',
        image: phrCover,
        href: null,
      },
      {
        title: 'Hongfei Shi, Yuan Yan, "Digital Resources in the Study of the History of International Organizations," Global History Review 25, no.2 (2023): 82–101',
        publisher: 'Global History Review',
        image: ghrCover,
        imageScale: 1.65,
        imageWidth: '187px',
        imageHeight: '145px',
        imagePosition: 'center 20%',
        imageFilter: 'url(#sharpen-img) contrast(1.2) saturate(1.1)',
        href: 'https://oversea.cnki.net/',
      },
    ],
  },
]

function categoryId(label) {
  return `writing-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

function scrollToCategory(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function PostRow({ post, globalIndex = 0 }) {
  const delay = `${0.15 + globalIndex * 0.12}s`
  const row = (
    <div
      className="writing-post-row"
      style={{
        cursor: post.href ? 'pointer' : 'default',
        animation: `fadeUp 0.7s ease ${delay} both`,
      }}
    >
      {post.image ? (
        <div className="writing-post-thumb" style={{
          width: post.imageWidth || undefined,
          height: post.imageHeight || undefined,
        }}>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '100%', height: '100%',
              objectFit: post.imageFit || 'cover',
              objectPosition: post.imagePosition || 'top center',
              filter: post.imageFilter !== undefined ? post.imageFilter : 'grayscale(30%)',
              transform: post.imageScale ? `scale(${post.imageScale})` : 'none',
              transformOrigin: 'center center',
              background: post.imageBg || 'transparent',
            }}
          />
        </div>
      ) : (
        <div className="writing-post-thumb writing-post-thumb--placeholder">✍</div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p className="writing-post-title">{post.title}</p>
        {post.publisher && (
          <span className="writing-post-publisher">{post.publisher}</span>
        )}
      </div>
    </div>
  )

  return post.href ? (
    <a href={post.href} target="_blank" rel="noopener noreferrer" className="writing-post">
      {row}
    </a>
  ) : <div>{row}</div>
}

export default function Writing() {
  let globalIndex = 0
  return (
    <section>
      {/* Hidden SVG sharpening filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="sharpen-img">
            <feConvolveMatrix order="3" kernelMatrix="0 -1 0  -1 5 -1  0 -1 0" preserveAlpha="true" />
          </filter>
        </defs>
      </svg>

      <div className="writing-intro">
        <h2 className="float-in writing-title">Writing</h2>

        <nav className="writing-overview float-in-1" aria-label="Writing categories">
          {categories.map(({ label }) => (
            <button
              key={label}
              type="button"
              className="writing-overview-btn"
              onClick={() => scrollToCategory(categoryId(label))}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="float-in-2 writing-categories">
        {categories.map(({ label, posts }) => (
          <div key={label} id={categoryId(label)} className="writing-category-section">
            <div className="writing-category-header">
              <span className="writing-category-label">{label}</span>
              <div className="writing-category-rule" />
            </div>

            {posts.length === 0 ? (
              <p style={{ color: 'var(--muted)', fontStyle: 'italic', fontSize: '0.9rem', padding: '12px 0' }}>
                Coming soon.
              </p>
            ) : (
              <div className="writing-post-list">
                {posts.map((post) => {
                  const idx = globalIndex++
                  return <PostRow key={post.title} post={post} globalIndex={idx} />
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
