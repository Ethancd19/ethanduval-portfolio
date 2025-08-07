'use client'

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
      root.style.setProperty('--accent', '#00ffd1'); // teal
      root.style.setProperty('--color-background', '#0a0a0a');
      root.style.setProperty('--color-foreground', '#ededed');
      root.style.setProperty('--color-accent', '#00ffd1');
      root.style.setProperty('--color-accent-transparent', 'rgba(0, 255, 209, 0.1)');
      root.style.setProperty('--color-accent-border', 'rgba(0, 255, 209, 0.4)');
      root.style.setProperty('--color-accent-bg', 'rgba(0, 255, 209, 0.06)');
      root.style.setProperty('--color-accent-glow', 'rgba(0, 255, 209, 0.05)');
      root.style.setProperty('--color-card-bg', 'rgba(0, 0, 0, 0.6)');
      root.style.setProperty('--color-shadow', 'rgba(0, 0, 0, 0.3)');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
      root.style.setProperty('--accent', '#ff6b00'); // orange
      root.style.setProperty('--color-background', '#ffffff');
      root.style.setProperty('--color-foreground', '#171717');
      root.style.setProperty('--color-accent', '#ff6b00');
      root.style.setProperty('--color-accent-transparent', 'rgba(255, 107, 0, 0.1)');
      root.style.setProperty('--color-accent-border', 'rgba(255, 107, 0, 0.4)');
      root.style.setProperty('--color-accent-bg', 'rgba(255, 107, 0, 0.06)');
      root.style.setProperty('--color-accent-glow', 'rgba(255, 107, 0, 0.05)');
      root.style.setProperty('--color-card-bg', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--color-shadow', 'rgba(0, 0, 0, 0.1)');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };