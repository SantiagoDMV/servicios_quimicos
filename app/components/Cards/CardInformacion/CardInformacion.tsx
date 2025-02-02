"use client";
import { useState, useEffect } from "react";
import { obtenerProducto } from "@/app/services";
export default function CardInformacion({ productoObtenido }: any) {
  const [producto, setProducto] = useState<any>(productoObtenido);
  return (
    <>
      {producto && (
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {producto.nombre}
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            --------
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <div className="w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                
              <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Código
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    {producto.codigo}
                  </span>
                </button>
                
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Stock
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    {producto.stock}
                  </span>
                </button>

                
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600"
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Presentación
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    {producto.presentación ? producto.presentación : "-"}
                  </span>
                </button>

                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
                >
                {/* border-e */}

                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Precio
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    {//producto.precio
                    }
                    -
                  </span>
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
