import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Send, MessageCircle } from 'lucide-react';

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: '1',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">KONFIRMASI</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient-gold text-glow mb-4">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Mohon konfirmasi kehadiran Anda sebagai bentuk penghormatan untuk kami
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-gold-border p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-primary mb-2">Terima Kasih!</h3>
              <p className="text-muted-foreground">
                Konfirmasi kehadiran Anda telah kami terima. Kami sangat menantikan kehadiran Anda.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="card-gold-border p-8 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Konfirmasi Kehadiran</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'hadir' })}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                      formData.attendance === 'hadir'
                        ? 'border-primary bg-primary/20 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>Hadir</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'tidak' })}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                      formData.attendance === 'tidak'
                        ? 'border-primary bg-primary/20 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    <X className="w-4 h-4" />
                    <span>Tidak Hadir</span>
                  </button>
                </div>
              </div>

              {/* Number of guests */}
              {formData.attendance === 'hadir' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <label className="block text-sm text-muted-foreground mb-2">Jumlah Tamu</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} Orang
                      </option>
                    ))}
                  </select>
                </motion.div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Ucapan & Doa
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!formData.name || !formData.attendance}
                className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Konfirmasi</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
