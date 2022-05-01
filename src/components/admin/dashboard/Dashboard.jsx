import { Avatar, Box, Drawer, DrawerContent, DrawerOverlay, Flex, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Dashboard = () => {

  const sidebar = useDisclosure();

  return (
    <HStack
      as="section"
      minH="100vh"
      spacing='0'
      w='full'
    >
      <Sidebar
        flex='none'
        w='20rem'
        borderRight='1px solid'
        borderColor='gray.200'
        // bg='cyan.50'
        minHeight='100vh'
        display={{ base: 'none', md: 'flex' }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay/>
        <DrawerContent>
          <Sidebar w="full" bg='white' minHeight='full' borderRight='none' display='flex' onClose={sidebar.onClose}/>
        </DrawerContent>
      </Drawer>
      <Box
        transition=".3s ease"
        minHeight='100vh'
        maxHeight='100vh'
        overflowY='auto'
        w='full'
        py={{ base: '0.25rem', md: '0.75rem' }}
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue("white", "gray.800")}
          h="14"
        >
          <IconButton
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            colorScheme='cyan'
            variant='outline'
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display={{ base: "none", md: "flex" }}>
            <InputLeftElement color="gray.500" children={<FiSearch />} />
            <Input placeholder="Search for articles..." />
          </InputGroup>

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>
        <Box p="4">
          <Outlet/>
        </Box>
      </Box>
    </HStack>
  )
}
