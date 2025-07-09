import svgPaths from "../imports/svg-g79dmvr84j";
import Button from '../button/button';
import { ArrowRight } from 'lucide-react';

function ArrowForward() {
  return (
    <div className="relative shrink-0 w-5 h-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_4_359)">
          <path
            d={svgPaths.p3054b280}
            fill="#001D2E"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_359">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="w-[46px] h-[46px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 46 46"
      >
        <circle
          cx="23"
          cy="23"
          fill="white"
          fillOpacity="0.1"
          r="23"
        />
        <g>
          <path
            d={svgPaths.p23198780}
            fill="white"
          />
          <path
            d={svgPaths.p119b0580}
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="w-[46px] h-[46px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 46 46"
      >
        <circle
          cx="23"
          cy="23"
          fill="white"
          fillOpacity="0.1"
          r="23"
        />
        <g>
          <path
            d={svgPaths.p2b3b7100}
            fill="white"
          />
          <path
            d={svgPaths.peb61800}
            fill="white"
          />
          <path
            d={svgPaths.p2c5ba000}
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
}

function ChatIcon() {
  return (
    <div className="w-[46px] h-[46px] relative">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 46 46"
      >
        <circle
          cx="23"
          cy="23"
          fill="white"
          fillOpacity="0.1"
          r="23"
        />
      </svg>
      <div className="absolute top-[11px] left-[11px] w-6 h-6">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 23 23"
        >
          <path
            d={svgPaths.p17e32d00}
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="w-3.5 h-6"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 14 24"
    >
      <path
        d={svgPaths.p2c44d300}
        fill="white"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="w-[25px] h-6"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 25 24"
    >
      <g clipPath="url(#clip0_4_345)">
        <path
          d={svgPaths.p35c2ef00}
          fill="white"
        />
        <path
          d={svgPaths.pc9d3b40}
          fill="white"
        />
        <path
          d={svgPaths.p1795df00}
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_345">
          <rect fill="white" height="24" width="25" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      className="w-[25px] h-5"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 25 20"
    >
      <path
        d={svgPaths.p36942a00}
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="w-[25px] h-6"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 25 24"
    >
      <g clipPath="url(#clip0_4_340)">
        <path d={svgPaths.p16f1900} fill="white" />
        <path
          d={svgPaths.p3f9d7400}
          fill="white"
        />
        <path
          d={svgPaths.p168b6200}
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_340">
          <rect fill="white" height="24" width="25" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ExactFigmaFooter() {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#00304b] relative pb-16">
      {/* Main Content Container */}
      <div className="relative w-full">
        {/* CTA Section */}
        <div className="pt-16 pb-6 px-4 sm:px-6 lg:px-8"  data-aos="fade-up">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="mb-6 tracking-[-1.2px] section-title text-white">
              Hurry Up!! Get Admission
            </h2>
            
            {/* Subtitle */}
            <p className="text-[#3d677e] max-w-2xl mx-auto leading-[23px] text-white mb-6">
              Embark on Your Journey to Excellence
            </p>
            
            {/* Apply Now Button */}
            <Button type="button" position="center" className="flex items-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-black font-semibold py-2 px-6 rounded-full shadow-md transition cursor-pointer" data-aos="fade-up">
                Apply Now  <ArrowRight className="ml-2 w-6 h-6 origin-center rotate-45" />
            </Button>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8" >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {/* Email */}
              <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                <EmailIcon />
                <span className="text-white text-[16px] sm:text-[18px] font-normal group-hover:text-blue-200 transition-colors">
                  contact@msu.edu.in
                </span>
              </div>
              
              {/* Vertical Divider - Hidden on mobile */}
              <div className="hidden lg:block w-[1px] h-[37px] bg-white opacity-20"></div>
              
              {/* Phone */}
              <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                <PhoneIcon />
                <ChatIcon />
                <span className="text-white text-[16px] sm:text-[18px] font-normal group-hover:text-blue-200 transition-colors">
                  +91 8581005151
                </span>
              </div>
              
            
             
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="">
          <div className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#ffffff21] border-opacity-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-white text-[14px] sm:text-[15px] leading-relaxed order-2 md:order-1 text-center md:text-left opacity-80">
                Copyright © {currentYear} Medhavi Skills University. All rights reserved.
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-6 order-1 md:order-2">
                <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FacebookIcon />
                </div>
                <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <LinkedInIcon />
                </div>
                <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <TwitterIcon />
                </div>
                <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <InstagramIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}