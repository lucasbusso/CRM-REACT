import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
   <>
         <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
         <p className='mt-3 '>Completa el formulario para registrar un cliente</p>
         <Formulario />
   </>
  )
}

export default NuevoCliente