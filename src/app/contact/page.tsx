import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col py-8 md:flex-row items-center'>
    <h2 className='text-xl py-4 px-2'>Dejanos un mensaje con cualquier duda o planteo que desees, nos pondremos en contacto dentro de un plazo de 48 horas</h2>
    <form 
    className='flex flex-col gap-2 p-2 border border-orange-200 rounded-md shadow-md py-8'
    action="">

        <div className='flex gap-2 justify-between p-2 items-center'>
            <label className='max-w-20' htmlFor="">Nombre: </label>
            <input className='border border-orange-300 p-2 leading-3' placeholder='Tu nombre ..' type="text" />
        </div>
        <div className='flex gap-2 justify-between p-2 items-center'>
<label className='max-w-20' htmlFor="">Correo: </label>
        <input className='border border-orange-300 p-2 leading-3' type="text" placeholder='Tu correo..' />
        </div>
        <div className='flex gap-2 justify-between p-2 items-center'>
    <label className='max-w-20' htmlFor="">Teléfono: </label>
        <input className='border border-orange-300 p-2 leading-3' type="text" placeholder='' />
        </div>
        <div className='flex gap-2 justify-between p-2 items-center'>
<label className='max-w-20' htmlFor="">Tu mensaje :</label>
        <textarea className='border border-orange-300 p-2 leading-3' name="" id="" placeholder=''>
          
        </textarea>
        </div>
        <button className='bg-orange-400 text-slate-50 font-bold p-3 my-2 cursor-pointer rounded-4xl'>Enviar</button>
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default page