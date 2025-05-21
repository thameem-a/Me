"use client";

import { createContext, useContext } from "react";

interface SidebarContext {
  collapsed: boolean;
  setCollapsed: () => void;
  isActive: (path: string) => boolean;
}

export const SidebarContext = createContext<SidebarContext>({
  collapsed: false,
  setCollapsed: () => {},
  isActive: () => false
});

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};