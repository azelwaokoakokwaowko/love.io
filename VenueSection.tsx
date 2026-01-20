import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';
import mosqueImage from '@/assets/mosque.jpg';

export default function VenueSection() {
  const events = [
    {
      title: 'Akad Nikah',
      time: '08:00 WIB',
      date: 'Kamis, 06 Agustus 2030',
    },
    {
      title: 'Resepsi',
      time: '11:00 - 14:00 WIB',
      date: 'Kamis, 06 Agustus 2030',
    },
  ];

  const openMaps = () => {
    window.open('https://maps.google.com/?q=Masjid+Sabilal+Muhtadin+Banjarmasin', '_blank');
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={mosqueImage}
          alt="Masjid Sabilal Muhtadin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">SAVE THE DATE</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient-gold text-glow mb-4">
            Waktu & Tempat
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="ornament-line w-20" />
            <div className="ornament-dot" />
            <div className="ornament-line w-20" />
          </div>
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="card-gold-border p-8 text-center"
            >
              <h3 className="font-heading text-2xl text-primary mb-4">{event.title}</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{event.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-glass rounded-2xl overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src={mosqueImage}
                alt="Masjid Sabilal Muhtadin"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            <div className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-2xl text-primary">Masjid Sabilal Muhtadin</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Jl. Jenderal Sudirman, Antasan Besar, Kec. Banjarmasin Tengah,<br />
                Kota Banjarmasin, Kalimantan Selatan
              </p>
              <button onClick={openMaps} className="btn-outline-gold inline-flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                Buka Peta
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
