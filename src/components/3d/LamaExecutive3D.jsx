import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Cpu, DollarSign, Users, RotateCcw, Sparkles } from 'lucide-react';

export const DOMAINS = [
  {
    id: 'domain-01',
    code: '01',
    title: 'Technology & AI Operations',
    shortTitle: 'Tech & AI',
    colorHex: '#38BDF8',
    threeColor: 0x38bdf8,
    accentHex: '#0078D4',
    signature: 'Decision Intelligence & AI Systems',
    description: 'Lead AI-augmented engineering workflows, data-informed triage, and technical-to-executive communication.',
    angle: 0, // 0 deg
  },
  {
    id: 'domain-02',
    code: '02',
    title: 'Money & P&L Management',
    shortTitle: 'Money & P&L',
    colorHex: '#D4AF37',
    threeColor: 0xd4af37,
    accentHex: '#E5A93C',
    signature: 'Unit Economics & Financial Fluency',
    description: 'Defend operating budgets, manage working capital cycles, and translate sprint velocity into commercial margins.',
    angle: (2 * Math.PI) / 3, // 120 deg
  },
  {
    id: 'domain-03',
    code: '03',
    title: 'People & Crisis Leadership',
    shortTitle: 'People & Crisis',
    colorHex: '#C87549',
    threeColor: 0xc87549,
    accentHex: '#E06A3B',
    signature: 'War Room Crisis Simulations',
    description: 'Master high-stakes stakeholder negotiations, cross-functional conflict, and rapid incident stabilisation.',
    angle: (4 * Math.PI) / 3, // 240 deg
  },
];

