"use client";

import { useEffect } from "react";

import { useNav, NAV_ITEMS } from "@/context/nav-context";
import { useIntersectionObserver } from "@/hooks/use-intersector";

type NavItem = (typeof NAV_ITEMS)[number];

type NavSectionOptions = {
  threshold?: number;
  freezeOnceVisible?: boolean;
  initialIsIntersecting?: boolean;
};

export function useNavSection(navItem: NavItem, options?: NavSectionOptions) {
  const { isIntersecting, ref } = useIntersectionObserver(options);
  const { handleCurrentNav } = useNav();

  useEffect(() => {
    if (isIntersecting) {
      handleCurrentNav(navItem);
    }
  }, [isIntersecting, handleCurrentNav, navItem]);

  return { isIntersecting, ref };
}
