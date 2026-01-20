import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Volume2, VolumeX } from 'lucide-react';

interface OpeningCoverProps {
  onEnter: () => void;
  guestName?: string;
}

export default function OpeningCover({ onEnter, guestName = 'Tamu Undangan' }: OpeningCoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Golden particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Central content */}
      <div className="relative z-10 text-center px-6 max-w-lg">
        {/* Bismillah */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-arabic text-lg text-primary mb-6"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>
        
        {/* Ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="ornament-line w-16" />
          <Heart className="w-4 h-4 text-primary animate-heartbeat" />
          <div className="ornament-line w-16" />
        </motion.div>
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-display text-lg tracking-[0.3em] text-muted-foreground mb-2"
        >
          THE WEDDING OF
        </motion.h2>
        
        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-light text-gradient-gold text-glow mb-4"
        >
          Nazril & Aila
        </motion.h1>
        
        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-display text-xl tracking-wider text-foreground/80 mb-12"
        >
          06 . 08 . 2030
        </motion.p>
        
        {/* Guest name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-8"
        >
          <p className="text-sm text-muted-foreground mb-2 tracking-wider">Kepada Yth.</p>
          <p className="text-xl font-heading text-foreground">{guestName}</p>
        </motion.div>
        
        {/* Enter button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onEnter}
          className="btn-gold relative overflow-hidden group"
        >
          <span className="relative z-10">Buka Undangan</span>
          <motion.div
            className="absolute inset-0 bg-gold-light"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '0%' : '-100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        
        {/* Music hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-6 text-xs text-muted-foreground flex items-center justify-center gap-2"
        >
          <Volume2 className="w-3 h-3" />
          <span>Klik untuk membuka dengan musik</span>
        </motion.p>
      </div>
      
      {/* Bottom ornament */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent"
      />
    </motion.div>
  );
}
