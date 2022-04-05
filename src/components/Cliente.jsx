import { useNavigate } from "react-router-dom"

const Cliente = ({cliente, handleEliminar}) => {
    const navigate = useNavigate()
    const {nombre, empresa, email, telefono, notas, id} = cliente

  return (
    <tr className='border-b hover:bg-gray-50'>
        <td className='p-3 text-center'>{nombre}</td>
        <td className='p-3 text-center'>
            <p><span className='text-gray-800 uppercase font-bold'>Email: </span> {email} </p>
            <p className='mt-3'><span className='text-gray-800 uppercase font-bold'>Teléfono: </span> {telefono} </p>
            <p></p>
        </td>
        <td className='p-3'>{empresa}</td>
        <td className='p-3'>

            <button
                type='button'
                className='bg-gray-600 hover:bg-gray-700 block w-full text-white p-2 uppercase font-semibold text-xs shadow-md rounded-md'
                onClick={ () => navigate(`/clientes/${id}`)}
            >Ver más</button>

            <button
                type='button'
                className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-semibold text-xs shadow-md rounded-md mt-2'
                onClick={() => navigate(`/clientes/editar/${id}`)}
            >Editar</button>
            
            <button
                type='button'
                className='bg-red-500 hover:bg-red-600 block w-full text-white p-2 uppercase font-semibold text-xs shadow-md rounded-md mt-2'
                onClick={() => handleEliminar(id)}
            >Eliminar</button>
        </td>
    </tr>
  )
}

export default Cliente