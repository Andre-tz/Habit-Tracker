import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HabitForms from './components/HabitForm.jsx'
import HabitList from './components/HabitList.jsx'
import { HabitContextProvider } from './context/HabitContext.jsx'
import "../src/styles/index.css"
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(

	<HabitContextProvider>
		<BrowserRouter>
			<Routes>
				<Route path='/' element= { <App /> }>
					<Route index element = { <Home /> } />
					<Route path='/habit-list' element = { <HabitList /> } />
					<Route path='/habit-form' element = { <HabitForms /> } />
				</Route>
			</Routes>
		</BrowserRouter>
	</HabitContextProvider>
	
)
