import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0x7b2cbf, 2);
    pointLight1.position.set(2, 3, 4);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x0077ff, 2);
    pointLight2.position.set(-2, -3, -4);
    scene.add(pointLight2);
    // Create a silhouette
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    // Create custom shader material for holographic effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: {
          value: 0
        },
        color1: {
          value: new THREE.Color(0x7b2cbf)
        },
        color2: {
          value: new THREE.Color(0xff9e80)
        }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vec3 color = mix(color1, color2, sin(vPosition.y * 5.0 + time) * 0.5 + 0.5);
          float opacity = 0.3 + 0.2 * sin(vUv.y * 10.0 + time * 2.0);
          opacity *= smoothstep(0.0, 0.2, vUv.y) * (1.0 - smoothstep(0.8, 1.0, vUv.y));
          gl_FragColor = vec4(color, opacity);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
    const silhouette = new THREE.Mesh(geometry, material);
    scene.add(silhouette);
    // Position camera
    camera.position.z = 5;
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Update uniforms
      material.uniforms.time.value += 0.01;
      // Rotate silhouette
      silhouette.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} className="absolute inset-0" />;
};