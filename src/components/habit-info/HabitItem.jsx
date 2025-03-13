import { useContext } from "react";
import "../../styles/HabitItem.css"
import { HabitContext } from "../../context/HabitContext"
import { motion } from "framer-motion";

const HabitItem = ( { id, nombre, frecuencia, estado, nota, dynamicClass, index } ) => {

    const { handleDelete } = useContext( HabitContext );

    return (
        <motion.div className={`${ dynamicClass} habit-card`} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}>

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

        </motion.div>
    )
}

export default  HabitItem;