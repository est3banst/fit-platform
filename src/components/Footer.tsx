"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
    return (
      <>
      <div className="h-1 bg-orange-400 w-full"></div>
      <footer className="text-center p-4 mt-4 text-gray-500">
      <div>
        <section className="flex-col my-2 items-start w-full justify-start">
          <p className="text-black font-medium mb-2 border-b border-orange-400 w-max">Navegación</p>
          <ul className="flex w-max text-start gap-2 flex-col">
            <Link href='/'>
            <li className={` ${pathname === '/' ? "text-blue-500" : "text-gray-600"}`}>Inicio</li>
            </Link>
            <Link href='/courses'>
            <li className={` ${pathname.includes('/courses') ? "text-blue-500" : "text-gray-600"}`}>Cursos</li>
            
            </Link>
            <Link href='/blog'>
            <li className={` ${pathname === '/blog' ? "text-blue-500" : "text-gray-600"}`}>Blog</li>
            
            </Link>
            <Link href='/contact'>
            <li className={` ${pathname === '/contact' ? "text-blue-500" : "text-gray-600"}`}>Contacto</li>
            </Link>
          </ul>
        </section>
        <section></section>
        <section></section>
      </div>
       
       <div className="mb-4 mt-5">
        <h1 className="text-3xl font-bold mb-6">Tu Nuevo Self</h1>
        <p className="text-gray-600">Tu Nuevo Self es una plataforma de cursos en línea que te ayuda a mejora tu estado físico a través de ejercicios.</p>
        <p className="text-gray-600">¡Únete a nosotros y comienza hoy mismo a mejorar y cuidar de tu cuerpo!</p>
       <small className="underline text-xs">Antes de comenzar a hacer cualquier tipo de ejercicio recomendamos consultar a un doctor</small>
       </div>
        <small>
        © 2025 Tu Nuevo Self - Todos los derechos reservados
        </small>
      </footer>
      </>
    );
  }
  