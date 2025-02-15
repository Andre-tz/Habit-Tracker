import HabitItem from './HabitItem.jsx';

const HabitList = ( ) => {
    

    return (
        <>
            <h1>Mi lista de habitos</h1>

            <HabitItem
            nombre= "Correr"
            frecuencia = " lunes, martes, miercoes"
            estado= "No completado"
            notas= "-" />
        </>
        
    )
}

export default HabitList;