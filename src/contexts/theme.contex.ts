import { createContext } from "react";

export type theme = "light" | "dark";

const ThemeContext = createContext<{ theme: theme; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: function (): void {
    throw new Error("Function not implemented.");
  },
});

const getThemeLocalStorage = () => {
  return localStorage.getItem("theme") as theme;
};

function toggleThemeLocalStorage() {
  const prevTheme = getThemeLocalStorage();
  return localStorage.setItem("theme", prevTheme == "dark" ? "light" : "dark");
}

export { toggleThemeLocalStorage, getThemeLocalStorage };

export default ThemeContext;
