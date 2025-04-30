import Link from 'next/link';
import React from 'react'

const notFound = () => {
  return (
    <div>
        <h2>No pudimos encontrar el recurso, revisa la dirección</h2>
   <Link href='/'>Volver</Link>
    </div>
  )
}

export default notFound;