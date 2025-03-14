import { IoLanguageOutline } from "react-icons/io5";
import { MdNightsStay } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import Icons from "./Icons";

const Header = ( ) =>{

    //creo un array que contenga objetos que mantengan la informacion de cafa icono que usare para mi aplicacion
    const tooltips = [
        {
            id: "lang",
            icon: <IoLanguageOutline />,
            content: "Cambiar idioma"
        },
        {
            id: "night",
            icon: <MdNightsStay />,
            content: "Cambiar a oscuro"
        },
        {
            id: "theme",
            icon: <IoIosColorPalette />,
            content: "Cambiar tema"
        }
    ]
    return (
        <header id="header">
            <h1 id="name-app"> Habit Tracker</h1>

            <ul id="user-options">
            
                { //hago un map para introducir los iconos asi como su informacion dinamicamente
                    tooltips.map( ( { id, icon, content } ) =>(
                        <Icons 
                        key={ id }
                            id = { id }
                            icon={ icon }
                            content={ content }
                        />
                    ) ) 
                }

            </ul>
            
        </header>
    )
}

export default Header;