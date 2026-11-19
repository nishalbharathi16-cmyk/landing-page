import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3 Executive Directions
export const LEADERSHIP_AXES = [
  {
    id: 'domain-01',
    label: 'Technology & AI',
    sub: 'Decision Intelligence',
    angle: 0,
    color: '#3B6B88', // Slate blue
    brassColor: '#C29B63',
  },
  {
    id: 'domain-02',
    label: 'Money & P&L',
    sub: 'Financial Fluency',
    angle: (2 * Math.PI) / 3,
    color: '#8C6D3B', // Warm ochre
    brassColor: '#D4AF37',
  },
  {
    id: 'domain-03',
    label: 'People & Crisis',
    sub: 'Team Stewardship',
    angle: (4 * Math.PI) / 3,
    color: '#B85D36', // Terracotta clay
    brassColor: '#C87549',
  },
];

// Tactile Brass Armillary Dial
function BrassInstrument({ activeDomainId, wireframe }) {
  const outerRingRef = useRef();
  const midRingRef = useRef();
  const needleRef = useRef();
  const baseRef = useRef();

  // Find active direction angle
  const targetAngle = useMemo(() => {
    const item = LEADERSHIP_AXES.find((a) => a.id === activeDomainId);
    return item ? item.angle : 0;
  }, [activeDomainId]);

  useFrame((state, delta) => {
    // Gentle natural rotation
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y += delta * 0.12;
    }
    if (midRingRef.current) {
      midRingRef.current.rotation.x += delta * 0.08;
    }
    // Smooth dampening towards active domain
    if (needleRef.current) {
      needleRef.current.rotation.y = THREE.MathUtils.damp(
        needleRef.current.rotation.y,
        targetAngle + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.04,
        3.5,
        delta
      );
    }
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* Heavy Walnut Pedestal Base */}
      <mesh ref={baseRef} position={[0, -1.8, 0]}>
        <cylinderGeometry args={[2.3, 2.5, 0.35, 48]} />
        <meshStandardMaterial
          color="#3A2C23"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Brass Beveled Base Rim */}
      <mesh position={[0, -1.6, 0]}>
        <cylinderGeometry args={[2.0, 2.2, 0.1, 48]} />
        <meshStandardMaterial
          color="#C89D56"
          roughness={0.3}
          metalness={0.85}
        />
      </mesh>

      {/* Central Brass Compass Stem */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.22, 0.35, 1.7, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          roughness={0.25}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Meridian Brass Ring with Engraved Latitude Marks */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.1, 0.05, 24, 100]} />
        <meshStandardMaterial
          color="#C89D56"
          roughness={0.25}
          metalness={0.9}
          wireframe={wireframe}
        />
      </mesh>

      {/* Inner Tilted Armillary Band in Terracotta Lacquer */}
      <mesh ref={midRingRef} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
        <torusGeometry args={[1.9, 0.04, 24, 100]} />
        <meshStandardMaterial
          color="#B85D36"
          roughness={0.35}
          metalness={0.7}
          wireframe={wireframe}
        />
      </mesh>

      {/* Third Equatorial Ring with Hour Markings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.035, 24, 80]} />
        <meshStandardMaterial
          color="#8C6D3B"
          roughness={0.3}
          metalness={0.85}
        />
      </mesh>

      {/* Rotating Executive Needle Indicator */}
      <group ref={needleRef}>
        {/* Needle Axis Pivot Sphere */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial
            color="#D4AF37"
            roughness={0.2}
            metalness={0.95}
          />
        </mesh>

        {/* North Arrow Pointing to Decision Focus */}
        <mesh position={[0, 0, 1.4]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.18, 0.8, 24]} />
          <meshStandardMaterial
            color="#B85D36"
            roughness={0.3}
            metalness={0.6}
          />
        </mesh>

        {/* Counterbalance Tail */}
        <mesh position={[0, 0, -1.1]} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.12, 0.6, 24]} />
          <meshStandardMaterial
            color="#3A2C23"
            roughness={0.6}
            metalness={0.2}
          />
        </mesh>
      </group>

      {/* 3 Physical Brass Indicator Markers on the Perimeter */}
      {LEADERSHIP_AXES.map((axis) => {
        const x = Math.sin(axis.angle) * 1.7;
        const z = Math.cos(axis.angle) * 1.7;
        const isCurrent = axis.id === activeDomainId;

        return (
          <group key={axis.id} position={[x, 0, z]}>
            <mesh>
              <sphereGeometry args={[isCurrent ? 0.16 : 0.1, 24, 24]} />
              <meshStandardMaterial
                color={axis.color}
                roughness={0.2}
                metalness={0.7}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function LamaDesk3D({
  activeDomainId = 'domain-01',
  onSelectDomain,
  wireframe = false,
  className = "w-full h-full"
}) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 1.8, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Warm Natural Studio Illumination */}
        <ambientLight intensity={0.9} color="#FFFBF5" />
        <directionalLight position={[5, 8, 4]} intensity={1.7} color="#FFF5E5" />
        <directionalLight position={[-4, 3, -3]} intensity={0.6} color="#E8EEF5" />
        <pointLight position={[0, 3, 2]} intensity={0.8} color="#FFE8D1" />

        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.25}>
          <BrassInstrument activeDomainId={activeDomainId} wireframe={wireframe} />
        </Float>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 5}
          rotateSpeed={0.5}
          dampingFactor={0.06}
        />
      </Canvas>
    </div>
  );
}
