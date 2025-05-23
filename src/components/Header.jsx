import { IoLanguageOutline } from "react-icons/io5";
import { MdNightsStay } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import Icons from "./Icons";
import { useContext, useEffect, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import ThemePicker from "./ThemePicker";
import { useTranslation } from "react-i18next";
import "../styles/Header.css"
import { AiFillThunderbolt } from "react-icons/ai";

//este componente me mostrará la cabezera
const Header = ( ) =>{

    //usando useContext para los datos del usuario 
    const { userData, setUserData } = useContext( HabitContext );
    //estado para mostrar el modal de colores
    const [ showThemePicker, setShowThemePicker ]= useState( false );
    // estado para el modo noche
    const[ activeNightMode, setActiveNightMode ] = useState( 
        ( ) =>{
            return JSON.parse( localStorage.getItem( "userData" ) )?.nightMode || false;
        }
    );


    //nuevo Hook para las traducciones
    const { t, i18n } = useTranslation();
    

    useEffect( ()=>{
        i18n.changeLanguage( userData.language )
    },[userData])

    //este useEffect se encarga de cambiar el color de las letras a blancas cuando el tema es color negro y se activa el modo noche
    useEffect( ( ) =>{

        //se actica la funcion que cambia el valor del tema
        saveData( "nightMode", activeNightMode )
        //dependiendo el valor de mi estado se agrega o se quita la clase del modo noche
        activeNightMode === true? document.body.classList.add( "nightMode" ) : document.body.classList.remove( "nightMode" )
        
    }, [ activeNightMode ])

    //esta funcion se encargara  de actualizar los datos del usuario y llevarlos  al localStorage
    const saveData = ( propiedad, value ) =>{

        setUserData( prevData =>{
            const currenData = {
                ...prevData,
                [propiedad ] : value 
            }
            localStorage.setItem( "userData", JSON.stringify( currenData ))
            return currenData;
        }) 
    }
    
    //creo un array que contenga objetos que mantengan la informacion de cafa icono que usare para mi aplicacion
    const tooltips = [
        {
            id: "lang",
            icon: <IoLanguageOutline />,
            content:  t( "icons.language" ) ,
           action: ( ) =>{ 
            const currentLanguage = JSON.parse( localStorage.getItem( "userData" ) )?.language
            const newLanguage = currentLanguage === "es"? "en" : "es";

            saveData( "language", newLanguage)
        }

        },
        {
            id: "night",
            icon: <MdNightsStay />,
            content: t( "icons.night_mode" ),
           action: ( ) =>{ setActiveNightMode( prevState => !prevState)}
        },
        {
            id: "theme",
            icon: <IoIosColorPalette />,
            content: t( "icons.theme" ),
           action: ( ) =>{ setShowThemePicker(!showThemePicker ) }
        }
    ]
    return (
        <header id="header">
            <h1 id="name-app">{"<"}<AiFillThunderbolt />{">"} ItsAndreDev</h1>


            <ul id="user-options">
            
                { //hago un map para introducir los iconos asi como su informacion dinamicamente
                    tooltips.map( ( { id, icon, content,action } ) =>(
                        <Icons 
                            key={ id }
                            id = { id }
                            icon={ icon }
                            content={ content }
                            clickAction={ ( )=>{ action() } }
                        />
                    ) ) 
                }

                { //dependiendo el estado se mostrara o no mi colorPicker
                    showThemePicker && 
                    <ThemePicker
                        // con esto mando el color como parametro y le agrego ese valor a los datos del usuario
                        onChange = { ( color )  =>{
                            saveData ("theme", color )
                        }}
                       onClose={ ()=> setShowThemePicker( false ) }/> 
                }
            </ul>

        </header>
    )
}

export default Header;