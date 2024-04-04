import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const allMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealsURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {

    const [meals, setMeals] = useState([]);
    
    // nao podemos podr async na callback do useEffect!!
    useEffect(() => {
        // .then or async/await (fecth api ou axios)
        const fetchMeals = async(url) => {
            try {
                const {data}= await axios(url); // return promise
                setMeals(data.meals);
            }
            catch (error) {
                console.log(error.response)
            }
        }
        fetchMeals(allMealsURL);
    }, []);

    return (
        <AppContext.Provider value={{meals}} >
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