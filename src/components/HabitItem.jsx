const HabitItem = ( {nombre, frecuencia, estado, nota } ) => {

    return (
        <div className="habit-container">
            <h1>{ nombre }</h1>
            <h2>Frecuencia: { frecuencia }</h2>
            <p>Estado: { estado }</p>
            <p>Nota: { nota }</p>
        </div>
    )
}

export default  HabitItem;