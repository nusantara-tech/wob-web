"use client";

import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

/**
 * HeroUI v3 uses CSS-based configuration and does not require HeroUIProvider.
 * This boundary remains available for future client-side providers.
 */
export function Providers({ children }: ProvidersProps) {
  return children;
}
