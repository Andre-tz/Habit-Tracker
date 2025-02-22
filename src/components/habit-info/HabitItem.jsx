import "../../styles/HabitItem.css"

const HabitItem = ( {nombre, frecuencia, estado, nota } ) => {

    return (
        <div className="habit-card">

            <h1 className="habit-title">{nombre}</h1>

            <div className="habit-details">
                <p><strong>Frecuencia:</strong> {frecuencia}</p>
                <p><strong>Estado:</strong> {estado}</p>
                {nota && <p className="habit-note"><strong>Nota:</strong> {nota}</p>}
            </div>

        </div>
    )
}

export default  HabitItem;