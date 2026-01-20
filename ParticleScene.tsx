import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GoldenParticles({ count = 3000 }) {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = Math.random() * 60 - 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      velocities[i] = Math.random() * 0.02 + 0.005;
    }
    
    return { positions, velocities };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] += particles.velocities[i];
      
      if (positions[i * 3 + 1] > 30) {
        positions[i * 3 + 1] = -30;
      }
      
      positions[i * 3] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={ref} positions={particles.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#d4af37"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
}

function FloatingLights() {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);
  const light3 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.3) * 10;
      light1.current.position.y = Math.cos(t * 0.4) * 5 + 5;
      light1.current.position.z = Math.cos(t * 0.3) * 10;
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(t * 0.4) * 12;
      light2.current.position.y = Math.sin(t * 0.3) * 4 + 3;
      light2.current.position.z = Math.sin(t * 0.4) * 12;
    }
    if (light3.current) {
      light3.current.position.x = Math.sin(t * 0.5) * 8;
      light3.current.position.y = Math.cos(t * 0.5) * 6 + 4;
      light3.current.position.z = Math.cos(t * 0.5) * 8;
    }
  });

  return (
    <>
      <pointLight ref={light1} color="#d4af37" intensity={2} distance={30} />
      <pointLight ref={light2} color="#f0d78c" intensity={1.5} distance={25} />
      <pointLight ref={light3} color="#c9a227" intensity={1.8} distance={28} />
    </>
  );
}

function CameraController() {
  const { camera } = useThree();
  
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2;
    camera.position.y = Math.cos(state.clock.elapsedTime * 0.08) * 1 + 2;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

interface ParticleSceneProps {
  enableOrbit?: boolean;
  className?: string;
}

export default function ParticleScene({ enableOrbit = false, className = '' }: ParticleSceneProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 2, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} color="#d4af37" />
        <GoldenParticles count={2500} />
        <FloatingLights />
        {enableOrbit ? (
          <OrbitControls 
            enableZoom={true} 
            enablePan={false}
            minDistance={8}
            maxDistance={30}
            autoRotate
            autoRotateSpeed={0.5}
          />
        ) : (
          <CameraController />
        )}
      </Canvas>
    </div>
  );
}
