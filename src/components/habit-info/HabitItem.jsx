import { useContext } from "react";
import "../../styles/HabitItem.css"
import { HabitContext } from "../../context/HabitContext";

const HabitItem = ( {nombre, frecuencia, estado, nota } ) => {

    const { handleDelete } = useContext( HabitContext );

    return (
        <div className="habit-card">

            <h1 className="habit-title">{nombre}</h1>

            <div className="habit-details">
                <p><strong>Frecuencia:</strong> {frecuencia}</p>
                <p><strong>Estado:</strong> {estado}</p>
                {nota && <p className="habit-note"><strong>Nota:</strong> {nota}</p>}
            </div>

            <button onClick={ ( ) => { handleDelete( nombre ) } } className="delente-habit">Eliminar</button>

        </div>
    )
}

export default  HabitItem;