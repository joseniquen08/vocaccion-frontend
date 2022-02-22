import { Button, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const SignButton = (props) => {

  // const [showMenu, setShowMenu] = useState(false);
  const [menuSign, setMenuSign] = useState(false);
  // const handleClick = (e) => {
  //   setShowMenu(showMenu => !showMenu);
  // }

  // const contentSign = () => {
  //   if(menuSign === false){
  //     setMenuSign(true)
  //   }
  // }

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
    <>
      <Menu>
        <MenuButton
          as={Button}
          colorScheme='blue'
          size="sm"
          variant='outline'
          fontWeight={{ base: 500, md: 600 }}
        >
          Ingresar
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link as={RouterLink} to="/login" w="full" _hover={{ textDecoration: 'none' }}>Iniciar Sesión</Link>
          </MenuItem>
          <MenuItem>
            <Link as={RouterLink} to="/register" w="full" _hover={{ textDecoration: 'none' }}>Registrarse</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      {/* <Box
        position="relative"
        justifyContent="end"
        display={{ base: 'none', md: 'flex' }}
        flex={{ md: '1 1 0%' }}
      >
        <Button variant="outline" colorScheme="teal" size="sm">
          Ingresar
        </Button>
        <button type="button" className="inline-flex items-center px-2 text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none" aria-expanded="false" onClick={handleClick}>
          Ingresar
        </button>
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
      </Box> */}
    </>
  );
}