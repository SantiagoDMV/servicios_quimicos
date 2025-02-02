"use client";
export default function Ventana({ contenido, bandera, setBandera }: any) {
  return (
    <>
      {bandera && (
        <div className="relative z-10">
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity">
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full max-h-full items-end justify-center text-center sm:items-center sm:p-0">
                


              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 max-h-[calc(100vh-3rem)]">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="rounded bg-white max-h-screen overflow-auto pt-0 pb-0 w-full">
                        <div className="flex min-w-full justify-end border-b-2 p-3">
                          <svg
                            onClick={() => setBandera(!bandera)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 cursor-pointer rounded-sm text-white bg-red-400 hover:bg-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <div className="p-10">{contenido}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
