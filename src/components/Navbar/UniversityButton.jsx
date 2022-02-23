import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

export const UniversityButton = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant='ghost'
        colorScheme='gray'
        color='gray.600'
        fontWeight="500"
      >
        Universidades
      </MenuButton>
      <MenuList>
        <MenuItem as={RouterLink} to="/universidades/publicas">
          Públicas
        </MenuItem>
        <MenuItem as={RouterLink} to="/universidades/privadas">
          Privadas
        </MenuItem>
      </MenuList>
    </Menu>
  )
}