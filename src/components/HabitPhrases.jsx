import { useEffect, useState } from "react";
import ChangeText from "./animation/ChangeText";
import { useTranslation } from "react-i18next";

//este componente me muestra las frases aleatoria que iran en mi habit-tracker
const HabitPhrases = ( ) =>{

    const { t, i18n  } = useTranslation();
    // se creo la el estado para la frase con un valor inicial
    const [ getPhrase, setGetPhrase ] = useState({ text: "", author: ""} );

    useEffect( ()=>{

         // obteniedo las claves de mi json de phrases
        const phrasesKey = Object.keys( t( "phrases", { returnObjects : true } ) );
        // obteniendo la lista de frases y guardandolas en mi array 
        const phrases = phrasesKey.map( key => t( `phrases.${ key }`, { returnObjects : true }))
        // se mostrara una frase aleatoria de mi lista de frases
        setGetPhrase( phrases[ Math.floor( Math.random( ) * phrases.length  )])

        const interval = setInterval(() => {
            //cada 5 segundos cambiara mi frase
            setGetPhrase( phrases[ Math.floor( Math.random( ) * phrases.length  )])
        }, 5000);

        return ( ) => clearInterval( interval );

    }, [ i18n.language])

    //desestructuramos la frase obtenida
    const { text, author } = getPhrase;
    return (
        <ChangeText key={ text }>
            <p id="frase">{ text } <span id="author">- { author }</span></p>
        </ChangeText>
    )
}

export default HabitPhrases;