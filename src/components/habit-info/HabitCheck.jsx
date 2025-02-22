//Este componente me mostrara la infomacion resumida del habito

const HabitCheck = ( {name, status } ) => {

    return (
        <div className="habit-check">
            <input type="checkbox" name="habitCheck" className="habitCheck" />
            <h3 className="habit-name">{ name }</h3>
            <p className="habit-estatus">{ status }</p>
        </div>
    )
}

export default HabitCheck;