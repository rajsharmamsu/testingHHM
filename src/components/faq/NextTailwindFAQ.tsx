import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: "01",
    question: "What career opportunities are available after completing this course?",
    answer: "Graduates can pursue careers in hotels, resorts, airlines, cruise lines, event management companies, and luxury service brands in roles such as hotel operations executive, front office manager, guest relations associate, or restaurant supervisor."
  },
  {
    id: "02",
    question: "What skills will I develop during the course?",
    answer: "You'll develop essential hospitality skills including customer service excellence, communication and interpersonal skills, hotel operations management, food and beverage service, event planning and coordination, cultural awareness, and leadership capabilities essential for the hospitality industry."
  },
  {
    id: "03",
    question: "Is this course suitable for someone with no prior experience in hospitality?",
    answer: "Absolutely! This course is designed for beginners and provides comprehensive foundation training. We start with basic hospitality concepts and gradually build up your expertise through hands-on training, practical workshops, and real-world experience."
  },
  {
    id: "04",
    question: "What makes our hospitality courses different from regular hotel management degrees/diplomas?",
    answer: "Our courses combine academic excellence with practical industry experience. We offer work-integrated learning, partnerships with leading hospitality brands, smaller class sizes for personalized attention, and a curriculum designed in collaboration with industry experts to ensure job-ready graduates."
  },
  {
    id: "05",
    question: "What does a Work-Integrated Degree Programme mean?",
    answer: "A Work-Integrated Degree Programme combines classroom learning with real work experience. Students alternate between academic study and paid work placements in hospitality businesses, allowing them to apply theoretical knowledge in real-world settings while earning income and building professional networks."
  }
];

export default function NextTailwindFAQ() {
  const [openItem, setOpenItem] = useState<string>("01");
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Set window width only in the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? "" : id);
  };

  return (
    <div className="w-full py-8  px-3 xs:py-10 xs:px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="container mx-auto text-center mb-4 px-4" data-aos="fade-up">
            <h2 className="mb-6 tracking-[-1.2px] section-title">Frequently Asked Questions</h2>
            <p className="text-[#3d677e] max-w-2xl mx-auto leading-[23px]">
              Find Quick Answers to Your Concerns. Click on any question to expand and learn more about our programs.
            </p>
          </div>
          {/* FAQ Items */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6" data-aos="fade-up">
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`rounded-xl xs:rounded-2xl border transition-all duration-500 ease-out
                    ${openItem === item.id
                      ? "bg-white border-blue-200/50 shadow-2xl shadow-blue-500/10 scale-[1.01] xs:scale-[1.02] ring-1 ring-blue-100/50"
                      : "bg-white border-gray-200/40 shadow-lg shadow-gray-500/5 hover:bg-white hover:border-blue-200/30 hover:shadow-xl hover:shadow-blue-500/8 hover:scale-[1.005] xs:hover:scale-[1.01] hover:ring-1 hover:ring-blue-100/30"
                    }
                  `}
                >
                  {/* Question Row */}
                  <div
                    className="flex items-center justify-between p-4 xs:p-5 sm:p-6 md:p-8 cursor-pointer group"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-center flex-grow min-w-0 mr-2 xs:mr-3 sm:mr-4">
                      {/* Number */}
                      <div
                        className={`
                          text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                          min-w-8 xs:min-w-10 sm:min-w-12 md:min-w-16 
                          mr-2 xs:mr-3 sm:mr-4 md:mr-6 
                          transition-all duration-300 ease-in-out flex-shrink-0
                          ${openItem === item.id ? "text-[#0475B3] drop-shadow-sm" : "text-slate-400 group-hover:text-[#0475B3]"}
                        `}
                      >
                        {item.id}
                      </div>

                      {/* Question */}
                      <h3
                        className={`
                          text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
                          leading-snug xs:leading-snug sm:leading-snug md:leading-snug lg:leading-snug 
                          mb-0 transition-all duration-300 ease-in-out
                          ${openItem === item.id ? "text-[#0475B3] drop-shadow-sm" : "text-slate-800 group-hover:text-[#0475B3]"}
                        `}
                      >
                        {item.question}
                      </h3>
                    </div>

                    {/* Toggle Button */}
                    <motion.button
                      className={`
                        w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
                        rounded-full border-none transition-all duration-300 ease-in-out
                        flex items-center justify-center flex-shrink-0
                        ${openItem === item.id
                          ? "bg-[#0475B3] text-white shadow-lg shadow-blue-600/25 ring-1 xs:ring-2 ring-blue-200/50"
                          : "bg-white text-slate-400 shadow-md shadow-gray-500/10 hover:bg-[#0475B3] hover:text-white hover:shadow-lg hover:shadow-[#0475B3] hover:ring-1 xs:hover:ring-2 hover:ring-[#0475B3] ring-1 ring-gray-200/30"
                        }
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <AnimatePresence mode="wait">
                        {openItem === item.id ? (
                          <motion.div
                            key="minus"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Minus size={windowWidth < 640 ? 14 : 18} strokeWidth={2.5} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="plus"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plus size={windowWidth < 640 ? 14 : 18} strokeWidth={2.5} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>

                  {/* Answer - Animated */}
                  <AnimatePresence>
                    {openItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-4 xs:px-5 sm:px-6 md:px-8 pb-4 xs:pb-5 sm:pb-6 md:pb-8">
                          <div 
                            className="border-l-3 xs:border-l-4 border-[#0475B3] rounded-r-lg xs:rounded-r-xl p-3 xs:p-4 sm:p-4 md:p-6 ml-8 xs:ml-10 sm:ml-12 md:ml-16 shadow-inner bg-blue-50/60"
                          >
                            <motion.p
                              className="mb-0 text-slate-700 text-sm xs:text-base sm:text-base md:text-lg leading-relaxed"
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              {item.answer}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
