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
import podcastData from '../../../../constant/podcastData';
import PodcastCard from '../../../../components/podcast/PodcastCard';

const Podcast = () => {
  return (
    <div className='w-full space-y-4'>
        <Tag title={"Episodios para ti"} link={"/"}/>

        {/*lista de podcasts */}

        <Swiper
        slidesPerView={5}
        spaceBetween={false}
        breakpoints={breakPoints}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {/**Postcast card */}
        {podcastData.map((data,ind)=>(
            <SwiperSlide key={ind}>
                <PodcastCard
                podcastImg={data.podcastImg}
                podcastName={data.podcastName}
                podcastPublishDate={data.podcastPublishDate}
                podcastDuration={data.podcastDuration}
                />
            </SwiperSlide>


        ))}
        
        
      </Swiper>

    </div>
  )
}

export default Podcast