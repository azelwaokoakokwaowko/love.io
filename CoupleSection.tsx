import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import groomImage from '@/assets/groom.jpg';
import brideImage from '@/assets/bride.jpg';

export default function CoupleSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden section-glow">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-30" />
      
      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-arabic text-lg text-primary mb-4">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا
          </p>
          <p className="text-sm text-muted-foreground italic max-w-xl mx-auto">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya."
          </p>
          <p className="text-xs text-muted-foreground mt-2">— QS. Ar-Rum: 21</p>
        </motion.div>

        {/* Couple cards */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 max-w-5xl mx-auto">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative inline-block mb-8">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/30 rounded-full" />
              <div className="absolute -inset-8 border border-primary/20 rounded-full" />
              
              {/* Image */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 mx-auto overflow-hidden rounded-t-full">
                <img
                  src={groomImage}
                  alt="Muhammad Nazril Ilham"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-2">MEMPELAI PRIA</p>
              <h3 className="font-display text-3xl md:text-4xl text-gradient-gold text-glow mb-3">
                Muhammad Nazril Ilham
              </h3>
              <p className="text-muted-foreground text-sm">
                Putra dari<br />
                <span className="text-foreground">Bapak Ahmad & Ibu Siti</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative inline-block mb-8">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/30 rounded-full" />
              <div className="absolute -inset-8 border border-primary/20 rounded-full" />
              
              {/* Image */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 mx-auto overflow-hidden rounded-t-full">
                <img
                  src={brideImage}
                  alt="Aila Azzura"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-2">MEMPELAI WANITA</p>
              <h3 className="font-display text-3xl md:text-4xl text-gradient-gold text-glow mb-3">
                Aila Azzura
              </h3>
              <p className="text-muted-foreground text-sm">
                Putri dari<br />
                <span className="text-foreground">Bapak Rahman & Ibu Fatimah</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Love symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="flex justify-center mt-12"
        >
          <div className="relative">
            <Heart className="w-8 h-8 text-primary animate-heartbeat" fill="currentColor" />
            <div className="absolute inset-0 blur-xl bg-primary/50 animate-glow-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
