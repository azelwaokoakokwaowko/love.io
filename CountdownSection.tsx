import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2030-08-06T08:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden section-glow">
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-20" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">MENGHITUNG HARI</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient-gold text-glow">
            Menuju Hari Bahagia
          </h2>
        </motion.div>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-3xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="card-gold-border w-20 md:w-28 p-4 md:p-6 text-center"
            >
              <motion.span
                key={unit.value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="block font-display text-3xl md:text-5xl text-primary font-light"
              >
                {String(unit.value).padStart(2, '0')}
              </motion.span>
              <span className="text-xs md:text-sm text-muted-foreground tracking-wider uppercase">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Date reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-muted-foreground"
        >
          Kamis, 06 Agustus 2030
        </motion.p>
      </div>
    </section>
  );
}
