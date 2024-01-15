'use client';

import { ThemeProvider } from '@/lib/providers/theme-provider';
import { useEffect } from 'react';
import LoginProvider from './login-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
{children}
    </ThemeProvider>
  );
};

export default Providers;
