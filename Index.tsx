import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OpeningCover from '@/components/wedding/OpeningCover';
import HeroSection from '@/components/wedding/HeroSection';
import CoupleSection from '@/components/wedding/CoupleSection';
import VenueSection from '@/components/wedding/VenueSection';
import CountdownSection from '@/components/wedding/CountdownSection';
import RSVPSection from '@/components/wedding/RSVPSection';
import GiftSection from '@/components/wedding/GiftSection';
import FooterSection from '@/components/wedding/FooterSection';
import MusicPlayer from '@/components/wedding/MusicPlayer';
import Interactive3DGallery from '@/components/wedding/Interactive3DGallery';

// Lazy load heavy 3D components
const ParticleScene = lazy(() => import('@/components/three/ParticleScene'));

// Background music URL (royalty-free romantic instrumental)
const MUSIC_URL = 'https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Auto-play music when opening
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Browser may block autoplay
        console.log('Autoplay blocked');
      });
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* 3D Particle Background */}
      <Suspense fallback={null}>
        {isOpen && (
          <div className="fixed inset-0 z-0 pointer-events-none">
            <ParticleScene />
          </div>
        )}
      </Suspense>

      {/* Opening Cover */}
      <AnimatePresence>
        {!isOpen && <OpeningCover onEnter={handleOpenInvitation} />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10"
          >
            <HeroSection scrollY={scrollY} />
            <CoupleSection />
            <Interactive3DGallery />
            <CountdownSection />
            <VenueSection />
            <RSVPSection />
            <GiftSection />
            <FooterSection />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Music Player */}
      {isOpen && <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />}
    </div>
  );
};

export default Index;
