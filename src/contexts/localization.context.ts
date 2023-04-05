import { createContext } from "react";
export type language = "id" | "en";
const LocalizationContext = createContext<{
  language: language;
  toggleLanguage: () => void;
}>({
  language: "id",
  toggleLanguage: function (): void {
    throw new Error("Function not implemented.");
  },
});

const getLanguageLocalStorage = () => {
  return localStorage.getItem("lang") as language;
};

function toggleLanguageLocalStorage() {
  const prevLang = getLanguageLocalStorage();
  return localStorage.setItem("lang", prevLang == "id" ? "en" : "id");
}

export { getLanguageLocalStorage, toggleLanguageLocalStorage };

export default LocalizationContext;
