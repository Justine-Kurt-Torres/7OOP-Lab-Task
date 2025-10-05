import { motion } from "motion/react";

export function CyberBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-950 via-blue-950 to-violet-950 opacity-20" />
      
      {/* Animated Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Horizontal scan lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(6, 182, 212, 0.5) 0px, transparent 1px, transparent 2px)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 100px"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Multiple Glowing orbs with gradients */}
      <motion.div
        className="absolute top-20 left-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[15%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-[20%] w-[450px] h-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "rgba(139, 92, 246, 0.4)" : 
                       i % 3 === 1 ? "rgba(6, 182, 212, 0.4)" : 
                       "rgba(236, 72, 153, 0.4)",
          }}
          animate={{
            y: [-20, -120],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Corner accent lines with gradient */}
      <div className="absolute top-0 left-0 w-40 h-40">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500/60 via-cyan-500/60 to-transparent" />
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-violet-500/60 via-cyan-500/60 to-transparent" />
      </div>

      <div className="absolute top-0 right-0 w-40 h-40">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-pink-500/60 via-purple-500/60 to-transparent" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-pink-500/60 via-purple-500/60 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 w-40 h-40">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/60 via-blue-500/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-cyan-500/60 via-blue-500/60 to-transparent" />
      </div>

      <div className="absolute bottom-0 right-0 w-40 h-40">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-violet-500/60 via-fuchsia-500/60 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-violet-500/60 via-fuchsia-500/60 to-transparent" />
      </div>

      {/* Circuit-like pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M50,50 L50,100 L100,100"
              stroke="rgb(139, 92, 246)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M150,50 L150,100 L100,100"
              stroke="rgb(6, 182, 212)"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="50" cy="50" r="3" fill="rgb(139, 92, 246)" />
            <circle cx="150" cy="50" r="3" fill="rgb(6, 182, 212)" />
            <circle cx="100" cy="100" r="3" fill="rgb(236, 72, 153)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Animated vertical lines with gradient colors */}
      {[15, 35, 55, 75, 90].map((left, i) => (
        <motion.div
          key={i}
          className="absolute top-0 bottom-0 w-[1px]"
          style={{
            left: `${left}%`,
            background:
              i % 3 === 0
                ? "linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.3), transparent)"
                : i % 3 === 1
                ? "linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.3), transparent)"
                : "linear-gradient(180deg, transparent, rgba(236, 72, 153, 0.3), transparent)",
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.6,
          }}
        />
      ))}

      {/* Diagonal gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 via-transparent to-purple-500/5" />
    </div>
  );
}