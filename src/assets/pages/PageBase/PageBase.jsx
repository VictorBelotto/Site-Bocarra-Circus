import React from 'react'

import { Outlet } from 'react-router-dom'


const PaginaBase = () => {

  return (
    <div className='flex flex-col h-screen'>

    
        <main className='grow'>
          <Outlet/>
        </main>
    
    </div>
  )
}

export default PaginaBase