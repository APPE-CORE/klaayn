"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

// On utilise 'any' pour les children ici afin d'éviter le conflit de types
// entre React 19 et la librairie Lenis qui est un peu plus ancienne.
export default function SmoothScroll({
  children,
}: {
  children: any;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}