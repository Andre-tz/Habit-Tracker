import { useContext } from "react";
import "../../styles/HabitItem.css"
import { HabitContext } from "../../context/HabitContext"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HabitItem = ( { id, nombre, frecuencia,  nota, dynamicClass, index } ) => {

    const { t } = useTranslation( );

    const { handleDelete } = useContext( HabitContext );

    return (
        //este motion div sirve para darle animacion, el dynamicClass se coloca dinamicamente, dependiendo el habito que seleecionamos para entrar a la pestaña lista de habitos
        <motion.div
            className={`habit-card ${dynamicClass}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
        >
            <h1 className="habit-title">{nombre}</h1>

            <div className="habit-info">

                <p className="habit-frequency">
                {t("habit_list.frecuency")}: <span> {frecuencia}</span>
                </p>

                <div className="habit-note">

                    <p className="note-label">{t("habit_list.note")}:</p>

                    <p className={`note-content ${nota ? "" : "empty"}`}>
                        {nota || "--- Sin notas ---"}
                    </p>
                </div>

            </div>

            <button onClick={() => handleDelete(id, nombre)} className="habit-delete">{t("habit_list.button_delete")}</button>

        </motion.div>

    )
}

export default  HabitItem;