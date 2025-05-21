'use client'

import { HeroUIProvider} from '@heroui/react';
import { Layout } from '../components/layout/layout';
import { usePathname } from 'next/navigation';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signin'; 
    
  return (
    <HeroUIProvider>
      {isAuthPage ? children : <Layout>{children}</Layout>}
    </HeroUIProvider>
  );
}
