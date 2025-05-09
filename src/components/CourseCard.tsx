
import { Course } from '@/types/course';
import Link from 'next/link';
import React from 'react';

interface CourseCardProps {
    course: Course;
}

export default function CourseCard({ course } :CourseCardProps ) {
  const oldPrice = course.price;

  const discount = course.discount? course.discount : 0;
  const discountedPrice = Math.trunc(oldPrice * discount);
  const finalPrice = Math.trunc(oldPrice - discountedPrice / 100);
  return (
    <>
    <div className="border relative rounded-lg overflow-hidden shadow-md">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className='absolute right-0 top-0 font-black z-50 rounded-full bg-red-600 text-slate-50 py-4 px-2'><p>{course.discount}% OFF</p></div>
      <div className="p-4">
           <h2 className="text-xl font-bold">{course.title}</h2>
      </div>
       <div className='flex gap-4 justify-between w-4/6 px-4'>
       <p className='text-gray-500 line-through'> $ {oldPrice }</p>
        <p className="text-xl text-green-600">${finalPrice}</p>
       
        </div>
        {course.materials && (
  <div className="px-4 pb-2 text-sm text-gray-600">
    <p><strong>Incluye:</strong> {course.materials.videoHours}h de video, {course.materials.ebooks?.length || 0} eBooks</p>
  </div>
)}
         <p className='p-4'>{
          course.description.length > 100
            ? `${course.description.slice(0, 100)}...`
            : course.description
          }</p>
        <Link href={`/courses/${course.id}`} className="text-blue-600 text-center mb-4 mt-2 block">Ver más</Link>
      </div>

    </>
  );
}
