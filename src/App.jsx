import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { HabitContext } from "./context/HabitContext";
import HabitDay from "./components/HabitDay";
import HabitCheck from "./components/habit-info/HabitCheck";
import "./styles/App.css"

function App() {

	const { habits } = useContext( HabitContext )

	//Esta funcion se encargar de dividir todos los habitos por dia
	const splitHabits = ( day, habitsInfo ) =>(
		habitsInfo
			//usé filter para separar los habitos que compartan el mismo dia
			.filter( habit => habit.days.includes( day ) )

			//con map creo los componentes que muestran la informacion de esos habitos separados
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
    <div id="main-container">

    	<h1 className="title">Bienvenido a Habit Tracker</h1>
		<ul className="menu">
			<NavLink to= "/habit-list"><button className="button-main create">Ver Habitos</button></NavLink>
			<NavLink to = "/habit-form"><button className="button-main view">Crear Habitos</button></NavLink>
		</ul>

		<section className="daily-habits">

			{ habits.length == 0? 

				<h3 className="message"> No hay hábitos para mostrar</h3> :

				daysWeek.map( dia => (
					<HabitDay 
						key={ dia }
						day={ dia }
						habits = { splitHabits ( dia, habits )}
					/>
				)) 
			}
		
		</section>
    </div>
  )
}

export default App
