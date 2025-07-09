
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SubjectItem from './SubjectItem'; // assuming this is already built
import Button from '../button/button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type CourseCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  duration: string;
  mode: string;
  eligibility: string;
  subjects: string[];
  url: string; 
  cardClassName?: string; 
};

export default function CourseCard({
  imageSrc,
  imageAlt,
  title,
  description,
  duration,
  mode,
  eligibility,
  subjects,
  url, 
  cardClassName = '',
}: CourseCardProps) {

// Initialize AOS for animations
  useEffect(() => {
  AOS.init({
    duration: 1200,
  });
}, []);
  return (
    <div className={`item card__course bg-gradient p-10 max-w-7xl mx-auto  mb-10 py-8 shadow-xl ${cardClassName}`} >
      <div className="max-w-7xl mx-auto grid  md:grid-cols-[30%_70%] gap-8 items-center">
        <div className="relative w-full h-50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-medium mb-2">{title}</h2>
          <p className="text-gray-700 mb-2">{description}</p>
          <ul className="space-y-2 mb-1">
            <li className='flex items-center gap-4 text-base sm:text-md'>
              <ArrowRight className="w-6 h-6 mob-d-none" /><span className="font-semibold">Duration:</span> {duration}
            </li>
            <li className='flex items-center gap-4  text-base sm:text-md'>
              <ArrowRight className="w-6 h-6 mob-d-none" /><span className="font-semibold">Mode of Study:</span> {mode}
            </li>
            <li className='flex items-center gap-4  text-base sm:text-md'>
              <ArrowRight className="w-6 h-6 mob-d-none" /><span className="font-semibold">Eligibility:</span> {eligibility}
            </li>
          </ul>
        </div>
      </div>
      <div className="subjects mt-3 mb-3">
        <h3 className="text-xl font-semibold">Key Subjects</h3>
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 mb-4 mt-4">
          {subjects.map((subject, index) => (
            <SubjectItem key={index} text={subject} />
          ))}
        </div>
      </div>
    
        <Button type="button" position='center' className="flex items-center bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-black font-semibold py-2 px-6 rounded-full shadow-md transition m-auto cursor-pointer">
           APPLY NOW  <ArrowRight className="ml-2 w-6 h-6 origin-center rotate-45" />
        </Button>
    </div>
  );
}
