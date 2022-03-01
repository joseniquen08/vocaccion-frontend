import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {

    useEffect(() => {
        document.title = "Error 404"
    })

    return (
        <Fragment>
            <div className="relative flex items-center min-h-screen p-5 overflow-hidden bg-opacity-10 bg-yellow-id min-w-screen lg:p-20">
                <div className="relative items-center flex-1 min-w-full min-h-full p-10 text-center text-gray-800 bg-white shadow-xl rounded-3xl lg:p-20 md:flex md:text-left">
                    <div className="w-full md:w-1/2">
                        <div className="mb-10 lg:mb-12">
                            <h2 to="/" className="text-3xl font-bold md:text-5xl text-blue-id hover:text-blue-900">vocacción</h2>
                        </div>
                        <div className="mb-10 font-light text-gray-600 md:mb-10">
                            <h1 className="mb-10 text-4xl font-black uppercase lg:text-7xl text-brown-id">NO ENCONTRADO</h1>
                            <p>La página que está buscando no está disponible.</p>
                            <p>Intente buscar de nuevo o utilice a continuación el botón <Link to="/" className="font-bold text-blue-id">Inicio</Link>.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 flex items-center justify-center">
                        <img src="/images/404.png" className="w-96" alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Error404;