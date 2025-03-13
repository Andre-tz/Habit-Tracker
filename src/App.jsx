import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import PageAnimation from "./components/animation/PageAnimation";

const App = ( ) =>{

    return (
        <>
            <Header />
            <PageAnimation>
                <Outlet />
            </PageAnimation>
        </>
        
    )
}

export default App;