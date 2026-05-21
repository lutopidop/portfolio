"use client";

import { useEffect, useState } from "react";

/** Matches Tailwind `lg:` breakpoint (1024px). */
const LG_QUERY = "(min-width: 1024px)";

export function useLgUp() {
  const [lgUp, setLgUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(LG_QUERY);
    const sync = () => setLgUp(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return lgUp;
}
