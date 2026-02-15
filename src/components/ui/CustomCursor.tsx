"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ease = 0.1; 

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1024px)").matches) {
      return;
    }

    const onMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      // CORRECTION 1 : Si le curseur n'était pas visible, on le "téléporte" 
      if (!isVisible) {
        currentPos.current = { x: e.clientX, y: e.clientY };
        setIsVisible(true);
      }

      const target = e.target as HTMLElement;
      if (!target || !target.tagName) return;

      const clickable = !!(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') || 
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
        
      setIsHovering(clickable);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);

    const animate = () => {
        if (!cursorRef.current) return;
        
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;
        
        // Le parent gère uniquement la position (X, Y)
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
        
        requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    // CORRECTION 2 : Structure Parent/Enfant.
    <div 
      ref={cursorRef}
      className={`hidden lg:block fixed top-0 left-0 pointer-events-none z-[9999]`}
      style={{ willChange: 'transform' }}
    >
      {/* L'enfant gère le style visuel via les variables CSS */}
      <div 
        className={`
          rounded-full border-2 transition-all duration-300 ease-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${isHovering 
              /* ÉTAT HOVER : Bordure Brand, Fond Brand 10%, Glow Brand */
              ? 'w-14 h-14 -mt-7 -ml-7 border-[var(--color-brand)] bg-[color-mix(in_srgb,var(--color-brand),transparent_90%)] shadow-[0_0_20px_var(--color-brand-glow)]' 
              /* ÉTAT DÉFAUT : Bordure Blanche 50% */
              : 'w-6 h-6 -mt-3 -ml-3 border-[var(--color-txt-main)]/50 bg-transparent'
          }
          ${isClicking ? 'scale-75' : 'scale-100'}
        `}
      >
        {/* Le point central blanc */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[var(--color-txt-main)] transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
      </div>
    </div>
  );
}