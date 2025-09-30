import { motion } from 'framer-motion';
import { education } from '../../data/personal';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-gray-600 text-lg">Academic foundation in computer science</p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {education.degree} in {education.field}
              </h3>
              <p className="text-xl text-blue-700 font-semibold mb-2">
                {education.institution}
              </p>
              <p className="text-gray-600">
                {education.location}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                🎓 Computer Science Graduate
              </div>
            </div>
          </div>

          {education.relevantCoursework && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Relevant Coursework</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {education.relevantCoursework.map((course, index) => (
                  <motion.div
                    key={course}
                    className="bg-white px-3 py-2 rounded-lg border border-blue-200 text-sm font-medium text-gray-700 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                  >
                    {course}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};