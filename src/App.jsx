import { useState } from "react"
import { NavLink } from "react-router-dom"

function App() {

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
