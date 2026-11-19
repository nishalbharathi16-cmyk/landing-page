import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCcw, Laptop, Compass, BookOpen } from 'lucide-react';

/**
 * Procedural canvas texture for the laptop screen displaying LAMA Digital Academy interface
 */
function createScreenTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext('2d');

  // Dark modern UI background
  ctx.fillStyle = '#0F172A';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Top header bar
  ctx.fillStyle = '#1E293B';
  ctx.fillRect(0, 0, canvas.width, 36);

  // LAMA Logo & Title
  ctx.fillStyle = '#C87549';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('LAMA ACADEMY', 18, 24);

  ctx.fillStyle = '#94A3B8';
  ctx.font = '11px monospace';
  ctx.fillText('DIGITAL LEARNING INTERFACE', 160, 24);

  // Live status dot
  ctx.fillStyle = '#10B981';
  ctx.beginPath();
  ctx.arc(canvas.width - 24, 18, 4, 0, Math.PI * 2);
  ctx.fill();

  // Left sidebar
  ctx.fillStyle = '#1E293B';
  ctx.fillRect(12, 48, 120, canvas.height - 60);

  ctx.fillStyle = '#64748B';
  ctx.font = '10px sans-serif';
  ctx.fillText('• War Room Sim', 22, 75);
  ctx.fillText('• P&L Modeling', 22, 105);
  ctx.fillText('• AI Co-Pilot', 22, 135);
  ctx.fillText('• Peer Debriefs', 22, 165);

  // Main Dashboard Card: Executive Decision Matrix
  ctx.fillStyle = '#1E293B';
  ctx.fillRect(144, 48, canvas.width - 156, 120);

  ctx.fillStyle = '#F8FAFC';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('Executive Readiness Telemetry', 160, 72);

  // Cyan & Amber metric graphs
  ctx.strokeStyle = '#0284C7';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(160, 140);
  ctx.bezierCurveTo(220, 130, 260, 95, 320, 105);
  ctx.bezierCurveTo(380, 115, 420, 80, 480, 88);
  ctx.stroke();

  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(160, 150);
  ctx.bezierCurveTo(240, 150, 300, 120, 480, 118);
  ctx.stroke();

  // Bottom two metric cards
  ctx.fillStyle = '#1E293B';
  ctx.fillRect(144, 180, 170, 128);
  ctx.fillRect(326, 180, canvas.width - 338, 128);

  ctx.fillStyle = '#C87549';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('8 COURSES', 160, 215);
  ctx.fillStyle = '#94A3B8';
  ctx.font = '11px sans-serif';
  ctx.fillText('Leadership Suite', 160, 235);

  ctx.fillStyle = '#0284C7';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('3 DOMAINS', 342, 215);
  ctx.fillStyle = '#94A3B8';
  ctx.font = '11px sans-serif';
  ctx.fillText('Tech, P&L, People', 342, 235);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  return texture;
}

