import React from 'react'
import { Link } from 'react-router-dom'
import PlayBtn from '../playBtn/PlayBtn'

const AlbumCard = ({albumImg, albumName, albumArtist}) => {
  return (
    <Link to={"/"} className='w-full p-3 grid grid-cols-1  rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer'>
        <div className="w-full h-auto relative">
        <img src={albumImg} alt="" className="w-full aspect-square object-cover object-center rounded-md" />
        {/*Hover img */}
        <PlayBtn/>
    </div>
    <div className="space-y-1">
        <h5 className="text-base font-medium text-neutral-100">
            {albumName}
            </h5>  
            <p className="text-sm text-neutral-400">
                {albumArtist}
            </p>
    </div>
    </Link>
  )
}

export default AlbumCard