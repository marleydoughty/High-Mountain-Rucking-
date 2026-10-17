import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoutesPage from './pages/Routes';
import TripReports from './pages/TripReports';
import Gear from './pages/Gear';
import Merch from './pages/Merch';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/trip-reports" element={<TripReports />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
