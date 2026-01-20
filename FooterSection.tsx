import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-arabic text-xl text-primary mb-4">
            وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ
          </p>
          <p className="text-sm text-muted-foreground italic mb-8">
            "Dan bergaullah dengan mereka (istri-istrimu) dengan cara yang baik"
            <br />
            <span className="text-xs">— QS. An-Nisa: 19</span>
          </p>
        </motion.div>

        {/* Ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="ornament-line w-20" />
          <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          <div className="ornament-line w-20" />
        </motion.div>

        {/* Thank you */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-gradient-gold text-glow mb-2">
            Terima Kasih
          </h3>
          <p className="text-foreground font-heading text-xl">
            Nazril & Aila
          </p>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mt-8"
        >
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-xs text-muted-foreground mt-12"
        >
          Made with <Heart className="w-3 h-3 inline text-primary" fill="currentColor" /> • 2030
        </motion.p>
      </div>
    </footer>
  );
}
