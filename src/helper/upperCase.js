const upperCase = ( text ) =>{
    const upperText = text.charAt( 0 ).toUpperCase( )+text.slice( 1 )
    return upperText
}

export default upperCase;