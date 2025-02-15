import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HabitForms from './components/HabitForm.jsx'
import HabitList from './components/HabitList.jsx'
import { HabitContextProvider } from './context/habitContext.jsx'

createRoot(document.getElementById('root')).render(

	<HabitContextProvider>
		<BrowserRouter>
			<Routes>
				<Route index element = { <App /> } />
				<Route path='/habit-list' element = { <HabitList /> } />
				<Route path='/habit-form' element = { <HabitForms /> } />
			</Routes>
		</BrowserRouter>
	</HabitContextProvider>
	
	

)
