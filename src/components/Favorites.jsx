import { useGlobalContext } from "../context";

const Favorites = () => {

    const { favorites, removeFavorites, selectMeal } = useGlobalContext();

    return (
        <div className="favorites">
            <div className="favorites-content">
                <h5>Favorites</h5>
                <div>
                <div className="favorites-container">
                    {favorites.map((singleMeal) => {
                        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
                        return (<div key={idMeal} className="favorite-item" >
                            <img src={image} className="favorites-img img" onClick={() => selectMeal(idMeal)} />
                            <button className='remove-btn' onClick={() => removeFavorites(idMeal)}>remove</button>
                      </div>)
                    })}
                </div>
                </div>
            </div>
        </div>

    )
}

export default Favorites