import { useContext, useEffect } from 'react';
import { HabitContext } from '../context/HabitContext.jsx';
import HabitItem from "./habit-info/HabitItem.jsx"
import "../styles/HabitList.css"
import upperCase from '../helper/upperCase.js';
import { motion } from 'framer-motion';
import PageAnimation from './animation/PageAnimation.jsx';

const HabitList = ( ) => {
    
    const { habits, loading, selectedHabit, setSelectedHabit } = useContext( HabitContext )


    //Con este useEffect busco en el localStorage  el habito que muest
    useEffect ( ( ) =>{
        if( selectedHabit){
            const habitElement = document.getElementById( selectedHabit );
            if( habitElement ){
                habitElement.scrollIntoView ( {
                    behavior : "smooth",
                    block: "center"
                })
            }

            //Eliminado la clase 
            setTimeout(() => {
                setSelectedHabit( null )
            }, (5000));
        }
    }, [ selectedHabit ]);

    const diasOrdenados = [ "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" ];

    if( loading ) return <span>Cargando habitos....</span>

    return (
        <PageAnimation>
            <section id='habit-list'>
                    
                    <h1 className='title'>Mi lista de habitos</h1>

                    <div className="habits-container">

                        { 
                        
                        habits.length > 0 ? ( 

                        habits.map( ({ id, name, days, status, note } ) =>(
                            <HabitItem
                                key={ id }
                                id= { id }
                                nombre = { upperCase( name ) }
                                frecuencia = { 
                                    days
                                        .sort( ( a, b ) => diasOrdenados.indexOf( a ) - diasOrdenados.indexOf( b ) )
                                        .join( " - ") 
                                    }
                                estado = { status }
                                nota = { note }
                                //clase dinamica ingresada para que el usuario se de cuenta de el habito que esta buscando
                                dynamicClass={ 
                                    upperCase( name ) === selectedHabit? "highlight" : "" 
                                } />
                    )))
                    : <p className='message'> No hay hábitos para cargar </p>
                    } 
                    </div>
                </section>
            
        </PageAnimation>
        
    )
}

export default HabitList;