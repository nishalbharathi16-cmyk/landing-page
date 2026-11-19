import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const DOMAINS_3D = [
  {
    id: 'domain-01',
    code: 'DOMAIN 01',
    title: 'AI-Powered Leadership',
    subtitle: 'Executive Tech Ops & Decision Intelligence',
    color: '#0078D4', // Microsoft Azure Blue
    metalColor: '#2B88D8',
    orbitRadius: 2.7,
    speed: 0.52,
    phase: 0,
  },
  {
    id: 'domain-02',
    code: 'DOMAIN 02',
    title: 'Strategic P&L Management',
    subtitle: 'Unit Economics & Enterprise Execution',
    color: '#D4AF37', // Gold / Amber
    metalColor: '#FFB900',
    orbitRadius: 3.1,
    speed: 0.42,
    phase: (2 * Math.PI) / 3,
  },
  {
    id: 'domain-03',
    code: 'DOMAIN 03',
    title: 'People & Crisis Leadership',
    subtitle: 'Power Dynamics & War Room Control',
    color: '#C87549', // LAMA signature terracotta
    metalColor: '#E07A48',
    orbitRadius: 2.85,
    speed: 0.48,
    phase: (4 * Math.PI) / 3,
  },
];

// Precision Armillary Rings in Microsoft Azure & Brushed Brass
function ArmillaryRings({ wireframe = false, activeDomainId }) {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((_, delta) => {
    if (ring1.current) ring1.current.rotation.y += delta * 0.22;
    if (ring2.current) ring2.current.rotation.x += delta * 0.25;
    if (ring3.current) {
      ring3.current.rotation.z -= delta * 0.16;
      ring3.current.rotation.y += delta * 0.14;
    }
  });

  return (
    <group>
      {/* Outer Azure Ring */}
      <mesh ref={ring1}>
        <torusGeometry args={[2.5, 0.032, 24, 160]} />
        <meshStandardMaterial
          color="#0078D4"
          metalness={0.9}
          roughness={0.15}
          wireframe={wireframe}
        />
      </mesh>

      {/* Middle Terracotta Coordinate Ring */}
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.72, 0.028, 24, 160]} />
        <meshStandardMaterial
          color="#C87549"
          metalness={0.85}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Ecliptic Brushed Gold Ring */}
      <mesh ref={ring3} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.92, 0.022, 24, 160]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.18}
          wireframe={wireframe}
        />
      </mesh>
    </group>
  );
}

// Orbiting Knowledge Beacons
function DomainBeacons({ activeDomainId, onSelectDomain }) {
  const beaconGroup = useRef();

  useFrame((state) => {
    if (beaconGroup.current) {
      beaconGroup.current.rotation.y = state.clock.getElapsedTime() * 0.18;
    }
  });

  return (
    <group ref={beaconGroup}>
      {DOMAINS_3D.map((domain) => {
        const isActive = domain.id === activeDomainId;
        const x = Math.cos(domain.phase) * domain.orbitRadius;
        const z = Math.sin(domain.phase) * domain.orbitRadius;
        const y = Math.sin(domain.phase * 2) * 0.55;

        return (
          <group
            key={domain.id}
            position={[x, y, z]}
            onClick={(e) => {
              e.stopPropagation();
              onSelectDomain?.(domain.id);
            }}
          >
            {/* Satellite Sphere */}
            <mesh scale={isActive ? 1.45 : 1.0}>
              <sphereGeometry args={[0.22, 32, 32]} />
              <meshStandardMaterial
                color={domain.color}
                emissive={domain.color}
                emissiveIntensity={isActive ? 1.0 : 0.4}
                metalness={0.85}
                roughness={0.15}
              />
            </mesh>

            {/* Orbit Glow Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.3, 0.35, 32]} />
              <meshBasicMaterial
                color={domain.color}
                transparent
                opacity={isActive ? 0.85 : 0.3}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

// Central Crystalline Leadership Prism Core
function ExecutiveCore({ wireframe, activeDomainId }) {
  const coreRef = useRef();
  const innerRef = useRef();

  const domainColor = useMemo(() => {
    const found = DOMAINS_3D.find((d) => d.id === activeDomainId);
    return found ? found.color : '#0078D4';
  }, [activeDomainId]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 1.5) * 0.04;

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.35;
      coreRef.current.rotation.x += delta * 0.18;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.48;
      innerRef.current.rotation.z += delta * 0.22;
    }
  });

  return (
    <group>
      {/* Outer Faceted Geodesic Prism Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.28, 1]} />
        <meshStandardMaterial
          color={domainColor}
          metalness={0.7}
          roughness={0.12}
          wireframe={wireframe}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Solid Inner Octahedron Anchor */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.74, 0]} />
        <meshStandardMaterial
          color="#0078D4"
          emissive="#C87549"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

// Fluent Knowledge Particles
function KnowledgeParticles({ count = 400 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.8 + Math.random() * 2.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0078D4"
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

export default function LamaAcademy3D({
  activeDomainId = 'domain-01',
  onSelectDomain,
  wireframe = false,
  className = "w-full h-full"
}) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0.9, 5.8], fov: 44 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[6, 9, 6]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-6, -4, -4]} intensity={1.2} color="#0078D4" />
        <pointLight position={[6, 4, 4]} intensity={1.1} color="#C87549" />

        <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.35}>
          <ExecutiveCore wireframe={wireframe} activeDomainId={activeDomainId} />
          <ArmillaryRings wireframe={wireframe} activeDomainId={activeDomainId} />
          <DomainBeacons activeDomainId={activeDomainId} onSelectDomain={onSelectDomain} />
          <KnowledgeParticles count={380} />
        </Float>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
          rotateSpeed={0.5}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
