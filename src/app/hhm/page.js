"use client";

import React from 'react'
import dynamic from 'next/dynamic'
import Marquee from '../../components/marquee/page'
import Banner from '../../components/banner/page'
import courses from '../../data/courseData';
import CourseSection from '../../components/courses/courseSection';
import StudentTalk from '../../components/StudentTalk/page.tsx';
import WhyJoin from '../../components/WhyJoinMsu/page';
import NextTailwindFAQ from '../../components/faq/NextTailwindFAQ';
import ExactFigmaFooter from '../../components/footer/ExactFigmaFooter';
import PartnerCard from '../../components/partners/page';
import TopPlacements from '../../components/placements/placements';
import PromoSection from '../../components/ctaSection/cta';
import StickyBanner from '../../components/StickyBanner/stickyBanner';

// Dynamically import Trainings (client-side only)
const Trainings = dynamic(() => import('../../components/trainings/page'), { ssr: false });



const HHMClientWrapper = () => {
  return (
   <>
      <Marquee />
      <Banner />
      <CourseSection 
        sectionTitle='Explore Our Courses'
        sectionDescription='Step into a dynamic industry with practical programs—from hotel management to food production operations—designed for real-world success and global exposure.'
        courses={courses}
      />
      <WhyJoin />
      <PartnerCard />
      <Trainings />
      <TopPlacements />
      <StudentTalk />
      <PromoSection imageUrl="/images/promotion/promotion.webp" />
      <NextTailwindFAQ />
      <ExactFigmaFooter />
      <StickyBanner />
      </>
  )
}

export default HHMClientWrapper


