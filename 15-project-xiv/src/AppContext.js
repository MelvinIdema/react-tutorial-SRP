import React, {useState, createContext} from "react";
const AppContext = createContext();

function AppProvider(props) {
    const [theme, setTheme] = useState("dark");
    const [currency, setCurrency] = useState("USD");
    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    const value = {
        theme,
        toggleTheme,
        currency,
        setCurrency,
    }

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}

export {AppContext, AppProvider};