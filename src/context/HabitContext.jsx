import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import CurrentDay from "./CurrentDay";
import { useTranslation } from "react-i18next";
import setThemeColor from "../helper/setThemeColor";

const HabitContext = createContext( );

const HabitContextProvider = ( {children } ) => {

    const { t } = useTranslation();

    /*ESTADOS RELACIONADOS A LOS HABITOS*/
    //estado que almacena mis habitos
    const [ habits, setHabits ] = useState( [] );

    //estado que muestra mi pantalla de carga
    const [ loading, setLoading ] = useState ( true )
    //estado que guarda el dia actual
    const currentDay = CurrentDay();

    /*ESTADOS RELACIONADOS A LAS PREFERENCIAS DEL USUARIO*/
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

    //este estado se encargara de guardar los datos de cada HabitCheck, primero busca en el local y si no hay lo inicia vacio
    const [ habitStatusList, setHabitStatusList ] = useState( ()=>{
        const itsLocal = localStorage.getItem( "estadosCheck")
        return itsLocal? JSON.parse( itsLocal ) : []
    } )

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
            localStorage.removeItem( "stadosCheck" )
        }
    }, [ habits ])

    //agregando los habitos a mi lista de habitos y a su vez los estoy guardando en mi local storage
    const addHabits = habit => {
        setHabits( prevHabits =>  [...prevHabits, habit ] );
    };

    //funcion para eliminar los habitos al usar un boton tambien se eliminara el habitCheck que coincida con el nombre
    const handleDelete = ( idHabit, nameHabit ) =>{
        setHabits( prevHabits => prevHabits. filter( habit => habit.id !== idHabit) )
        setHabitStatusList( prevList => prevList. filter( habit => habit.name !== nameHabit))
        toast.success( "El hábito seleccionado ha sido eliminado" )
    }

    //useEffect que se encargara de cargar los datos del usuarios guardado en el localStorage
    useEffect( ()=>{

        //Esta condicional valida si el tema es negro y se activa el modo noche, el color principal cambia a blanco y el otro hace lo contrario, si esta en blanco y el modo noche esta desactivado entonces el color principal cambia a negro
        if(  userData.theme === "#000000" && userData.nightMode === true ){
            setThemeColor( "--primary-color", "#ffffff")
        } else if( userData.theme === "#ffffff" && userData.nightMode === false ){
            setThemeColor( "--primary-color", "#000000" )
        }else{
            //con esto cambio la propiedad en mis estilos que coincida con el nombre dado con el valor dado
            setThemeColor( "--primary-color", userData.theme )
        }

        //con esas condicionales cambio el color de la letra de los botones ya que cuando el tema es blanco los botones se vuelven de este color y la letra blanca no se ve
        if( ( userData.theme === "#ffffff" || userData.theme === "#000000") && userData.nightMode === true ){
            setThemeColor( "--button-color-night", "#000000")
        }else{
            setThemeColor( "--button-color-night", "#ffffff")
        } 
        
        //esta dependencia es solo por ahora, ya que le agregaré mas cosas 
    }, [ userData.theme, userData.nightMode ])


    /* USE EFFECT USADOS PARA EL CONTADOR DE ESTADOS */
    useEffect( ()=>{
        localStorage.setItem( "estadosCheck", JSON.stringify( habitStatusList ) )
    }, [ habitStatusList ])

    return (
        <HabitContext.Provider value={ { habits, loading, addHabits, handleDelete, selectedHabit, setSelectedHabit, currentDay, userData, setUserData, setHabitStatusList, habitStatusList } }>
            <Toaster position="top-right" richColors />
            { children }
        </HabitContext.Provider>
    )
}

export  { HabitContext, HabitContextProvider };
