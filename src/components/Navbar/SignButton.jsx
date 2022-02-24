import { Button, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionMenuButton = motion(MenuButton);

export const SignButton = () => {
  return (
    <Menu>
      <MotionMenuButton
        as={Button}
        colorScheme='cyan'
        size='md'
        variant='outline'
        fontWeight={{ base: 500, md: 600 }}
        whileTap={{ scale: 0.92 }}
      >
        Ingresar
      </MotionMenuButton>
      <MenuList>
        <MenuItem
          _hover={{ backgroundColor: 'transparent' }}
          _focus={{ backgroundColor: 'transparent' }}
        >
          <Link
            as={RouterLink}
            to="/login"
            w="full"
            textAlign='center'
            paddingY='0.4rem'
            borderRadius={6}
            _hover={{ backgroundColor: 'cyan.50' }}
            color='cyan.900'
          >Iniciar Sesión</Link>
        </MenuItem>
        <MenuItem
          _hover={{ backgroundColor: 'transparent' }}
          _focus={{ backgroundColor: 'transparent' }}
        >
          <Link
            as={RouterLink}
            to="/register"
            w="full"
            textColor={'white'}
            textAlign='center'
            paddingY='0.4rem'
            borderRadius={6}
            bg='cyan.600'
          >Registrarse</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}