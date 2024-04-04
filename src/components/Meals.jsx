import { useGlobalContext } from "../context";

const Meals = () => {
    const {meals} = useGlobalContext();
    console.log(meals, 'ajajas')
    return (
      <section>
        {meals.map((obj) => (
            <h4 key={obj.idMeal}>{obj.idMeal}</h4>
        ))}
      </section>
    )
}

export default Meals