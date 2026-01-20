import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Heart } from 'lucide-react';
import coupleHeroImage from '@/assets/couple-hero.jpg';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const parallaxY = scrollY * 0.5;
  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY }}
      >
        <img
          src={coupleHeroImage}
          alt="Muhammad Nazril Ilham & Aila Azzura"
          className="w-full h-[120%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-20" style={{ opacity }}>
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-arabic text-2xl md:text-3xl text-primary mb-2">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-sm text-muted-foreground tracking-widest">
            Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang
          </p>
        </motion.div>

        {/* Ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="ornament-line w-20 md:w-32" />
          <Heart className="w-5 h-5 text-primary animate-heartbeat" />
          <div className="ornament-line w-20 md:w-32" />
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-display text-sm md:text-base tracking-[0.4em] text-muted-foreground mb-4"
        >
          THE WEDDING OF
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-8"
        >
          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-light text-gradient-gold text-glow leading-tight">
            Muhammad Nazril Ilham
          </h1>
          <p className="text-3xl md:text-5xl font-display text-primary my-4">&</p>
          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-light text-gradient-gold text-glow leading-tight">
            Aila Azzura
          </h1>
        </motion.div>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-foreground/80"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-lg md:text-xl font-heading">06 Agustus 2030</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-primary" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-lg md:text-xl font-heading">Masjid Sabilal Muhtadin</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-muted-foreground">SCROLL</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
