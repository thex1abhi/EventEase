import { createContext, useContext } from "react";

const Appcontext = createContext()
export const AppProvider = ({ children }) => {
    const backendurl = import.meta.env.VITE_BACKEND_URL;

    return (
        <Appcontext.Provider value={{ backendurl }} >
            {children}
        </Appcontext.Provider>
    )
}

export const useAppContext = () => useContext(Appcontext)

