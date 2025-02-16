import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { HabitContext } from "./context/HabitContext";

function App() {

	const { habits, addHabits } = useContext( HabitContext )

	//recuperando los datos guardados en mi localStorage y agregandolos a mi  lista de habitos
	useEffect( ( ) =>{ 
		const habitStorage = localStorage.getItem( "habits" );
		if( habitStorage ) {
			setHabits( JSON.parse( habitStorage ));
		}
	}, [] );
  return (
    <>
    	<h1>Bienvenido a Habit Tracker</h1>
		<ul>
			<NavLink to= "/habit-list"><button className="button">Ver Habitos</button></NavLink>
			<NavLink to = "/habit-form"><button className="button">Crear Habitos</button></NavLink>
		</ul>
    </>
  )
}

export default App
