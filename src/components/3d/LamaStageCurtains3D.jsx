import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

export const FABRIC_THEMES = [
  { id: 'gold', name: 'Imperial Gold', hex: '#D4AF37', threeColor: 0xd4af37, sheen: 0xffeaa7 },
  { id: 'terracotta', name: 'LAMA Terracotta', hex: '#C87549', threeColor: 0xc87549, sheen: 0xf3b89e },
  { id: 'bronze', name: 'Executive Bronze', hex: '#9E6D38', threeColor: 0x9e6d38, sheen: 0xdfbe8c },
  { id: 'charcoal', name: 'Midnight Charcoal', hex: '#232321', threeColor: 0x2a2a28, sheen: 0x6e6e6a },
  { id: 'burgundy', name: 'Royal Crimson', hex: '#7A1C2E', threeColor: 0x7a1c2e, sheen: 0xb55164 },
];

export function LamaStageCurtains3D({
  isOpen,
  onToggle,
  activeThemeId = 'gold',
  onSelectTheme,
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const curtainsGroupRef = useRef(null);
  const leftCurtainMeshRef = useRef(null);
  const rightCurtainMeshRef = useRef(null);
  const leftMaterialRef = useRef(null);
  const rightMaterialRef = useRef(null);
  const rodRef = useRef(null);
  const ringsRef = useRef([]);

  // Animation state references
  const animProgressRef = useRef(isOpen ? 0 : 1); // 0 = fully open (gathered), 1 = fully closed (extended)
  const targetProgressRef = useRef(isOpen ? 0 : 1);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const timeRef = useRef(0);

  // Sync open state with target
  useEffect(() => {
    targetProgressRef.current = isOpen ? 0 : 1;
  }, [isOpen]);

  // Sync active theme color
  const activeTheme = FABRIC_THEMES.find((t) => t.id === activeThemeId) || FABRIC_THEMES[0];
  useEffect(() => {
    if (leftMaterialRef.current && rightMaterialRef.current) {
      leftMaterialRef.current.color.setHex(activeTheme.threeColor);
      rightMaterialRef.current.color.setHex(activeTheme.threeColor);
      if (leftMaterialRef.current.sheenColor) {
        leftMaterialRef.current.sheenColor.setHex(activeTheme.sheen);
        rightMaterialRef.current.sheenColor.setHex(activeTheme.sheen);
      }
    }
  }, [activeTheme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 0.9);
    scene.add(ambientLight);

    // Key front light to catch pleat specular reflections
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(2, 4, 6);
    scene.add(keyLight);

    // Warm golden fill from below/side
    const fillLight = new THREE.DirectionalLight(0xffd59e, 1.4);
    fillLight.position.set(-3, -2, 4);
    scene.add(fillLight);

    // Rim light from behind
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 5, -2);
    scene.add(rimLight);

    // --- 1. Brass Rod, Finials & Rings ---
    const rodGroup = new THREE.Group();
    scene.add(rodGroup);
    rodRef.current = rodGroup;

    const rodMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.18,
      metalness: 0.88,
    });

    // Horizontal Rod spanning top
    const rodLength = 11.0;
    const rodGeo = new THREE.CylinderGeometry(0.08, 0.08, rodLength, 32);
    rodGeo.rotateZ(Math.PI / 2);
    const rodMesh = new THREE.Mesh(rodGeo, rodMaterial);
    rodMesh.position.set(0, 2.7, 0);
    rodGroup.add(rodMesh);

    // Left and Right Decorative Finials
    const finialGeo = new THREE.SphereGeometry(0.2, 32, 32);
    const leftFinial = new THREE.Mesh(finialGeo, rodMaterial);
    leftFinial.position.set(-rodLength / 2, 2.7, 0);
    rodGroup.add(leftFinial);

    const rightFinial = new THREE.Mesh(finialGeo, rodMaterial);
    rightFinial.position.set(rodLength / 2, 2.7, 0);
    rodGroup.add(rightFinial);

    // Rings along the rod
    const ringGeo = new THREE.TorusGeometry(0.12, 0.02, 16, 32);
    const rings = [];
    const ringCount = 14;
    for (let i = 0; i < ringCount; i++) {
      const ringMesh = new THREE.Mesh(ringGeo, rodMaterial);
      ringMesh.position.set(-4.5 + i * (9.0 / (ringCount - 1)), 2.7, 0);
      rodGroup.add(ringMesh);
      rings.push(ringMesh);
    }
    ringsRef.current = rings;

    // --- 2. Procedural Pleated Curtains ---
    const curtainGroup = new THREE.Group();
    scene.add(curtainGroup);
    curtainsGroupRef.current = curtainGroup;

    // Fabric Material with Silk / Velvet Sheen
    const createFabricMaterial = () =>
      new THREE.MeshStandardMaterial({
        color: activeTheme.threeColor,
        roughness: 0.32,
        metalness: 0.28,
        side: THREE.DoubleSide,
      });

    const leftMat = createFabricMaterial();
    const rightMat = createFabricMaterial();
    leftMaterialRef.current = leftMat;
    rightMaterialRef.current = rightMat;

    // Pleated Geometry generator
    const curtainWidth = 5.0;
    const curtainHeight = 6.2;
    const segX = 48;
    const segY = 32;

    const leftGeo = new THREE.PlaneGeometry(curtainWidth, curtainHeight, segX, segY);
    const rightGeo = new THREE.PlaneGeometry(curtainWidth, curtainHeight, segX, segY);

    // Store base vertices for procedural deformation
    const leftBasePositions = Float32Array.from(leftGeo.attributes.position.array);
    const rightBasePositions = Float32Array.from(rightGeo.attributes.position.array);

    const leftMesh = new THREE.Mesh(leftGeo, leftMat);
    const rightMesh = new THREE.Mesh(rightGeo, rightMat);

    curtainGroup.add(leftMesh);
    curtainGroup.add(rightMesh);

    leftCurtainMeshRef.current = { mesh: leftMesh, base: leftBasePositions };
    rightCurtainMeshRef.current = { mesh: rightMesh, base: rightBasePositions };

    // Raycaster for click on curtains to toggle
    const raycaster = new THREE.Raycaster();
    const clickMouse = new THREE.Vector2();

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      clickMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      clickMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(clickMouse, camera);
      const intersects = raycaster.intersectObjects([leftMesh, rightMesh]);
      if (intersects.length > 0) {
        if (onToggle) onToggle();
      }
    };
    container.addEventListener('click', handleClick);

    // Mouse Move for dynamic fabric sway
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Render / Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      timeRef.current += 0.02;

      // Smooth progress lerp (0 = open/gathered, 1 = closed/drawn)
      animProgressRef.current += (targetProgressRef.current - animProgressRef.current) * 0.055;
      const p = animProgressRef.current;

      // Mouse smooth lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update Left Curtain Geometry
      if (leftCurtainMeshRef.current) {
        const { mesh, base } = leftCurtainMeshRef.current;
        const pos = mesh.geometry.attributes.position;
        const arr = pos.array;

        // When open (p = 0): gathered to the left (-3.8)
        // When closed (p = 1): extends towards center (-1.35)
        const leftCenterX = -3.8 + p * 2.45;
        // When gathered, horizontal scale compresses
        const scaleX = 0.38 + p * 0.62;

        mesh.position.set(leftCenterX, -0.2, 0);

        for (let i = 0; i < base.length; i += 3) {
          const bx = base[i];
          const by = base[i + 1];

          // Compute realistic cylindrical pleat folds
          // Folds are denser & deeper when gathered (low p)
          const foldFrequency = 9.0;
          const foldDepth = 0.35 + (1 - p) * 0.35;
          const pleatZ = Math.sin((bx / curtainWidth) * foldFrequency * Math.PI * 2) * foldDepth;

          // Natural gathering curve along height
          const taper = 1.0 - Math.sin(((by + curtainHeight / 2) / curtainHeight) * Math.PI) * (1 - p) * 0.25;

          // Interactive sway from pointer
          const sway = Math.sin(by * 1.5 + timeRef.current + bx * 2) * 0.08 * (1 + Math.abs(mx));

          arr[i] = bx * scaleX * taper;
          arr[i + 1] = by;
          arr[i + 2] = pleatZ + sway;
        }
        pos.needsUpdate = true;
        mesh.geometry.computeVertexNormals();
      }

      // Update Right Curtain Geometry
      if (rightCurtainMeshRef.current) {
        const { mesh, base } = rightCurtainMeshRef.current;
        const pos = mesh.geometry.attributes.position;
        const arr = pos.array;

        // When open (p = 0): gathered to the right (+3.8)
        // When closed (p = 1): extends towards center (+1.35)
        const rightCenterX = 3.8 - p * 2.45;
        const scaleX = 0.38 + p * 0.62;

        mesh.position.set(rightCenterX, -0.2, 0);

        for (let i = 0; i < base.length; i += 3) {
          const bx = base[i];
          const by = base[i + 1];

          const foldFrequency = 9.0;
          const foldDepth = 0.35 + (1 - p) * 0.35;
          const pleatZ = Math.sin((bx / curtainWidth) * foldFrequency * Math.PI * 2) * foldDepth;
          const taper = 1.0 - Math.sin(((by + curtainHeight / 2) / curtainHeight) * Math.PI) * (1 - p) * 0.25;
          const sway = Math.sin(by * 1.5 + timeRef.current - bx * 2) * 0.08 * (1 + Math.abs(mx));

          arr[i] = bx * scaleX * taper;
          arr[i + 1] = by;
          arr[i + 2] = pleatZ + sway;
        }
        pos.needsUpdate = true;
        mesh.geometry.computeVertexNormals();
      }

      // Update Rings along rod based on curtain position
      if (ringsRef.current.length > 0) {
        const count = ringsRef.current.length;
        const half = Math.floor(count / 2);
        for (let i = 0; i < half; i++) {
          // Left rings
          const targetX = -4.8 + i * ((1.8 + p * 2.5) / half);
          ringsRef.current[i].position.x += (targetX - ringsRef.current[i].position.x) * 0.1;
        }
        for (let i = half; i < count; i++) {
          // Right rings
          const idx = i - half;
          const targetX = (4.8 - (half - 1 - idx) * ((1.8 + p * 2.5) / half));
          ringsRef.current[i].position.x += (targetX - ringsRef.current[i].position.x) * 0.1;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleClick);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onToggle]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto cursor-pointer z-20"
      title="Click curtains to draw open or closed"
    />
  );
}
