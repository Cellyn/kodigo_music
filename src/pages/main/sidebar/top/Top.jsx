import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { GoHomeFill, GoSearch } from 'react-icons/go'
import { Link } from 'react-router-dom'

export const Top = () => {
  return (
    <div className='w-full h-40 bg-neutral-800/30 rounded-md px-6 py-5 space-y-5'>

        <Link to={"/"} className='flex items-center gap-x-0.5 text-neutral-50'>
        <FaSpotify className='w-6 h-6'/>
        <p className="text-base font-medium tracking-tight">Kodigo Music</p>
        </Link>

        <Link to={"/"} className='flex items-center gap-x-0.5 text-neutral-50'>
        <GoHomeFill className='w-6 h-6'/>
        <p className="text-base font-medium">Inicio</p>
        </Link>

        <Link to={"/"} className='flex items-center gap-x-0.5 text-neutral-400'>
        <GoSearch className='w-6 h-6'/>
        <p className="text-base font-medium">Buscar</p>
        </Link>
    </div>
  )
}
