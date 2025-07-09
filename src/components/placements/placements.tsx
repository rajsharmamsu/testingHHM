import Image from 'next/image';
import './placements.css'; 

interface Placement {
  name: string;
  role: string;
  companyLogo: string;
  image: string;
}

const placements: Placement[] = [
  {
    name: 'Khushi Sarwaiya',
    role: 'Kitchen Associate',
    companyLogo: '/images/placements/The_Oberoi.webp',
    image: '/images/placements/Khushi.png',
  },
  {
    name: 'Sahil Sharma',
    role: 'F&B & Event Service Expert',
    companyLogo: '/images/placements/le_meridian.webp',
    image: '/images/placements/Sahil_Sharma.png',
  },
  {
    name: 'Biswajit Sahoo',
    role: 'Commis II',
    companyLogo: '/images/placements/the_fern.webp',
    image: '/images/placements/Biswajit_Sahoo.png',
  },
  {
    name: 'Monika Pahal',
    role: 'F&B Associate',
    companyLogo: '/images/placements/cp-gold.webp',
    image: '/images/placements/monika.png',
  },
];

export default function TopPlacements() {
  return (
    <section className="px-4  bg-white">
        <div className='max-w-7xl mx-auto py-10'>
          <div className="text-center "  data-aos="fade-up">
            <h2 className="mb-6 tracking-[-1.2px] section-title">Our Top Placements</h2>
            <p className="text-[#3d677e] max-w-2xl mx-auto leading-[23px]">
              <span className="font-bold">98% </span>
              Placement Success—Unlocking Careers with Industry’s Best Packages
            </p>
          </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10"  data-aos="fade-up">
        {placements.map((placement, index) => (
          <div
            key={index}
            className="placement-card-wrap bg-white overflow-hidden flex flex-col justify-between"
          >
            <div className="overflow-hidden relative w-full h-80">
              <Image
                src={placement.image}
                alt={placement.name}
                fill
                style={{ objectFit: 'cover' }}
                className='object-cover transition-transform duration-300 hover:scale-105 overflow-hidden hover:rotate-3'
              />
              <div className="absolute bottom-0 left-0 w-full p-3 text-white image-overlay">
                <h3 className="text-lg font-semibold">{placement.name}</h3>
                <p className="text-sm">{placement.role}</p>
              </div>
            </div>

            <div className="brand-logo-client p-4 flex justify-center  items-center h-25">
              <Image
                src={placement.companyLogo}
                alt={`${placement.name} company logo`}
                width={241}
                height={65}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        ))}
      </div>
        </div>
      
    </section>
  );
}
