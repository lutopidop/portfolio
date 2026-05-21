"use client";

import { useState, createContext, useContext, useCallback } from "react";

type props = {
  children: React.ReactNode;
};
type NavContext = {
  currentIdx: number;
  handleCurrentNav: (item: (typeof NAV_ITEMS)[number]) => void;
};

const NAV_ITEMS = ["Home", "Projects", "Skills", "Resume", "Contact"] as const;

const navContext = createContext<NavContext | null>(null);

function NavContext({ children }: props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const handleCurrentNav = useCallback((item: (typeof NAV_ITEMS)[number]) => {
    const idx = NAV_ITEMS.findIndex((it) => it === item);
    setCurrentIdx(idx);
  }, []);

  return (
    <navContext.Provider
      value={{
        handleCurrentNav,
        currentIdx,
      }}
    >
      {children}
    </navContext.Provider>
  );
}

function useNav() {
  return useContext(navContext) as NavContext;
}

export default NavContext;
export { useNav, NAV_ITEMS };
