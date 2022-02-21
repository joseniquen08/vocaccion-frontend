import { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';

const Perfil = (props) => {

    const navigate = useNavigate()
    const [menuPerfil, setMenuPerfil] = useState(false);

    const contentPerfil = () => {
        if(menuPerfil === false){
            setMenuPerfil(true)
        }
    }

    const cond = () => {
        setMenuPerfil(false)
    }

    useEffect(() => {
        if(menuPerfil === true){
            window.addEventListener("click", cond)
            return () => {
                window.removeEventListener("click", cond)
            }
        }
    })

    const cerrarSesion = () => {
        auth.signOut()
        props.setUser(null)
        navigate.push('/')
    }

    return (
        <div className="relative justify-end md:flex md:flex-1">
            <div>
                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" onClick={() => {contentPerfil()}} >
                    <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
            </div>
            {
                menuPerfil ? (
                    <div className="absolute right-0 w-48 py-1 mt-10 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <Link to="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Perfil</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Configuración</Link>
                        <button onClick={cerrarSesion} className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar Sesión</button>
                    </div>
                ) : (
                    Fragment
                )
            }
        </div>
    );
}

export default Perfil;