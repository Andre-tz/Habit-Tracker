import { useContext, useEffect, useState } from "react";
import "../../styles/HabitCheck.css"
import { useNavigate } from "react-router-dom";
import { HabitContext } from "../../context/HabitContext";
import { useTranslation } from "react-i18next";

//Este componente me mostrara la infomacion resumida del habito

const HabitCheck = ( { name, state, onStatusChange } ) => {

    const { t } = useTranslation();
    
    const { setSelectedHabit, setCountStatus } = useContext( HabitContext)
    //Hook para navegar a otra página
    const navList = useNavigate( );

    const [itsChecked, setItsChecked ] = useState( false )
    
    const [ status, setStatus ] = useState( state )

    useEffect( ()=>{
        if( status ){
            setCountStatus( prevCount => ( {
                ...prevCount,
                [ status ] : prevCount[ status ] + 1
            } ))
        }
        return 
    }, [ status ])

    //se ejecuta la funcion para  cambiar los estados del estado
    const toggleStatus = ()=>{
        const newStatus = status === t( "habit.pendiente" )? t( "habit.complete" ) : t( "habit.no_complete" )
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
            <p className="habit-estatus">{ itsChecked? t( "habit.complete" ) :  state }</p>
        </div>
    )
}

export default HabitCheck;