//componente que se encargara de darle animacion cada que se cambie de idioma
import { motion } from "framer-motion";
import { useContext } from "react";
import { HabitContext } from "../../context/HabitContext";

const fadeBlinkAnimation ={
    initial : { opacity : 1 },
    animate: { opacity : [ 1, 0.3, 1 ] },
    transition: { duration: 0.3, ease : "easeInOut" }
};

const OptionTransition = ( { children } )=>{

    const { userData } = useContext( HabitContext );
    return (
        <motion.div key={ JSON.stringify( userData ) }  { ...fadeBlinkAnimation }>
            { children }
        </motion.div>
    )
}

export default OptionTransition;