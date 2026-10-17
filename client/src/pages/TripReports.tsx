import { useState } from 'react';
import './TripReports.css';
import './Routes.css';

type Report = {
  date: string;
  title: string;
  excerpt: string;
  img: string;
  tags: string[];
  stats?: { label: string; value: string }[];
  story?: string[];
  lessons?: string[];
};

const reports: Report[] = [
  {
    date: 'September 2026',
    title: 'HMR Peak — Death March',
    excerpt:
      'An unforgettable expedition deep into the Trinity Alps, featuring the rugged Grizzly Scramble, breathtaking Grizzly Lake, and an additional 1,800-foot ascent to an unnamed summit. A challenging climb that led to the discovery and naming of HMR Peak.',
    img: '/death-march-2026.jpg',
    tags: ['HMR Peak', 'Trinity Alps', 'Thru-hike', 'Sasquatch'],
    stats: [
      { label: 'Miles', value: '20 mi' },
      { label: 'Days', value: '3' },
      { label: 'Elev Gain', value: '+7,000 ft' },
      { label: 'Max Elev.', value: '10,505 ft' },
    ],
    story: [
      'Our expedition began at China Gulch, where we set out from the China Springs Trailhead and followed the North Fork Trail along Grizzly Creek toward Grizzly Lake.',
      'As we made our way deeper into the Trinity Alps Wilderness, the terrain grew increasingly demanding. Reaching the base of Grizzly Falls, we tackled the steep and rugged Grizzly Scramble, making our way up to the breathtaking alpine waters of Grizzly Lake.',
      "But the lake wasn't our final destination. From Grizzly Lake, we continued our ascent, climbing an additional 1,800 feet of elevation to summit an unnamed mountain overlooking the surrounding wilderness.",
      'It was there that HMR Peak was born. We named the summit in honor of High Mountain Rucking and marked the location on Google Maps, creating a lasting reminder of the adventure and determination it took to reach the top.',
      'What started as a backpacking trip became a defining expedition for our crew—one built on endurance, exploration, and the shared pursuit of pushing beyond the established trail.',
    ],
    lessons: [
      'Make sure the fire is completely out before bed or a sasquatch might shit in your campsite.',
      'Pack 10% more calories than you think you need',
      'Separate your camp shoes from your sleep system - wet booties at 3am are a morale killer.',
    ],
  },
  {
    date: 'July 2025',
    title: 'Four Lakes Loop — Extended Edition',
    excerpt:
      'An extended expedition through the Trinity Alps, featuring alpine lakes, rugged mountain passes, and a summit of Siligo Peak. From Swift Creek to Echo Lake, this challenging route delivers relentless elevation changes and breathtaking wilderness views.',
    img: '/death-march-2025.jpg',
    tags: ['Four Lakes Loop', 'Bear Sighting', 'Thunderstorms', 'Whiskey'],
    stats: [
      { label: 'Miles', value: '22.5 mi' },
      { label: 'Days', value: '3' },
      { label: 'Elev Gain', value: '+6,545 ft' },
      { label: 'Max Elev.', value: '9,000 ft' },
    ],
    story: [
      'Beginning at Swift Creek Trailhead, this extended expedition follows Swift Creek before connecting to Granite Lake Trail and ascending past Granite Lake to Seven Up Pass. From the pass, the route descends into Deer Creek Valley and connects with the Four Lakes Loop Trail, continuing past Luella Lake and Diamond Lake toward Summit Lake.',
      'The route then ascends Siligo Peak, offering panoramic views of the surrounding alpine lakes and mountain ranges, before descending toward Deer Lake. From there, the journey follows Deer Creek Trail to Stoney Ridge Trail, crossing Little Stonewall Pass before reaching Echo Lake.',
      'From Echo Lake, the route retraces its way to Stoney Ridge Trail and continues over Stonewall Pass. This demanding expedition features rugged mountain passes, pristine alpine lakes, steep elevation changes, and expansive views throughout the Trinity Alps Wilderness.',
    ],
    lessons: [
      'Always hike with a bottle of whiskey and leave it at the top of Luella for the next hiker-holic.',
      'Bear canister is required here - you cannot out run, swim or climb a bear.',
      'Bring gaiters or risk getting eaten alive by mosquitos.',
    ],
  },
  {
    date: 'September 2024',
    title: 'TBD',
    excerpt: 'TBD',
    img: '/hmr-logo.png',
    tags: ['TBD'],
  },
];

export default function TripReports() {
  const [expanded, setExpanded] = useState<string | null>(null);

  function toggle(title: string) {
    setExpanded((prev) => (prev === title ? null : title));
  }

  return (
    <>
      <div className="page-hero">
        <span className="section-label">High Mountain Rucking</span>
        <h1>Trip Reports</h1>
        <p>
          Real stories from real expeditions — conditions, mistakes, and what
          we'd do differently.
        </p>
      </div>

      <div className="reports-grid">
        {reports.map((r) => {
          const isOpen = expanded === r.title;
          return (
            <article
              className={`report-card ${isOpen ? 'report-card--open' : ''}`}
              key={r.title}>
              <button
                className="report-card-trigger"
                onClick={() => toggle(r.title)}
                aria-expanded={isOpen}
                aria-controls={`report-body-${r.title}`}>
                <img src={r.img} alt={r.title} loading="lazy" />
                <div className="report-body">
                  <p className="report-date">{r.date}</p>
                  <h2 className="report-title">{r.title}</h2>
                  <p className="report-excerpt">{r.excerpt}</p>
                  <div className="report-tags">
                    {r.tags.map((t) => (
                      <span className="report-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="report-expand-hint" aria-hidden="true">
                    {isOpen ? '↑ Close' : '↓ Read full report'}
                  </span>
                </div>
              </button>

              {isOpen && r.story && (
                <div className="report-full" id={`report-body-${r.title}`}>
                  {r.stats && (
                    <div className="report-stats">
                      {r.stats.map((s) => (
                        <div className="report-stat" key={s.label}>
                          <span className="report-stat-label">{s.label}</span>
                          <span className="report-stat-value">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="report-story">
                    {r.story.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {r.lessons && (
                    <div className="report-lessons">
                      <h3 className="report-lessons-title">Lessons Learned</h3>
                      <ul>
                        {r.lessons.map((l, i) => (
                          <li key={i}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
        <p className="coming-soon">More reports coming soon...</p>
      </div>
    </>
  );
}
