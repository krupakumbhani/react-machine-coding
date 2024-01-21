import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    const [isLogin, setisLogin] = useState(false)
  
    const login = (token) => {
        localStorage.setItem('token',token)
        setToken(token)
        setisLogin(true)
    }
    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
        setisLogin(false)
    }

    return (
        <AuthContext.Provider value={{token, isLogin, setisLogin, login, logout}}> {children} </AuthContext.Provider>
    )
}

export  const useAuth = () => {
    return useContext(AuthContext)
}