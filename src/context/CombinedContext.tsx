import { ReactNode } from "react";
import LangContextProvider from "./LangContext";
import ThemeContextProvider from "./ThemeContext";

interface CombinedContextProps {
  children: ReactNode;
}

export default function CombinedContext({ children }: CombinedContextProps) {
  return (
    <ThemeContextProvider>
      <LangContextProvider>{children}</LangContextProvider>
    </ThemeContextProvider>
  );
}
