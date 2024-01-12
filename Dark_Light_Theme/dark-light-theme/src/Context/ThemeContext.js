import { createContext, useContext, useState, useEffect } from "react";

const themeContext = createContext();

export const useTheme = () => {
    return useContext(themeContext)
}

export const ThemeProvider = ({children}) => {
    const [isDark, setisDark] = useState(false);
    const toggleTheme = () => {
        setisDark((prev) => !prev)
    }
    const theme = isDark ? 'dark' : 'light'
    useEffect(() => {
     document.documentElement.setAttribute('data-theme', theme)
    }, [isDark])
    
    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    )

}