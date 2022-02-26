import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

export const CarrerButton = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant='ghost'
        colorScheme='gray'
        color='gray.700'
        fontWeight={500}
      >
        Carreras
      </MenuButton>
      <MenuList color='gray.600'>
        <MenuItem as={RouterLink} to="/carreras/ciencias">
          Ciencias
        </MenuItem>
        <MenuItem as={RouterLink} to="/carreras/arte">
          Arte
        </MenuItem>
        <MenuItem as={RouterLink} to="/carreras/arquitectura">
          Arquitectura
        </MenuItem>
        <MenuItem as={RouterLink} to="/carreras/derecho">
          Derecho
        </MenuItem>
        <MenuItem as={RouterLink} to="/carreras/ingenieria">
          Ingeniería
        </MenuItem>
        <MenuItem as={RouterLink} to="/carreras/ciencias-sociales">
          Ciencias Sociales
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
