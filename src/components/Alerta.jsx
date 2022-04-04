import React from 'react'

const Alerta = ({children}) => {
  return (
        <div className='my-3 text-red-500 uppercase font-semibold'>
            {children}
        </div>
  )
}

export default Alerta