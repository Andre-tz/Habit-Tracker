//esta funcion se encargara de cambiar el tema de HabitTracker
const setThemeColor = ( variable, color ) =>{
    document.documentElement.style.setProperty( variable, color )
}

export default setThemeColor;