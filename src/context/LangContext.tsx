import { useState, createContext, useEffect, ReactNode } from "react";

interface LangContextProviderProps {
  children: ReactNode;
}
interface LangContextValue {
  language: string;
  toggleLanguage: () => void;
}

const defaultLangContextValue: LangContextValue = {
  language: "PL",
  toggleLanguage: () => {},
};

export const LangContext = createContext<LangContextValue>(
  defaultLangContextValue
);

export default function LangContextProvider({
  children,
}: LangContextProviderProps) {
  const [language, setLanguage] = useState("PL");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "PL" ? "ENG" : "PL";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LangContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
}
