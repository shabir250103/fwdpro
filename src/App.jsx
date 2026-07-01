import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DesignPage from './pages/DesignPage';
import DevelopmentPage from './pages/DevelopmentPage';
import ProductPage from './pages/ProductPage';
import MarketingPage from './pages/MarketingPage';
import SupportPage from './pages/SupportPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import InquiryModal from './components/ui/InquiryModal';
import useScrollToHash from './hooks/useScrollToHash';

function ScrollHandler() {
  useScrollToHash();
  return null;
}

function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    const hasSeenInquiry = sessionStorage.getItem('hasSeenInquiry');
    if (!hasSeenInquiry) {
      const timer = setTimeout(() => {
        setIsInquiryOpen(true);
        sessionStorage.setItem('hasSeenInquiry', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenInquiry = () => setIsInquiryOpen(true);
    window.addEventListener('open-inquiry', handleOpenInquiry);
    return () => window.removeEventListener('open-inquiry', handleOpenInquiry);
  }, []);

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
            <Route path="/services/:id" element={<ServiceDetailPage />} />
          </Routes>
        </main>

        <Footer />
        <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
