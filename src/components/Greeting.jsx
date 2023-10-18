 export function Greeting() {
    const datos= 'Andres Y Ele'
    return <h1>Hola { datos }</h1>
}

 export function Saludar( {title} ) {
    console.log(title);

    return <h1>Hola { title }</h1>

}
