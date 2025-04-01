import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import CurrentDay from "./CurrentDay";
import { useTranslation } from "react-i18next";

const HabitContext = createContext( );

const HabitContextProvider = ( {children } ) => {

    const { t } = useTranslation();
    //estado que almacena mis habitos
    const [ habits, setHabits ] = useState( [] );
    //estado que muestra mi pantalla de carga
    const [ loading, setLoading ] = useState ( true )
    //estado que guarda el dia actual
    const currentDay = CurrentDay();
    //estado que cuenta todos mis estados
    const [countStatus, setCountStatus] = useState({
        [ t("habit.complete") ]: 0,
        [ t("habit.no_complete") ]: 0,
        [ t("habit.pendiente") ]: 0,
      });

    //estos datos del usuario tambien se guardaran en el localStorage 
    const [ userData, setUserData ] = useState( 
        ()=>{
            const storedValue = localStorage.getItem( "userData" )
            return storedValue? JSON.parse( storedValue ) :  {
                language: "ES",
                theme: "#000000",
                nightMode: false
            }
        }
    )

    // usare este estado para guardar cualquier habito y usarlo mas adelante
    const [ selectedHabit, setSelectedHabit ] = useState( "" );

    //este useEffect se encarga de traer todos los datos el localStorage a mi aplicacion
    useEffect( () =>{
            try {
                //trayendo mis habitos
                const storeHabits = localStorage.getItem( "habitos") 
                setHabits(  storeHabits? JSON.parse( storeHabits ) : [] )
            } catch (error) {
                console.error( "Error al obtener habitos u obtener datos del usuario", error )
                setHabits( [] )
            }
           setLoading( false )
    }, [])

    //con useEffect se actualiza el localStorage cuando no se esta utilizando el addHabits.
    useEffect( () =>{
        if( habits.length > 0 ){
            localStorage.setItem( "habitos", JSON.stringify( habits ))
        } else{
            localStorage.removeItem("habitos")
        }
    }, [ habits ])

    //agregando los habitos a mi lista de habitos y a su vez los estoy guardando en mi local storage
    const addHabits = habit => {
        setHabits( prevHabits =>  [...prevHabits, habit ] );
    };

    //funcion para eliminar los habitos al usar un boton
    const handleDelete = ( idHabit ) =>{
        setHabits( prevHabits => prevHabits.filter( habit => habit.id !== idHabit) )
        toast.success( "El hábito seleccionado ha sido eliminado" )
    }

    //useEffect que se encargara de cargar los datos del usuarios guardado en el localStorage
    useEffect( ()=>{
        //con esto cambio la propiedad en mis estilos que coincida con el nombre dado con el valor dado
        document.documentElement.style.setProperty( "--theme-color", userData.theme )

        //esta dependencia es solo por ahora, ya que le agregaré mas cosas 
    }, [ userData.theme ])


    return (
        <HabitContext.Provider value={ { habits, loading, addHabits, handleDelete, selectedHabit, setSelectedHabit, currentDay, userData, setUserData, countStatus, setCountStatus } }>
            <Toaster position="top-right" richColors />
            { children }
        </HabitContext.Provider>
    )
}

export  { HabitContext, HabitContextProvider };
