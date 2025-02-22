import { useContext } from 'react';
import { HabitContext } from '../context/HabitContext.jsx';
import HabitItem from "./habit-info/HabitItem.jsx"
import "../styles/HabitList.css"

const HabitList = ( ) => {
    
    const { habits, loading } = useContext( HabitContext )

    if( loading ) return <span>Cargando habitos....</span>

    return (
        <>
            <h1>Mi lista de habitos</h1>

            <div className="habits-container">

                { 
                
                habits.length > 0 ? ( 

                habits.map( ({ id, name, days, status, note } ) =>(
                    <HabitItem
                        key={ id }
                        nombre = { name }
                        frecuencia = { days}
                        estado = { status }
                        nota = { note } />
            )))
            : <p> No hay hábitos para cargar </p>
            } 
            </div>
        </>
    )
}

export default HabitList;