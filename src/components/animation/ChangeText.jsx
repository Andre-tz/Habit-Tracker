import { motion } from "framer-motion";

// componenete que tendras las animaciones para mis cambios de textos
const ChangeText = ( { children, frase  } ) =>{

    const fadeAnimation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5, ease: "easeInOut" }
    };


    return (
        <motion.div key={ frase } { ...fadeAnimation } id="phrase-container">
            { children }
        </motion.div>
    )
}

export default ChangeText;