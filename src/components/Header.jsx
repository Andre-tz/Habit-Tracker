import { IoLanguageOutline } from "react-icons/io5";
import { MdNightsStay } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { Tooltip } from "react-tooltip";

const Header = ( ) =>{

    const tooltips = [
        {
            id: "tooltips-lang",
            icon: <IoLanguageOutline />,
            content: "Cambiar idioma"
        },
        {
            id: "tooltips-night",
            icon: <MdNightsStay />,
            content: "Cambiar a oscuro"
        },
        {
            id: "tooltips-theme",
            icon: <IoIosColorPalette />,
            content: "Cambiar tema"
        }
    ]
    return (
        <header id="header">
            <h1 id="name-app"> Habit Tracker</h1>

            <ul id="user-options">

                { tooltips.map( ( { id, icon, content } ) =>(
                    <li key={ id } data-tooltip-id={ id } className="item">
                        { icon }
                        <Tooltip id={ id } place="top" content={ content } />
                    </li>
                ) ) }

            </ul>
            
        </header>
    )
}

export default Header;