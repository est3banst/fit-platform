import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import Link from 'next/link';
import courses from '@/utils/courses';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <main className="p-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Transforma tu cuerpo, en cualquier momento, en cualquier lugar</h1>
          <p className="text-lg mb-8">Unete a la comunidad de el fitness, aumenta tu fuerza y mejora tu salud desde tu casa</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <h2 className='text-lg border-b-2 border-orange-500 w-max'>Los más populares</h2>
         <small className='text-xs text-gray-500'>Obtendrás: Videos instructivos para realizar los ejercicios, libros digitales que contienen años de resumenes de materiales respaldados por ciencia, consejos y sugerencias para no abandonar a medio camino</small>
          {courses.slice(0, 3).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>
      </main>
      <div>
        <section className='p-2 my-2'>
          <article className=''>
          Por qué casi todo el mundo se equivoca sobre el ejercicio... incluyendo cómo ganar masa muscular magra y eliminar la grasa no deseada.
          </article>
          <Link href='/blog' className='text-blue-600 text-center mb-4 mt-2 block'>Lee más en nuestro blog</Link>
          {/* <article>
          Es increíblemente sencillo una vez que conoces y entiendes los secretos. Pero hoy en día es cada vez más difícil distinguir entre la propaganda y los esteroides, y la información sólida. Así es, no necesitas esteroides para conseguir el cuerpo que deseas, solo necesitas la información correcta
          </article> */}
        </section>
      </div>
      <Footer />
    </div>
  );
}
