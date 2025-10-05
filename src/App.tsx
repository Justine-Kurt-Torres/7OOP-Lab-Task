import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { FunFactsSection } from './components/FunFactsSection';
import { ProjectCard } from './components/ProjectCard';
import { ContactSection } from './components/ContactSection';
import { CyberBackground } from './components/CyberBackground';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my work and skills with smooth animations and clean design.',
    tags: ['React', 'Tailwind CSS', 'Motion'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'Full-featured task tracking application with team collaboration, deadlines, and progress monitoring.',
    tags: ['TypeScript', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    fileUrl: 'https://drive.google.com/file/project-documentation',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and historical data.',
    tags: ['React', 'API Integration', 'Charts'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://weather-app.com',
  },
  {
    id: 4,
    title: 'E-Learning Platform',
    description: 'Online learning platform with video courses, quizzes, progress tracking, and certification system.',
    tags: ['Next.js', 'PostgreSQL', 'Video Streaming'],
    fileUrl: 'https://drive.google.com/file/elearning-demo',
    liveUrl: 'https://elearning-platform.com',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
      <CyberBackground />
      
      <div className="relative z-10">
        <Navigation />

        {/* Hero */}
        <div id="home">
          <HeroSection />
        </div>

        {/* About */}
        <AboutSection />

        {/* Skills */}
        <SkillsSection />

        {/* Fun Facts */}
        <FunFactsSection />

        {/* Projects */}
        <section id="projects" className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-4" />
              <p className="text-zinc-400 max-w-2xl mx-auto">
                A showcase of my recent work. Each project represents a unique challenge and learning experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <ContactSection />

        {/* Footer */}
        <footer className="border-t border-zinc-800/50 py-12 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <h3 className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Let's Build Something Amazing
              </h3>
              <p className="text-zinc-500 text-sm">
                Crafted with passion and lots of coffee ☕
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm">
              <span>© {new Date().getFullYear()}</span>
              <span>•</span>
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Your Name
              </span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse delay-75" />
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 animate-pulse delay-150" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}