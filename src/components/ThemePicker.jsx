//Componente que se usará para que el usuario escoja el color de Habit Tracker
import { TwitterPicker } from "react-color";

const ThemePicker = ( { onChange } ) =>{

    return(
        <div className="theme-picker-container">
            <TwitterPicker
                triangle="hide" 
                colors={["#FF6B6B", "#6BFFB3", "#6B9EFF",  "#FFD86B", "#C084FC", "#FF9E6B", "#6BCBFF", "#A0E860", "#FF6BE0", "#6BFFC7"]} 
                onChangeComplete={(color) => onChange(color.hex)} />
        </div>
    )
}
export default ThemePicker;