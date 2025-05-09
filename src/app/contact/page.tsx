import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col pt-20 pb-8 md:flex-row items-center'>
    <h2 className='text-xl py-4 px-2'>Dejanos un mensaje con tus dudas o consultas, nos pondremos en contacto dentro de un plazo de 48 horas</h2>
    <form 
    className='flex w-full flex-col gap-2 p-2 border border-orange-200 rounded-md shadow-md py-8'
    action="">

        <div className='flex gap-2 justify-between p-2 items-center'>
            <label className='' htmlFor="">Nombre: </label>
            <input className='border min-w-60 border-orange-300 p-2 leading-3' placeholder='Tu nombre ..' type="text" />
        </div>
        <div className='flex gap-2 justify-between p-2 items-center'>
<label className='' htmlFor="">Correo: </label>
        <input className='border min-w-60 border-orange-300 p-2 leading-3' type="text" placeholder='Tu correo..' />
        </div>
        <div className='flex gap-2 justify-between p-2 items-center'>
    <label className='' htmlFor="">Teléfono: </label>
        <input className='border min-w-60 border-orange-300 p-2 leading-3' type="text" placeholder='' />
        </div>
        <div className='flex gap-2 justify-between p-2 items-center'>
<label className='' htmlFor="">Tu mensaje:</label>
        <textarea className='border min-w-60 resize-none border-orange-300 p-2 leading-3' rows={5} name="" id="" placeholder=''>
          
        </textarea>
        </div>
        <button className='bg-orange-400 text-slate-50 font-bold p-3 my-2 cursor-pointer rounded'>Enviar</button>
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default page