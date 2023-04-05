import { createContext } from "react";

const LocalizationContext = createContext<"id" | "en">("id");
export default LocalizationContext;
