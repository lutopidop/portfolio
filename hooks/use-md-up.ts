"use client";

import { useEffect, useState } from "react";

/** Matches Tailwind `md:` breakpoint (768px). */
const MD_QUERY = "(min-width: 768px)";

export function useMdUp() {
  const [mdUp, setMdUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MD_QUERY);
    const sync = () => setMdUp(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return mdUp;
}
