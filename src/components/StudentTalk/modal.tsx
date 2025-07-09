import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  mediaSrc: string;
  mediaType: 'image' | 'video';
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ mediaSrc, mediaType, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#00000080] bg-opacity-10 flex justify-center items-center z-50">
      <motion.div
        className="bg-[#FFA201] rounded-lg p-1 w-3/4 sm:w-1/2 md:w-2/3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          {mediaType === 'video' ? (
            <video controls className="w-full h-auto rounded">
              <source src={mediaSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={mediaSrc} alt="Content" className="w-full h-auto object-cover rounded" />
          )}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-2xl bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition cursor-pointer w-12 h-12 flex items-center justify-center"
          >
            &times;
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
