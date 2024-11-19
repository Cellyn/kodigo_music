import React from 'react'
import { Link } from 'react-router-dom'
import PlayBtn from '../playBtn/PlayBtn'

const PodcastCard = ({podcastImg, podcastName, podcastPublishDate, 
  podcastDuration }) => {
  return (
    <Link to={"/"} className='w-full p-3 grid grid-cols-1  rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer'>
        <div className="w-full h-auto relative">
        <img src={podcastImg} alt="" className="w-full aspect-square object-cover object-center rounded-md" />
        {/*Hover img */}
        <PlayBtn/>
    </div>
    <div className="space-y-1">
        <h5 className="text-base font-medium text-neutral-100 line-clamp-1">
            {podcastName}
            </h5>  
            
            <div className="flex items-center gap-x-2 flex-wrap text-sm
             text-neutral-400">
                <p className="text-sm text-neutral-400">
                {podcastPublishDate}
            </p>
            <p className="text-sm text-neutral-400">
                {podcastDuration}
            </p>
             </div>
    </div>
    </Link>
  )
}

export default PodcastCard