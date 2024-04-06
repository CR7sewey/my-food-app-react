import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const allMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [searchTerm, setSearchTerm] = useState('');
    
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);

    //const [favorites, setFavorites] = useState([]);

    const fetchMeals = async(url,searchTerm) => {
        setLoading(true);
        try {
            const {data}= await axios(url.concat(searchTerm)); // return promise
            if (data.meals ===  null) {
                setMeals([]); // no data found !
                setLoading(false);
                return;
            }
            setMeals(data.meals);
            
        }
        catch (error) {
            console.log(error.response)
        }
        setLoading(false);
    }

    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl,'')
    }

    const selectMeal = (idMeal) => {
        for (let m of meals) {
            if (m.idMeal === idMeal) {
                setSelectedMeal(m)
                setShowModal(true);
                return;
            }
        }
      }

    const closeModal = () => {
        setSelectedMeal(null)
        setShowModal(false);
    }

    
    // nao podemos podr async na callback do useEffect!!
    useEffect(() => {
        if (!searchTerm) return // resolve o porblema de quando se fe surprise e dps normal essa refeicap nao aparecer (pq fica com dois requests)
        // .then or async/await (fecth api ou axios)
        console.log('AQUI2')
        fetchMeals(allMealsURL, searchTerm);
    }, [searchTerm]); // render every new ssearch term! 

    // only when application restarts
    useEffect(() => {
        console.log('AQUI')
        // .then or async/await (fecth api ou axios)
        fetchMeals(allMealsURL,'');
    }, []); // render every new ssearch term! 

    return (
        <AppContext.Provider value={{meals, loading, searchTerm, 
        setSearchTerm, fetchRandomMeal, setShowModal, showModal,
        setSelectedMeal, selectedMeal, selectMeal, closeModal,
        setFavorites, favorites}} >
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