export function Academy3DScene({ className = '' }) {
  const containerRef = useRef(null);
  const [activeHoverNode, setActiveHoverNode] = useState(null);
  const [isAutoOrbit, setIsAutoOrbit] = useState(true);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      return;
    }

    let width = container.clientWidth || 580;
    let height = container.clientHeight || 520;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x111622, 0.045);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(3.8, 3.2, 6.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting System
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 0.85);
    scene.add(ambientLight);

    // Primary architectural key sunlight
    const sunLight = new THREE.DirectionalLight(0xfffaea, 2.6);
    sunLight.position.set(5, 8, 4);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    // Cyan fill light for modern tech ambiance
    const cyanFill = new THREE.DirectionalLight(0x38bdf8, 1.2);
    cyanFill.position.set(-5, 3, -3);
    scene.add(cyanFill);

    // Warm terracotta interior spot
    const interiorSpot = new THREE.PointLight(0xc87549, 2.2, 8, 1.2);
    interiorSpot.position.set(0, 1.8, 0);
    scene.add(interiorSpot);

    // 3. Materials
    const darkStoneMat = new THREE.MeshStandardMaterial({
      color: 0x1e2532,
      roughness: 0.35,
      metalness: 0.45,
    });

    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.22,
    });

    const terracottaMat = new THREE.MeshStandardMaterial({
      color: 0xc87549,
      metalness: 0.45,
      roughness: 0.3,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.88,
      opacity: 0.95,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      thickness: 0.25,
    });

    // 4. Stepped Architectural Academy Plinth (Base)
    const baseGroup = new THREE.Group();
    scene.add(baseGroup);

    // Bottom wide circular step
    const step1Geo = new THREE.CylinderGeometry(3.6, 3.8, 0.18, 48);
    const step1Mesh = new THREE.Mesh(step1Geo, darkStoneMat);
    step1Mesh.position.y = -1.1;
    step1Mesh.receiveShadow = true;
    baseGroup.add(step1Mesh);

    // Second rectangular podium
    const podiumGeo = new THREE.BoxGeometry(4.2, 0.22, 3.8);
    const podiumMesh = new THREE.Mesh(podiumGeo, darkStoneMat);
    podiumMesh.position.y = -0.9;
    podiumMesh.receiveShadow = true;
    baseGroup.add(podiumMesh);

    // Brass perimeter inlay ring
    const ringGeo = new THREE.TorusGeometry(3.65, 0.025, 16, 64);
    ringGeo.rotateX(Math.PI / 2);
    const ringMesh = new THREE.Mesh(ringGeo, brassMat);
    ringMesh.position.y = -1.0;
    baseGroup.add(ringMesh);

    // 5. Modern Architectural Academy Structure (Pavilion & Columns)
    const academyGroup = new THREE.Group();
    scene.add(academyGroup);

    // 4 Slender architectural columns
    const columnGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.4, 24);
    const colCoords = [
      [-1.4, -1.2],
      [1.4, -1.2],
      [-1.4, 1.2],
      [1.4, 1.2],
    ];

    colCoords.forEach(([cx, cz]) => {
      const colMesh = new THREE.Mesh(columnGeo, brassMat);
      colMesh.position.set(cx, 0.4, cz);
      colMesh.castShadow = true;
      academyGroup.add(colMesh);
    });

    // Cantilevered Architectural Roof Canopy (Sleek dark slab with brass trim)
    const roofGeo = new THREE.BoxGeometry(3.4, 0.18, 3.0);
    const roofMesh = new THREE.Mesh(roofGeo, darkStoneMat);
    roofMesh.position.set(0, 1.65, 0);
    roofMesh.castShadow = true;
    academyGroup.add(roofMesh);

    const roofTrimGeo = new THREE.BoxGeometry(3.44, 0.035, 3.04);
    const roofTrimMesh = new THREE.Mesh(roofTrimGeo, brassMat);
    roofTrimMesh.position.set(0, 1.56, 0);
    academyGroup.add(roofTrimMesh);

    // Frosted Glass Rear Architectural Wall
    const glassWallGeo = new THREE.BoxGeometry(2.8, 2.3, 0.06);
    const glassWall = new THREE.Mesh(glassWallGeo, glassMat);
    glassWall.position.set(0, 0.4, -1.18);
    academyGroup.add(glassWall);

    // LAMA Architectural Seal on back wall
    const sealGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.02, 32);
    sealGeo.rotateX(Math.PI / 2);
    const sealMesh = new THREE.Mesh(sealGeo, brassMat);
    sealMesh.position.set(0, 0.9, -1.14);
    academyGroup.add(sealMesh);

    // 6. Realistic Laptop / Digital Learning Interface
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0.65, -0.4, 0.65);
    laptopGroup.rotation.y = -Math.PI / 5;
    scene.add(laptopGroup);

    // Laptop Pedestal / Table
    const tableGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.7, 32);
    const tableMesh = new THREE.Mesh(tableGeo, darkStoneMat);
    tableMesh.position.y = -0.45;
    tableMesh.receiveShadow = true;
    laptopGroup.add(tableMesh);

    // Laptop Base chassis
    const laptopBaseGeo = new THREE.BoxGeometry(0.95, 0.035, 0.68);
    const laptopBaseMat = new THREE.MeshStandardMaterial({
      color: 0xc8d1dc,
      metalness: 0.88,
      roughness: 0.25,
    });
    const laptopBase = new THREE.Mesh(laptopBaseGeo, laptopBaseMat);
    laptopBase.position.y = -0.08;
    laptopBase.castShadow = true;
    laptopGroup.add(laptopBase);

    // Laptop Screen Display (Rotated up ~105 deg)
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, -0.06, -0.32);
    screenGroup.rotation.x = -Math.PI * 0.12;

    const screenLidGeo = new THREE.BoxGeometry(0.95, 0.65, 0.025);
    const screenLid = new THREE.Mesh(screenLidGeo, laptopBaseMat);
    screenLid.position.y = 0.32;
    screenGroup.add(screenLid);

    const screenTex = createScreenTexture();
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTex,
    });
    const screenDisplayGeo = new THREE.PlaneGeometry(0.9, 0.58);
    const screenDisplay = new THREE.Mesh(screenDisplayGeo, screenMat);
    screenDisplay.position.set(0, 0.32, 0.015);
    screenGroup.add(screenDisplay);

    laptopGroup.add(screenGroup);

    // 7. Floating Educational Elements
    const elementsGroup = new THREE.Group();
    scene.add(elementsGroup);

    // A. Floating Executive Degree Scroll / Diploma
    const scrollGroup = new THREE.Group();
    scrollGroup.position.set(-1.1, 0.25, 0.8);
    scrollGroup.rotation.z = Math.PI / 8;
    scrollGroup.rotation.y = Math.PI / 4;

    const scrollGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.85, 24);
    const scrollMat = new THREE.MeshStandardMaterial({
      color: 0xf6f2e9,
      roughness: 0.45,
      metalness: 0.08,
    });
    const scrollMesh = new THREE.Mesh(scrollGeo, scrollMat);
    scrollGroup.add(scrollMesh);

    // Red/Terracotta Silk Ribbon Ring on scroll
    const ribbonGeo = new THREE.CylinderGeometry(0.125, 0.125, 0.18, 24);
    const ribbonMesh = new THREE.Mesh(ribbonGeo, terracottaMat);
    scrollGroup.add(ribbonMesh);
    elementsGroup.add(scrollGroup);

    // B. Floating Geometric Executive Cube (Leadership Matrix)
    const cubeGeo = new THREE.BoxGeometry(0.38, 0.38, 0.38);
    const cubeMesh = new THREE.Mesh(cubeGeo, brassMat);
    cubeMesh.position.set(-0.9, 1.2, 0.4);
    cubeMesh.castShadow = true;
    elementsGroup.add(cubeMesh);

    // Outer wireframe cage for cube
    const cageGeo = new THREE.BoxGeometry(0.48, 0.48, 0.48);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    cubeMesh.add(cageMesh);

    // C. Interconnected Knowledge Nodes & Laser Splines
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);

    const nodeCoords = [
      new THREE.Vector3(-0.8, -0.2, 1.2),
      new THREE.Vector3(1.1, 0.6, 0.2),
      new THREE.Vector3(0.1, 1.4, 0.8),
    ];
    const nodeSpheres = [];

    nodeCoords.forEach((pt, i) => {
      const sGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const sMat = new THREE.MeshStandardMaterial({
        color: i === 0 ? 0x0284c7 : i === 1 ? 0xc87549 : 0xd4af37,
        emissive: i === 0 ? 0x0284c7 : i === 1 ? 0xc87549 : 0xd4af37,
        emissiveIntensity: 0.5,
      });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      sMesh.position.copy(pt);
      nodesGroup.add(sMesh);
      nodeSpheres.push(sMesh);
    });

    // Spline curve connecting nodes
    const curve = new THREE.CatmullRomCurve3(nodeCoords);
    const splineGeo = new THREE.TubeGeometry(curve, 32, 0.012, 8, false);
    const splineMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });
    const splineMesh = new THREE.Mesh(splineGeo, splineMat);
    nodesGroup.add(splineMesh);

    // 8. Ambient Atmospheric Dust / Light Particles
    const pCount = 90;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pPositions[i] = (Math.random() - 0.5) * 6.0;
      pPositions[i + 1] = -1.0 + Math.random() * 3.5;
      pPositions[i + 2] = (Math.random() - 0.5) * 6.0;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // 9. Interactive Mouse Parallax & Drag Orbit
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let sceneAngle = 0;
    let targetAngle = 0;
    let camHeight = 3.2;

    const onPointerDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.targetX = nx;
      mouse.targetY = ny;

      if (isDragging) {
        const dx = e.clientX - prevMouseX;
        const dy = e.clientY - prevMouseY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        targetAngle += dx * 0.007;
        camHeight = Math.max(1.8, Math.min(4.8, camHeight - dy * 0.008));
      }
    };

    const onPointerUp = () => {
      isDragging = false;
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

    // 10. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle auto orbit
      if (isAutoOrbit && !isDragging) {
        targetAngle += 0.0018;
      }

      // Smooth camera position with parallax drift
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      sceneAngle += (targetAngle - sceneAngle) * 0.06;
      const camRadius = 7.2;
      camera.position.x = Math.sin(sceneAngle) * camRadius + mouse.x * 0.45;
      camera.position.z = Math.cos(sceneAngle) * camRadius;
      camera.position.y = camHeight + mouse.y * 0.35;
      camera.lookAt(0, 0.4, 0);

      // Gentle floating animation of educational elements
      scrollGroup.position.y = 0.25 + Math.sin(elapsed * 1.5) * 0.08;
      scrollGroup.rotation.y = Math.PI / 4 + Math.sin(elapsed * 0.8) * 0.15;

      cubeMesh.position.y = 1.2 + Math.cos(elapsed * 1.8) * 0.06;
      cubeMesh.rotation.y = elapsed * 0.4;
      cubeMesh.rotation.x = Math.sin(elapsed * 0.5) * 0.2;

      // Floating knowledge nodes
      nodeSpheres.forEach((ns, idx) => {
        ns.position.y += Math.sin(elapsed * 2.0 + idx * 2.0) * 0.002;
      });

      // Drifting dust particles
      const posArr = particles.geometry.attributes.position.array;
      for (let i = 1; i < posArr.length; i += 3) {
        posArr[i] += 0.0025;
        if (posArr[i] > 3.0) posArr[i] = -1.0;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

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
      screenTex.dispose();
    };
  }, [isAutoOrbit]);

  if (!webGlSupported) {
    return (
      <div className={`relative w-full h-[450px] lg:h-[520px] rounded-2xl overflow-hidden bg-[#162032] border border-white/10 flex items-center justify-center p-6 ${className}`}>
        <img
          src="/images/hero-training.jpg"
          alt="LAMA Digital Academy"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white">
          <Sparkles className="mx-auto mb-2 text-[#C87549]" size={32} />
          <h4 className="font-serif font-bold text-lg">LAMA 3D Digital Academy</h4>
          <p className="text-xs text-white/70 max-w-xs mt-1">Interactive 3D Executive Learning Environment</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-[460px] sm:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#141B29] to-[#0D121D] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between ${className}`}>
      
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        title="Drag to orbit 360° • Mouse cursor creates subtle parallax"
      />

      {/* Top HUD Overlay Bar */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">
            3D Digital Academy Environment
          </span>
        </div>

        {/* Orbit Mode Switcher */}
        <button
          type="button"
          onClick={() => setIsAutoOrbit((prev) => !prev)}
          className={`pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono transition-all backdrop-blur-md border ${
            isAutoOrbit
              ? 'bg-[#C87549]/30 border-[#C87549] text-white shadow-xs'
              : 'bg-black/50 border-white/15 text-white/70 hover:text-white'
          }`}
          title="Toggle Auto Orbit"
        >
          <RotateCcw size={11} className={isAutoOrbit ? 'animate-spin' : ''} style={{ animationDuration: '6s' }} />
          <span>{isAutoOrbit ? 'Auto-Orbit' : 'Manual'}</span>
        </button>
      </div>

      {/* Subtle Spatial Interaction Hint */}
      <div className="relative z-10 text-center pointer-events-none select-none my-auto opacity-70">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50">
          Drag to inspect 360&deg; &bull; Cursor parallax response
        </p>
      </div>

      {/* Bottom Interactive Feature Strip */}
      <div className="relative z-10 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent border-t border-white/10 pointer-events-auto">
        <div className="grid grid-cols-3 gap-2">
          
          <div className="p-2.5 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-left">
            <div className="flex items-center gap-1.5 text-[#0284C7] mb-1">
              <Laptop size={13} />
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider">Interface</span>
            </div>
            <p className="text-xs text-white/90 font-medium">Digital Learning Hub</p>
            <p className="text-[10px] text-white/60">AI Decision Telemetry</p>
          </div>

          <div className="p-2.5 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-left">
            <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
              <Compass size={13} />
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider">War Room</span>
            </div>
            <p className="text-xs text-white/90 font-medium">Architectural Pavilion</p>
            <p className="text-[10px] text-white/60">Live Crisis Simulations</p>
          </div>

          <div className="p-2.5 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-left">
            <div className="flex items-center gap-1.5 text-[#C87549] mb-1">
              <BookOpen size={13} />
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider">Curriculum</span>
            </div>
            <p className="text-xs text-white/90 font-medium">8 Core Courses</p>
            <p className="text-[10px] text-white/60">P&amp;L, Tech, &amp; People</p>
          </div>

        </div>
      </div>

    </div>
  );
}
