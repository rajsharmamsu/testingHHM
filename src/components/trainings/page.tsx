import React from 'react'
import Image from 'next/image';
import './trainings.css'


interface ImageCardProps {
  src: string;
  caption: string;
  className?: string;
}

function ImageCard({ src, caption, className = "" }: ImageCardProps) {
  return (
    <div className={`relative group overflow-hidden h-64 ${className}`} data-aos="fade-up">
      <Image
        src={src} 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
        alt={caption}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-white leading-normal tracking-[-0.32px]">
          {caption}
        </p>
      </div>
    </div>
  );
}

const Trainings = () => {
  return (
  <div className=" bg-white mt-0" >
      {/* Header Section */}
      <div className="text-center py-10 pt-0 px-4" data-aos="fade-up">
        <h2 className="mb-6 tracking-[-1.2px] section-title">
          Practical Training &amp; Exposure
        </h2>
        <p className="text-[#3d677e] max-w-2xl mx-auto leading-[23px]">
          Discover how MSU's hospitality graduates are excelling at top hotels
          across the country—transforming careers and building confidence.
        </p>
      </div>

      {/* Grid Gallery */}
      <div className="w-full px-4 pb-10">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* First Row - 4 Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ImageCard
              src="/images/awards/hostpitality.png"
              caption="MSU hospitality students pour elegance into every drink."
              className='rounded-lg shadow-lg'
            />
            <ImageCard
              src="/images/awards/Training-at-Palm-Grove-Suites-Inn.png"
              caption="Students master gourmet cuisine through hands-on culinary training."
               className='rounded-lg shadow-lg'
            />
            <ImageCard
              src="/images/awards/Training-at-Hyaat Regency.png"
              caption="MSU's on-job-learning students deliver precise, professional service."
               className='rounded-lg shadow-lg'
            />
            <ImageCard
              src="/images/awards/teamwork.png"
              caption="Teamwork in action, ensuring a warm and comfortable guest experience."
               className='rounded-lg shadow-lg'
            />
          </div>

          {/* Second Row - 3 Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ImageCard
              src="/images/awards/industry-management.png"
              caption="MSU students master skills through hands-on learning and industry engagement."
               className='rounded-lg shadow-lg'
            />
            <ImageCard
              src="/images/awards/training.png"
              caption="Industry-driven campus experiences that shape future leaders."
               className='rounded-lg shadow-lg'
            />
            <ImageCard
              src="/images/awards/hotel-staff.png"
              caption="Showcasing skill and dedication to unlock diverse career paths."
               className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainings
