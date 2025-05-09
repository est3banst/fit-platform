import { Course } from '@/types/course';

const courses: Course[] = [
  {
    id: '1',
    title: 'Transformación Full-Body',
    image: '/fit-body.webp',
    price: 1599,
    discount: 50,
    description: 'La guía definitiva para transformar tu cuerpo en 12 semanas.',
    materials: {
      videoHours: 20,
      ebooks: ['Guía de nutrición', 'Plan de entrenamiento semanal'],
      extras: ['Checklist de progreso', 'Acceso a comunidad privada'],
    },
  },
  {
    id: '2',
    title: 'HIIT Blast',
    image: '/squatt.webp',
    price: 799,
    discount: 40,
    description: 'Entrenamientos en intervalos de alta intensidad para obtener resultados rápidos.',
    materials: {
      videoHours: 10,
      ebooks: ['Manual de entrenamiento HIIT'],
      extras: ['Calendario de ejercicios', 'Seguimiento de resultados'],
    },
  },
  {
    id: '3',
    title: 'Core Strength Maestría',
    image: '/fit-abs.jpeg',
    price: 799,
    discount: 25,
    description: 'Desarrolla tu fuerza abdominal, fortalece tu núcleo y mejora tu postura.',
    materials: {
      videoHours: 12,
      ebooks: ['Fortalece tu Core en 30 Días'],
    },
  },
];

  
  export default courses;
  