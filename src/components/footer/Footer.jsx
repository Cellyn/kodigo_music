import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full md:py-16 sm:py-14 py-10 md:px-6 sm:px-5 px-4 
    space-y-10'>
            <div className="grid md:grid-cols-6 sm:-cols-4 grid-cols-1 items-start 
        gap-7">
                <div className="col-span-1 space-y-3">
                    <h6 className="text-sm text-neutral-50 font-semibold 
                tracking-wide">Empresa</h6>
                    <ul className="space-y-2.5 text-sm text-neutral-400">
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                Acerca de
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                Empleo
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                For the Record
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-span-1 space-y-3">
                    <h6 className="text-sm text-neutral-50 font-semibold 
                tracking-wide">Comunidades</h6>
                    <ul className="space-y-2.5 text-sm text-neutral-400">
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                Para artistas
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                Desarrolladores
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                Publicidad
                            </Link>

                        </li>
                    </ul>
                </div>
                <div className="col-span-1 space-y-3">
                    <h6 className="text-sm text-neutral-50 font-semibold 
                tracking-wide">Enlaces útiles</h6>
                    <ul className="space-y-2.5 text-sm text-neutral-400">
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                Asistencia
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                App gratuita
                            </Link>
                        </li>
                    </ul>
                </div>


                <div className="col-span-1 space-y-3">
                    <h6 className="text-sm text-neutral-50 font-semibold 
                tracking-wide">Planes de kodigo music</h6>
                    <ul className="space-y-2.5 text-sm text-neutral-400">
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                Premiun Duo
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className='hover:text-neutral-50 
                        hover:underline ease-in-out duration-75'>
                                Premium familiar
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 space-y-3 flex items-center justify-around">
                    <ul className="flex items-center gap-x-6">
                        <li>
                            <Link to={"/"} className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 
                rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out 
                duration-100'>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 
                rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out 
                duration-100'>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className='w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 
                rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out 
                duration-100'>
                                <FaFacebook />
                            </Link>
                        </li>
                    </ul>
                </div>


            </div>


            <div className="w-full h-[1px] bg-neutral-700/40">
            </div>

            <div className='grid md:grid-cols-6 sm:-cols-4 grid-cols-1 items-start 
        gap-7'>
                <p className="col-span-2 text-sm text-neutral-400 font-normal">
                    &copy; 2024 Kodigo Music
                </p>
                <p className="col-span-2 text-sm text-neutral-400 font-normal">
                    Celina Elizabeth Guerrero Hernández
                </p>
                <p className="col-span-2 text-sm text-neutral-400 font-normal">
                    Bootcamp Full Stack Junior-24A
                </p>

            </div>



        </div>
    )
}

export default Footer