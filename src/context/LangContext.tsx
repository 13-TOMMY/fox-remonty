import React, { useState, createContext, useEffect } from "react";

export const LangContext = createContext();

export default function LangContextProvider({ lang }) {
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
