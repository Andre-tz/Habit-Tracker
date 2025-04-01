import { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext.jsx"
import "../styles/HabitForm.css"
import { toast } from "sonner";
import PageAnimation from "./animation/PageAnimation.jsx";
import Icons from "./Icons.jsx";
import { IoArrowBackOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

//este componente me renderiza un formulario para guardar el habito de la persona
const HabitForms = (  ) => {

    const { t } = useTranslation( );
    //contexto que se encargará de usar mi lista de habitos y la funcion para agregarlos
    const { addHabits } = useContext( HabitContext );

    //este estado se encargará de guardar los datos obtenido en mi formulario
    const [ habitData, setHabitData ] = useState( {
        id: crypto.randomUUID(),
        name: "",
        days: [ ],
        reminder: "08:00",
        note: "",
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
            toast.warning( t( "tooltips.null_name" ) )
            return
        }

        if (habitData.days.length === 0) {
            toast.warning( t( "tooltips.null_day" ) );
            return;
        }

        addHabits( habitData );
        toast.success( t( "tooltips.habit_success" ) )
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
        <PageAnimation>
            <Icons 
                id= "back"
                icon={ <IoArrowBackOutline /> }
                content={ t("icons.go_back")}
                navigateTo="/"
            />
            
            <section id="habit-form" className="width-container">
                <h1 className="title">{ t ("form.title_form") }</h1>

                <form>

                    <div className="field">
                        <label>
                            { t( "form.habit_name" ) }
                            <input onChange={ handleInput } type="text" name="name"  placeholder="Ejm: Saltar soga" value={ habitData.name}/>
                        </label>
                    </div>

                    <div className="field">
                        <p className="field-title">{ t( "form.frecuency" ) }</p>
                        
                        <div className="button-container">
                            <button type="button" className={ `button-days ${habitData.days.includes( "Lunes" )? "selected" : "" }` } name="Lunes" onClick={ handleDays }>{ t("days.short_name.Mon" ) }</button>
                            <button type="button" className={ `button-days ${habitData.days.includes( "Martes" )? "selected" : "" }` } name="Martes" onClick={ handleDays }>{ t("days.short_name.Thu" ) }</button>
                            <button type="button" className={ `button-days ${habitData.days.includes( "Miércoles" )? "selected" : "" }` } name="Miércoles" onClick={ handleDays }>{ t("days.short_name.Wed" ) }</button>
                            <button type="button" className={ `button-days ${habitData.days.includes( "Jueves" )? "selected" : "" }` } name="Jueves" onClick={ handleDays }>{ t("days.short_name.Tue" ) }</button>
                            <button type="button" className={ `button-days ${habitData.days.includes( "Viernes" )? "selected" : "" }` } name="Viernes" onClick={ handleDays }>{ t("days.short_name.Fri" ) }</button>
                            <button type="button" className={ `button-days ${habitData.days.includes( "Sábado" )? "selected" : "" }` } name="Sábado" onClick={ handleDays }>{ t("days.short_name.Sat" ) }</button>
                            <button type="button" className={ `button-days ${habitData.days.includes( "Domingo" )? "selected" : "" }` } name="Domingo" onClick={ handleDays }>{ t("days.short_name.Sun" ) }</button>
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
                            { t( "form.notes" ) }
                            <textarea onChange={ handleInput } name="note" value={ habitData.note} placeholder={ t( "form.place_holder" ) }></textarea>
                        </label>
                    </div>

                        <button id = "submit" onClick={ handleSubmit } type="submit">{ t( "form.button_create" ) }</button>

                </form>

            </section>
        </ PageAnimation>
        
    )
}

export default HabitForms;