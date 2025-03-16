import { IoLanguageOutline } from "react-icons/io5";
import { MdNightsStay } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import Icons from "./Icons";
import { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import ThemePicker from "./ThemePicker";

const Header = ( ) =>{

    //usando useContext para los datos del usuario 
    const { setUserData } = useContext( HabitContext );
    //estado para mostrar el modal de colores
    const [ showThemePicker, setShowThemePicker ]= useState( false )
    
    //esta funcion se encargara  de actualizar los datos del usuario y llevarlos  al localStorage
    const saveData = ( propiedad, value ) =>{

        setUserData( prevData =>{
            const currenData = {
                ...prevData,
                [propiedad ] : [ value ]
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
            content: "Cambiar idioma",
           action: ( ) =>{ saveData( "language", "EN" ) }
        },
        {
            id: "night",
            icon: <MdNightsStay />,
            content: "Cambiar a oscuro",
           action: ( ) =>{ saveData( "nightMode", true ) }
        },
        {
            id: "theme",
            icon: <IoIosColorPalette />,
            content: "Cambiar tema",
           action: ( ) =>{ setShowThemePicker(!showThemePicker ) }
        }
    ]
    return (
        <header id="header">
            <h1 id="name-app"> Habit Tracker</h1>

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
                        onChange = { ( color )  => saveData ("theme", color ) } /> 
                }
            </ul>

        </header>
    )
}

export default Header;