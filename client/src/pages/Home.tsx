import { Link } from 'react-router-dom';
import './Home.css';

const previews = [
  {
    label: 'Routes & Expeditions',
    title: 'Trinity Alps Wilderness',
    text: 'Over 600 miles of off-trail wilderness through the heart of the Trinity Alps.',
    img: 'https://northerncaliforniahikingtrails.com/blog/wp-content/uploads/2018/06/map-day-hiking-mount-shasta-lassen-trinity-alps-2.jpg',
    to: '/routes',
  },
  {
    label: 'Trip Reports',
    title: 'HMR Peak — 2026',
    text: 'Conditions, resupply notes, and lessons from our days on trail.',
    img: '/summit-lake.jpg',
    to: '/trip-reports',
  },
  {
    label: 'Gear',
    title: 'The Essentials List',
    text: "What's actually in our packs after hundreds of miles tested.",
    img: 'https://i0.wp.com/cameraandacanvas.com/wp-content/uploads/2022/11/Backpacking-Gear.jpg?fit=1200%2C1200&ssl=1',
    to: '/gear',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" role="img" aria-label="Mountain landscape" />
        <div className="hero-content">
          <p className="hero-eyebrow">High Mountain Rucking</p>
          <h1 className="hero-title">
            Earn Your
            <br />
            Elevation.
          </h1>
          <p className="hero-tagline">
            Adventures, routes, and gear for those who go further.
          </p>
          <div className="hero-ctas">
            <Link to="/routes" className="btn btn-primary">
              Explore Routes
            </Link>
            <Link to="/trip-reports" className="btn btn-outline">
              Trip Reports
            </Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          Scroll
        </div>
      </section>

      <hr className="divider" />

      <section className="section" aria-label="Featured content">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">Built for the Backcountry</h2>
        <p className="section-body">
          HMR documents real expeditions — the miles, the conditions, the gear
          that held up, and the lessons learned the hard way.
        </p>
        <div className="cards">
          {previews.map((item) => (
            <Link
              to={item.to}
              key={item.title}
              className="card"
              aria-label={`Go to ${item.title}`}>
              <img
                className="card-img"
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
              <div className="card-body">
                <p className="card-label">{item.label}</p>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
