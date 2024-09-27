import { Button, Form } from "react-bootstrap"
import { FC } from "react"
import { useForm } from "../../../hooks/useForm"

interface IPropsFormProducts {
    handleAddProduct:Function
}

export const FormProduct: FC<IPropsFormProducts> = ({handleAddProduct}) => {

    const {handleChange, values, resetForms} = useForm({nombre:"",
        imagen:"",
        precio:0,
    })

    const handleSubmitForm = ()=>{
        handleAddProduct(values)
        resetForms()
    }
    



  return (
    <Form className="p-4 border rounded m-3">
        <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
            type="text"
            name="nombre"
            placeholder="Ingrese nombre producto"
            value={values.nombre}
            onChange={handleChange}>
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNombre">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
            type="text"
            name="imagen"
            placeholder="Ingrese nombre producto"
            value={values.imagen}
            onChange={handleChange}>
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNombre">
        <Form.Label>Precio</Form.Label>
        <Form.Control
            type="number"
            name="precio"
            placeholder="Ingrese nombre producto"
            value={values.precio}
            onChange={handleChange}>
        </Form.Control>
        </Form.Group>

        <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSubmitForm} variant="primary">Enviar Producto</Button>
        </div>
    </Form>
  )
}
