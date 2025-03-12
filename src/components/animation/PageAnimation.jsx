import { motion } from "framer-motion";

/* Componente que se utiliza para dar animacion a mi habit tracker*/
const PageAnimation = ( { children } ) =>{

    const pageVariants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x:-50 }
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut"}}>

            { children }

        </motion.div>
    )
}

export default PageAnimation;