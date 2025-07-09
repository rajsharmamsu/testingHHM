"use client"
import React from 'react';
import './banner.css';
import { useEffect } from 'react';
import Image from 'next/image';
import NopaperformsWidget from '../NopaperformsWidget/page';
import Button from '../button/button';
import { ArrowRight } from 'lucide-react';
const Banner = () => {
      useEffect(() => {
    const container = document.getElementById('npf-form-conatiner');
    function handleResize() {
      if (window.innerWidth <= 1024) {
        container?.classList.add('image-section');
        container?.classList.remove('p-10');
      } else {
        container?.classList.remove('image-section');
        container?.classList.add('p-10');
      }
    }
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen to resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <div className="banner-block text-white">
            <div className="text-section flex flex-col md:flex-row" >
                <div className="text-block-items md:w-7/12 w-full">
                    <img
                        src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/subject-ad-page/logo.png"
                        className="logo-img"
                        alt="Logo" data-aos="fade-up"
                    />
                    <h1 className="banner-title text-5xl font-bold" data-aos="fade-up">Launch a career in <span className=''>Hotel & Hospitality Management</span> with Medhavi Skills University</h1>
                    <div className="banner-item-para" >
                        <div className="flex gap-3 items-center" data-aos="fade-up">
                            <img className="self-start" src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/course-landing-page/star.png" alt="icon" />
                            <p className="banner-para-text ">
                                Work in <span className="para-highlight">4/5 star hotels</span> from day one
                            </p>
                        </div>

                        <div className="flex gap-3 items-center" data-aos="fade-up">
                            <img className="self-start" src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/course-landing-page/star.png" alt="icon" />
                            <p className="banner-para-text ">
                                Earn your <span className="para-highlight">degree and work experience</span> simultaneously

                            </p>
                        </div>
                        <div className="flex gap-3 items-center" data-aos="fade-up">
                            <img className="self-start" src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/course-landing-page/star.png" alt="icon" />
                            <p className="banner-para-text ">
                                Earn up to <span className="para-highlight">₹12,000 Stipend</span> per month during your education journey

                            </p>
                        </div>
                        <div className="flex gap-3 items-center" data-aos="fade-up">
                            <img className="self-start" src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/course-landing-page/star.png" alt="icon" />
                            <p className="banner-para-text ">
                                Choose between <span className="para-highlight">B.Sc., D.Voc, or Professional Diploma</span>– Based on Your Education & Career Goals
                            </p>
                        </div>
                        <div className="justify-center sm:justify-start">
                            <Button
                                type="button"
                                className="w-full max-w-[350px] sm:w-auto flex items-center justify-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-black font-semibold py-2 px-6 mt-4 rounded-full shadow-md transition cursor-pointer"
                                data-aos="fade-up"
                            >
                                Download Brochure
                                <ArrowRight className="ml-2 w-6 h-6 origin-center rotate-45" />
                            </Button>
                            </div>
                    </div>

                </div>
                <div className="image-section md:w-3/12 lg:w-4/12 xl:w-4/12 p-3 text-center p-10" id="npf-form-conatiner" data-aos="fade-up">
                    <div className="bg-white p-6 text-start rounded-2xl shadow-lg">
                        <h4 className="text-2xl font-bold mb-4 text-black">
                        Let’s Get You Started!
                        </h4>
                        <div>
                        <NopaperformsWidget />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
