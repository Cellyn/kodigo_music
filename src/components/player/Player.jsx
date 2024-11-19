import React, {useState} from 'react'
import Playing from './playing/Playing';
import { GoPlusCircle } from 'react-icons/go';
import { TbMicrophone, TbMicrophone2 } from 'react-icons/tb';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { PiDevices, PiDevicesBold } from 'react-icons/pi';
import { CgMaximize, CgMiniPlayer, CgVolume } from 'react-icons/cg';
import { BsFilePlay } from 'react-icons/bs';
import { FiMaximize2 } from 'react-icons/fi';

const Player = () => {
    const [volume, setVolume] = useState(0.5);

    const  handleVolume = (e) =>{
        const volumeBar = e.target.value
        const newVolume = e.nativeEvent.offsetX / volumeBar.offsetWidth;
        setVolume(newVolume); 
    }

  return (
    <div className='w-full grid md:grid-cols-4 grid-cold-2 absolute left-0 bottom-0 rounded-md px-2'>
        {/*Artistas IMG, song name*/ }
        <div className="col-span-1 md:flex hidden items-center gap-x-3.5">
            <img src="https://media.istockphoto.com/id/1488412510/es/foto/m%C3%BAsico-masculino-tocando-la-guitarra-ac%C3%BAstica-detr%C3%A1s-del-micr%C3%B3fono-en-el-estudio-de-grabaci%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=ggX7T9vbXeufDB2IYGji2KT5bmHlEuRq0QD9fkhblHY=" alt="" className="w-14 h-14 rounded-1g object-cover object-center p-0.5" />
            <div className="space-y-0.5">
                <h6 className="text-sm text-neutral-200 font-semibold">
                    Nombre de la cancion
                </h6>
                <p className="text-xs text-neutral-400 font-normal">Nombre del artista</p>
            </div>
            <button className="pt-1.5"> 
                <GoPlusCircle className="text-neutral-400 w-5 h-5 mb-0"/>
            </button>
        </div>

        {/*Controles del reproductor*/ }
        <Playing/>
        
        {/*Control de volumen y reproduccion */ }
        <div className="w-full col-span-1 md:flex hidden items-center justify-end gap-x-3">
            <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <BsFilePlay className='w-5 h-5 '/>
            </button>

            <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <TbMicrophone2 className='w-5 h-5 '/>
            </button>

            <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <HiOutlineQueueList className='w-5 h-5 '/>
            </button>

            <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <PiDevicesBold className='w-5 h-5 '/>
            </button>

            <button className="w-[30%] flex items-center gap-x-2 text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <CgVolume className='w-5 h-5 '/>
                <div className="flex-1 h-1 bg-neutral-700/60 rounded-full">
                    <div onClick={handleVolume} className="h-1 bg-green-600 ease-in-out duration-100 rounded-full" style={{ width:`${volume * 100}%` }}></div>
                </div>
            </button>

            <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <CgMiniPlayer className='w-5 h-5 '/>
            </button>

            <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                <FiMaximize2 className='w-5 h-5 '/>
            </button>

        </div>


    </div>
  )
}

export default Player