import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [receipts, setReceipts] = useState([]);
    
    // nao podemos podr async na callback do useEffect!!
    useEffect(() => {
        // .then or async/await (fecth api ou axios)
        const fetchData = async() => {
            try {
                const response = await fetch('https://randomuser.me/api/'); // return promise
                const data = await response.json();
                console.log(data)
                return data
            }
            catch (error) {
                console.log(error)
            }
        }
        setReceipts(fetchData());
    }, []);

    return (
        <AppContext.Provider value="" >
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