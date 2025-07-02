// app/page.tsx or pages/index.js

'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Home() {
  const canvasRef = useRef(null);
  const [countdown, setCountdown] = useState('');
  const targetDate = new Date(Date.now() + 20 * 24 * 60 * 60 * 1000); // +5 days

  useEffect(() => {
    // === Countdown Logic ===
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setCountdown('We have launched!');
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // === Three.js Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      sphere.rotation.x += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleSubscribe = () => {
    const email = document.getElementById('emailInput')?.value;
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }
    localStorage.setItem('subscribedEmail', email);
    alert('Thanks! We will notify you.');
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.title}>🚧 Our Premium Platform is Coming Soon</div>
        <div style={styles.subtitle}>Stay tuned! We’re launching something amazing.</div>
        <div style={styles.countdown}>{countdown}</div>
        <div style={styles.newsletter}>
          <input id="emailInput" placeholder="Enter your email" style={styles.input} />
          <button onClick={handleSubscribe} style={styles.button}>Notify Me</button>
        </div>
      </div>
      <canvas ref={canvasRef} style={styles.canvas}></canvas>
    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100vh',
    fontFamily: "'Segoe UI', sans-serif",
    background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
    overflow: 'hidden',
    color: 'white',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#cbd5e0',
    marginBottom: '2rem',
  },
  countdown: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  newsletter: {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    outline: 'none',
    width: '300px',
    maxWidth: '100%',
  },
  button: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'block',
  },
};
