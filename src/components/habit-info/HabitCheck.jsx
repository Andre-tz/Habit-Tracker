import { useContext, useEffect, useState } from "react";
import "../../styles/HabitCheck.css"
import { useNavigate } from "react-router-dom";
import { HabitContext } from "../../context/HabitContext";
import { useTranslation } from "react-i18next";

//Este componente me mostrara la infomacion resumida del habito

const HabitCheck = ( { name, state, onStatusChange } ) => {

    const { t } = useTranslation();
    
    const { setSelectedHabit, setEstado } = useContext( HabitContext)
    //Hook para navegar a otra página
    const navList = useNavigate( );

    const [itsChecked, setItsChecked ] = useState( false )
    
    const [ status, setStatus ] = useState( state )

    //dandole valores de los estados a mi Context
    useEffect( ()=>{
        console.log( "subiendo estado", status )
        setEstado( status );
    }, [ status ])
    

    //se ejecuta la funcion para  cambiar los estados del estado
    const toggleStatus = ()=>{
        let newStatus = ""
        if( status === t( "habit.pendiente" ) || status === t( "habit.no_complete" ) ) {
            newStatus= t( "habit.complete" )
        } else{
            newStatus = t( "habit.no_complete" )
        }
        onStatusChange( status, newStatus );
        setStatus( newStatus )
    }

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
            <input type="checkbox" name="habitCheck" className="habitCheck" checked={ itsChecked } onChange={ handleChange } onClick={ toggleStatus } />
            <h3 className="habit-name" onClick={ handleClick }>{ name }</h3>
            <p className="habit-estatus">{ itsChecked? t( "habit.complete" ) :  status }</p>
        </div>
    )
}

export default HabitCheck;