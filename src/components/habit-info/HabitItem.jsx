import { useContext } from "react";
import "../../styles/HabitItem.css"
import { HabitContext } from "../../context/HabitContext";

const HabitItem = ( { id, nombre, frecuencia, estado, nota, dynamicClass } ) => {

    const { handleDelete } = useContext( HabitContext );

    return (
        <div className={`${ dynamicClass} habit-card`} >

            <h1 className="habit-title">{nombre}</h1>

            <div className="habit-details">

                <p className="habit-data">
                    Frecuencia:
                    <span className="text"> { frecuencia }</span>
                </p>

                <p className="habit-data">
                    Estado:
                    <span className="text">{ estado }</span>
                </p>

                <p className="habit-note text-note">
                    Nota: <span className={`text note ${nota ? "" : "empty"}`}>{nota || "--- Sin notas ---"}</span>
                </p>        

            </div>

            <button onClick={ ( ) => { handleDelete( id ) } } className="delente-habit">Eliminar</button>

        </div>
    )
}

export default  HabitItem;