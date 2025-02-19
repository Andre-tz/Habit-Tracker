import { useContext, useEffect, useState } from "react";
import { HabitContext } from "../context/HabitContext.jsx"
import "../styles/HabitForm.css"

const HabitForms = (  ) => {

    //contexto que se encargará de usar mi lista de habitos y la funcion para agregarlos
    const { addHabits } = useContext( HabitContext );

    //este estado se encargará de guardar los datos obtenido en mi formulario
    const [ habitData, setHabitData ] = useState( {
        id: crypto.randomUUID(),
        name: "",
        days: [ ],
        reminder: "08:00",
        note: "",
        status: "No completado"
    } );

    //Funciones para actualizar los valores de mis estados
    const handleInput = e =>{
        
        setHabitData( {
            ...habitData,
            [ e.target.name ] : e.target.value
        })
        
    }

    const handleDays = e =>{

        let day = e.target.name;

        setHabitData( currentHabit => ({
            ...currentHabit,
            //con estos metodos si el dia presionado esta en mi array "days" lo elimina en caso contrario lo agrega
            days : currentHabit.days.includes( day)? currentHabit.days.filter( d => d !== day) : [ ...currentHabit.days, day ]
        }))
           
    }

    //funcion para agregar los datos del formaulario a mi lista de habitos
    const handleSubmit = e =>{
        e.preventDefault();

        if( !habitData.name ){
            alert( "Falta el nombre del hábito")
            return
        }

        if (habitData.days.length === 0) {
            alert("Selecciona al menos un día.");
            return;
        }

        addHabits( habitData );
        alert( "Su hábito ha sido guardado" )
        clearForm();
    }
   

    //Limpiar el formulario
    const clearForm = ( ) => {
        setHabitData( {
            id: crypto.randomUUID(),
            name: "",
            days: [ ],
            reminder: "08:00",
            note: "",
            status: "No completado"
        })
    }

    return (
        <>
            <h1 className="titulo">Formulario de habitos</h1>

            <form>

                <div className="field">
                    <label>
                        Nombre del hábito
                        <input onChange={ handleInput } type="text" name="name"  placeholder="Ejm: Saltar soga" value={ habitData.name}/>
                    </label>
                </div>

                <div className="field">
                    <h2>Frecuencia ( Selecciona la cantidad ) :</h2>
                    
                    <div className="button-container">
                        <button type="button" className={ `button-days ${habitData.days.includes( "lunes" )? "selected" : "" }` } name="lunes" onClick={ handleDays }>L</button>
                        <button type="button" className={ `button-days ${habitData.days.includes( "martes" )? "selected" : "" }` } name="martes" onClick={ handleDays }>M</button>
                        <button type="button" className={ `button-days ${habitData.days.includes( "miercoles" )? "selected" : "" }` } name="miercoles" onClick={ handleDays }>M</button>
                        <button type="button" className={ `button-days ${habitData.days.includes( "jueves" )? "selected" : "" }` } name="jueves" onClick={ handleDays }>J</button>
                        <button type="button" className={ `button-days ${habitData.days.includes( "viernes" )? "selected" : "" }` } name="viernes" onClick={ handleDays }>V</button>
                        <button type="button" className={ `button-days ${habitData.days.includes( "sabado" )? "selected" : "" }` } name="sabado" onClick={ handleDays }>S</button>
                        <button type="button" className={ `button-days ${habitData.days.includes( "domingo" )? "selected" : "" }` } name="domingo" onClick={ handleDays }>D</button>
                    </div>
                    
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
                        <textarea onChange={ handleInput } name="note" value={ habitData.note} placeholder="Agregar algun comentario"></textarea>
                    </label>
                </div>

                <div className="field">
                    <button id = "submit" onClick={ handleSubmit } type="submit">Crear</button>
                </div>
  
            </form>

        </>
        
    )
}

export default HabitForms;