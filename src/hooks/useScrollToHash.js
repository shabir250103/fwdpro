import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Slight delay to ensure the DOM is fully painted and elements are present
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      
      return () => clearTimeout(timer);
    } else {
      // Scroll to the top if navigating to a new page with no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]); // Run when path or hash changes
};

export default useScrollToHash;
