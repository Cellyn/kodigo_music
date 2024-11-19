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
import RadioCard from '../../../../components/radio/RadioCard';
import radioData from '../../../../constant/radioData';


const Radio = () => {
  return (
    <div className='w-full space-y-4'>
        <Tag title={"Estaciones recomendadas"} link={"/"}/>
        {/*lista de estaciones */}

        <Swiper
        slidesPerView={5}
        spaceBetween={false}
        breakpoints={breakPoints}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {/**Album card */}
        {radioData.map((data, ind)=>(
            <SwiperSlide key={ind}>
                {/*Radio card */}
                <RadioCard
                    artist1={data.artist1}
                    artist2={data.artist2}
                    artist3={data.artist3}
                    artist={data.artist}
                    radioTitle={data.radioTitle}
                    artistsNames={data.artistsNames}
                    className={data.className}
                 />
            </SwiperSlide>


        ))}
        
        
      </Swiper>

    </div>
  )
}

export default Radio