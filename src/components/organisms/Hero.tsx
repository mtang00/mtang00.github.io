import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';
import { ResumePreview } from '../molecules/ResumePreview';
import { personalInfo } from '../../data/personal';

export const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const codeSnippets = [
    'const portfolio = "amazing";',
    'function createAwesome() {}',
    'class Developer extends Human',
    'npm install creativity',
    'git commit -m "feat: dreams"',
    'const skills = [...experience];',
    'return <Innovation />;',
    'async function buildFuture()',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
      
      {/* Animated Code Background */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/10 font-mono text-sm md:text-base font-light"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </motion.div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-4 h-4 md:w-6 md:h-6 border border-blue-400/20 rotate-45" />
          </motion.div>
        ))}
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-grid-pattern" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold text-lg tracking-wide mb-2">
            Hi, I'm {personalInfo.name}
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Welcome to My
          </motion.span>
          <br />
          <motion.span
            className="text-yellow-300"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(253, 224, 71, 0.5)',
                '0 0 40px rgba(253, 224, 71, 0.3)',
                '0 0 20px rgba(253, 224, 71, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Portfolio
          </motion.span>
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span
            className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Project Gallery
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I love building things that solve real problems. Whether helping out a local small business 
          with their website or challenging my friends on a fitness app, I'm passionate about creating 
          software that makes a difference in people's lives.
        </motion.p>
        
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleScrollToProjects} 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
            >
              🚀 Explore Projects
            </Button>
          </motion.div>
          
          <div className="flex flex-col items-center gap-3">
            <motion.p
              className="text-gray-300 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              View My Work
            </motion.p>
            <ResumePreview />
          </div>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {['⚛️', '📱', '💻', '🎨', '⚡', '🔧'].map((icon, index) => (
            <motion.div
              key={index}
              className="text-2xl md:text-3xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3 + index * 0.2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.3
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.1, borderColor: 'rgba(255,255,255,0.8)' }}
          onClick={handleScrollToProjects}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};