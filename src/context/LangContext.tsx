import React, { useState, createContext, useEffect } from "react";

interface LangContextProviderProps {
  lang: boolean;
}
interface LangContextValue { 
  language: string;
  toggleLanguage: () => void;
}

export const LangContext = createContext <LangContextValue | undefined>(undefined);

export default function LangContextProvider({ lang } : LangContextProviderProps) {
  const [language, setLanguage] = useState("eng");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "eng" ? "pl" : "eng";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LangContext.Provider value={{ language, toggleLanguage }}>
      { lang }
    </LangContext.Provider>
  );
}
