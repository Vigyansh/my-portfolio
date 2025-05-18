'use client';

import { useEffect, useRef } from 'react';
import Particles from '@tsparticles/react';
import { loadLinksPreset } from '@tsparticles/preset-links';
import { tsParticles } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      loadLinksPreset(tsParticles);
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: '#09090b' },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 3,
            },
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
            },
          },
          color: {
            value: ['#38bdf8', '#8b5cf6', '#22d3ee'], // Tailwind-inspired futuristic blue/purple/cyan
            animation: {
              enable: true,
              speed: 20,
              sync: false,
            },
          },
          shape: {
            type: 'star', // Can try polygon, star, etc.
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          links: {
            enable: true,
            color: '#ffffff',
            distance: 120,
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
            trail: {
              enable: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
