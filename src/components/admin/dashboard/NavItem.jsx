import { Flex, Icon } from "@chakra-ui/react";

export const NavItem = ({ icon, children, activeItem, ...rest}) => {
  return (
    <Flex
      align='center'
      px='4'
      mx='2'
      rounded='md'
      py={{ base: '3.5', md: '2.5'}}
      w='full'
      cursor='pointer'
      color={activeItem ? 'white' : 'gray.500'}
      _hover={{
        bg: `${activeItem ? '' : 'rgb(196, 241, 249, 0.5)'}`
      }}
      role='group'
      fontWeight='500'
      fontSize='0.87rem'
      transition='.15s ease'
      bg={activeItem ? 'cyan.500' : 'transparent'}
      {...rest}
    >
      {icon && (
        <Icon
          mr='3'
          boxSize='5'
          as={icon}
        />
      )}
      {children}
    </Flex>
    );
}
