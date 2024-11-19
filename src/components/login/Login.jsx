import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

export default function Login() {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/')
    }

    //funcion para guardar los datos de la nota
    const registerUser = (data) => {
        console.log(data);

        //resetea la entrada de datos
        reset()
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black-50">
            <div className="w-full max-w-md bg-black rounded-lg shadow-md p-8">
                <button onClick={handleOnClick}><IoMdArrowRoundBack /></button>
                <div className="flex items-center justify-center mb-4">
                    <FaSpotify className='w-8 h-8' />
                </div>
                <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">Inicia Sesión en Kodigo Music</h2>
                <form action="" onSubmit={handleSubmit(registerUser)}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border bg-black rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                            placeholder="Ingresa tu correo"
                            {...register("user", {required: true})}
                        />
                        {errors.user && <span className="text-sm text-red-500 mt-2">*Este campo es requerido</span>}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border bg-black rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                            placeholder="Ingresa tu contraseña"
                            {...register("password", {required: true})}
                        />
                        {errors.password && <span className="text-sm text-red-500 mt-2">*Este campo es requerido</span>}
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <a
                            href="#"
                            className="text-gray-400 font-bold underline hover:text-green-500"
                        >
                            ¿Se te ha olvidado la contraseña?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-black font-bold py-2 px-4 rounded-full hover:bg-green-400 transition duration-300"
                    >
                        Iniciar Sesión
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    ¿No tienes cuenta?{' '}
                    <a
                        href="#"
                        className="text-gray-400 font-bold underline hover:text-green-500"
                    >
                        Regístrate
                    </a>
                </p>
            </div>
        </div>
    )
}
