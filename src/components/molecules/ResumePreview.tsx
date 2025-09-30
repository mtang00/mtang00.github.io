import { motion } from 'framer-motion';
import { useState } from 'react';

export const ResumePreview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="relative cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openModal}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="w-32 h-40 md:w-40 md:h-52 bg-white rounded-lg shadow-2xl border-2 border-gray-200 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="p-3 md:p-4 space-y-2">
              <div className="h-3 bg-gray-800 rounded mb-2"></div>
              <div className="h-1 bg-gray-600 rounded w-3/4"></div>
              <div className="h-1 bg-gray-600 rounded w-1/2"></div>
              
              <div className="mt-3 space-y-1">
                <div className="h-1 bg-gray-400 rounded w-full"></div>
                <div className="h-1 bg-gray-400 rounded w-5/6"></div>
                <div className="h-1 bg-gray-400 rounded w-4/5"></div>
              </div>
              
              <div className="mt-3 space-y-1">
                <div className="h-1 bg-gray-400 rounded w-full"></div>
                <div className="h-1 bg-gray-400 rounded w-3/4"></div>
                <div className="h-1 bg-gray-400 rounded w-5/6"></div>
              </div>
              
              <div className="mt-3 space-y-1">
                <div className="h-1 bg-gray-400 rounded w-full"></div>
                <div className="h-1 bg-gray-400 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          />
          
          <div className="absolute bottom-2 left-2 right-2">
            <div className="bg-gray-800/90 text-white text-xs px-2 py-1 rounded text-center font-semibold">
              📄 Resume
            </div>
          </div>
        </div>
        
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white text-xs">📎</span>
        </motion.div>
      </motion.div>

      {/* Resume Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] w-full overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Resume Preview</h2>
              <div className="flex gap-3">
                <motion.a
                  href="./resume.pdf"
                  download
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💾 Download
                </motion.a>
                <motion.button
                  onClick={closeModal}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="w-full h-[800px] bg-gray-100 rounded-lg flex items-center justify-center">
                <iframe
                  src="./resume.pdf"
                  className="w-full h-full rounded-lg"
                  title="Resume Preview"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};