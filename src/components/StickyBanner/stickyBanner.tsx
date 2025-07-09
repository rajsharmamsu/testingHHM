import { useState, useEffect } from 'react';
import Button from '../button/button';
import { ArrowRight } from 'lucide-react';
import "./stickyBanner.css"; // Assuming you have a CSS file for styles

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 35) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-[#0475B3] text-white p-4 transition-transform transform ${isVisible ? 'translate-y-0' : 'translate-y-full'} z-50`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className='font-bold text-base md:text-2xl max-w-1/2'>Don't Wait! Grab Your Seat Now!</span>
        <Button type="button" className="sticky-btn flex items-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-black font-semibold py-2 px-6  rounded-full shadow-md transition cursor-pointer" data-aos="fade-up">
            Apply Now  <ArrowRight className="ml-2 w-6 h-6 origin-center rotate-45" />
        </Button>
      </div>
    </div>
  );
};

export default StickyBanner;
