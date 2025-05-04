import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { HabitContext } from "../context/HabitContext";
import HabitDay from "./HabitDay";
import HabitCheck from "./habit-info/HabitCheck";
import "../styles/Home.css"
import upperCase from "../helper/upperCase";
import { useTranslation } from "react-i18next";
import dayMapping from "../helper/dayMapping"
import HabitPhrases from "./HabitPhrases";
//import HabitProgress from "../components/HabitProgress"


function Home() {

	//hook para cambiar idioma
	const { t } = useTranslation();

	//trayendo estados de mi context
	const { habits, currentDay } = useContext( HabitContext )

	//Esta funcion se encargar de dividir todos los habitos por dia
	const splitHabits = ( day, habitsInfo ) =>{
		return (
			habitsInfo
				//usé filter para separar los habitos que compartan el mismo dia
				.filter( habit => habit.days.includes( day ) )
	
				//con map creo los componentes que muestran la informacion de esos habitos separados
				.map( habito =>(
						<HabitCheck
						day= { day }
						key={ habito.id } 
						name={ upperCase( habito.name ) }
						state = { day == currentDay? t( "habit.pendiente" ) : t( "habit.no_complete") }
						/>
					)
				)
		)
	};
	
	//este array contiene los dias de la semana que despues usaremos con map
	const daysWeek = Object.keys( dayMapping );

  return (
	<>
		<div id="main-container">

			<h1 className="title">{ t( "welcome" ) }</h1>

			<HabitPhrases />
			
			<div className="top-section">
				<ul className="menu">
					<NavLink to= "/habit-list"><button className="button-main view">{ t( "view_habits" ) }</button></NavLink>
					<NavLink to = "/habit-form"><button className="button-main create">{ t( "create_habits" ) }</button></NavLink>
				</ul>

				{ /*/<HabitProgress /> */}	 
			</div>

		</div>

		<section className="daily-habits">
			{ /* Aqui valido si tengo habitos en mi localStorage*/}
			{ habits.length == 0? 
				//si no lo tengo entonces renderizo un mensaje
				<h3 className="message">{ t("emptyState.noHabitsToShow" ) }</h3> :

				//si lo tengo  entonces primero filtro mi array de dias
				daysWeek
					.filter(dia => splitHabits(dia, habits).length > 0)
					// luego los mape0
					.map( dia => (
						//con cado uno creare un componente que tenga el nombre de cada uno de los dias de la semana
						<HabitDay 
							key={ dia }
							day={ t( `days.full_name.${ dayMapping[ dia ]}`) }
							habits = { splitHabits ( dia, habits )}
						/>
				)) 
			}

		</section>
	</>    
  )
}

export default Home;
