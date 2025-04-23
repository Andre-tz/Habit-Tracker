//Componente que se usará para que el usuario escoja el color de Habit Tracker
import { useEffect, useRef } from "react";
import { TwitterPicker } from "react-color";
import "../styles/ThemePicker.css"

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
                colors={[
                    "#3B82F6",
                    "#FFFFFF",
                    "#8B5CF6", 
                    "#22C55E", 
                    "#F97316", 
                    "#06B6D4",
                    "#EF4444", 
                    "#FACC15",
                    "#EC4899",
                    "#5EEAD4"
                  ]} 
                onChangeComplete={(color) => onChange(color.hex)} />
        </div>
    )
}
export default ThemePicker;