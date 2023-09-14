import { ReactNode } from "react";
import LangContextProvider from "./LangContext";
import ThemeContextProvider from "./ThemeContext";

interface CombinedContextProps {
  children: ReactNode;
}

export default function CombinedContextProvider({
  children,
}: CombinedContextProps) {
  return (
    <ThemeContextProvider>
      <LangContextProvider>{children}</LangContextProvider>
    </ThemeContextProvider>
  );
}
