import { Course } from '@/types/course';
const courses: Course[] = [
    {
      id: '1',
      title: 'Transformación Full-Body',
      image: '/fit-body.webp',
      price: 1599,
      discount: 50,
      description: 'La guía definitiva para transformar tu cuerpo en 12 semanas.',
    },
    {
      id: '2',
      title: 'HIIT Blast',
      image: '/squatt.webp',
      price: 799,
      discount: 40,
      description: 'Entrenamientos en intervalos de alta intensidad para obtener resultados rápidos.',
    },
    {
      id: '3',
      title: 'Core Strength Mastery',
      image: '/fit-abs.jpeg',
      price: 799,
      discount: 25,
      description: 'Desarrolla tu fuerza abdominal, fortalece tu núcleo y mejora tu postura.',
    },
  ];
  
  export default courses;
  