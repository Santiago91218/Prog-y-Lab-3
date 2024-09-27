import { useEffect, useState } from "react"
/*Lo tenemos cuando se monta, cuando queremos escuhar un cambio, o cuando se desmonta un componente*/

export const ComponentUseEffect = () => {

    const [state,setState]= useState(false)

    /*Use effect se va a ejecutar una vez que nuestro componente ha sido montado*/
    useEffect(()=>{
      console.log("Componente Montado");

      return ()=>{
        console.log("Componente Desmontado");
      
      }
    },[])

    useEffect(()=>{
      console.log(state);
    },[state])//Se ejecuta una vez cambia el estado


  return (
    <div>ComponentUseEffect
      <p>{state ? "Es true" : "Es false"}</p>
      <button onClick={()=>{
        setState(!state)
      }}>
        Cambiar State
      </button>
    </div>
  )
}