import { FC } from "react"

interface IPropsPrimerComponent{
    texto:string
    color:string
    fontSize:string
}

export const PrimerComponent: FC<IPropsPrimerComponent> = ({texto,color,fontSize}) => {
  return (
    <div style={{color:color, fontSize:fontSize}}><p>{texto}</p></div>
  )
}