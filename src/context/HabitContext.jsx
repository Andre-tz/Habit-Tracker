import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import CurrentDay from "./CurrentDay";

const HabitContext = createContext( );

const HabitContextProvider = ( {children } ) => {

    const [ habits, setHabits ] = useState( [] );
    const [ loading, setLoading ] = useState ( true )
    const currentDay = CurrentDay();

    // usare este estado para guardar cualquier habito y usarlo mas adelante
    const [ selectedHabit, setSelectedHabit ] = useState( "" );

    //este useEffect se encarga de traer todos los datos el localStorage a mi array de habilidades
    useEffect( () =>{

        const storeHabits = localStorage.getItem( "habitos") 
        if( storeHabits ) {
            try {
                setHabits( JSON.parse( storeHabits ) )
            } catch (error) {
                console.error( "Error al obtener habitos", error )
                setHabits( [] )
            }
            
        }else{
            setHabits( [] )
        }

        setLoading( false )
    }, [])

    //con useEffect se actualiza el localStorage cuando no se esta utilizando el addHabits.
    useEffect( () =>{
        if( habits.length > 0 ){
            localStorage.setItem( "habitos", JSON.stringify( habits ))
        } else{
            localStorage.clear()
        }
    }, [ habits ])

    //agregando los habitos a mi lista de habitos y a su vez los estoy guardando en mi local storage
    const addHabits = habit => {
        setHabits(prevHabits => {
            const updatedHabits = [...prevHabits, habit];
    
            localStorage.setItem("habitos", JSON.stringify(updatedHabits)); 
    
            return updatedHabits;
        });
    };

    //funcion para eliminar los habitos al usar un boton
    const handleDelete = ( idHabit ) =>{
        setHabits( prevHabits =>{
            const updateHabits= prevHabits.filter( habit => habit.id !== idHabit)   

            //actualizando localStorage
            localStorage.setItem( "habitos", JSON.stringify( updateHabits ));

            toast.success( "El hábito seleccionado ha sido eliminado" )
            return updateHabits;
        })
    }

    return (
        <HabitContext.Provider value={ { habits, loading, addHabits, handleDelete, selectedHabit, setSelectedHabit, currentDay } }>
            <Toaster position="top-right" richColors />
            { children }
        </HabitContext.Provider>
    )
}

export  { HabitContext, HabitContextProvider };
