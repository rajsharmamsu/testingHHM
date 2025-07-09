
import CourseCard from './courseCard';
import './courseCard.css'; // Assuming you have a CSS file for styling
import useStackScroll from '../../hooks/useStackScroll';

type CourseSectionProps = {
  sectionTitle: string;
  sectionDescription: string;
  courses: any[]; // or define a proper Course type if you prefer
};

export default function CourseSection({
  sectionTitle,
  sectionDescription,
  courses,
}: CourseSectionProps) {

    useStackScroll();
  return (
    <section className="py-10 bg-white" >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto text-center mb-10 sticky-title  top-4 z-0 bg-white" data-aos="fade-up">
          <h2 className="mb-6 tracking-[-1.2px] section-title">{sectionTitle}</h2>
          <p className="text-[#3d677e] max-w-2xl mx-auto leading-[23px]">{sectionDescription}</p>
        </div>

        <div className="stack-scroll-container space-y-10" data-aos="fade-up">
          {courses?.map((course, index) => (
            <CourseCard 
              key={index} 
              {...course} 
              cardClassName= {`card_${index+1}`}  
            />
          )) || (
            <p className="text-center text-gray-500">No courses to display.</p>
          )}
        </div>
      </div>
    </section>
  );
}
