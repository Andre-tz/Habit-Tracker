import { useContext } from 'react';
import { HabitContext } from '../context/HabitContext.jsx';
import HabitItem from "./habit-info/HabitItem.jsx"
import "../styles/HabitList.css"

const HabitList = ( ) => {
    
    const { habits, loading } = useContext( HabitContext )

    const diasOrdenados = [ "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" ];

    if( loading ) return <span>Cargando habitos....</span>

    return (
        <section id='habit-list'>

            <h1 className='title'>Mi lista de habitos</h1>

            <div className="habits-container">

                { 
                
                habits.length > 0 ? ( 

                habits.map( ({ id, name, days, status, note } ) =>(
                    <HabitItem
                        key={ id }
                        id= { id }
                        nombre = { name.charAt( 0 ).toUpperCase()+name.slice( 1 ) }
                        frecuencia = { 
                            days
                                .sort( ( a, b ) => diasOrdenados.indexOf( a ) - diasOrdenados.indexOf( b ) )
                                .join( " - ") 
                            }
                        estado = { status }
                        nota = { note } />
            )))
            : <p className='message'> No hay hábitos para cargar </p>
            } 
            </div>
        </section>
    )
}

export default HabitList;