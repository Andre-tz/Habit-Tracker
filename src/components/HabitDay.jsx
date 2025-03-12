import "../styles/HabitDay.css"
import PageAnimation from "./animation/PageAnimation";

//Este componente obtendra los habitos que correspondan a su dia correspondiente

const HabitDay = ( { day, habits = [] } ) => {

    return (
        <PageAnimation>
            <div className="day-container">
                <h1 className="title">{ day }</h1>

                <div className="day-info">
                    <ul className="habit-list">
                        { habits.map( ( habit, index ) => ( <li key={ index }>{ habit }</li> )) }
                    </ul>
                </div>
                
            </div>
        </PageAnimation>
    )
}

export default HabitDay;