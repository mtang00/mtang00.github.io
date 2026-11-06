import { motion } from 'framer-motion';
import { practices, toolGroups, workflowIntro } from '../../data/workflow';

const groupColors = {
  Agent: 'bg-blue-50 border-blue-200 text-blue-800',
  Plugins: 'bg-green-50 border-green-200 text-green-800',
  Skills: 'bg-purple-50 border-purple-200 text-purple-800',
  'MCP servers': 'bg-orange-50 border-orange-200 text-orange-800'
};

export const Workflow = () => {
  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Assisted Development</h2>
          <p className="text-gray-600 text-lg">How I work with Claude Code</p>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">{workflowIntro}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{practice.title}</h3>
              <p className="text-sm font-mono text-indigo-700 mb-4">{practice.evidence}</p>
              <p className="text-gray-600 leading-relaxed">{practice.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Setup</h3>
        </motion.div>

        <div className="space-y-10">
          {toolGroups.map((group, groupIndex) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">{group.name}</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((item, index) => (
                  <motion.div
                    key={item}
                    className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-300 ${
                      groupColors[group.name as keyof typeof groupColors] ||
                      'bg-gray-50 border-gray-200 text-gray-800'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: groupIndex * 0.1 + index * 0.04 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {item}
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
