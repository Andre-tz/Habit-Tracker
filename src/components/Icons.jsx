import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip"
import "../styles/Icons.css"

// este componente es de cada uno de los iconos 
const Icons = ( { id, icon, content, navigateTo, clickAction, tagId } )=>{

    const backPage = useNavigate( );

    //el manejador de click lo que hace es: si el componente tiene el props navigateTo me hara volver a la pagina anterior, en cambio si tiene la propiedad clickAction se ejecutara la funcion que mande
    const handleClick = () =>{
        if( navigateTo ){
            backPage( navigateTo )
        }else if( clickAction ){
            clickAction();
        }
    }
    return (
        <>
            <span id={ tagId } data-tooltip-id={ `tooltip-${ id }` } className="icon" onClick={ handleClick }>{ icon }</span>
            <Tooltip id={ `tooltip-${ id }` } place="bottom" content={ content } />
        </>
    )
}

export default Icons;