import { createContext } from "react";
import { Locale } from "../core/constant";

interface IContext {
    language: Locale;
    setLanguage: React.Dispatch<React.SetStateAction<Locale>>;
}

const Store = createContext<Partial<IContext>>({});

export default Store;