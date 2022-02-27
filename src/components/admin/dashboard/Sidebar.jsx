import { Box, Collapse, Flex, Heading, Icon, useDisclosure } from '@chakra-ui/react';
import { BsGearFill } from 'react-icons/bs';
import { FaClipboardCheck, FaRss } from 'react-icons/fa';
import { HiCode, HiCollection } from 'react-icons/hi';
import { MdHome, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { NavItem } from './NavItem';

export const Sidebar = (props) => {

  const integrations = useDisclosure();

  return (
    <Box
      as="nav"
      pos="sticky"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="cyan.700"
      w='16rem'
      minHeight='100vh'
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Flex
          justifyContent="start"
          flex={{ lg: '1 1 0%' }}
        >
          <Link to="/">
            <Heading
              as='h2'
              fontSize={{ base: '3xl' }}
              fontWeight={600}
              color='white'
            >
              vocacción
            </Heading>
          </Link>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        paddingX='0.5rem'
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}>Inicio</NavItem>
        <NavItem icon={FaRss}>Carreras</NavItem>
        <NavItem icon={HiCollection}>Universidades</NavItem>
        <NavItem icon={FaClipboardCheck}>Usuarios</NavItem>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Integrations
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={integrations.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl="12" py="2">
            Shopify
          </NavItem>
          <NavItem pl="12" py="2">
            Slack
          </NavItem>
          <NavItem pl="12" py="2">
            Zapier
          </NavItem>
        </Collapse>
        <NavItem icon={BsGearFill}>Configuración</NavItem>
      </Flex>
    </Box>
  )
}
