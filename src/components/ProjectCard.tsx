import { motion } from 'motion/react';
import { ExternalLink, Github, FileText, Link2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  fileUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  fileUrl,
  index,
}: ProjectCardProps) {
  const gradients = [
    'from-violet-500 to-purple-500',
    'from-cyan-500 to-blue-500',
    'from-pink-500 to-rose-500',
    'from-amber-500 to-orange-500',
  ];
  
  const gradient = gradients[index % gradients.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-zinc-900/50 border-zinc-800 hover:border-violet-500/50 transition-all duration-300 overflow-hidden group backdrop-blur-sm h-full flex flex-col relative">
        {/* Gradient top border */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
        
        {/* Gradient corner accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`} />
        
        <div className="p-8 space-y-6 flex-1 flex flex-col relative z-10">
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} w-fit`}>
            <FileText className="size-6 text-white" />
          </div>
          
          <div className="space-y-3 flex-1">
            <h3 className="text-zinc-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
              {title}
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <Badge 
                key={tagIndex} 
                variant="secondary"
                className="bg-zinc-800/50 text-zinc-300 hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-500/50 border border-transparent transition-all"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-800">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10"
                onClick={() => window.open(githubUrl, '_blank')}
              >
                <Github className="size-4 mr-2" />
                GitHub
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10"
                onClick={() => window.open(liveUrl, '_blank')}
              >
                <ExternalLink className="size-4 mr-2" />
                Live Demo
              </Button>
            )}
            {fileUrl && (
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10"
                onClick={() => window.open(fileUrl, '_blank')}
              >
                <Link2 className="size-4 mr-2" />
                View File
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}