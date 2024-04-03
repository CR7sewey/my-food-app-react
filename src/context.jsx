import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    /**
     * Cenas da nossa app
     */
    const value = "Hello";

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
}

// CUSTOM HOOK
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export default AppContext
export { AppProvider }