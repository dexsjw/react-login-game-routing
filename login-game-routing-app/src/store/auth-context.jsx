import { createContext, useState } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    loginHandler: () => {},
    logoutHandler: () => {}
});

export function AuthContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = () => {
        setIsLoggedIn(prevState => !prevState);
    }

    const logoutHandler = () => {
        setIsLoggedIn(prevState => !prevState);
    }

    const context = {
        isLoggedIn,
        loginHandler,
        logoutHandler
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}