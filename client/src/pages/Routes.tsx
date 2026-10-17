import { useState } from 'react';
import './Routes.css';
import Toast from '../components/Toast';

const routes = [
  {
    title: 'HMR Peak',
    location: 'Trinity Alps Wilderness, CA',
    miles: '20 mi',
    elevation: '+7,000 ft',
    days: '3 days',
    difficulty: 'Strenuous',
    difficultyClass: 'strenuous',
    desc: 'Beginning at China Gulch via the China Spring Trail, connecting to the North Fork Trail along Grizzly Creek. The route continues to the base of Grizzly Falls, where a steep, rocky scramble leads to Grizzly Lake. From the lake, an additional 1,800-foot ascent leads to HMR Peak, an unnamed summit designated by the High Mountain Rucking crew. The route features significant elevation gain, rugged alpine terrain, and expansive views of the Trinity Alps Wilderness.',
    img: '/death-march-2026.jpg',
    gpx: '#',
    alltrails:
      'https://www.alltrails.com/trail/us/california/china-gulch-trail-to-grizzly-lake',
  },
  {
    title: 'Four Lakes Loop - Extended Expedition',
    location: 'Trinity Alps Wilderness, CA',
    miles: '22.5 mi',
    elevation: '+6,545 ft',
    days: '3 days',
    difficulty: 'Hard',
    difficultyClass: 'hard',
    desc: 'Beginning at Swift Creek Trailhead, this extended expedition follows Swift Creek before connecting to Granite Lake Trail and ascending past Granite Lake to Seven Up Pass. From the pass, the route descends into Deer Creek Valley and connects with the Four Lakes Loop Trail, continuing past Luella Lake and Diamond Lake toward Summit Lake. The route then ascends Siligo Peak, offering panoramic views of the surrounding alpine lakes and mountain ranges, before descending toward Deer Lake. From there, the journey follows Deer Creek Trail to Stoney Ridge Trail, crossing Little Stonewall Pass before reaching Echo Lake. The route then retraces its way back to Stoney Ridge Trail and continues over Stonewall Pass.',
    img: '/death-march-2025.jpg',
    gpx: '#',
    alltrails:
      'https://www.alltrails.com/trail/us/california/siligo-peak-loop-via-granite-lakes-trail',
  },
  {
    title: 'TBD',
    location: 'Trinity Alps Wilderness, CA',
    miles: 'TBD',
    elevation: 'TBD',
    days: 'TBD',
    difficulty: 'Moderate',
    difficultyClass: 'moderate',
    desc: 'TBD',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=70',
    gpx: '#',
    alltrails: '#',
  },
];

export default function Routes() {
  const [toastVisible, setToastVisible] = useState(false);

  function handleGpxClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setToastVisible(true);
  }

  return (
    <>
      <div className="page-hero">
        <span className="section-label">High Mountain Rucking</span>
        <h1>Routes &amp; Expeditions</h1>
        <p>
          Mileage, elevation, difficulty, and GPX downloads for every route
          we've completed.
        </p>
      </div>

      <div className="routes-grid">
        {routes.map((r) => (
          <article className="route-card" key={r.title}>
            <img src={r.img} alt={r.title} loading="lazy" />
            <div className="route-info">
              <p className="route-location">{r.location}</p>
              <h2 className="route-title">{r.title}</h2>
              <div className="route-meta">
                <div className="route-stat">
                  <span>Distance</span>
                  <span>{r.miles}</span>
                </div>
                <div className="route-stat">
                  <span>Elevation Gain</span>
                  <span>{r.elevation}</span>
                </div>
                <div className="route-stat">
                  <span>Duration</span>
                  <span>{r.days}</span>
                </div>
              </div>
              <p className="route-desc">{r.desc}</p>
              <span className={`difficulty difficulty-${r.difficultyClass}`}>
                {r.difficulty}
              </span>
              <div className="route-links">
                <a
                  className="gpx-link"
                  href={r.gpx}
                  onClick={handleGpxClick}
                  aria-label={`Download GPX for ${r.title}`}>
                  ↓ Download GPX
                </a>
                <a
                  className="alltrails-link"
                  href={r.alltrails}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${r.title} on AllTrails`}>
                  View on AllTrails ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Toast
        message="Exact routes coming soon!"
        visible={toastVisible}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
}
