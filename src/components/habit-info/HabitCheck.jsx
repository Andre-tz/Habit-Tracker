import { useContext, useEffect, useState } from "react";
import "../../styles/HabitCheck.css"
import { useNavigate } from "react-router-dom";
import { HabitContext } from "../../context/HabitContext";
import { useTranslation } from "react-i18next";

//Este componente me mostrara la infomacion resumida del habito

const HabitCheck = ( { name, state, day } ) => {

    const { t } = useTranslation();
    
    const { setSelectedHabit, setHabitStatusList, habitStatusList } = useContext( HabitContext);
    //Hook para navegar a otra página
    const navList = useNavigate( );

    const [itsChecked, setItsChecked ] = useState( false );

    //este useEffect carga todos mis HabitCheck a mi habitStatusList
    useEffect( ()=>{
        setHabitStatusList( prevList =>{
            //con el metodo some veo si algun habito se duplica
            const existe= prevList.some( habit => habit.name === name && habit.day === day )
            // si eso pasa entonces solo retornamos la lista
            if( existe ) return prevList;

            // en caso de que no agregamos el nuevo habito a la cola
            return ( [
                ...prevList,
                { name, day, state }
            ])
        })

    }, [ ] )

    useEffect( ()=>{ console.log( habitStatusList ) }, [])

    //manejador de stado del check
    const handleChange = ( ) =>{ 
        //guardo el nuevo valor itsCheked ya que lo voy a usar
        const newChecked = !itsChecked;
        // el nuevo estado dependera de esto, si esta marcado el Check me devuele completado y si no el estado anterior
        const newStatus = newChecked? t( "habit.complete" ) : state 
        // cambio el estado del check para que se muestre visualmente en la app
        setItsChecked( newChecked);

        //aca modifico mi lista de HabitChecks
        setHabitStatusList( prevList =>{
            //return fuerzo al map a que me devuelva cada valor recorrido
             return prevList.map( habit =>{
                //si el habitCheck coincide con el que tengo guardado entonces devuelvo el habito modificando su estado
                if( habit.name === name && habit.day === day ){
                    return { ...habit, state : newStatus}
                }
                // si no lo es entonces devuelvo el mismo etado
                return habit;
            })
        })
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
            <p className={`habit-estatus ${ itsChecked? "complete" : "" }`}>{ itsChecked? t( "habit.complete" ) :  state }</p>
        </div>
    )
}

export default HabitCheck;