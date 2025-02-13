import { useState } from "react";

const HabitForms = ( ) => {

    const [ form, setForm ] = useState( {
        name: "",
        days: "1 vez a la semana",
        reminder: "00:00",
        note: ""
    } );

    const handleInput = e =>{
        
        setForm( {
            ...form,
            [ e.target.name ] : e.target.value
        })
        
    }

    const handleClick = e =>{
        setForm({
            ...form,
            [ e.target.name ] : e.target.nextSibling.textContent.trim()
        })

        console.log ( e.target.textContent )
    }

    return (
        <>
            

        </>
        
    )
}

export default HabitForms;