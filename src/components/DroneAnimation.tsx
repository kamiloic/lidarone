'use client';

import { useEffect, useRef } from 'react';

export default function DroneAnimation() {
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Load Lottie player script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize animation after script loads
    script.onload = () => {
      if (lottieRef.current) {
        const lottiePlayer = lottieRef.current.querySelector('lottie-player') as HTMLElement;
        if (lottiePlayer) {
          lottiePlayer.addEventListener('error', (e: Event) => {
            console.error('Failed to load drone.json:', e);
            const errorMessage = document.getElementById('error-message');
            if (errorMessage) {
              errorMessage.style.display = 'block';
              setTimeout(() => {
                errorMessage.style.display = 'none';
              }, 5000);
            }
            lottiePlayer.style.display = 'none';
          });

          lottiePlayer.addEventListener('load', () => {
            console.log('Lottie animation loaded successfully');
          });

          // Animation variables
          let posX = 0;
          let posY = 0;
          let velocityX = 0.02;
          let velocityY = 0.015;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          let isLanded = false;

          // Animation loop
          function animateDrone() {
            // Update drone position based on scroll
            const scrolled = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
            const documentHeight = document.documentElement.scrollHeight;
            const footerHeight = 500;

            if (scrolled < windowHeight * 0.8) {
              const takeoffProgress = scrolled / (windowHeight * 0.8);
              posY = (0.1 - (takeoffProgress * 0.3)) * windowHeight;
              posX = takeoffProgress * windowWidth * 0.5;
              isLanded = false;
            } else if (scrolled >= windowHeight * 0.8 && scrolled < windowHeight * 4.5) {
              const flyProgress = (scrolled - windowHeight * 0.8) / (windowHeight * 3.7);
              const targets = [
                { x: 0.5 * windowWidth, y: -0.2 * windowHeight }, // end of takeoff
                { x: 0.2 * windowWidth, y: -0.2 * windowHeight }, // services section title area
                { x: 0.3 * windowWidth, y: 0.5 * windowHeight }, // below services - lower position
                { x: 0.7 * windowWidth, y: 0.55 * windowHeight }, // move across page below content
                { x: 0.85 * windowWidth, y: 0.2 * windowHeight }, // settle next to Contact from right
                { x: 0.5 * windowWidth, y: 0.15 * windowHeight } // middle before footer landing
              ];
              const numSegments = targets.length - 1;
              const segment = Math.floor(flyProgress * numSegments);
              const intraProgress = (flyProgress * numSegments) % 1;
              const from = targets[segment] || targets[targets.length - 1];
              const to = targets[segment + 1] || targets[targets.length - 1];
              posX = from.x + (to.x - from.x) * intraProgress;
              posY = from.y + (to.y - from.y) * intraProgress;
              isLanded = false;
            } else if (scrolled >= documentHeight - windowHeight - footerHeight) {
              const landingProgress = (scrolled - (documentHeight - windowHeight - footerHeight)) / footerHeight;
              const startX = 0.5 * windowWidth;
              const startY = 0.15 * windowHeight;
              posY = startY + (landingProgress * (0.25 - startY / windowHeight)) * windowHeight;
              posX = startX * (1 - landingProgress);
              if (landingProgress >= 0.9) {
                isLanded = true;
              }
            } else {
              posY = 0.3 * windowHeight;
              posX = 0.7 * windowWidth * 0.5;
              isLanded = false;
            }

            // Boundary checks (in pixels)
            const droneWidth = 200; // Lottie player width
            const droneHeight = 200; // Lottie player height
            if (posX <= -windowWidth / 2 + droneWidth / 2 || posX >= windowWidth / 2 - droneWidth / 2) {
              velocityX = -velocityX;
              posX = Math.max(-windowWidth / 2 + droneWidth / 2, Math.min(windowWidth / 2 - droneWidth / 2, posX));
            }
            if (posY <= -windowHeight / 2 + droneHeight / 2 || posY >= windowHeight / 2 - droneHeight / 2) {
              velocityY = -velocityY;
              posY = Math.max(-windowHeight / 2 + droneHeight / 2, Math.min(windowHeight / 2 - droneHeight / 2, posY));
            }

            // Apply tilt and position
            const tiltX = velocityY * 5;
            const tiltY = -velocityX * 5;
            lottiePlayer.style.transform = `translate(${posX}px, ${posY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

            requestAnimationFrame(animateDrone);
          }

          // Start animation
          animateDrone();

          // Responsive adjustments
          window.addEventListener('resize', () => {
            // Recalculate positions if needed
          });
        }
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Error Message */}
      <div
        id="error-message"
        className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-5 py-2.5 rounded z-30 hidden"
      >
        Failed to load drone animation.
      </div>

      {/* Lottie Animation */}
      <div
        ref={lottieRef}
        id="lottie-drone"
        className="fixed top-1/2 left-1/2 w-50 h-50 z-10 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {/* @ts-expect-error: Lottie player is a custom element not recognized by TypeScript */}
        <lottie-player
          src="/drone.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </div>
    </>
  );
}