import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, IconButton, Link, useDisclosure, VStack } from '@chakra-ui/react';
import { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';

export const MenuMdButton = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

    return (
      <Box display={{ base: "inline-flex", md: "none" }}>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          color='gray.600'
          variant="ghost"
          colorScheme='gray'
          icon={<AiOutlineMenu />}
          onClick={onOpen}
          ref={btnRef}
        />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size='xs'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody marginTop={12}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Carreras
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <VStack
                    as={AccordionPanel}
                    display="flex"
                    alignItems="center"
                    flexDirection='column'
                    spacing={4}
                    paddingY={4}
                  >
                    <Link as={RouterLink} w='full' to="/carreras/ciencias">
                      Ciencias
                    </Link>
                    <Link as={RouterLink} w='full' to="/carreras/arte">
                      Arte
                    </Link>
                    <Link as={RouterLink} w='full' to="/carreras/arquitectura">
                      Arquitectura
                    </Link>
                    <Link as={RouterLink} w='full' to="/carreras/derecho">
                      Derecho
                    </Link>
                    <Link as={RouterLink} w='full' to="/carreras/ingenieria">
                      Ingeniería
                    </Link>
                    <Link as={RouterLink} w='full' to="/carreras/ciencias-sociales">
                      Ciencias Sociales
                    </Link>
                  </VStack>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Universidades
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <VStack
                    as={AccordionPanel}
                    display="flex"
                    alignItems="center"
                    flexDirection='column'
                    spacing={4}
                    paddingY={4}
                  >
                    <Link as={RouterLink} w='full' to="/universidades/publicas">
                      Públicas
                    </Link>
                    <Link as={RouterLink} w='full' to="/universidades/privadas">
                      Privadas
                    </Link>
                  </VStack>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      as={RouterLink} to="help"
                    >
                      <Box flex='1' textAlign='left'>
                        Ayuda
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    );
}
