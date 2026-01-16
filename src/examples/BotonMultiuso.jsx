import './botonMultiuso.scss';

const BotonMultiuso = (props) => {
    return (
        <button 
            className="boton" onClick={() => alert(`Has hecho click en ${props.children}`)}>
            {props.children}
        </button>
    )
}

export default BotonMultiuso;