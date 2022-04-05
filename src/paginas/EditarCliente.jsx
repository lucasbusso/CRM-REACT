import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Formulario from '../components/Formulario'

const EditarCliente = () => {
  const [ cliente, setCliente ] = useState({})
    const [ cargando, setCargando] = useState(true)

    const { id } = useParams()

    useEffect( () =>{
      const obtenerClienteAPI = async () =>{
        try {
          const url = `${import.meta.env.VITE_API_URL}/${id}`
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          
          setCliente(resultado)
        } catch (error) {
          
        }
        setTimeout(() => {
          setCargando(!cargando)
        }, 3000);
      }
      obtenerClienteAPI()
    }, [])

  return (
    <>
         <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
         <p className='mt-3 '>Aquí podrás editar los datos de tu cliente</p>

         {cliente?.nombre ? (
                <Formulario 
                  cliente={cliente}
                  cargando={cargando}
         />   
         ) : <p>Este cliente no existe</p>}
         
   </>
  )
}

export default EditarCliente