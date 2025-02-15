import { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext.jsx"

const HabitForms = (  ) => {

    const { habits, addHabits } = useContext( HabitContext );

    const [ habitData, setHabitData ] = useState( {
        name: "",
        days: "1 vez a la semana",
        reminder: "08:00",
        note: "-",
        status: "No completado"
    } );

    const handleInput = e =>{
        
        setHabitData( {
            ...habitData,
            [ e.target.name ] : e.target.value
        })
        
    }

    const handleClick = e =>{
        setHabitData({
            ...habitData,
            [ e.target.name ] : e.target.nextSibling.textContent.trim()
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        addHabits( habitData )
        console.log( habitData )
    }

    return (
        <>
            <h1 className="titulo">Formulario de habitos</h1>

            <form>

                <div className="field">
                    <label>
                        Nombre del hábito
                        <input onChange={ handleInput } type="text" name="name"  placeholder="Ejm: Saltar soga"/>
                    </label>
                </div>

                <div className="field">
                    <h2>Frecuencia ( Selecciona la cantidad ) :</h2>
                    <label>
                        <input onChange={ handleClick } type="radio" name="days" />
                        1 vez a la semana
                    </label>

                    <label>
                        <input onChange={ handleClick } type="radio" name="days" />
                        2 a 4 veces a la semana
                    </label>

                    <label>
                        <input onChange={ handleClick } type="radio" name="days" />
                        todos los dias
                    </label>
                </div>

                <div className="field">
                    <label>
                        Recordar:
                        <input onChange={ handleInput } type="time" name="reminder" value={ habitData.reminder} />
                    </label>
                </div>

                <div className="field">
                    <label>
                        Notas Adicionales:
                        <textarea onChange={ handleInput } name="note" value={ habitData.note} ></textarea>
                    </label>
                </div>

                <div className="field">
                    <input onClick={ handleSubmit } type="submit" value="Crear" />
                </div>
  
            </form>

        </>
        
    )
}

export default HabitForms;