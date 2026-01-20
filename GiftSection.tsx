import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function GiftSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bankAccounts = [
    {
      bank: 'Bank Mandiri',
      number: '1234567890123',
      name: 'Muhammad Nazril Ilham',
    },
    {
      bank: 'Bank BCA',
      number: '9876543210',
      name: 'Aila Azzura',
    },
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">WEDDING GIFT</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient-gold text-glow mb-4">
            Amplop Digital
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.
          </p>
        </motion.div>

        {/* Bank accounts */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {bankAccounts.map((account, index) => (
            <motion.div
              key={account.bank}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="card-gold-border p-6 text-center"
            >
              <p className="text-sm text-muted-foreground mb-2">{account.bank}</p>
              <p className="font-heading text-xl text-primary mb-1">{account.number}</p>
              <p className="text-sm text-foreground/80 mb-4">a.n. {account.name}</p>
              <button
                onClick={() => copyToClipboard(account.number, index)}
                className="btn-outline-gold text-xs py-2 px-4 inline-flex items-center gap-2"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Salin No. Rekening</span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
