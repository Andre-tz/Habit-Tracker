import { useContext, useEffect } from 'react';
import HabitItem from './HabitItem.jsx';
import { HabitContext } from '../context/HabitContext.jsx';

const HabitList = ( ) => {
    
    const habits = useContext( HabitContext )

    useEffect ( ()=>{
        console.log( habits )
    }, [])
    return (
        <>
            <h1>Mi lista de habitos</h1>

            <HabitItem
            nombre= "Correr"
            frecuencia = " lunes, martes, miercoes"
            estado= "No completado"
            notas= "-" />
        </>
        
    )
}

export default HabitList;