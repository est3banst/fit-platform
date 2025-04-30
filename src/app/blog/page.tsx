import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <div className='p-2'>
    <div>
        <h2 className='text-3xl font-bold my-3'>Consejos de entrenamiento y entrenamientos</h2>
    </div>
    <section className='leading-relaxed'>
          <article>
          Es increíblemente sencillo una vez que conoces y entiendes los secretos. Pero hoy en día es cada vez más difícil distinguir entre la propaganda y los esteroides, y la información sólida. Así es, no necesitas esteroides para conseguir el cuerpo que deseas, solo necesitas la información correcta
          </article>
          <article>
            Hemos recopilado una serie de artículos que te ayudarán a entender cómo funciona el cuerpo humano y cómo puedes aprovecharlo al máximo. Desde consejos de entrenamiento hasta rutinas completas, aquí encontrarás todo lo que necesitas para llevar tu entrenamiento al siguiente nivel.
          </article>
        </section>
        <section className='my-2 py-4'>
          <h3 className='text-2xl font-bold my-2'>Artículos destacados</h3>
          <article className='my-2'>
            <h4 className='text-xl font-semibold'>1. Cómo ganar masa muscular magra</h4>
            <p>Descubre los secretos para aumentar tu masa muscular de forma efectiva y saludable.</p>
          </article>
          <article className='my-2'>
            <h4 className='text-xl font-semibold'>2. Cómo eliminar la grasa no deseada</h4>
            <p>Aprende las mejores estrategias para deshacerte de la grasa no deseada y conseguir un cuerpo tonificado.</p>
          </article>
          <article className='my-2'>
            <h4 className='text-xl font-semibold'>3. La importancia de la nutrición en el entrenamiento</h4>
            <p>Entiende cómo una buena alimentación puede potenciar tus resultados en el gimnasio.</p>
          </article>
          </section>
    </div>

    <Footer/>
    </>
  )
}

export default page