import { Box, Button, chakra, Flex, HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase.config';
import BtnMenu from './BtnMenu';
import Carreras from './Carreras';
import Logo from './Logo';
import { MenuButton } from './MenuButton';
import MenuResponsivo from './MenuResponsivo';
import Perfil from './Perfil';
import { SignButton } from './SignButton';
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
    <>
      <chakra.nav pos="sticky" top={0} zIndex={50} w="full">
        <Box
          paddingX={{ base: '1rem', md: '2rem' }}
          borderBottom="1px solid"
          borderBottomColor={'#d6d3d1'}
        >
          <HStack
            paddingY="0.75rem"
            alignItems="center"
            justifyContent="space-between"
            maxWidth={'7xl'}
            marginX="auto"
            spacing={{ base: '0', md: '2.5rem' }}
          >
            <Logo/>
            <BtnMenu contentMenu={contentMenu} />
            <HStack display={{ base: 'none', md: 'flex' }} spacing="2.5rem">
              <Carreras />
              <Universidades />
              <a href="https://google.com.pe" className="text-base font-medium text-gray-500 hover:text-gray-900">Ayuda</a>
            </HStack>
            {
              user ? (
                <Perfil setUser={setUser} />
              ): (
                <SignButton />
              )
            }
          </HStack>
        </Box>
        {
          btnMenu ? (
            <MenuResponsivo setBtnMenu={setBtnMenu} />
          ) : (
            <p></p>
          )
        }
      </chakra.nav>

      <chakra.nav
        pos="sticky"
        top={0}
        zIndex={50}
        w="full"
      >
        <Box
          paddingX={{ base: '1rem', md: '2.5rem' }}
          paddingY="0.75rem"
          borderBottom="1px solid"
          borderBottomColor={'#d6d3d1'}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <Logo/>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={4}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                <Button variant="ghost">Carreras</Button>
                <Button variant="ghost">Universidades</Button>
                <Button variant="ghost">Ayuda</Button>
              </HStack>
              {
                user ? (
                  <Perfil setUser={setUser} />
                ): (
                  <SignButton />
                )
              }
              <MenuButton/>
            </HStack>
          </Flex>
        </Box>
      </chakra.nav>
    </>
  );
}
