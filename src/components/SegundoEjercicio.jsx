import { useState } from "react"

function SegundoEjercicio(){

    const [texto, setTexto] = useState("")

    const tiempoReal = (e)=>{
        setTexto(e.target.value)
    }

    return <div className="text-center  py-3 ">
        <h1>Segundo Ejercicio</h1>
        <p>Realizar un texto dinamico: Hacer un input que muestre en tiempo real lo que escribís</p>
        <div className="container d-flex justify-content-center gap-3">
            <input type="text" placeholder="Escriba aqui..." onChange={tiempoReal}/>
            <p className="mt-3">El texto que estas escribiendo esta aqui👇:</p>
        </div>
        <p>{texto}</p>
        
    </div>
}

export default SegundoEjercicio