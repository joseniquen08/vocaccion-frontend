import { Flex, Icon } from "@chakra-ui/react";

export const NavItem = (props) => {

  const { icon, children, ...rest } = props;

  return (
    <Flex
      align="center"
      px="4"
      mx="2"
      rounded="md"
      py="3"
      cursor="pointer"
      color="cyan.100"
      _hover={{
        bg: "blackAlpha.300",
        color: "cyan.50",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mr="2"
          boxSize="4"
          _groupHover={{
            color: "cyan.50",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
    );
}
