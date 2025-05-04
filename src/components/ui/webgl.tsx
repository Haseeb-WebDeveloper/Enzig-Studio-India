"use client"

// components/FluidSimulation.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FluidSimulation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, fluid: THREE.Mesh;

  useEffect(() => {
    // Initialize the scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create fluid (you can use particles or other effects here)
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    fluid = new THREE.Mesh(geometry, material);
    scene.add(fluid);

    // Mouse movement event
    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update the fluid's position or simulation based on cursor
      fluid.position.x = mouseX * 2;
      fluid.position.y = -mouseY * 2;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animate function
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FluidSimulation;
