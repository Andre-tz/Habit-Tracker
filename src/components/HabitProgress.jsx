import { useContext, useEffect, useState } from "react";
import "../styles/HabitProgress.css"
import { HabitContext } from "../context/HabitContext";
import { useTranslation } from "react-i18next";

//este componente se encargara de renderizar la barra de progreso
const HabitProgress = ( ) =>{

    const { t } = useTranslation();
    // usare los estados de mi habit List del Local
    const { habitStatusList } = useContext( HabitContext )
    //estado que obtendra la cantidad de cada estado
    const[countStatus, setCountStatus ] = useState( { complete: 0, noComplete: 0, pending: 0 })

    //este useEffect se ejecutará cada que habitStatusList cambie de estado
    useEffect(() => {
        //uso vatiables locales para obtener los valores
        let complete = 0, noComplete = 0, pending = 0;
    
        //use forEach para recorrer cada elemento del arra
        habitStatusList.forEach(habit => {
            //dependiendo el estado aunmentara en 1 la canitada de las variables locales
            if (habit.state === "complete" ) complete++;
            if (habit.state === "no_complete" ) noComplete++;
            if ( habit.state === "pending" ) pending++;
        });

        //por ultimo le doy los valores locales a mi estado
        setCountStatus({
            complete,
            noComplete,
            pending
        });

    }, [ habitStatusList ]);
    
    //desestructuro el objeto countStatus para tener sus valores en distintas variables
    const { complete, noComplete, pending } = countStatus

    //total va a ser la suma de todas las cantidades de estado
    const total = complete + noComplete + pending ;

    const completePercent = total? ( ( complete / total ) * 100 ).toFixed( 1 ) : 0;
    const noCompletePercent = total? ( ( noComplete / total ) * 100 ).toFixed( 1 ) : 0;
    const pendingPercent = total? ( ( pending / total ) * 100 ).toFixed( 1 ) : 0;
    
    return (
        <div className="progress-container">

            <div className="progress-bar">
                <div className="segment complete" style={{ width: `${completePercent}%` }}></div>
                <div className="segment no-complete" style={{ width: `${noCompletePercent}%` }}></div>
                <div className="segment pendiente" style={{ width: `${pendingPercent}%` }}></div>
            </div>

            <div className="labels">
                <span className="label complete-label">{ t( "habit.complete" ) } {completePercent}%</span>
                <span className="label no-complete-label"> { t( "habit.no_complete" ) } {noCompletePercent}%</span>
                <span className="label pendiente-label">{ t( "habit.pending" ) } {pendingPercent}%</span>
            </div>
        </div>

    )
}

export default HabitProgress;