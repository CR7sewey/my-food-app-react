import { useGlobalContext } from '../context'
import { IoMdCloseCircle } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";


const Modal = () => {

    const { closeModal, selectedMeal} = useGlobalContext();
    
    
        const { idMeal, strMeal: title, strMealThumb: image, strInstructions: description, strSource: source} = selectedMeal;
        return (
            <aside className='modal-overlay'>
                <div className='modal-container'>
                <img src={image} className="img img modal-img" />
                <h4 style={{textAlign: 'center', fontSize: '50px'}}>{title}</h4>
                <p style={{fontSize: '20px', paddingLeft: '30px', textDecoration: 'underline'}}>Cooking Instructions</p>
                <p style={{paddingLeft: '30px'}}>{description}</p>
                <div className='center-icons'>
                    <a href={source} target="_blank" className="btn btn-hipster redirect-btn"><FaLocationArrow /></a>
                    <button className="btn btn-hipster close-btn" onClick={closeModal} ><IoMdCloseCircle /></button>
                </div>
                </div>
            </aside>
        )

}

export default Modal