import { useState } from "react"
import Spinner from 'react-bootstrap/Spinner';

function CuartoEjercicio(){


    const [usuarios, setUsuarios] = useState([])
    const [mostrarSpinner, setMostrarSpinner] = useState(false)

    const obtenerUsuarios = async ()=>{
        setMostrarSpinner(true)
        const respuestaServidor = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(respuestaServidor)
        if(respuestaServidor.status === 200){
            const respuestaFinal = await respuestaServidor.json()
            setUsuarios(respuestaFinal)    
            console.log(respuestaFinal)       
        } else {
            console.log("Error de servidor")
        }
        setMostrarSpinner(false)
    }

    return <div className="text-center py-3">
        <h1>Cuarto ejercicio</h1>
        <p>Realizar una llamada a la <span className="bg-info text-white px-1 rounded py-1">API JSONPlaceHolder</span> para recibir un usuario falso aleatorio. </p>
        <button className="btn btn-warning text-white mb-3" onClick={obtenerUsuarios}>Obtener Usuarios</button>
        <div className="container">
            {mostrarSpinner===true ?
            <Spinner animation="grow" variant="warning"></Spinner>
            : usuarios.map((itemArray)=>{
                return <div className="d-flex gap-3 justify-content-between">
                    <p>Nombre: {itemArray.name}</p>
                    <p>Correo Electronico: {itemArray.email}</p>
                    <p>Id: {itemArray.id}</p>
                </div>
            })
            }

            
        </div>
            
    </div>
}

export default CuartoEjercicio