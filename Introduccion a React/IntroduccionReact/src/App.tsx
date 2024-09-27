import { AppProduct } from "./components/AppProduct/AppProduct"

export const App = () => {
   // const [enableCounter,setEnableCounter] = useState(false)
  return (
    <div style={{display:"flex" , flexDirection:"column", gap:"2rem"}}>
    {/*<PrimerComponent texto={"Bienvenido!"} color={"green"} fontSize={"2rem"}/>
    {enableCounter && <ComponentCounter/> /*Cuando se cumpla la condicion, muestra el componente*/}
        {/*<button onClick={()=>{
            setEnableCounter(!enableCounter)//Si es F lo pasa a V, y si es V lo pasa a F
            //Se monta y desmonta el Componente por eso se resetea
        }}
        >
        Mostrar u ocultar contador</button>*/}
    {/*<ComponentUseEffect/>*/}
    {/*<FormComponent/>*/}
    <AppProduct/>
    </div>
  )
}