import { useEffect, useState } from "react";

function PrimerEjercicio(){

  const [numeroInicial, setNumeroInicial] = useState(0);

  const sumar = () =>{
    setNumeroInicial(numeroInicial+1)
  }

  const restar = ()=>{
    setNumeroInicial(numeroInicial-1)
  }

  useEffect(()=>{
    document.title = numeroInicial
  })

  return <div className="text-center bg-body-tertiary py-3">
    <h1>Primer ejercicio</h1>
    <p>Realizar un contador: Al hacer click en boton "+" que el numero incremente y al hacer click en el boton "-" que el numero decremente". Usar useEffect para que el titulo tambien cambie con el numero del contador. </p>
    <div className="d-flex justify-content-center gap-3">
      <button className="btn btn-lg btn-danger" onClick={restar}>-</button>
      <h3 className="mt-2">{numeroInicial}</h3>
      <button className="btn btn-lg btn-info text-white" onClick={sumar}>+</button>
    </div>
    
  </div>
}

export default PrimerEjercicio