import { motion } from 'framer-motion';
import { Project, ProjectImage } from '../../types';
import { Button } from '../atoms/Button';
import { FeatureTag } from '../atoms/FeatureTag';

interface ProjectCardProps {
  project: Project;
  onShowDetails: (projectId: string) => void;
  index: number;
}

export const ProjectCard = ({ project, onShowDetails, index }: ProjectCardProps) => {
  const techStack = project.technologies.slice(0, 3).join(' • ');
  const moreCount = project.technologies.length > 3 ? ` +${project.technologies.length - 3} more` : '';

  const firstImage = project.images && project.images[0];
  const imageUrl = typeof firstImage === 'string' ? firstImage : (firstImage as ProjectImage)?.url;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 italic">{techStack}{moreCount}</p>
        </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.features.slice(0, 3).map((feature, idx) => (
          <FeatureTag key={idx} delay={index * 0.1 + idx * 0.05}>
            {feature}
          </FeatureTag>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3">
        {project.links.live && (
          <Button href={project.links.live} target="_blank" variant="primary">
            Live Demo
          </Button>
        )}
        {project.links.demo && (
          <Button href={project.links.demo} target="_blank" variant="secondary">
            View Details
          </Button>
        )}
        <Button 
          variant="outline" 
          onClick={() => onShowDetails(project.id)}
        >
          More Info
        </Button>
      </div>
      </div>
    </motion.div>
  );
};