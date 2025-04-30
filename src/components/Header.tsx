"use client";

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    <header className="flex justify-between items-center p-4 shadow">
      <h1 className="text-2xl font-bold">Tu nuevo <b className='text-orange-400'>self</b></h1>
      <nav className="hidden md:block space-x-4">
        <Link href="/">Home</Link>
        <Link href="/courses">Cursos</Link>
        <Link href="/blog">Blog</Link>
        <Link href='/contact'>Contacto</Link>
        <Link href="/login">Iniciar sesión</Link>
      </nav>
      <div 
      onClick={toggleMenu}
      className='flex md:hidden absolute cursor-pointer right-2 flex-col shadow gap-1'>
        <div className={`w-5.5 rounded-2xl transition-all duration-500 ease-in-out h-[2px] bg-orange-400`}></div>
          <div className={`w-5.5 h-[3px] transition-all duration-500 ease-in-out bg-orange-400`}></div>
          <div className={`w-5.5 h-[3px] transition-all duration-500 ease-in-out bg-orange-400`}></div>
        <div className={`w-5.5 h-[1px] transition-all duration-500 ease-in-out rounded-2xl bg-orange-400 `}></div>
      </div>
    </header>
    <div className='absolute z-[100] space-y-8 top-0 right-0 bg-white w-[330px] h-screen shadow-lg p-4 transition-transform duration-500 ease-in-out' style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
      <div className='flex justify-between items-center'>
      <Link href="/" className='text-2xl font-bold'>Tu nuevo <b className='text-orange-400'>self</b></Link>
       <svg className='cursor-pointer' onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	  <path fill="currentColor" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></path>
    </svg>
        </div>
        <ol className='space-y-3 p-2'>
      <Link className='flex gap-2' href="/courses">
        <li>Cursos</li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.75 5.623V9.52a4 4 0 0 1-4 4H3.871m4.236 4.857L4.31 14.58a1.5 1.5 0 0 1-.44-1.061m4.236-4.857L4.31 12.46c-.293.293-.44.677-.44 1.061"></path>
</svg></Link>
        <Link className='flex gap-2' href="/blog">
        <li>Blog</li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.75 5.623V9.52a4 4 0 0 1-4 4H3.871m4.236 4.857L4.31 14.58a1.5 1.5 0 0 1-.44-1.061m4.236-4.857L4.31 12.46c-.293.293-.44.677-.44 1.061"></path>
</svg></Link>
        <li>Iniciar sesión</li>
        <li>Registrarse</li>
      </ol>
    </div>

    </>
  );
}
