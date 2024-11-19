import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';
import Tag from '../../../../components/tag/Tag';
import breakPoints from '../../../../constant/breakPoints';
import AlbumCard from '../../../../components/album/AlbumCard';
import albumData from '../../../../constant/albumData';

const Album = () => {
  return (
    <div className='w-full space-y-4'>
        <Tag title={"Albumes populares"} link={"/"}/>
        {/*lista de albumes */}

        <Swiper
        slidesPerView={5}
        spaceBetween={false}
        breakpoints={breakPoints}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {/**Album card */}
        {albumData.map((data,ind)=>(
            <SwiperSlide key={ind}>
                <AlbumCard albumImg={data.albumImg} albumName={data.albumName} albumArtist={data.albumArtist}/>
            </SwiperSlide>


        ))}
        
        
      </Swiper>
    
    </div>
  )
}

export default Album