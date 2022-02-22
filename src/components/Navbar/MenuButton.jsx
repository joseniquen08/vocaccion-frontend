import { Box, Button, CloseButton, IconButton, useDisclosure, VStack } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

export const MenuButton = () => {

  const mobileNav = useDisclosure();

    return (
      <Box display={{ base: "inline-flex", md: "none" }}>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          variant="ghost"
          icon={<AiOutlineMenu />}
          onClick={mobileNav.onOpen}
        />

        <VStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          display={mobileNav.isOpen ? "flex" : "none"}
          flexDirection="column"
          p={2}
          pb={4}
          m={2}
          spacing={3}
          rounded="sm"
          shadow="sm"
          bg='white'
        >
          <CloseButton
            aria-label="Close menu"
            onClick={mobileNav.onClose}
          />

          <Button w="full" variant="ghost">
            Carreras
          </Button>
          <Button w="full" variant="ghost">
            Universidades
          </Button>
          <Button w="full" variant="ghost">
            Ayuda
          </Button>
        </VStack>
      </Box>
    );
}
