import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Spinner } from "../components/Spinner"

const VerCliente = () => {
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
    cargando ? <Spinner /> : 
    Object.keys(cliente).length === 0 ? <p className="font-bold text-4xl text-gray-700 block text-center">No se encontraron los resultados</p> : (

      <div className="bg-white w-3/4 mx-auto p-10 rounded-md shadow-md">
          <>

            <h1 className='font-black text-4xl text-blue-900'>Cliente:  {cliente.nombre}</h1>
            <p className='mt-3 mb-10 text-xl border-b'>Información de cliente</p>

            {cliente.nombre && (
              <p className="text-4xl text-gray-700 p-2">
                <span className="text-gray-800 uppercase font-bold ">Cliente: </span> 
                {cliente.nombre}
              </p>
            )}
            {cliente.email && (
              <p className="text-2xl text-gray-700 p-2">
                <span className="text-gray-800 uppercase font-bold ">Email: </span> 
                {cliente.email}
              </p>
            )}
            {cliente.telefono && (
              <p className="text-2xl text-gray-700 p-2">
                <span className="text-gray-800 uppercase font-bold ">Telefono: </span> 
                {cliente.telefono}
              </p>
            )}
            {cliente.empresa && (
              <p className="text-2xl text-gray-700 p-2">
                <span className="text-gray-800 uppercase font-bold ">Empresa: </span> 
                {cliente.empresa}
              </p>
            )}
            {cliente.notas && (
              <p className="text-2xl text-gray-700 p-2">
                <span className="text-gray-800 uppercase font-bold ">Notas: </span> 
                {cliente.notas}
              </p>
            )}

          </>   
      </div>
      
    )
  )
}

export default VerCliente