export function LamaExecutive3D({ activeDomainId = 'domain-01', onSelectDomain }) {
  const containerRef = useRef(null);
  const [selectedId, setSelectedId] = useState(activeDomainId);
  const [isAutoOrbit, setIsAutoOrbit] = useState(true);

  // Sync prop changes
  useEffect(() => {
    setSelectedId(activeDomainId);
  }, [activeDomainId]);

  const activeDomain = DOMAINS.find((d) => d.id === selectedId) || DOMAINS[0];

  const handleSelect = useCallback(
    (id) => {
      setSelectedId(id);
      setIsAutoOrbit(false);
      if (onSelectDomain) onSelectDomain(id);
    },
    [onSelectDomain]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 450;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x141413, 0.05);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 2.8, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.75);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.4);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    fillLight.position.set(-4, -1, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xd4af37, 1.6);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // 3. Central Command Platform (Podium Base)
    const platformGroup = new THREE.Group();
    scene.add(platformGroup);

    // Dark titanium pedestal disk
    const baseGeo = new THREE.CylinderGeometry(2.8, 3.0, 0.18, 48);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x1c1c1b,
      metalness: 0.85,
      roughness: 0.25,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -1.2;
    platformGroup.add(baseMesh);

    // Brushed Brass Trim Ring on base
    const trimGeo = new THREE.TorusGeometry(2.9, 0.035, 16, 64);
    trimGeo.rotateX(Math.PI / 2);
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.15,
    });
    const trimMesh = new THREE.Mesh(trimGeo, brassMat);
    trimMesh.position.y = -1.1;
    platformGroup.add(trimMesh);

    // Inner glowing track ring
    const innerTrackGeo = new THREE.TorusGeometry(2.1, 0.02, 16, 64);
    innerTrackGeo.rotateX(Math.PI / 2);
    const innerTrackMat = new THREE.MeshStandardMaterial({
      color: 0xc87549,
      metalness: 0.8,
      roughness: 0.3,
      emissive: 0xc87549,
      emissiveIntensity: 0.35,
    });
    const innerTrackMesh = new THREE.Mesh(innerTrackGeo, innerTrackMat);
    innerTrackMesh.position.y = -1.1;
    platformGroup.add(innerTrackMesh);

    // 4. Central Executive Crystal Core (The Managerial Monolith)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Multi-faceted Octahedron Core
    const coreGeo = new THREE.OctahedronGeometry(0.72, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x222220,
      metalness: 0.9,
      roughness: 0.12,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = 0.2;
    coreGroup.add(coreMesh);

    // Outer wireframe cage for core
    const wireGeo = new THREE.OctahedronGeometry(0.85, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    wireMesh.position.y = 0.2;
    coreGroup.add(wireMesh);

    // Inner glowing nucleus
    const nucleusGeo = new THREE.SphereGeometry(0.28, 24, 24);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0xffd59e,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    nucleusMesh.position.y = 0.2;
    coreGroup.add(nucleusMesh);

    // 5. Ascending Managerial Spiral (Graduate -> Manager)
    const curvePoints = [];
    const spiralRadius = 1.35;
    const spiralHeight = 2.0;
    const turns = 1.8;
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const angle = t * Math.PI * 2 * turns;
      const x = Math.cos(angle) * (spiralRadius * (1 - t * 0.45));
      const z = Math.sin(angle) * (spiralRadius * (1 - t * 0.45));
      const y = -1.0 + t * spiralHeight;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }
    const spiralCurve = new THREE.CatmullRomCurve3(curvePoints);
    const spiralGeo = new THREE.TubeGeometry(spiralCurve, 64, 0.022, 12, false);
    const spiralMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.88,
      roughness: 0.2,
      emissive: 0xd4af37,
      emissiveIntensity: 0.25,
    });
    const spiralMesh = new THREE.Mesh(spiralGeo, spiralMat);
    scene.add(spiralMesh);

    // 6. Three Interactive Domain Beacons
    const beaconRadius = 2.1;
    const beaconMeshes = [];
    const beaconGroup = new THREE.Group();
    scene.add(beaconGroup);

    DOMAINS.forEach((domain) => {
      const bGroup = new THREE.Group();
      const x = Math.cos(domain.angle) * beaconRadius;
      const z = Math.sin(domain.angle) * beaconRadius;
      bGroup.position.set(x, 0.05, z);

      // Beacon Diamond Node
      const nodeGeo = new THREE.OctahedronGeometry(0.32, 0);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: domain.threeColor,
        metalness: 0.75,
        roughness: 0.2,
        emissive: domain.threeColor,
        emissiveIntensity: 0.4,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.userData = { domainId: domain.id };
      bGroup.add(nodeMesh);

      // Surrounding Floating Ring
      const ringGeo = new THREE.TorusGeometry(0.48, 0.02, 16, 32);
      ringGeo.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshStandardMaterial({
        color: domain.threeColor,
        metalness: 0.9,
        roughness: 0.15,
        transparent: true,
        opacity: 0.7,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      bGroup.add(ringMesh);

      // Pulsing Halo Glow Disk on base
      const haloGeo = new THREE.RingGeometry(0.1, 0.52, 32);
      haloGeo.rotateX(-Math.PI / 2);
      const haloMat = new THREE.MeshBasicMaterial({
        color: domain.threeColor,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.y = -1.13;
      bGroup.add(haloMesh);

      // Connecting Laser Line from Core to Beacon
      const lineMat = new THREE.LineBasicMaterial({
        color: domain.threeColor,
        transparent: true,
        opacity: 0.4,
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0.2, 0),
        new THREE.Vector3(x, 0.05, z),
      ]);
      const lineMesh = new THREE.Line(lineGeo, lineMat);
      scene.add(lineMesh);

      beaconGroup.add(bGroup);
      beaconMeshes.push({
        id: domain.id,
        group: bGroup,
        node: nodeMesh,
        ring: ringMesh,
        halo: haloMesh,
        angle: domain.angle,
      });
    });

    // 7. Ambient Floating Executive Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 6.5;
      particlePositions[i + 1] = -1.2 + Math.random() * 3.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6.5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffd59e,
      size: 0.038,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 8. Interaction: Raycasting & Drag Orbit
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let sceneRotationY = 0;
    let targetRotationY = 0;
    let cameraY = 2.8;

    const onPointerDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        targetRotationY += deltaX * 0.008;
        cameraY = Math.max(1.2, Math.min(4.5, cameraY - deltaY * 0.006));
      }
    };

    const onPointerUp = (e) => {
      if (isDragging) {
        isDragging = false;
      }
      // Raycast click
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const interactiveNodes = beaconMeshes.map((b) => b.node);
      const intersects = raycaster.intersectObjects(interactiveNodes);

      if (intersects.length > 0) {
        const hitId = intersects[0].object.userData.domainId;
        if (hitId) {
          handleSelect(hitId);
        }
      }
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera orbit
      if (isAutoOrbit && !isDragging) {
        targetRotationY += 0.0025;
      }

      // Smooth dampening towards target rotation
      sceneRotationY += (targetRotationY - sceneRotationY) * 0.06;
      camera.position.x = Math.sin(sceneRotationY) * 6.2;
      camera.position.z = Math.cos(sceneRotationY) * 6.2;
      camera.position.y += (cameraY - camera.position.y) * 0.06;
      camera.lookAt(0, 0.25, 0);

      // Core rotation & gentle breathing
      coreMesh.rotation.y = elapsed * 0.35;
      coreMesh.rotation.x = Math.sin(elapsed * 0.5) * 0.15;
      wireMesh.rotation.y = -elapsed * 0.25;
      wireMesh.rotation.z = Math.cos(elapsed * 0.4) * 0.15;

      const scalePulse = 1 + Math.sin(elapsed * 2.2) * 0.04;
      nucleusMesh.scale.set(scalePulse, scalePulse, scalePulse);

      // Animate Beacons
      beaconMeshes.forEach((bm) => {
        bm.ring.rotation.z = elapsed * 0.8;
        bm.ring.rotation.x = Math.PI / 2 + Math.sin(elapsed * 1.5 + bm.angle) * 0.2;
        bm.node.rotation.y = elapsed * 0.5;

        // Hover / Active pulse
        const isActive = bm.id === selectedId;
        const targetScale = isActive ? 1.3 : 1.0;
        bm.node.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        bm.halo.material.opacity = isActive
          ? 0.7 + Math.sin(elapsed * 4.0) * 0.25
          : 0.3;
      });

      // Animate Particles gently drifting upward
      const posArray = particles.geometry.attributes.position.array;
      for (let i = 1; i < posArray.length; i += 3) {
        posArray[i] += 0.003;
        if (posArray[i] > 2.5) {
          posArray[i] = -1.2;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [handleSelect, isAutoOrbit, selectedId]);

  return (
    <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] flex flex-col justify-between overflow-hidden rounded-md bg-[#161615] border border-white/15 shadow-2xl">
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        title="Drag to orbit 360° • Click beacons to inspect domains"
      />

      {/* Top Header HUD Bar */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono pointer-events-auto">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: activeDomain.colorHex }}
          />
          <span className="font-semibold uppercase tracking-wider">
            Executive Decision Matrix
          </span>
        </div>

        {/* Orbit Mode Toggle */}
        <button
          type="button"
          onClick={() => setIsAutoOrbit((prev) => !prev)}
          className={`pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono transition-all backdrop-blur-md border ${
            isAutoOrbit
              ? 'bg-[#C87549]/30 border-[#C87549] text-white'
              : 'bg-black/50 border-white/15 text-white/70 hover:text-white'
          }`}
          title="Toggle Auto-Orbit"
        >
          <RotateCcw size={11} className={isAutoOrbit ? 'animate-spin' : ''} style={{ animationDuration: '6s' }} />
          <span>{isAutoOrbit ? 'Auto-Orbit' : 'Manual'}</span>
        </button>
      </div>

      {/* Subtle Drag Hint Overlay */}
      <div className="relative z-10 text-center pointer-events-none select-none my-auto opacity-70">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50">
          Drag to orbit 360&deg; &bull; Click nodes to inspect
        </p>
      </div>

      {/* Bottom Interactive HUD & Domain Telemetry Card */}
      <div className="relative z-10 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/85 to-transparent border-t border-white/10 pointer-events-auto">
        {/* Active Domain Info Card */}
        <div className="mb-3 p-3 rounded-sm bg-white/5 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="space-y-0.5 text-left">
            <div className="flex items-center gap-2">
              <span
                className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-black"
                style={{ backgroundColor: activeDomain.colorHex }}
              >
                Domain {activeDomain.code}
              </span>
              <span className="font-serif text-sm sm:text-base font-bold text-white">
                {activeDomain.title}
              </span>
            </div>
            <p className="text-xs text-white/75 line-clamp-1 sm:line-clamp-none font-sans">
              {activeDomain.description}
            </p>
          </div>

          <div className="shrink-0 text-left sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 pt-1.5 sm:pt-0 sm:pl-3">
            <span className="block font-mono text-[10px] uppercase text-[#D4AF37] font-semibold tracking-wider">
              Signature Simulation
            </span>
            <span className="block text-xs font-medium text-white/90">
              {activeDomain.signature}
            </span>
          </div>
        </div>

        {/* 3 Domain Selector Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {DOMAINS.map((domain) => {
            const isSelected = domain.id === selectedId;
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => handleSelect(domain.id)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xs font-mono text-[11px] font-semibold uppercase tracking-wider transition-all border ${
                  isSelected
                    ? 'bg-white/15 text-white shadow-md'
                    : 'bg-black/40 text-white/60 hover:text-white hover:bg-white/5 border-white/10'
                }`}
                style={{
                  borderColor: isSelected ? domain.colorHex : undefined,
                  boxShadow: isSelected ? `0 0 12px ${domain.colorHex}33` : undefined,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: domain.colorHex }}
                />
                <span className="truncate">{domain.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
