import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase.config';
import BtnMenu from './BtnMenu';
import Carreras from './Carreras';
import Ingresar from './Ingresar';
import Logo from './Logo';
import MenuResponsivo from './MenuResponsivo';
import Perfil from './Perfil';
import Universidades from './Universidades';

export const Navbar = () => {

  const [btnMenu, setBtnMenu] = useState(false);
  const [user, setUser] = useState(null);

  const contentMenu = () => {
    if(btnMenu === false){
      setBtnMenu(true)
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUser(user.email)
      }
    })
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="px-4 border-b-2 border-gray-100 sm:px-8">
        <div className="flex items-center justify-between py-3 mx-auto md:justify-start md:space-x-10 max-w-7xl">
          <Logo />
          <BtnMenu contentMenu={contentMenu} />
          <nav className="hidden space-x-10 md:flex">
            <Carreras />
            <Universidades />
            <a href="https://google.com.pe" className="text-base font-medium text-gray-500 hover:text-gray-900">Ayuda</a>
          </nav>
          {
            user ? (
              <Perfil setUser={setUser} />
            ): (
              <Ingresar />
            )
          }
        </div>
      </div>
      {
        btnMenu ? (
          <MenuResponsivo setBtnMenu={setBtnMenu} />
        ) : (
          <p></p>
        )
      }
    </nav>
  );
}
