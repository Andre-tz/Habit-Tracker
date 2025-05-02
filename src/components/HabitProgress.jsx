import { useContext, useState } from "react";
import "../styles/HabitProgress.css"
import { HabitContext } from "../context/HabitContext";

//este componente se encargara de renderizar la barra de progreso
const HabitProgress = ( ) =>{

    const [ progress, setProgress ] = useState( {
        complete : 40,
        noComplete: 20,
        pendiente: 40
    })
    
    return (
        <div id="progress-bar">
            <div id="complete" style={ { width: `${ progress.complete}%` } }></div>
            <div id="no-complete"style={ { width: `${ progress.noComplete}%` } }></div>
            <div id="pendiente" style={ { width: `${ progress.pendiente}%` } }></div>
        </div>
    )
}

export default HabitProgress;