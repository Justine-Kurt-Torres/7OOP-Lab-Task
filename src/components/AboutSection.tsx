import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { User, Briefcase, MapPin } from 'lucide-react';
import { Card } from './ui/card';

export function AboutSection() {
  const highlights = [
    { icon: User, label: 'Role', value: 'Full-Stack Developer' },
    { icon: Briefcase, label: 'Experience', value: '5+ Years' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-zinc-300">
              <p className="leading-relaxed">
                Hello! I'm a passionate developer who loves creating amazing digital experiences. 
                My journey in tech started when I built my first website at age 15, and I haven't 
                looked back since.
              </p>
              
              <p className="leading-relaxed">
                I specialize in building modern web applications with a focus on performance, 
                accessibility, and user experience. I'm always excited to learn new technologies 
                and tackle challenging problems.
              </p>
              
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new coffee shops, playing video 
                games, or contributing to open-source projects.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index}
                  className="bg-zinc-900/50 border-violet-500/20 hover:border-violet-500/50 transition-all p-4 text-center backdrop-blur-sm"
                >
                  <item.icon className="size-6 text-violet-400 mx-auto mb-2" />
                  <p className="text-xs text-zinc-500 mb-1">{item.label}</p>
                  <p className="text-sm text-zinc-300">{item.value}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative rounded-2xl overflow-hidden border border-violet-500/30 bg-zinc-900/50 backdrop-blur-sm aspect-square">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                style={{ 
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  padding: '2px'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}