import React from 'react'
import Tag from '../../../../components/tag/Tag'
import ArtistCard from '../../../../components/artist/ArtistCard'

const Artista = () => {
  return (
    <div className='w-full space-y-4'>
        {/*Tag */}
        <Tag title={"Artistas populares"} link={"/"}/>

         {/*Lista de artistas */}
         <div className="w-full grid md:grid-cols-5 sm:-grid-cols-3 grid-cols-2">
           {/*Artist card*/} 
           <ArtistCard
           artistImg={"https://cdn.pixabay.com/photo/2022/09/17/08/43/concert-7460427_1280.jpg"}
           artistName={"Nombre del artista"}
           artistTag={"Artist"}
           />
            <ArtistCard
           artistImg={"https://media.istockphoto.com/id/2080779787/es/foto/singer-of-music-band-performing-on-stage-light-and-smoke-effects.jpg?s=2048x2048&w=is&k=20&c=fZKKQVGXKds7adyjbsczBe_XVdPVeuIOP6bmmigJKTI="}
           artistName={"Nombre del artista"}
           artistTag={"Artist"}
           />
            <ArtistCard
           artistImg={"https://media.istockphoto.com/id/1137781483/es/foto/guitarrista-masculino-negro-cantando-y-tocando-guitarra-ac%C3%BAstica-en-el-escenario.jpg?s=2048x2048&w=is&k=20&c=fwXBdHHojufg9N5LTjFuThd-5zM_ZR7KIF9-gZlGUvk="}
           artistName={"Nombre del artista"}
           artistTag={"Artist"}
           />
            <ArtistCard
           artistImg={"https://cdn.pixabay.com/photo/2017/08/01/14/51/concert-2566002_1280.jpg"}
           artistName={"Nombre del artista"}
           artistTag={"Artist"}
           />
            <ArtistCard
           artistImg={"https://cdn.pixabay.com/photo/2020/08/31/00/33/guitar-5531027_1280.jpg"}
           artistName={"Nombre del artista"}
           artistTag={"Artist"}
           />
         </div>


    </div>
  )
}

export default Artista