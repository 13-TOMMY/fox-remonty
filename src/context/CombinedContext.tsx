import LangContextProvider from "./LangContext";
import ThemeContextProvider from "./ThemeContext";

export default function CombinedContext({ children }) {
  return (
      <ThemeContextProvider>
          <LangContextProvider>
              { children }
          </LangContextProvider>
    </ThemeContextProvider>
  )
}
