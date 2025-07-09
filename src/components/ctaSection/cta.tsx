import React from 'react';
import Button from '../button/button';
import { ArrowRight } from 'lucide-react';

interface PromoSectionProps {
  imageUrl: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({ imageUrl }) => {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${imageUrl})` }}
     >
      <div className="absolute inset-0  opacity-50 bg-[#433500]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"  data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Don’t Wait! Grab Your Seat Now!</h2>
        <p className="text-lg md:text-xl mb-6">Take the First Step Toward a Bright Future with MSU</p>
          <Button type="button" position="center" className="flex items-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-black font-semibold py-2 px-6 rounded-full shadow-md transition cursor-pointer" >
              Apply Now  <ArrowRight className="ml-2 w-6 h-6 origin-center rotate-45" />
          </Button>
      </div>
    </section>
  );
};

export default PromoSection;
