import { motion } from 'motion/react';
import { Mail, Facebook, Instagram, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function ContactSection() {
  const contactMethods = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      color: 'from-violet-500 to-purple-500'
    },
    { 
      icon: Facebook, 
      label: 'Facebook', 
      value: '@yourname',
      href: 'https://facebook.com',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      value: '@yourname',
      href: 'https://instagram.com',
      color: 'from-pink-500 to-rose-500'
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out through any of the channels below!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
              >
                <Card 
                  className="bg-zinc-900/50 border-zinc-800 hover:border-violet-500/50 transition-all duration-300 p-6 text-center backdrop-blur-sm group cursor-pointer h-full"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="size-6 text-white" />
                  </div>
                  <h3 className="text-zinc-100 mb-2">{method.label}</h3>
                  <p className="text-zinc-400 text-sm">{method.value}</p>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm p-8">
            <h3 className="text-zinc-100 mb-4">Ready to Start a Conversation?</h3>
            <p className="text-zinc-400 mb-6 max-w-md mx-auto text-sm">
              Drop me a message and I'll get back to you as soon as possible!
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-lg shadow-violet-500/25 group relative overflow-hidden"
              onClick={() => window.location.href = 'mailto:hello@example.com'}
            >
              <span className="relative z-10 flex items-center">
                <Send className="mr-2 size-4" />
                Send Me a Message
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Card>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-xl" />
      </div>
    </section>
  );
}