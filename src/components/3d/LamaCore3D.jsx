import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Configuration presets for different model cores
export const CORE_MODES = {
  nexus405b: {
    id: 'nexus405b',
    name: '405B Frontier Nexus',
    tag: 'Ultra-Reasoning Flagship',
    primaryColor: '#c084fc', // purple-400
    glowColor: '#9333ea',    // purple-600
    wireColor: '#e9d5ff',
    speed: 0.9,
    particleCount: 1800,
    pulseSpeed: 2.2,
    accentHex: '#a855f7'
  },
  core70b: {
    id: 'core70b',
    name: '70B Hyper-Inference',
    tag: 'Enterprise High-Throughput',
    primaryColor: '#00f5ff', // cyan
    glowColor: '#0284c7',    // sky-600
    wireColor: '#bae6fd',
    speed: 1.4,
    particleCount: 1400,
    pulseSpeed: 3.5,
    accentHex: '#00f5ff'
  },
  codeMatrix: {
    id: 'codeMatrix',
    name: 'Agentic Code Matrix',
    tag: 'Autonomous Tool Engine',
    primaryColor: '#10b981', // emerald-500
    glowColor: '#059669',    // emerald-600
    wireColor: '#a7f3d0',
    speed: 1.1,
    particleCount: 1600,
    pulseSpeed: 2.8,
    accentHex: '#10b981'
  },
  sparseMoE: {
    id: 'sparseMoE',
    name: 'MoE Quantum Router',
    tag: '8x22B Dynamic Sparse Routing',
    primaryColor: '#f59e0b', // amber-500
    glowColor: '#d97706',    // amber-600
    wireColor: '#fde68a',
    speed: 1.6,
    particleCount: 2000,
    pulseSpeed: 4.0,
    accentHex: '#f59e0b'
  }
};

// Gyroscopic outer data rings
function DataRings({ modeConfig, wireframeOnly = false }) {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state, delta) => {
    const s = modeConfig.speed;
    if (ring1.current) ring1.current.rotation.z += delta * 0.45 * s;
    if (ring1.current) ring1.current.rotation.x += delta * 0.2 * s;
    
    if (ring2.current) ring2.current.rotation.y += delta * 0.5 * s;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.25 * s;

    if (ring3.current) ring3.current.rotation.x -= delta * 0.35 * s;
    if (ring3.current) ring3.current.rotation.y -= delta * 0.3 * s;
  });

  const matProps = {
    color: modeConfig.primaryColor,
    wireframe: true,
    transparent: true,
    opacity: 0.7,
    roughness: 0.1,
    metalness: 0.9,
  };

  return (
    <group>
      {/* Outer Torus Ring 1 */}
      <mesh ref={ring1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.025, 16, 100]} />
        <meshStandardMaterial {...matProps} emissive={modeConfig.primaryColor} emissiveIntensity={0.6} />
      </mesh>

      {/* Segmented Ring 2 */}
      <mesh ref={ring2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.85, 0.02, 16, 70]} />
        <meshStandardMaterial {...matProps} emissive={modeConfig.glowColor} emissiveIntensity={0.8} />
      </mesh>

      {/* Orbit Ring 3 */}
      <mesh ref={ring3} rotation={[Math.PI / 6, -Math.PI / 4, Math.PI / 3]}>
        <torusGeometry args={[3.2, 0.015, 16, 90]} />
        <meshStandardMaterial {...matProps} opacity={0.45} emissive={modeConfig.primaryColor} emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

// Synaptic Particle Swarm surrounding LAMA core
function SynapticParticles({ modeConfig }) {
  const pointsRef = useRef();
  const count = modeConfig.particleCount || 1500;

  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Generate spherical distribution with varied radius
      const radius = 1.6 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12 * modeConfig.speed;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={modeConfig.primaryColor}
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Central Quantum Icosahedron Core
function NeuralQuantumCore({ modeConfig, wireframeMode = false }) {
  const coreRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * modeConfig.pulseSpeed) * 0.07;

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.6 * modeConfig.speed;
      coreRef.current.rotation.x += delta * 0.35 * modeConfig.speed;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.8 * modeConfig.speed;
      innerRef.current.rotation.z += delta * 0.4 * modeConfig.speed;
    }
  });

  return (
    <group>
      {/* Outer Crystalline Geodesic Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color={modeConfig.primaryColor}
          emissive={modeConfig.glowColor}
          emissiveIntensity={0.8}
          wireframe={wireframeMode || true}
          transparent
          opacity={0.85}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Solid Inner Pulsing Seed */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial
          color={modeConfig.primaryColor}
          emissive={modeConfig.primaryColor}
          emissiveIntensity={1.4}
          roughness={0.1}
          metalness={1.0}
        />
      </mesh>

      {/* Floating Spark Nodes on key vertices */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

// Main 3D Scene Viewport
export default function LamaCore3D({
  currentMode = 'nexus405b',
  wireframeMode = false,
  interactive = true,
  className = "w-full h-full"
}) {
  const config = CORE_MODES[currentMode] || CORE_MODES.nexus405b;

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={config.primaryColor} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color={config.glowColor} />
        <directionalLight position={[0, 8, 4]} intensity={1.2} color="#ffffff" />

        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <NeuralQuantumCore modeConfig={config} wireframeMode={wireframeMode} />
          <DataRings modeConfig={config} wireframeOnly={wireframeMode} />
          <SynapticParticles modeConfig={config} />
        </Float>

        {interactive && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={(3 * Math.PI) / 4}
            rotateSpeed={0.5}
            dampingFactor={0.05}
          />
        )}
      </Canvas>

      {/* Subtle glowing vignette backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-colors duration-1000 opacity-25"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${config.accentHex} 0%, transparent 65%)`
        }}
      />
    </div>
  );
}
