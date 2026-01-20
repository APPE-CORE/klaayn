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
    // Désactivation totale sur mobile (écrans < 1024px)
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1024px)").matches) {
      return;
    }

    const onMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      targetPos.current = { x: e.clientX, y: e.clientY };

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
    <div 
      ref={cursorRef}
      // hidden sur mobile, block à partir de lg (1024px)
      className={`hidden lg:block fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 transition-all duration-300 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${isHovering 
            ? 'w-14 h-14 -mt-7 -ml-7 border-[#7c1fac] bg-[#7c1fac]/10 shadow-[0_0_20px_rgba(124,31,172,0.4)]' 
            : 'w-6 h-6 -mt-3 -ml-3 border-white/50 bg-transparent'
        }
        ${isClicking ? 'scale-75' : 'scale-100'}
      `}
      style={{ willChange: 'transform' }}
    >
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
}