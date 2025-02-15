import { createContext, useState } from "react";

const HabitContext = createContext( );

const HabitContextProvider = ( {children } ) => {

    const [ habits, setHabits ] = useState( [] );

    const addHabits = habit => {
        setHabits( [ ...habits, habit ] )
    }

    return (
        <HabitContext.Provider value={ { habits, addHabits } }>
            { children }
        </HabitContext.Provider>
    )
}

export  { HabitContext, HabitContextProvider };
