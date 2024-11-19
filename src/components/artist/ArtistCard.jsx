import React from 'react'
import { Link } from 'react-router-dom'
import PlayBtn from '../playBtn/PlayBtn'

const ArtistCard = ({artistImg, artistName, artistTag}) => {
  return (
    <Link to='/' className='w-ful px-3 py-2 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer'>
    <div className="w-full h-auto relative">
        <img src={artistImg} alt="" className="w-full aspect-square object-cover object-center rounded-full" />
        {/*Hover img */}
        <PlayBtn/>
    </div>
    <div className="space-y-1">
        <h5 className="text-base font-medium text-neutral-100">
            {artistName}
            </h5>  
            <p className="text sm text-neutral-400">
                {artistTag}
            </p>
    </div>
    </Link>
  )
}

export default ArtistCard