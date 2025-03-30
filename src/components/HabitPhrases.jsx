import { useEffect, useState } from "react";
import ChangeText from "./animation/ChangeText";
import { useTranslation } from "react-i18next";

const HabitPhrases = ( ) =>{

    const { t, i18n  } = useTranslation();

    const [ getPhrase, setGetPhrase ] = useState({ text: "", author: ""} );

    useEffect( ()=>{

         // obteniedo las claves de mi json de phrases
        const phrasesKey = Object.keys( t( "phrases", { returnObjects : true } ) );
        // obteniendo la lista de frases y guardandolas en mi array 
        const phrases = phrasesKey.map( key => t( `phrases.${ key }`, { returnObjects : true }))

        setGetPhrase( phrases[ Math.floor( Math.random( ) * phrases.length  )])

        const interval = setInterval(() => {
            setGetPhrase( phrases[ Math.floor( Math.random( ) * phrases.length  )])
        }, 5000);

        return ( ) => clearInterval( interval );

    }, [ i18n.language])

    const { text, author } = getPhrase;
    return (
        <ChangeText key={ text }>
            <p id="frase">{ text } <span id="author">- { author }</span></p>
        </ChangeText>
    )
}

export default HabitPhrases;