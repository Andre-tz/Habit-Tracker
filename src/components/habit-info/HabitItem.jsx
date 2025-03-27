import { useContext } from "react";
import "../../styles/HabitItem.css"
import { HabitContext } from "../../context/HabitContext"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HabitItem = ( { id, nombre, frecuencia,  nota, dynamicClass, index } ) => {

    const { t } = useTranslation( );

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
                    { t( "habit_list.frecuency" ) }:
                    <span className="text"> { frecuencia }</span>
                </p>

                <p className="habit-note text-note">
                    { t ( "habit_list.note" ) }: <span className={`text note ${nota ? "" : "empty"}`}>{nota || "--- Sin notas ---"}</span>
                </p>        

            </div>

            <button onClick={ ( ) => { handleDelete( id ) } } className="delente-habit">{ t( "habit_list.button_delete" ) }</button>

        </motion.div>
    )
}

export default  HabitItem;