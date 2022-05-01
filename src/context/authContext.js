import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setisUserLoggedIn] = useState(false)
    const loginUser = () => {
        setisUserLoggedIn(true)
    }
    const logoutUser = () => {
        setisUserLoggedIn(false)
    }
    return (
        <AuthContext.Provider value={{ isUserLoggedIn, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}