import Footer from '@/components/Footer';
import Header from '@/components/Header';
import courses from '@/utils/courses';
import { notFound } from 'next/navigation';

interface CourseDetailProps {
  params: { id: string };
}

export default function CourseDetailPage({ params }: CourseDetailProps) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) return notFound();

  const oldPrice = course.price;
  const discount = course.discount || 0;
  const discountedPrice = Math.trunc(oldPrice * discount);
  const finalPrice = Math.trunc(oldPrice - discountedPrice / 100);

  return (
    <>
    <Header/>
    <div className="max-w-4xl pb-10 pt-20 mx-auto px-6">
      <h1 className="text-3xl p-2 font-bold mb-4">{course.title}</h1>
      <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-md mb-6" />
      
      <div className="text-lg text-gray-700 mb-4">
        {course.description}
      </div>

      <div className="flex gap-4 items-center text-xl mb-6">
        <span className="text-gray-500 line-through">${oldPrice}</span>
        <span className="font-semibold text-green-600">${finalPrice}</span>
        {discount > 0 && (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">{discount}% OFF</span>
        )}
      </div>

      {course.materials && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Materiales incluidos</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {course.materials.videoHours && <li className='flex items-center gap-4'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	<g fill="none">
		<path fill="currentColor" fillOpacity={0.25} fillRule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M9.737 7.868l6.474 3.238a1 1 0 0 1 0 1.789l-6.474 3.237A1.2 1.2 0 0 1 8 15.058V8.943a1.2 1.2 0 0 1 1.737-1.074" clipRule="evenodd"></path>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.211 11.106L9.737 7.868A1.2 1.2 0 0 0 8 8.942v6.116a1.2 1.2 0 0 0 1.737 1.074l6.474-3.238a1 1 0 0 0 0-1.788" strokeWidth={1}></path>
		<circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={1}></circle>
	</g>
</svg> {course.materials.videoHours} horas de video</li>}
            {course.materials.ebooks?.map((ebook, i) => <li className='flex items-center gap-4' key={`ebook-${i}`}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 36 36">
	<path fill="currentColor" d="M10 5.2h18v1.55H10z" className="clr-i-outline clr-i-outline-path-1"></path>
	<path fill="currentColor" d="M29 8H9.86A1.89 1.89 0 0 1 8 6a2 2 0 0 1 1.86-2H29a1 1 0 0 0 0-2H9.86A4 4 0 0 0 6 6a4 4 0 0 0 0 .49a1 1 0 0 0 0 .24V30a4 4 0 0 0 3.86 4H29a1 1 0 0 0 1-1V9.07A1.07 1.07 0 0 0 29 8m-1 24H9.86A2 2 0 0 1 8 30V9.55a3.63 3.63 0 0 0 1.86.45H28Z" className="clr-i-outline clr-i-outline-path-2"></path>
	<path fill="none" d="M0 0h36v36H0z"></path>
</svg> {ebook}</li>)}
            {course.materials.extras?.map((extra, i) => <li className='flex items-center gap-4' key={`extra-${i}`}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
	<g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={4}>
		<path strokeLinecap="round" d="M41 44V20H7v24zm-17 0V20m17 24H7"></path>
		<path d="M4 12h40v8H4z"></path>
		<path strokeLinecap="round" d="m16 4l8 8l8-8"></path>
	</g>
</svg> {extra}</li>)}
          </ul>
        </div>
      )}
    </div>
    <Footer/>
      </>
  );
}
