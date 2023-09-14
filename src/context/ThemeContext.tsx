import { useState, createContext, useEffect, ReactNode } from 'react';
interface ThemeContextValue {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}
interface ThemeContextProviderProps {
  theme: ReactNode;
}

export const ThemeContext = createContext < ThemeContextValue | undefined > (undefined);

export default function ThemeContextProvider( {theme} : ThemeContextProviderProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {theme}
    </ThemeContext.Provider>
  );
}
