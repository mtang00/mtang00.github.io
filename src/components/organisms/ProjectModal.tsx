import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Project, ProjectImage } from '../../types';
import { Button } from '../atoms/Button';
import { TechTag } from '../atoms/TechTag';
import { ImageSlideshow } from '../molecules/ImageSlideshow';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const hasDetailedImages = project.images.length > 0 && typeof project.images[0] === 'object';
  const detailedImages = hasDetailedImages ? (project.images as ProjectImage[]) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          <motion.div
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              ×
            </button>
            
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <TechTag key={tech} delay={idx * 0.05}>
                      {tech}
                    </TechTag>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                {hasDetailedImages && detailedImages.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-primary-500 pb-2">
                      Project Showcase
                    </h3>
                    <ImageSlideshow images={detailedImages} projectTitle={project.title} />
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-primary-500 pb-2">
                    Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-primary-500 pb-2">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-primary-500 pb-2">
                    Architecture
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(project.architecture).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-500">
                        <strong className="capitalize text-gray-900">{key}:</strong>{' '}
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-primary-500 pb-2">
                    Technical Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        className="text-gray-700 flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="text-primary-500 mr-2">•</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-primary-500 pb-2">
                    User Workflow
                  </h3>
                  <ol className="space-y-2">
                    {project.workflow.map((step, idx) => (
                      <motion.li
                        key={idx}
                        className="text-gray-700 flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                          {idx + 1}
                        </span>
                        {step}
                      </motion.li>
                    ))}
                  </ol>
                </div>
                
                {project.links.testCredentials && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Test Credentials:</h4>
                    <p className="text-yellow-700">
                      <strong>Username:</strong> {project.links.testCredentials.username}
                    </p>
                    <p className="text-yellow-700">
                      <strong>Password:</strong> {project.links.testCredentials.password}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8 pt-6 border-t border-gray-200">
                {project.links.live && (
                  <Button href={project.links.live} target="_blank" variant="primary">
                    Live Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button href={project.links.github} target="_blank" variant="secondary">
                    GitHub
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};