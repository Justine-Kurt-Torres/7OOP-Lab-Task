import { motion } from 'motion/react';
import { Coffee, Music, Gamepad2, BookOpen, Plane, Camera } from 'lucide-react';
import { Card } from './ui/card';

const funFacts = [
  {
    icon: Coffee,
    title: 'Coffee Addict',
    description: 'I run on coffee and code. Average consumption: 4 cups/day ☕',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Music,
    title: 'Music Lover',
    description: 'Always coding with lo-fi beats or synthwave in the background 🎵',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Gamepad2,
    title: 'Gaming Enthusiast',
    description: 'Speedrunner in my free time. Current obsession: indie roguelikes 🎮',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: BookOpen,
    title: 'Bookworm',
    description: 'Sci-fi and fantasy novels are my escape. 50+ books read last year 📚',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Plane,
    title: 'Travel Bug',
    description: 'Visited 15 countries and counting. Always planning the next adventure ✈️',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Street photography hobbyist. Love capturing urban landscapes 📷',
    color: 'from-rose-500 to-red-500',
  },
];

export function FunFactsSection() {
  return (
    <section id="funfacts" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Fun Facts About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Beyond the code, here's what makes me tick
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="bg-zinc-900/50 border-zinc-800 hover:border-violet-500/50 transition-all duration-300 p-6 h-full backdrop-blur-sm group relative overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${fact.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <fact.icon className="size-6 text-white" />
                  </div>
                  
                  <h3 className="text-zinc-100 mb-3">{fact.title}</h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {fact.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${fact.color} opacity-5 blur-2xl`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '500+', label: 'Commits This Year' },
            { value: '20+', label: 'Projects Completed' },
            { value: '1000+', label: 'Cups of Coffee' },
            { value: '∞', label: 'Lines of Code' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm"
            >
              <div className="text-3xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}