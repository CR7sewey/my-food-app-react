import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from 'react-icons/bs'

const Meals = () => {
    const {meals, loading, selectMeal} = useGlobalContext();
    console.log(meals, 'ajajas')
    if (loading) {
      return (
        <section className="section-center">
          <h4>We are loading the data, please wait a bit...</h4>
        </section>
      )
    }
    if (meals.length === 0 && loading === false) {
      return (
        <section className="section-center">
          <h4>No data found :(. There are no meals to match your serach. Please try again!</h4>
        </section>
      )
    }

    /*const openMeal = (e) => {
      e.preventDefault()
      console.log(e.target)
    }*/

    return (
      <section className="section-center">
        {meals.map((singleMeal) => {
            const { idMeal, strMeal: title, strMealThumb: image} = singleMeal;
            return (<article key={idMeal} className="single-meal">
            <img src={image} style={{width: '100%'}} className="img" onClick={() => selectMeal(idMeal)} />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">< BsHandThumbsUp /></button>
            </footer>
            </article>)
        })}
      </section>
    )
}

export default Meals