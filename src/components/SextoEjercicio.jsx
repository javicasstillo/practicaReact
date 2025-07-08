import { useEffect, useState } from "react"
import '../App.css'

function SextoEjercicio(){

    const [noticia, setNoticia ] = useState([])
    const [mostrarSpinner, setMostrarSpinner] = useState(false)
    const [categoria, setCategoria ] = useState("")
    const [pais, setPais ] = useState("")

    const claveApi = "pub_463528545b4f446fb0b6f6c91e0ee435"

    const extraerCategoria = (e)=>{
        setCategoria(e.target.value)
    }

    const extraerPais = (e)=>{
        setPais(e.target.value)
    }
    const obtenerNoticia = async (e)=>{
        e.preventDefault()
        const extraerDatos = await fetch(`https://newsdata.io/api/1/latest?apikey=${claveApi}&category=${categoria}&country=${pais}&language=es`)
        if (extraerDatos.status === 200){
            const resultadoNoticia = await extraerDatos.json()
            setNoticia(resultadoNoticia.results)
        } else {
            setNoticia("Error de servidor")
        }
       

    }

    return <div className="text-center py-3">
        <h1>Sexto ejercicio</h1>
        <p>Usando api de noticias realizar una app que me diga las noticias en el mundo. </p>

        <form className="d-flex justify-content-center gap-3">
            <select name="pais" value={pais} onChange={extraerPais} >
                <option value="">--Selecciona un Pais--</option>
                <option value="ar">Argentina</option>
                <option value="mx">Mexico</option>
                <option value="br">Brasil</option>
                <option value="co">Colombia</option>
                <option value="cl">Chile</option>
            </select>

            <select name="categoria" value={categoria} onChange={extraerCategoria} >
                <option value="">--Selecciona una Categoria--</option>
                <option value="health">Salud</option>
                <option value="business">Negocio</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnologia</option>
            </select>

            <button className="btn btn-info" onClick={obtenerNoticia}>Buscar</button>
        </form>

        <div className="container py-3">
            <div className="row justify-content-center">
                {noticia.map((item, index) => (
                    <div className=" card mx-1 my-1 p-0 col-12 col-md-3" key={index}>
                        <div className="alturaDiv">
                            <img src={item.image_url} alt="Imagen de la noticia"/>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.link}>
                            <button className="btn btn-primary mb-3">Ver noticia completa</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    </div>
}
export default SextoEjercicio