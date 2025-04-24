import "../styles/HabitDay.css"

//Este componente obtendra los habitos que correspondan a su dia correspondiente

const HabitDay = ( { day, habits = [] } ) => {

    return (
        <div className="day-container">
            <h1 className="title-day">{ day }</h1>

            <div className="day-info">
                <ul className="habit-list">
                    { habits.map( ( habit, index ) => ( <li key={ index }>{ habit }</li> )) }
                </ul>
            </div>
                
        </div>
    )
}

export default HabitDay;