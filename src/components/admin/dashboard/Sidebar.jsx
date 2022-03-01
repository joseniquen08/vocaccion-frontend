import { Avatar, Box, Collapse, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { HiCode } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiBook2Line, RiBuildingLine, RiGroupLine, RiHomeSmile2Line, RiSettings5Line } from 'react-icons/ri';
import { Link, Link as RouterLink, useLocation } from 'react-router-dom';
import { NavItem } from './NavItem';

export const Sidebar = (props) => {

  const integrations = useDisclosure();
  const location = useLocation();

  return (
    <Box
      as='nav'
      position='sticky'
      top='0'
      bottom='0'
      left='0'
      h='full'
      overflowX='hidden'
      overflowY='auto'
      flexDirection='column'
      justifyContent='space-between'
      paddingX='1rem'
      paddingY='1rem'
      {...props}
    >
      <Box w='full'>
        <Flex py="2" align="center">
          <Flex
            justifyContent="start"
            flex={{ lg: '1 1 0%' }}
          >
            <Link to="/">
              <Heading
                as='h2'
                fontSize='1.75rem'
                fontWeight={600}
                color='cyan.500'
              >
                vocacción
              </Heading>
            </Link>
          </Flex>
        </Flex>
        <VStack
          as="nav"
          fontSize="sm"
          paddingY='1rem'
          color="gray.600"
          w='full'
          spacing='0.7rem'
        >
          <NavItem
            as={RouterLink}
            to='/admin/dashboard'
            onClick={props.onClose}
            icon={RiHomeSmile2Line}
            activeItem={location.pathname.split('/')[2] === 'dashboard' && !location.pathname.split('/')[3] ? true : false}
          >
            Inicio
          </NavItem>
          <NavItem
            as={RouterLink}
            to='/admin/dashboard/careers'
            onClick={props.onClose}
            icon={RiBook2Line}
            activeItem={location.pathname.split('/')[3] === 'careers' ? true : false}
          >
            Carreras
          </NavItem>
          <NavItem
            as={RouterLink}
            to='/admin/dashboard/universities'
            onClick={props.onClose}
            icon={RiBuildingLine}
            activeItem={location.pathname.split('/')[3] === 'universities' ? true : false}
          >
            Universidades
          </NavItem>
          <NavItem
            as={RouterLink}
            to='/admin/dashboard/users'
            onClick={props.onClose}
            icon={RiGroupLine}
            activeItem={location.pathname.split('/')[3] === 'users' ? true : false}
          >
            Usuarios
          </NavItem>
          <Box w='full'>
            <NavItem
              icon={HiCode}
              marginX={0}
              onClick={integrations.onToggle}
              // activeItem={location.pathname.split('/')[3] === 'si' ? true : false}
            >
              Integrations
              <Icon
                as={MdKeyboardArrowRight}
                ml="auto"
                transform={integrations.isOpen && "rotate(90deg)"}
              />
            </NavItem>
            <Collapse  in={integrations.isOpen}>
              <NavItem as={RouterLink} to='/' pl="12" py="2">
                Shopify
              </NavItem>
              <NavItem as={RouterLink} to='/' pl="12" py="2">
                Slack
              </NavItem>
              <NavItem as={RouterLink} to='/' pl="12" py="2">
                Zapier
              </NavItem>
            </Collapse>
          </Box>
          <NavItem
            as={RouterLink}
            to='/admin/dashboard/settings'
            onClick={props.onClose}
            icon={RiSettings5Line}
            activeItem={location.pathname.split('/')[3] === 'settings' ? true : false}
          >
            Configuración
          </NavItem>
        </VStack>
      </Box>
      <Box
        w='full'
        borderTopWidth='1px'
        borderTopColor='gray.300'
        py='0.75rem'
      >
        <Menu>
          <MenuButton
            w='full'
            bg='cyan.400'
            color='white'
            rounded='lg'
            boxShadow='rgba(0, 0, 0, 0.2) 0px 5px 15px'
          >
            <HStack
              w='full'
              px='0.6rem'
              py='1rem'
              alignItems='center'
              justifyContent='start'
              spacing='0.5rem'
              overflow='hidden'
            >
              <Avatar
                flex='none'
                borderRadius='md'
                w='2.5rem'
                h='2.5rem'
                name='anubra266'
                src='https://avatars.githubusercontent.com/u/30869823?v=4'
              />
              <VStack flexShrink='1' minW='0' alignItems='left' spacing='0' pr='0.25rem'>
                <Text fontSize='0.875rem' textAlign='left' fontWeight='500' isTruncated>Juan Ramirez Villanueva</Text>
                <Text fontSize='0.75rem' textAlign='left' fontWeight='300' isTruncated>juan.ramirez05@gmail.com</Text>
              </VStack>
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>Ya</MenuItem>
            <MenuItem>Ya</MenuItem>
            <MenuItem>Ya</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}
