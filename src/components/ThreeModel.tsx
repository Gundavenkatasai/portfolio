import { motion } from 'framer-motion'

export default function ThreeModel() {
  const containerVariants = {
    animate: {
      rotateX: [0, 360],
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: 'loop' as const,
        ease: 'linear',
      },
    },
  }

  const boxVariants = {
    animate: (index: number) => ({
      rotateX: [0, 360],
      rotateY: [0, 360],
      transition: {
        duration: 10 + index,
        repeat: Infinity,
        repeatType: 'loop' as const,
        ease: 'linear',
      },
    }),
  }

  return (
    <div className="w-full h-full flex items-center justify-center perspective">
      <div className="relative w-64 h-64" style={{ perspective: '1200px' }}>
        {/* Central Rotating Cube */}
        <motion.div
          variants={containerVariants}
          animate="animate"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className="relative w-32 h-32"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(0)',
            }}
          >
            {/* Cube */}
            <div
              className="absolute w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(-64px)',
                background: 'rgba(0, 217, 255, 0.1)',
                border: '2px solid #00D9FF',
                borderRadius: '12px',
              }}
            />
            <div
              className="absolute w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(180deg) translateZ(-64px)',
                background: 'rgba(0, 217, 255, 0.05)',
                border: '2px solid #00D9FF',
                borderRadius: '12px',
              }}
            />
            <div
              className="absolute w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(90deg) translateZ(-64px)',
                background: 'rgba(0, 217, 255, 0.08)',
                border: '2px solid #00D9FF',
                borderRadius: '12px',
              }}
            />
            <div
              className="absolute w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-90deg) translateZ(-64px)',
                background: 'rgba(0, 217, 255, 0.08)',
                border: '2px solid #00D9FF',
                borderRadius: '12px',
              }}
            />
            <div
              className="absolute w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(90deg) translateZ(-64px)',
                background: 'rgba(0, 217, 255, 0.12)',
                border: '2px solid #00D9FF',
                borderRadius: '12px',
              }}
            />
            <div
              className="absolute w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(-90deg) translateZ(-64px)',
                background: 'rgba(0, 217, 255, 0.12)',
                border: '2px solid #00D9FF',
                borderRadius: '12px',
              }}
            />
          </div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={boxVariants}
              animate="animate"
              className="absolute w-4 h-4 rounded-full"
              style={{
                left: `${50 + 50 * Math.cos((i * Math.PI * 2) / 12)}%`,
                top: `${50 + 50 * Math.sin((i * Math.PI * 2) / 12)}%`,
                background: `hsl(${180 + (i * 360) / 12}, 100%, 50%)`,
                boxShadow: `0 0 20px hsl(${180 + (i * 360) / 12}, 100%, 50%)`,
                transformStyle: 'preserve-3d',
              }}
            />
          ))}
        </div>

        {/* Center Point */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, #00D9FF, transparent)',
            boxShadow: '0 0 30px #00D9FF, 0 0 60px #00D9FF',
          }}
        />

        {/* Glow Effect */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1), transparent)',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}

