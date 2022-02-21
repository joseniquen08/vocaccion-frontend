import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Universidades = () => {

    const [menuUni, setMenuUni] = useState(false);

    const contentUni = () => {
        if(menuUni === false){
            setMenuUni(true)
        }
    }

    const cond = () => {
        setMenuUni(false)
    }

    useEffect(() => {
        if(menuUni === true){
            window.addEventListener("click", cond)
            return () => {
                window.removeEventListener("click", cond)
            }
        }
    })

    return (
        <div className="relative">
            <button type="button" className="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none" aria-expanded="false" onClick={() => {contentUni()}} >
                <span>Universidades</span>

                <svg className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {
                menuUni ? (
                    <div className="absolute z-10 w-64 max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                                <Link to="/universidades/publicas" className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">

                                    <i className="flex-shrink-0 w-6 h-6 text-xl text-blue-id fas fa-university"></i>
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                        Públicas
                                        </p>
                                    </div>
                                </Link>

                                <Link to="/universidades/privadas" className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">

                                    <i className="flex-shrink-0 w-6 h-6 text-xl text-blue-id fas fa-university"></i>
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                        Privadas
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p></p>
                )
            }

        </div>
    );
}

export default Universidades;