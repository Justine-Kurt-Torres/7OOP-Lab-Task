import { motion } from 'motion/react';
import { User, Code2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const personalSkills = [
  'Time Management',
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Adaptability',
  'Critical Thinking',
  'Leadership',
  'Creativity',
  'Self-Motivation',
  'Attention to Detail',
];

const programmingLanguages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'PHP',
  'SQL',
  'HTML/CSS',
  'React',
  'Node.js',
  'Vue.js',
  'Angular',
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A diverse toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Personal Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card 
              className="bg-zinc-900/50 border-zinc-800 hover:border-violet-500/50 transition-all duration-300 p-8 h-full backdrop-blur-sm group relative overflow-hidden"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
                    <User className="size-6 text-white" />
                  </div>
                  <h3 className="text-zinc-100">Personal Skills</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {personalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge 
                        className="bg-zinc-800/50 text-zinc-300 hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-500/50 border border-zinc-700 transition-all px-4 py-2 text-sm"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card 
              className="bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 p-8 h-full backdrop-blur-sm group relative overflow-hidden"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                    <Code2 className="size-6 text-white" />
                  </div>
                  <h3 className="text-zinc-100">Programming Languages</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {programmingLanguages.map((language, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge 
                        className="bg-zinc-800/50 text-zinc-300 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/50 border border-zinc-700 transition-all px-4 py-2 text-sm"
                      >
                        {language}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}