import React, { useRef } from 'react';
import "./partners.css"

interface PartnerLogo {
  src: string;
  name: string;
}

const firstRowLogos: PartnerLogo[] = [
 { src: "./images/logos/711.png", name: "711" },
    { src: "./images/logos/Acuvtu.png", name: "Acuvit" },
    { src: "./images/logos/Crowne_Plaza.png", name: "Crowne Plaza" },
    { src: "./images/logos/golder-tulip.png", name: "Golden Tulip" },
    { src: "./images/logos/Holiday_Inn.png", name: "Holiday Inn" },
    { src: "./images/logos/hyatt-hotels.png", name: "Hyatt Hotels" },
    { src: "./images/logos/hyatt-regency.png", name: "Hyatt Regency" },
    { src: "./images/logos/intercontinental-hotels.png", name: "Intercontinental Hotels" },
    { src: "./images/logos/ITC_Hotels.png", name: "ITC Hotels" },
    { src: "./images/logos/JWMarriott.png", name: "JW Marriott" },
    { src: "./images/logos/logo.png", name: "Logo" }
];

const secondRowLogos: PartnerLogo[] = [
    { src: "./images/logos/logo-manas.png", name: "Logo Manas" },
    { src: "./images/logos/manas.png", name: "Manas" },
    { src: "./images/logos/r.png", name: "R" },
    { src: "./images/logos/Radisson_Blu.png", name: "Radisson Blu" },
    { src: "./images/logos/RajMahal.png", name: "Raj Mahal" },
    { src: "./images/logos/Sarovar_Hotels.png", name: "Sarovar Hotels" },
    { src: "./images/logos/sevenseas.png", name: "Seven Seas" },
    { src: "./images/logos/The_Leela_Palaces.png", name: "The Leela Palaces" },
    { src: "./images/logos/The-Fern.png", name: "The Fern" },
    { src: "./images/logos/The-Nirvana-Luxory.png", name: "The Nirvana Luxury" }
];

function PartnerCard({ logo }: { logo: PartnerLogo }) {
  return (
    <div className="flex-shrink-0 bg-white border border-[#cae1ed] h-[82px] w-[175px] flex items-center justify-center mx-2">
      <img
        src={logo.src}
        alt={logo.name}
        className="max-w-[120px] max-h-[60px] object-contain"
      />
    </div>
  );
}

function ScrollingRow({ logos, direction }: { logos: PartnerLogo[]; direction: 'left' | 'right' }) {
  // Create enough duplicates for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];
  const logoWidth = 199; // 175px + 24px margin
  const totalWidth = logos.length * logoWidth;
  
   const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div className="relative overflow-hidden pb-1">
      {/* Fade effects on edges */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      <div 
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{ 
          width: `${duplicatedLogos.length * logoWidth}px`,
          '--total-width': `${totalWidth}px`
        } as React.CSSProperties & { '--total-width': string }}
      >
        {duplicatedLogos.map((logo, index) => (
          <PartnerCard key={`${logo.name}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div className="bg-white partners-section py-16">
    
      
      {/* Container for 1440px screens */}
      <div className="max-w-[1200px] mx-auto px-6 ">
        {/* Header Content */}
        <div className="text-center mb-16"  data-aos="fade-up">
          <h2 className="mb-6 tracking-[-1.2px] section-title">
            25+ Industry Partners
          </h2>
          
            <p className="text-[#3d677e] max-w-2xl mx-auto leading-[23px]">
              Paid on-the-job training across semesters with real industry roles and career progression. Master professional grooming and communication in live hospitality settings
            </p>
            
          
        </div>

        {/* Scrolling Partner Logos */}
        <div className="space-y-6 overflow-hidden" data-aos="fade-up">
          {/* First Row - Left to Right */}
          <ScrollingRow logos={firstRowLogos} direction="right" />
          
          {/* Second Row - Right to Left */}
          <ScrollingRow logos={secondRowLogos} direction="left"  />
        </div>
      </div>
    </div>
  );
}