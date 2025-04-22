import { useContext, useEffect } from 'react';
import { HabitContext } from '../context/HabitContext.jsx';
import HabitItem from "./habit-info/HabitItem.jsx"
import "../styles/HabitList.css"
import upperCase from '../helper/upperCase.js';
import { IoArrowBackOutline } from "react-icons/io5";
import Icons from './Icons.jsx';
import { useTranslation } from 'react-i18next';
import dayMapping from '../helper/dayMapping.js';

//este componente me muestra la lista de habitos del usuario
const HabitList = ( ) => {
    
    const { t } = useTranslation();
    const { habits, loading, selectedHabit, setSelectedHabit } = useContext( HabitContext )

    //Con este useEffect me desplazo automaticamente hasta el habito seleccionado por su id y luego lo deselecciono
    useEffect ( ( ) =>{
        if( selectedHabit){
            // busco el elemento del habito por su ID
            const habitElement = document.getElementById( selectedHabit );

            if( habitElement ){
                //si existe hago scroll suave hasta el
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
        <>
            <Icons
                tagId={ "back" }
                id= "back"
                icon={ <IoArrowBackOutline /> }
                content={ t("icons.go_back")}
                navigateTo="/"
            />
            <section id='habit-list'>
                    
                    <h1 className='title'>{ t("habit_list.title" ) }</h1>

                    <div className="habits-container">

                        { 
                        
                        habits.length > 0 ? ( 

                        habits.map( ({ id, name, days, note } , index ) =>(
                            <HabitItem
                                key={ id }
                                id= { id }
                                nombre = { upperCase( name ) }
                                frecuencia = { 
                                    days
                                    //ordenando los dias
                                        .sort( ( a, b ) => diasOrdenados.indexOf( a ) - diasOrdenados.indexOf( b ) )
                                    //traduciendolos
                                        .map( day => t( `days.full_name.${ dayMapping[ day ] }`))
                                    //uniendolos
                                        .join( " - ") 
                                    }
                                nota = { note }
                                //clase dinamica ingresada para que el usuario se de cuenta de el habito que esta buscando
                                dynamicClass={ 
                                    upperCase( name ) === selectedHabit? "highlight" : "" 
                                }
                                index={ index } />
                    )))
                    : <p className='message'>{ t("emptyState.noHabitsToLoad" ) }</p>
                    } 
                    </div>
                </section>
            
        </>
        
    )
}

export default HabitList;