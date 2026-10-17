import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-logo">High Mountain Rucking</span>
      <p className="footer-tagline">Earn Your Elevation.</p>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} HMR. All rights reserved.
      </p>
    </footer>
  );
}
