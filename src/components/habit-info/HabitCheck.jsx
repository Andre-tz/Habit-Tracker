import { useContext, useRef, useState } from "react";
import "../../styles/HabitCheck.css"
import { useNavigate } from "react-router-dom";
import { HabitContext } from "../../context/HabitContext";

//Este componente me mostrara la infomacion resumida del habito

const HabitCheck = ( {name } ) => {

    const { setSelectedHabit } = useContext( HabitContext)
    //Hook para navegar a otra página
    const navList = useNavigate( );

    const [itsChecked, setItsChecked ] = useState( false )

    //manejador de stado del check
    const handleChange = ( ) =>{ 
        setItsChecked( !itsChecked ) 
    }

    //manejador del evento click
    const handleClick = ( )=>{
        setSelectedHabit( name )
        navList( "/habit-list")
    }
    return (
        <div className="habit-check" onClick={ handleClick }>
            <input type="checkbox" name="habitCheck" className="habitCheck" checked={ itsChecked } onChange={ handleChange }/>
            <h3 className="habit-name">{ name }</h3>
            <p className="habit-estatus">{ itsChecked? "Completado" : "No completado" }</p>
        </div>
    )
}

export default HabitCheck;