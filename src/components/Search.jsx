import { useGlobalContext } from "../context";
import { useState } from "react";

const Search = () => {

    const {setSearchTerm, fetchRandomMeal} = useGlobalContext();
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (text) {
            setSearchTerm(text);
        }
    }

    const handleRandomMeal = () => {
        setText('');
        setSearchTerm('');
        fetchRandomMeal();
    }

    return (
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="type favorite meal" className="form-input" value={text} onChange={handleChange}/>
                <button type="submit" className="btn">Search</button>
                <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Surprise Me!</button>
            </form>
        </header>
    )
}

export default Search