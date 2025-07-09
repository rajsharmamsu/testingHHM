import React from 'react';
import './merquee.css';

const Marquee = () => {
  const message = "*Admissions open now for 2025"; // Text for the marquee
  const repeatCount = 100; // Number of times to repeat the message to fill the container

  // Dynamically generate the span elements based on the repeatCount
  const spans = Array(repeatCount).fill(message).map((text, index) => (
    <span key={index} className="mr-8">{text}</span>
  ));

  return (
    <div className="overflow-hidden marquee-div">
      <div className="animate-marquee">
        <div className="marquee-content">
          {spans}
          {spans} {/* Duplicate the content to ensure a continuous scroll */}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
