import React from 'react'
import './whyjoinus.css'
import Image from 'next/image';
function WhyJoin() {

    const accreditations = [
    { src: "/images/accrediation/UGC.png", alt: "UGC Accreditation" },
    { src: "/images/accrediation/GovtSikkim.png", alt: "Government of Sikkim" },
    { src: "/images/accrediation/NSDC.png", alt: "NSDC Accreditation" },
    { src: "/images/accrediation/NCVET.png", alt: "NCVET Accreditation" },
    { src: "/images/accrediation/aiu.png", alt: "AIU Accreditation" },
    { src: "/images/accrediation/NAPS.png", alt: "NAPS Accreditation" },
    { src: "/images/accrediation/nats.png", alt: "NATS Accreditation" },
    { src: "/images/accrediation/DGT.png", alt: "DGT Accreditation" },
    { src: "/images/accrediation/iso.png", alt: "ISO Accreditation" },
    ];
    return (
        <>
            <section className="block-section  text-white" >
                <div className="container mx-auto flex flex-col justify-center items-center text-center mb-8 max-w-7xl" data-aos="fade-up">
                    <h2 className="mb-6 tracking-[-1.2px] section-title">Why study HHM at <span className="para-highlight">Medhavi Skills University</span>?</h2>
                    <p className="text-[#fff] max-w-2xl mx-auto leading-[23px]">
                       At MSU, our hospitality programs blend hands-on training, expert mentorship, and global industry exposure—preparing you for a thriving career in hotels, tourism, and beyond
                    </p>
                </div>
                <div className="container mx-auto px-4 max-w-7xl" id="dynamic-container">
                    <div className="flex flex-col md:flex-row" data-aos="fade-up">
                        <div className="w-full md:w-1/2 order-1 md:order-2 flex items-center px-0 img-container">
                            <img
                                src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/landing-page-msu/7e1d108c45ccc46395c177178d53fe2aa4f3b100.jpg"
                                alt="Medhavi Aspire"
                                className="w-full h-auto img-fluid"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="bg-gray-100 w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center px-0">
                            <div className="p-4 sm:p-4 md:p-6 lg:p-8 xl:p-10">
                                <h3 className="text-black text-2xl font-normal mb-4">
                                    Explore the advantages of studying hospitality administration course at MSU:
                                </h3>

                                {/* <ul className="space-y-4">
                                    {[
                                        "Work in 4/5 star hotels from day one",
                                        "Earn your degree with up to 3 years of work experience",
                                        "Earn up to ₹12,000 stipend per month during the tenure of the programme",
                                        "Upto 70% Skill-Based Practical Curriculum",
                                        "Focus on Entrepreneurial and Employment Readiness",
                                        "First-hand insights from seasoned industry professionals",
                                        "Graduate with real-world experience and a head start in your hospitality career",
                                    ].map((text, index) => (
                                        <li key={index} className="flex gap-3 items-start text-black">
                                            <img
                                                src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/course-landing-page/right-icon-1.svg"
                                                alt="icon"
                                                className="mt-1"
                                            />
                                            <p
                                                className="text-base leading-snug"
                                                dangerouslySetInnerHTML={{
                                                    __html: text.replace(/\n/g, "<br />"),
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul> */}
                                <ul className="space-y-4">
                                    {[
                                        "Work in 4/5 star hotels from day one",
                                        "Earn your degree with up to 3 years of work experience",
                                        "Earn up to ₹12,000 stipend per month during the tenure of the programme",
                                        "Upto 70% Skill-Based Practical Curriculum",
                                        "Focus on Entrepreneurial and Employment Readiness",
                                        "First-hand industry insights from seasoned professionals",
                                        "Graduate with real-world experience and a head start in your hospitality career",
                                    ].map((text, index) => {
                                        const highlighted = text
                                        .replace(/(4\/5 star hotels)/g, '<span class="para-highlights">$1</span>')
                                        .replace(/(3 years)/g, '<span class="para-highlights">$1</span>')
                                        .replace(/(₹12,000 stipend per month)/g, '<span class="para-highlights">$1</span>')
                                        .replace(/(70%)/g, '<span class="para-highlights">$1</span>')
                                        .replace(/(Entrepreneurial and Employment Readiness)/g, '<span class="para-highlights">$1</span>')
                                        .replace(/(seasoned professionals)/g, '<span class="para-highlights">$1</span>')
                                        .replace(/(real-world experience)/g, '<span class="para-highlights">$1</span>');
                                        return (
                                        <li key={index} className="flex gap-3 items-start text-black">
                                            <img
                                            src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/course-landing-page/right-icon-1.svg"
                                            alt="icon"
                                            className="mt-1"
                                            />
                                            <p
                                            className="text-base leading-snug"
                                            dangerouslySetInnerHTML={{ __html: highlighted }}
                                            />
                                        </li>
                                        );
                                    })}
                                    </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col justify-center items-center text-center mb-8 mt-10 max-w-7xl">
                    <h3 className="mb-6 tracking-[-1.2px] section-title"  data-aos="fade-up"><span className="para-highlight">Recognitions & Accreditations</span></h3>
                    <div className="accrediation flex flex-wrap"  data-aos="fade-up">
                         {accreditations.map((accred, index) => (
                        <div className="acc-logo" key={index}>
                             <Image
                                src={accred.src}
                                alt={accred.alt}
                                width={150}  // Adjust width based on your layout
                                height={80}  // Adjust height based on your layout
                                priority     // Optional: Ensures the image is loaded quickly (for visible images)
                                />
                        </div>
                        ))}
                    </div>
                </div>
                

            </section>

        </>
    )
}

export default WhyJoin
