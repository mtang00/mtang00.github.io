import { motion } from 'framer-motion';
import { skills } from '../../data/personal';

const categoryColors = {
  frontend: 'bg-blue-50 border-blue-200 text-blue-800',
  backend: 'bg-green-50 border-green-200 text-green-800',
  database: 'bg-purple-50 border-purple-200 text-purple-800',
  tools: 'bg-orange-50 border-orange-200 text-orange-800',
  concepts: 'bg-indigo-50 border-indigo-200 text-indigo-800'
};

const categoryTitles = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools & DevOps',
  concepts: 'Concepts & Practices'
};

export const Skills = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600 text-lg">Technologies and tools I work with</p>
        </motion.div>
        
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                {categoryTitles[category as keyof typeof categoryTitles] || category}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`px-4 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
                      categoryColors[category as keyof typeof categoryColors] || 'bg-gray-50 border-gray-200 text-gray-800'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};