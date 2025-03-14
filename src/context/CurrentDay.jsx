/*Esta componente se encargara de obtener el dia dependiendo la fecha del sistema */

import { useEffect, useState } from "react";

const getCurrentDay = ( )=>{

    //creo un array con los dias de la semana
    const daysWeek = [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ];
    // el objeto new Date me devuelve un numero : Dom = 0 y Sab = 6
    const today = new Date( ).getDay( );
    //dependiendo el numero retorno en español el dia de la semana
    return daysWeek[ today ];

}

const CurrentDay = () =>{

    //creo el estado  que se encargara de manejar el dia y le doy como valor inicial el dia obtenido en la funcion CurrentDay
    const [ today, setToday ] = useState( getCurrentDay ( ) );
    //uso un useEffect que se encargara de realizar una accion cuando el usuario habra la aplicacion
    useEffect( ()=>{

        //Creamon una variable que se encargara de guardar el intervalo
        const interval = setInterval( ()=>{

            //se encargara de actualizar el valor de mi estado, el tiempo es 6000 milisegundos
            setToday( getCurrentDay () );

        }, 60000)
        
        //limpio el intervalo de tiempo
        return () => clearInterval( interval );

    }, [ ])

     //retorno el dia 
     return today;
}

export default CurrentDay;