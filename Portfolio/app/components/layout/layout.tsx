"use client";

import React from "react";
import { useLockedBody } from "../hooks/useBodyLock";
import { SidebarWrapper } from "../sidebar/sidebar";
import { SidebarContext } from "./layout-context";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const pathname = usePathname();
  
  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
    setLocked(!collapsed);
  };
  
  const isActive = (path: string) => pathname === path;

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        setCollapsed: handleToggleSidebar,
        isActive
      }}
    >
      <section className='flex'>
        <SidebarWrapper />
        <div className="flex-1">
          {children} 
        </div>
      </section>
    </SidebarContext.Provider>
  );
};