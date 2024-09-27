import { useState } from "react"

export const ComponentCounter = () => {
    const [contador,setContador] = useState<number>(0)
    const incremetCount = (val:number)=>{
        setContador(contador+val)
    }
  return (
    <div>
        <p>Valor del Contador {contador}</p>
        <button
        onClick={
            ()=>{
                incremetCount(10)
            }
        }
        >Incrementar</button>
    </div>
  )
}