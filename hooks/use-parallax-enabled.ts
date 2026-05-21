"use client";

import { useEffect, useState } from "react";

import { useMdUp } from "@/hooks/use-md-up";

/** True after mount on viewports ≥768px — avoids SSR/client style mismatches. */
export function useParallaxEnabled() {
  const mdUp = useMdUp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && mdUp;
}
