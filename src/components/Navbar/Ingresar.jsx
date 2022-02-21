import { Divider, Menu, MenuItem } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Ingresar = (props) => {

  const [showMenu, setShowMenu] = useState(false);
  const [menuSign, setMenuSign] = useState(false);

  const open = Boolean(showMenu);

  const handleClick = (e) => {
    setShowMenu(showMenu => !showMenu);
  }

  const contentSign = () => {
    if(menuSign === false){
      setMenuSign(true)
    }
  }

  const cond = () => {
    setMenuSign(false)
  }

  useEffect(() => {
    if(menuSign === true){
      window.addEventListener("click", cond)
      return () => {
        window.removeEventListener("click", cond)
      }
    }
  })

  return (
    <div className="relative justify-end hidden md:flex md:flex-1 lg:w-0">
      <button type="button" className="inline-flex items-center px-2 text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none" aria-expanded="false" onClick={handleClick}>
        Ingresar
      </button>
      <Menu

      >
        <MenuItem>
          Iniciar Sesión
        </MenuItem>
        <Divider />
        <MenuItem>
          Registro
        </MenuItem>
      </Menu>
      {
        menuSign ? (
          <div className="absolute z-10 max-w-md px-2 mt-8 -ml-4 transform w-80 sm:px-0 lg:ml-0">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                <Link type="button" className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50" to="/login" >
                  <div className="w-full text-center">
                    <p className="text-base font-medium text-gray-900">
                      Iniciar Sesión
                    </p>
                  </div>
                </Link>
                <Link type="button" className="flex items-start p-3 -m-3 rounded-lg bg-blue-id hover:bg-blue-900" to="/register" >
                  <div className="w-full text-center">
                    <p className="text-base font-medium text-white ">
                      Registrarse
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <Fragment />
        )
      }
    </div>
  );
}

export default Ingresar;