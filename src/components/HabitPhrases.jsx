import { useEffect, useState } from "react";
import ChangeText from "./animation/ChangeText";
const HabitPhrases = ( ) =>{

    const frases = [
        { text: "Los pequeños cambios hacen una gran diferencia.", author: "James Clear" },
        { text: "El éxito es la suma de pequeños esfuerzos repetidos a diario.", author: "Robert Collier" },
        { text: "La disciplina tarde o temprano supera a la motivación.", author: "Jon Acuff" },
        { text: "No esperes a estar listo, empieza ahora.", author: "Tim Ferriss" },
        { text: "Hazlo fácil, hazlo sostenible, hazlo tuyo.", author: "James Clear" },
        { text: "Cada hábito que repites refuerza tu identidad.", author: "James Clear" },
        { text: "El progreso es mejor que la perfección.", author: "Mark Twain" },
        { text: "No subestimes el poder de un pequeño paso.", author: "Napoleón Hill" },
        { text: "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito.", author: "Aristóteles" },
        { text: "Motivación es lo que te pone en marcha, hábito es lo que hace que sigas.", author: "Jim Ryun" }
    ];
    
    const [ phrases, setPhrases ] = useState( frases[ 0 ] );

      useEffect( ()=>{
        
        const interval = setInterval( ()=>{
            const randomIndex = Math.floor( Math.random() * frases.length)
            setPhrases( frases[ randomIndex ] )

        }, 5000)

        return () => clearInterval( interval );
      }, [])

      const { text, author } = phrases;

    return (
        <ChangeText key={ text }>
            <p id="frase">{ text } <span id="author">- { author }</span></p>
        </ChangeText>
        
    )
}

export default HabitPhrases;