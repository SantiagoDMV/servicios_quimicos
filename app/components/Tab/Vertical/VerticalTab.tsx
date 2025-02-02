'use client'
import { useState } from "react";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi"; // Importamos iconos

export default function VerticalTab() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div >
      {/* Barra superior cuando la pantalla es pequeña */}
      <div className="fixed lg:hidden top-0 left-0 w-full bg-green-800 p-3 flex justify-between items-center text-white z-50">
        {/* <h1 className="text-lg font-bold">Servicios Químicos</h1> */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <BiX size={30} /> : <BiMenu size={30} />}
        </button>
      </div>

      {/* Menú lateral o desplegable desde arriba */}
      <div
        className={`fixed top-0 left-0 w-full lg:w-[300px] bg-green-900 text-white h-screen p-4 transition-transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
        } lg:relative lg:h-auto lg:translate-y-0 z-40`}
      >
        {/* Botón de cerrar en móviles */}
        <div className="lg:hidden flex justify-end">
          <button onClick={() => setMenuOpen(false)}>
            <BiX size={30} />
          </button>
        </div>

        <div className="text-center">
          <h1 className="pt-5 font-bold text-gray-200 text-lg">Servicios Químicos</h1>
          <div className="my-2 bg-white h-[1px]"></div>
        </div>

        {/* Elementos del menú */}
        <nav className="mt-3 space-y-3">
          <Link href="/" className="block p-2 rounded-md hover:bg-green-600">
            <i className="bi bi-house-door-fill"></i> Inicio
          </Link>
          <Link href="/pedidos" className="block p-2 rounded-md hover:bg-green-600">
            <i className="bi bi-bookmark-fill"></i> Pedidos
          </Link>
          <div className="my-2 bg-white h-[1px]"></div>
          <Link href="/productos" className="block p-2 rounded-md hover:bg-green-600">
            <i className="bi bi-chat-left-text-fill"></i> Productos
          </Link>
          <div className="pl-6 space-y-2">
            <Link href="/materiaprima" className="block p-2 hover:bg-green-600 rounded-md">
              Materia Prima
            </Link>
            {/* <Link href="/productos" className="block p-2 hover:bg-green-600 rounded-md">
              Productos
            </Link> */}
          </div>
          <Link href="/clienteproveedor" className="block p-2 rounded-md hover:bg-green-600">
            <i className="bi bi-chat-left-text-fill"></i> Clientes/Proveedores
          </Link>
          <Link href="/logout" className="block p-2 rounded-md hover:bg-red-600">
            <i className="bi bi-box-arrow-in-right"></i> Salir
          </Link>
        </nav>
      </div>
    </div>
  );
}
