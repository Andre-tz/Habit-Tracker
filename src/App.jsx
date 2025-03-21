import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import PageAnimation from "./components/animation/PageAnimation";
import OptionTransition from "./components/animation/OptionTransition";
import { useContext } from "react";
import { HabitContext } from "./context/HabitContext";

const App = ( ) =>{

    const { userData } = useContext( HabitContext )
    return (
        <>
            <OptionTransition key={ userData }>
                <Header />

                <PageAnimation>
                    <Outlet />
                </PageAnimation>

            </OptionTransition>
        </>
        
    )
}

export default App;