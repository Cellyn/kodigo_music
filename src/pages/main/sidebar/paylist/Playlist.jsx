import React from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { IoLibrary } from 'react-icons/io5'

const Playlist = () => {
  return (
    <div className='w-full h-[calc(100vh-10rem)] bg-neutral-800/30 rounded-md space-y-4 pb-3'>
        <div className="w-full flex items-center justify-between px-6 py-3">
            <div className="w-full flex items-center gap-x-3.5 text-neutral-400">
                <IoLibrary className='w-6 h-6'/>
                <p className="text-sm font-semibold">Tu biblioteca</p>
            </div>
            <div className="w-9 h-8 hover:bg-neutral-700/15 rounded-full flex items-center justify-center text-neutral-300 cursor-pointer ease-in-out duration-300">
            <HiOutlinePlus className='text-xl'/>
            </div>
        </div>

        <div className="w-full h-full overflow-y-scroll overflow-x-hidden px-2 space-y-7">
            <div className="bg-neutral-700/40 w-full rounded-md px-5 py-3 space-y-5">
                <div className="space-y-2">
                    <h6 className="text-sm font-semibold text-neutral-50 tracking-wide">
                    ¡Crea tu propia playlist!
                    </h6>
                    <p className="text-xs text-neutral-100 font-mediumn">
                    ¡Añade tus canciones favoritas! ♫
                    </p>
                </div>
                <button className="w-fit px-4 h-8 bg-neutral-50 rounded-full text-sm text-neutral-950 font-semibold hover:scale-105 ease-in-out duration-100">
                    Crear playlist
                </button>
            </div>

            <div className="bg-neutral-700/40 w-full rounded-md px-5 py-3 space-y-5">
            <div className="space-y-2">
                    <h6 className="text-sm font-semibold text-neutral-50 tracking-wide">
                    ¡Vamos a buscar algunos podcasts interesantes!
                    </h6>
                    <p className="text-xs text-neutral-100 font-mediumn">
                    ¡Nos mantendremos actualizados con los nuevos episodios! 🚀
                    </p>
                </div>
                <button className="w-fit px-4 h-8 bg-neutral-50 rounded-full text-sm text-neutral-950 font-semibold hover:scale-105 ease-in-out duration-100">
                    Crear playlist
                </button>
            </div>
        </div>
    </div>
  )
}

export default Playlist