import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

interface LanguageProps {
  englishText: string;
  polishText: string;
}

function Language({ englishText, polishText }: LanguageProps) {
  const { language } = useContext(LangContext);
  const textContext = language === "eng" ? polishText : englishText;
  return <>{textContext}</>;
}

export default Language;
