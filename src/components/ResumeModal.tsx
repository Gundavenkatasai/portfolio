import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-black rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col glass-card"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-heading italic font-bold text-white">My Resume</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden p-6">
          <iframe
            src="https://drive.google.com/file/d/1uMn4Wuy0RWuxKeRKcthG5x8YrkPs27vv/preview"
            className="w-full h-full rounded-lg"
            title="Resume"
            allow="autoplay"
          />
        </div>

        {/* Footer Actions */}
        <div className="flex gap-4 p-6 border-t border-white/10">
          <motion.a
            href="https://drive.google.com/file/d/1uMn4Wuy0RWuxKeRKcthG5x8YrkPs27vv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-3 bg-accent text-black rounded-full font-medium text-center hover:bg-accent/90 transition-all"
          >
            Download Resume
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="flex-1 px-4 py-3 liquid-glass-strong text-white rounded-full font-medium hover:bg-white/10 transition-all"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
