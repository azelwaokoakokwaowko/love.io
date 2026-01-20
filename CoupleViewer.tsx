import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useTexture, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ImagePlaneProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

function ImagePlane({ url, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: ImagePlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(url);
  
  // Calculate aspect ratio from texture
  const aspectRatio = texture.image ? texture.image.width / texture.image.height : 1;
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <planeGeometry args={[aspectRatio * scale, scale, 32, 32]} />
        <meshStandardMaterial 
          map={texture} 
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

function GoldenFrame({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number]; scale?: number }) {
  const frameRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (frameRef.current) {
      frameRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: '#d4af37',
    metalness: 0.9,
    roughness: 0.2,
    emissive: '#c9a227',
    emissiveIntensity: 0.1,
  });

  return (
    <group ref={frameRef} position={position} scale={scale}>
      {/* Frame border */}
      <mesh position={[0, 2.1, 0]} material={goldMaterial}>
        <boxGeometry args={[3.4, 0.15, 0.1]} />
      </mesh>
      <mesh position={[0, -2.1, 0]} material={goldMaterial}>
        <boxGeometry args={[3.4, 0.15, 0.1]} />
      </mesh>
      <mesh position={[-1.7, 0, 0]} material={goldMaterial}>
        <boxGeometry args={[0.15, 4.35, 0.1]} />
      </mesh>
      <mesh position={[1.7, 0, 0]} material={goldMaterial}>
        <boxGeometry args={[0.15, 4.35, 0.1]} />
      </mesh>
      
      {/* Corner ornaments */}
      {[[-1.6, 2, 0], [1.6, 2, 0], [-1.6, -2, 0], [1.6, -2, 0]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} material={goldMaterial}>
          <octahedronGeometry args={[0.15]} />
        </mesh>
      ))}
    </group>
  );
}

interface CoupleViewerProps {
  groomImage: string;
  brideImage: string;
  className?: string;
}

export default function CoupleViewer({ groomImage, brideImage, className = '' }: CoupleViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#f0d78c" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#d4af37" />
        
        <Suspense fallback={null}>
          <ImagePlane url={groomImage} position={[-2.5, 0, 0]} scale={3} />
          <GoldenFrame position={[-2.5, 0, 0.1]} scale={0.75} />
          
          <ImagePlane url={brideImage} position={[2.5, 0, 0]} scale={3} />
          <GoldenFrame position={[2.5, 0, 0.1]} scale={0.75} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
