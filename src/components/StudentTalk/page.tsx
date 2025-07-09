import React, { useState } from 'react';
import './studenttalk.css';
import Modal from './modal';

const StudentTalk: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{ src: string; type: 'image' | 'video' }>({
    src: '',
    type: 'image', // Default to image
  });

  const handleModalOpen = (src: string, type: 'image' | 'video'): void => {
    setModalContent({ src, type });
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <section className="pb-16 pt-4 bg-white">
        <div className="flex flex-col items-center justify-center">
          {/* Heading */}
          <div className="container mx-auto text-center mb-4 px-4" data-aos="fade-up">
            <h2 className="mb-6 tracking-[-1.2px] section-title">Hear From our Students</h2>
            <p className="text-[#3d677e] max-w-2xl mx-auto leading-[23px]">
              Real stories, real journeys—discover how MSU’s hospitality programs are transforming careers and building confidence
            </p>
          </div>

          {/* Student Cards */}
          <div className="container mx-auto mt-6 px-4 " data-aos="fade-up">
            <div className="flex flex-wrap justify-center gap-6">
              {/* Card 1 */}
              <div className="student-card w-full sm:w-1/2 md:w-1/4 ">
                <div className="relative w-full rounded-[5px] overflow-hidden">
                  <img
                    src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/landing-page-msu/pawan_kumar.webp"
                    alt="pawan_kumar"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      handleModalOpen(
                        '/videos/pawankumar.mp4',
                        'video'
                      )
                    }
                    className="absolute inset-0 flex items-center justify-center play-button transition"
                  >
                    <img
                      src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/landing-page-images/play-button.svg"
                      alt="Play Button"
                      className="w-12 h-12"
                    />
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full sm:w-1/2 md:w-1/4  student-card">
                <div className="relative w-full rounded-[5px] overflow-hidden">
                  <img
                    src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/landing-page-msu/lalit.webp"
                    alt="lalit"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      handleModalOpen(
                        '/videos/lalit.mp4',
                        'video'
                      )
                    }
                    className="absolute inset-0 flex items-center justify-center play-button transition"
                  >
                    <img
                      src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/landing-page-images/play-button.svg"
                      alt="Play Button"
                      className="w-12 h-12"
                    />
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full sm:w-1/2 md:w-1/4  student-card">
                <div className="relative w-full rounded-[5px] overflow-hidden">
                  <img
                    src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/landing-page-msu/Nikita_jain.webp"
                    alt="Nikita Jain"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      handleModalOpen(
                        '/videos/nikita_jain.mp4',
                        'video'
                      )
                    }
                    className="absolute inset-0 flex items-center justify-center play-button transition"
                  >
                    <img
                      src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/landing-page-images/play-button.svg"
                      alt="Play Button"
                      className="w-12 h-12"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && <Modal mediaSrc={modalContent.src} mediaType={modalContent.type} onClose={handleModalClose} />}
    </>
  );
};

export default StudentTalk;
