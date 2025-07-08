import { useState } from "react"

function QuintoEjercicio(){

    const [clima, setClima] = useState({
        weather: [],
        name: "",
        main: {}
    });

    const [error, setError] = useState("")
    const [inputValor, setInputValor] = useState("")

    const apiKey = "32968dc17635ac0ac7a57f6a411c6860"

    const valorExtraer = (e)=>{
        setInputValor(e.target.value)
    }

    

    const obtenerClima = async (e)=>{
        e.preventDefault()
        const respuestaClima = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValor}&appid=${apiKey}&lang=es&units=metric`);
        if (respuestaClima.status === 200){
            const respuestaFinalClima = await respuestaClima.json()
            setClima(respuestaFinalClima)
            setError("")
        } else if (respuestaClima.status === 404){
            setError("Ciudad inexistente")
            setClima({
                weather: [],
                name: "",
                main: {}
            })
        } else{
            setError("Ocurrio un error inesperado. Intente de nuevo mas tarde.")
            setClima({
                weather: [],
                name: "",
                main: {}
            })
        }
        
    }


    return <div className="bg-body-tertiary text-center py-3">
        <h1>Quinto ejercicio</h1>
        <p>Usando api del clima realizar una app que me diga el clima de cualquier ciudad. </p>

        <form className="d-flex justify-content-center gap-3">
            <input type="text" onChange={valorExtraer} value={inputValor} />
            <button className="btn btn-primary" onClick={obtenerClima}>Consultar clima</button>
        </form>

        <div className="container">

            <p>{error}</p>

            <h3>{clima.name}</h3>
            
            <p>{clima.main.temp}</p>

            {clima.weather.map((item, i)=>{
            return <div key={i} className="text-center">
                <p>{"Descripcion: " + item.description}</p>
            </div>

            })}
        </div>

    </div>
}

export default QuintoEjercicio