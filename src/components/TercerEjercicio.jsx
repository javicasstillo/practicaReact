import { useState } from "react"

function TercerEjercicio(){

    const [valorInput, setvalorInput] = useState("")
    const [tarea, setTarea] = useState([])
    const [error, setError] = useState("")
    
    const extraerValor = (e)=>{
        setvalorInput(e.target.value)
    }

    const agregarTarea = (e)=>{
        e.preventDefault()
        if (valorInput === ""){
           setError("No escribiste ninguna tarea")
           return
        }
        setTarea([...tarea, valorInput]) //Este es el operador spread (...). Lo que hace es copiar todos los elementos del array tareas y agregarle uno nuevo al final.
        setvalorInput("")
        setError("")
    }

    const borrarTarea = (nombreTarea)=>{
        setTarea(tarea.filter((item=> {
           return item !== nombreTarea
        })))
        //item es cada string dentro del array tarea (ejemplo: "estudiar"), nombreTarea es un parametro (tambien string) que se le pasa a la funcion borrarTarea para luego ser comparados (ES EL STRING QUE QUIERO BORRAR). Por ejemplo item=estudiar nombreTarea = estudiar, en este caso se cumple la condicion y se borra ese elemento del array, caso contrario nombreTarea = cocinar, no se cumple la condicion y el item del array se queda. 

        // conclusion: para .filter() necesito el string del array (item) y el string a borrar (nombreTarea), que posteriormente sera comparado con el primer string (item)

        //Si tarea = ["Estudiar", "Limpiar"]
        //y llamás a borrarTarea("Limpiar")
        //el nuevo array será: ["Estudiar"]
    }

    return <div className="bg-body-tertiary text-center py-3">
        <h1>Tercer Ejercicio</h1>
        <p>Realizar una lista de tareas.</p>

        <div className="container text-center">

            <form className="d-flex justify-content-center gap-2">
                <input type="text" className="form-control" value={valorInput} onChange={extraerValor} />
                <button className="btn btn-outline-info" onClick={agregarTarea}>Agregar</button>
                
            </form>

            <p className="text-center text-danger">{error}</p>

            <ul className="list-group  py-3">
                {tarea.map((nuevaTarea, index)=>{
                    return <li className="list-group-item d-flex align-items-center justify-content-between" key={index}>{nuevaTarea}<button className="btn btn-danger" onClick={() =>borrarTarea(nuevaTarea)}>Borrar</button></li>
                    //["Estudiar", "Comprar", "Limpiar"];

                    //Paso 3: ¿Qué es nuevaTarea?
                    //nuevaTarea es el nombre del parámetro que elegiste para representar el elemento actual del array.

                    //Es decir, cuando .map() está en la primera posición del array, nuevaTarea será "Estudiar".

                    //Cuando está en la segunda posición, nuevaTarea será "Comprar".

                    //Y así sucesivamente.

                    //Tarea ES UN ARRAY y nuevaTarea es un parametro con el que yo decido representar cada elemento del array, por ejemplo "estudiar", "comprar", etc. Por otro lado, index es la posicion de cada elemento del array, ya sea 0, 1, etc. entonces yo cada "nuevaTarea" la convierto en un li gracias a la funcion .map()
                })}
                
            </ul>
        </div>
    </div>

}

export default TercerEjercicio