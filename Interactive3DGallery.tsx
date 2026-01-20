import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, useTexture, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import groomImage from '@/assets/groom.jpg';
import brideImage from '@/assets/bride.jpg';

function PhotoFrame({ imageUrl, position }: { imageUrl: string; position: [number, number, number] }) {
  const texture = useTexture(imageUrl);
  const aspectRatio = 0.8; // Portrait aspect
  
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group position={position}>
        {/* Photo */}
        <mesh>
          <planeGeometry args={[2 * aspectRatio, 2.5]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        
        {/* Golden frame */}
        <mesh position={[0, 0, 0.01]}>
          <ringGeometry args={[1.35, 1.45, 64]} />
          <meshStandardMaterial 
            color="#d4af37" 
            metalness={0.9} 
            roughness={0.2}
            emissive="#c9a227"
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#f0d78c" />
      <pointLight position={[-10, 5, 5]} intensity={0.5} color="#d4af37" />
      
      <Suspense fallback={null}>
        <PhotoFrame imageUrl={groomImage} position={[-2, 0, 0]} />
        <PhotoFrame imageUrl={brideImage} position={[2, 0, 0]} />
      </Suspense>
      
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        minDistance={4}
        maxDistance={12}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

interface Interactive3DGalleryProps {
  className?: string;
}

export default function Interactive3DGallery({ className = '' }: Interactive3DGalleryProps) {
  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${className}`}>
      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">INTERACTIVE 3D</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient-gold text-glow mb-4">
            Galeri 3D
          </h2>
          <p className="text-muted-foreground">
            Geser untuk memutar • Scroll untuk zoom
          </p>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden card-glass"
        >
          <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <Scene />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
