import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DesignPage from './pages/DesignPage';
import DevelopmentPage from './pages/DevelopmentPage';
import ProductPage from './pages/ProductPage';
import MarketingPage from './pages/MarketingPage';
import SupportPage from './pages/SupportPage';
import useScrollToHash from './hooks/useScrollToHash';

function ScrollHandler() {
  useScrollToHash();
  return null;
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-brand-primary/30 selection:text-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/development" element={<DevelopmentPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
