import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { RouterProvider } from "react-router-dom";

import router from "./routes/route";
import ThemeContext, {
  getThemeLocalStorage,
  theme,
  toggleThemeLocalStorage,
} from "./contexts/theme.contex";

const Main: React.FC = () => {
  const [theme, setTheme] = useState<theme>(getThemeLocalStorage());

  const toggleTheme = () => {
    toggleThemeLocalStorage();
    setTheme((s) => {
      if (s == "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
