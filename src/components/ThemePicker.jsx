//Componente que se usará para que el usuario escoja el color de Habit Tracker
import { useEffect, useRef } from "react";
import { TwitterPicker } from "react-color";

const ThemePicker = ( { onChange, onClose } ) =>{

    const modalRef = useRef( null );

    useEffect( () =>{

        //esta funcion se encarga de validar si el evento ocurre dentro del contendor usado como referencia, si no lo es ejecuta la funcion onClose
         const handleClickOutside = ( event ) =>{
            if( modalRef.current && !modalRef.current.contains( event.target ) ){ onClose() }
         }

         //aca agrego un evento y le agrego una funcion 
         document.addEventListener( "mousedown", handleClickOutside );

         // al desmontarse se quita la funcion para evitar fugas de memoria
         return () =>{ document.removeEventListener( "mousedown", handleClickOutside )}

    }, [ ])
    return(
        <div ref={ modalRef} className="theme-picker-container">
            <TwitterPicker
                triangle="hide" 
                colors={["#FF6B6B", "#6BFFB3", "#6B9EFF",  "#FFD86B", "#C084FC", "#FF9E6B", "#6BCBFF", "#A0E860", "#FF6BE0", "#6BFFC7"]} 
                onChangeComplete={(color) => onChange(color.hex)} />
        </div>
    )
}
export default ThemePicker;