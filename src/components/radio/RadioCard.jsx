import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const RadioCard = ({artist1,artist2, artist3, artist, radioTitle, 
  artistsNames, className}) => {
  return (

      <Link to={"/"} className='w-full p-3 grid grid-cols-1 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer'>
        <div className={`w-full aspect-square relative ${className}
        rounded-md flex items-center justify-center`}>
          <div className="absolute top-2 flex items-center justify-between px-2">
            <FaSpotify className='sm:w-5 w-4 sm:h-5 h-4 text-neutral-800'/>
            <h6 className="text-neutral-800 sm:text-base  text-sm sm:font-bold font-semibold uppercase">
              Radio
            </h6>
          </div>
          <div className="grid grid-cols-3">
            <img src={artist1} alt="" className="w-full aspect-square rounded-full object-cover object-center" />
            <img src={artist2} alt="" className={`w-full aspect-square rounded-full object-cover object-center scale-105 p-0.5 ${className}`}/>
            <img src={artist3} alt="" className="w-full aspect-square rounded-full object-cover object-center" />
          </div>
          <div className="absolute bottom-2 left px-2 w-fit">
            <h1 className="text-neutral-900 md:text-[1.7rem] sm:text-xl text-lg font-black">
              {artist}
            </h1>
          </div>
        </div>
    <div className="space-y-1">
        <h5 className="text-base font-medium text-neutral-100">
            {radioTitle}
            </h5>  
            <p className="text sm text-neutral-400">
                {artistsNames}
            </p>
    </div>
    </Link>

   
  )
}

export default RadioCard