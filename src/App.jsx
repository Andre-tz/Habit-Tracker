import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { HabitContext } from "./context/HabitContext";
import HabitDay from "./components/HabitDay";
import HabitCheck from "./components/habit-info/HabitCheck";

function App() {

	const { habits } = useContext( HabitContext )

	//Esta funcion se encargar de dividir todos los habitos por dia
	const splitHabits = ( day, habitsInfo ) =>(
		habitsInfo
			//usamos filter para separar los habitos que compartan el mismo dia
			.filter( habit => habit.days.includes( day ) )

			//con map cremos componente que muestran la informacion de esos habitos separados
			.map( habito => (
			<HabitCheck
			key={ habito.id } 
			name={ habito.name }
			status={ habito.status }/>
		) )
	)

	//este array contiene los dias de la semana que despues usaremos con map
	const daysWeek = [ "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" ];

  return (
    <>
    	<h1>Bienvenido a Habit Tracker</h1>
		<ul>
			<NavLink to= "/habit-list"><button className="button">Ver Habitos</button></NavLink>
			<NavLink to = "/habit-form"><button className="button">Crear Habitos</button></NavLink>
		</ul>

		<section className="daily-habits">

			{ daysWeek.map( dia => (
				<HabitDay 
					key={ dia }
					day={ dia }
					habits = { splitHabits ( dia, habits )}
				/>
			))}
		
		</section>
    </>
  )
}

export default App
