import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Nav.css';

const links = [
  { to: '/routes', label: 'Routes' },
  { to: '/trip-reports', label: 'Trip Reports' },
  { to: '/gear', label: 'Gear' },
  { to: '/merch', label: 'Merch' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="nav-logo">
          HMR
        </NavLink>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${open ? 'hamburger--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`drawer-overlay ${open ? 'drawer-overlay--visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`drawer ${open ? 'drawer--open' : ''}`}
        aria-label="Mobile navigation">
        <NavLink to="/" className="drawer-logo">
          HMR
        </NavLink>
        <ul className="drawer-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className="drawer-tagline">Earn Your Elevation.</p>
      </aside>
    </>
  );
}
