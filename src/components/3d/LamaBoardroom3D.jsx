import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

export const WOOD_THEMES = [
  { id: 'walnut', name: 'Executive Walnut', hex: '#3B271E', threeColor: 0x3b271e, brassColor: 0xd4af37, lightColor: 0xffe2b3 },
  { id: 'terracotta', name: 'LAMA Terracotta', hex: '#5C281E', threeColor: 0x5c281e, brassColor: 0xe59b72, lightColor: 0xffd5be },
  { id: 'obsidian', name: 'Smoked Obsidian', hex: '#1C1B1A', threeColor: 0x1f1e1d, brassColor: 0xd4af37, lightColor: 0xffeaae },
  { id: 'teak', name: 'Imperial Teak', hex: '#634428', threeColor: 0x634428, brassColor: 0xdfbe8c, lightColor: 0xffe8c6 },
];

/**
 * Generate a procedural luxury wood grain canvas texture
 */
function createWoodTexture(baseColorHex) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Base background
  ctx.fillStyle = baseColorHex;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle vertical wood grain striations
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  for (let i = 0; i < 60; i++) {
    const x = Math.random() * canvas.width;
    const w = 2 + Math.random() * 8;
    ctx.fillRect(x, 0, w, canvas.height);
  }

  // Soft warm grain highlights
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * canvas.width;
    const w = 1 + Math.random() * 5;
    ctx.fillRect(x, 0, w, canvas.height);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 2);
  return texture;
}

/**
 * Generate a procedural brushed metal texture for brass hardware
 */
function createBrushedMetalTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#D4AF37';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Linear brush strokes
  for (let y = 0; y < canvas.height; y += 2) {
    const alpha = (Math.random() * 0.12).toFixed(2);
    ctx.fillStyle = Math.random() > 0.5 ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;
    ctx.fillRect(0, y, canvas.width, 1.5);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function LamaBoardroom3D({
  isOpen = true,
  onToggle,
  activeThemeId = 'walnut',
  onSelectTheme,
}) {
  const containerRef = useRef(null);
  const leftDoorPivotRef = useRef(null);
  const rightDoorPivotRef = useRef(null);
  const doorMaterialsRef = useRef([]);
  const lightBeamMeshRef = useRef(null);
  const particlesRef = useRef(null);

  // Animation state
  const targetOpenRef = useRef(isOpen ? 1 : 0);
  const currentOpenRef = useRef(isOpen ? 1 : 0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    targetOpenRef.current = isOpen ? 1 : 0;
  }, [isOpen]);

  const activeTheme = WOOD_THEMES.find((t) => t.id === activeThemeId) || WOOD_THEMES[0];

  useEffect(() => {
    doorMaterialsRef.current.forEach((mat) => {
      if (mat) {
        mat.color.setHex(activeTheme.threeColor);
      }
    });
  }, [activeTheme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 780;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.1, 7.3);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 2. Textures
    const woodTexture = createWoodTexture(activeTheme.hex);
    const brushedBrassTexture = createBrushedMetalTexture();

    // 3. Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 0.95);
    scene.add(ambientLight);

    // Overhead warm spotlight catching door inlays & handles
    const topSpot = new THREE.SpotLight(0xfff7e6, 3.8, 18, Math.PI / 4, 0.4, 1.2);
    topSpot.position.set(0, 5.8, 4.5);
    scene.add(topSpot);

    // Warm golden room spill light (from inside the boardroom)
    const innerSpillLight = new THREE.PointLight(0xffdd99, 3.2, 12, 1.5);
    innerSpillLight.position.set(0, 1.2, -1.8);
    scene.add(innerSpillLight);

    // Cool subtle rim lights from flanks
    const leftRim = new THREE.DirectionalLight(0xd4af37, 1.4);
    leftRim.position.set(-6, 2, 2.5);
    scene.add(leftRim);

    const rightRim = new THREE.DirectionalLight(0xd4af37, 1.4);
    rightRim.position.set(6, 2, 2.5);
    scene.add(rightRim);

    // 4. Polished Dark Marble Floor with Dynamic Light Bounce
    const floorGeo = new THREE.PlaneGeometry(16, 12);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x111110,
      metalness: 0.85,
      roughness: 0.18,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.y = -3.12;
    scene.add(floorMesh);

    // Polished Floor Brass Divider Inlay Strip
    const floorStripGeo = new THREE.PlaneGeometry(9.5, 0.04);
    floorStripGeo.rotateX(-Math.PI / 2);
    const floorStripMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.12,
    });
    const floorStripMesh = new THREE.Mesh(floorStripGeo, floorStripMat);
    floorStripMesh.position.set(0, -3.11, 0.05);
    scene.add(floorStripMesh);

    // 5. Volumetric Golden Light Spill (Conical God-Ray when doors open)
    const beamGeo = new THREE.CylinderGeometry(0.3, 3.8, 5.5, 32, 1, true);
    beamGeo.rotateX(Math.PI / 2.2);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffd285,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    beamMesh.position.set(0, -0.6, -0.5);
    scene.add(beamMesh);
    lightBeamMeshRef.current = beamMesh;

    // 6. Floating Golden Atmospheric Dust / Bokeh Particles
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8.0;
      particlePos[i + 1] = -2.8 + Math.random() * 5.6;
      particlePos[i + 2] = -1.5 + Math.random() * 5.0;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffdf99,
      size: 0.042,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 7. Architectural Materials
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.94,
      roughness: 0.18,
      map: brushedBrassTexture,
    });

    const createWoodMaterial = () =>
      new THREE.MeshStandardMaterial({
        color: activeTheme.threeColor,
        roughness: 0.38,
        metalness: 0.15,
        map: woodTexture,
      });

    doorMaterialsRef.current = [];

    // 8. Architectural Header Architrave & Frame
    const frameGroup = new THREE.Group();
    scene.add(frameGroup);

    // Top horizontal lintel beam (Dark bronze)
    const lintelGeo = new THREE.BoxGeometry(11.4, 0.28, 0.55);
    const lintelMat = new THREE.MeshStandardMaterial({
      color: 0x161614,
      metalness: 0.88,
      roughness: 0.22,
    });
    const lintelMesh = new THREE.Mesh(lintelGeo, lintelMat);
    lintelMesh.position.set(0, 3.25, 0);
    frameGroup.add(lintelMesh);

    // Brushed Brass Trim along the bottom of the lintel
    const brassTrimGeo = new THREE.BoxGeometry(11.4, 0.045, 0.58);
    const brassTrimMesh = new THREE.Mesh(brassTrimGeo, brassMat);
    brassTrimMesh.position.set(0, 3.1, 0);
    frameGroup.add(brassTrimMesh);

    // Left and Right Outer Door Jambs
    const jambGeo = new THREE.BoxGeometry(0.28, 6.4, 0.5);
    const leftJamb = new THREE.Mesh(jambGeo, lintelMat);
    leftJamb.position.set(-4.62, 0, 0);
    frameGroup.add(leftJamb);

    const rightJamb = new THREE.Mesh(jambGeo, lintelMat);
    rightJamb.position.set(4.62, 0, 0);
    frameGroup.add(rightJamb);

    // 9. Build Luxury Fluted Boardroom Double Doors
    const doorWidth = 3.92;
    const doorHeight = 6.2;
    const doorThickness = 0.15;

    const buildDoorSlab = (isLeft) => {
      const pivot = new THREE.Group();
      const hingeX = isLeft ? -4.5 : 4.5;
      pivot.position.set(hingeX, 0, 0);

      const doorMeshGroup = new THREE.Group();
      doorMeshGroup.position.set(isLeft ? doorWidth / 2 : -doorWidth / 2, 0, 0);
      pivot.add(doorMeshGroup);

      // Base Door Slab
      const woodMat = createWoodMaterial();
      doorMaterialsRef.current.push(woodMat);

      const slabGeo = new THREE.BoxGeometry(doorWidth, doorHeight, doorThickness);
      const slabMesh = new THREE.Mesh(slabGeo, woodMat);
      doorMeshGroup.add(slabMesh);

      // Fluted Vertical Architectural Slats
      const slatCount = 15;
      const slatWidth = 0.085;
      const slatDepth = 0.045;
      const slatGeo = new THREE.BoxGeometry(slatWidth, doorHeight - 0.45, slatDepth);
      const slatMat = createWoodMaterial();
      doorMaterialsRef.current.push(slatMat);

      const startX = -doorWidth / 2 + 0.32;
      const stepX = (doorWidth - 0.64) / (slatCount - 1);

      for (let i = 0; i < slatCount; i++) {
        const slatMesh = new THREE.Mesh(slatGeo, slatMat);
        slatMesh.position.set(startX + i * stepX, 0, doorThickness / 2 + slatDepth / 2);
        doorMeshGroup.add(slatMesh);
      }

      // Brushed Brass Inset Frame Border
      const frameBorderGeo = new THREE.BoxGeometry(doorWidth - 0.22, doorHeight - 0.22, 0.02);
      const frameBorderMesh = new THREE.Mesh(frameBorderGeo, brassMat);
      frameBorderMesh.position.set(0, 0, doorThickness / 2 + 0.015);
      doorMeshGroup.add(frameBorderMesh);

      // Inner Wood Recessed Panel
      const innerRecessGeo = new THREE.BoxGeometry(doorWidth - 0.32, doorHeight - 0.32, 0.035);
      const innerRecessMesh = new THREE.Mesh(innerRecessGeo, woodMat);
      innerRecessMesh.position.set(0, 0, doorThickness / 2 + 0.025);
      doorMeshGroup.add(innerRecessMesh);

      // Circular Embossed LAMA Academy Brass Seal on Meeting Stile
      const sealGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.035, 32);
      sealGeo.rotateX(Math.PI / 2);
      const sealMesh = new THREE.Mesh(sealGeo, brassMat);
      const sealX = isLeft ? doorWidth / 2 - 0.38 : -doorWidth / 2 + 0.38;
      sealMesh.position.set(sealX, 0.2, doorThickness / 2 + 0.045);
      doorMeshGroup.add(sealMesh);

      // Inner ring of the seal
      const sealRingGeo = new THREE.TorusGeometry(0.32, 0.02, 16, 32);
      const sealRingMesh = new THREE.Mesh(sealRingGeo, brassMat);
      sealRingMesh.position.set(sealX, 0.2, doorThickness / 2 + 0.065);
      doorMeshGroup.add(sealRingMesh);

      // Heavy Executive Brass Tubular Pull Handle
      const handleGroup = new THREE.Group();
      const handleInnerX = isLeft ? doorWidth / 2 - 0.38 : -doorWidth / 2 + 0.38;
      handleGroup.position.set(handleInnerX, -0.4, doorThickness / 2 + 0.14);

      // Vertical Solid Handle Rod
      const handleBarGeo = new THREE.CylinderGeometry(0.046, 0.046, 2.4, 24);
      const handleBar = new THREE.Mesh(handleBarGeo, brassMat);
      handleGroup.add(handleBar);

      // Top and Bottom Mounting Stems
      const stemGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.16, 16);
      stemGeo.rotateX(Math.PI / 2);

      const topStem = new THREE.Mesh(stemGeo, brassMat);
      topStem.position.set(0, 1.0, -0.08);
      handleGroup.add(topStem);

      const btmStem = new THREE.Mesh(stemGeo, brassMat);
      btmStem.position.set(0, -1.0, -0.08);
      handleGroup.add(btmStem);

      doorMeshGroup.add(handleGroup);

      // Inscribed Brass Emblem Plate near handle
      const plateGeo = new THREE.BoxGeometry(0.3, 0.72, 0.02);
      const plateMesh = new THREE.Mesh(plateGeo, brassMat);
      plateMesh.position.set(handleInnerX, 1.6, doorThickness / 2 + 0.04);
      doorMeshGroup.add(plateMesh);

      return { pivot, doorMeshGroup, slabMesh };
    };

    const leftDoor = buildDoorSlab(true);
    const rightDoor = buildDoorSlab(false);

    scene.add(leftDoor.pivot);
    scene.add(rightDoor.pivot);

    leftDoorPivotRef.current = leftDoor.pivot;
    rightDoorPivotRef.current = rightDoor.pivot;

    // 10. Interactive Raycasting & Pointer Tracking
    const raycaster = new THREE.Raycaster();
    const clickMouse = new THREE.Vector2();

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      clickMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      clickMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(clickMouse, camera);
      const intersects = raycaster.intersectObjects([
        leftDoor.slabMesh,
        rightDoor.slabMesh,
      ], true);

      if (intersects.length > 0) {
        if (onToggle) onToggle();
      }
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    container.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);

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

    // 11. Render / Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth lerp for open/close animation
      currentOpenRef.current += (targetOpenRef.current - currentOpenRef.current) * 0.055;
      const openProgress = currentOpenRef.current;

      // Mouse smooth tracking for 3D spatial parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Camera subtle perspective tilt
      camera.position.x = mx * 0.38;
      camera.position.y = 0.1 + my * 0.22;
      camera.lookAt(0, 0, 0);

      // Swing doors smoothly on outer brass hinges
      const maxSwingAngle = Math.PI * 0.44; // ~79 degrees
      if (leftDoorPivotRef.current) {
        leftDoorPivotRef.current.rotation.y = -openProgress * maxSwingAngle;
      }
      if (rightDoorPivotRef.current) {
        rightDoorPivotRef.current.rotation.y = openProgress * maxSwingAngle;
      }

      // Volumetric light beam opacity tied to door openness
      if (lightBeamMeshRef.current) {
        lightBeamMeshRef.current.material.opacity = openProgress * (0.16 + Math.sin(elapsed * 1.5) * 0.03);
        lightBeamMeshRef.current.scale.set(
          0.8 + openProgress * 0.4,
          0.8 + openProgress * 0.4,
          1
        );
      }

      // Animate floating golden bokeh particles
      if (particlesRef.current) {
        const arr = particlesRef.current.geometry.attributes.position.array;
        for (let i = 1; i < arr.length; i += 3) {
          arr[i] += 0.0035;
          // Loop particles when they drift above door frame
          if (arr[i] > 3.2) {
            arr[i] = -2.8;
          }
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      woodTexture.dispose();
      brushedBrassTexture.dispose();
    };
  }, [onToggle]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto cursor-pointer z-20"
      title="Click doors to enter the War Room"
    />
  );
}
