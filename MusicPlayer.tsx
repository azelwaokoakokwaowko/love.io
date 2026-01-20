import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold transition-transform hover:scale-110"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="playing"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex items-center justify-center"
          >
            <Volume2 className="w-6 h-6 text-background" />
          </motion.div>
        ) : (
          <motion.div
            key="paused"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex items-center justify-center"
          >
            <VolumeX className="w-6 h-6 text-background" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Ripple effect when playing */}
      {isPlaying && (
        <>
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
        </>
      )}
    </motion.button>
  );
}
