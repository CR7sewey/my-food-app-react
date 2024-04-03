import { useGlobalContext } from "../context";

const Meals = () => {
    const context = useGlobalContext();
    return (
        <h1>Meals COmponent - {context}</h1>
    )
}

export default Meals