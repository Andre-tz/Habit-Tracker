import { useContext, useRef, useState } from "react";
import "../../styles/HabitCheck.css"
import { useNavigate } from "react-router-dom";
import { HabitContext } from "../../context/HabitContext";
import { useTranslation } from "react-i18next";

//Este componente me mostrara la infomacion resumida del habito

const HabitCheck = ( { name, state } ) => {

    const { t } = useTranslation();
    
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
        <div className="habit-check">
            <input type="checkbox" name="habitCheck" className="habitCheck" checked={ itsChecked } onChange={ handleChange } />
            <h3 className="habit-name" onClick={ handleClick }>{ name }</h3>
            <p className="habit-estatus">{ itsChecked? t( "habit.complete" ) :  state }</p>
        </div>
    )
}

export default HabitCheck;