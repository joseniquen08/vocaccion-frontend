import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightAddon, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from "react-router-dom";

const MotionButton = motion(Button);

export const SignIn = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  }

  const login = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      paddingX={{ base: '1rem', sm: '1.5rem', lg: '2rem' }}
      paddingY='3rem'
      minHeight='100vh'
      backgroundColor='cyan.700'
    >
      <Box
        width='full'
        maxW='sm'
      >
        <VStack
          as={Flex}
          flexDirection='column'
          borderWidth='1px'
          borderRadius='xl'
          borderColor='transparent'
          spacing='2.5rem'
          paddingX='1.8rem'
          paddingY='3.5rem'
          backgroundColor='white'
          boxShadow='lg'
        >
          <Box width='full' paddingY='0.3rem'>
            <Heading
              as='p'
              size='xl'
              textAlign='center'
              fontWeight={800}
              color='cyan.600'
            >
              Iniciar Sesión
            </Heading>
          </Box>
          <VStack
            as='form'
            width='full'
            marginTop='2rem'
            spacing='1.5rem'
            onSubmit={login}
          >
            <VStack
              width='full'
              spacing='1rem'
            >
              <FormControl isRequired>
                <FormLabel color='gray.700' fontSize='sm' htmlFor='email'>Correo Electrónico</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    paddingLeft='0.3rem'
                    color='gray.600'
                    children={<HiOutlineMail size={18}/>}
                  />
                  <Input
                    ref={emailRef}
                    type='email'
                    _focus={{
                      boxShadow: 'none',
                    }}
                    autoFocus
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel color='gray.700' fontSize='sm' htmlFor='password'>Contraseña</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    paddingLeft='0.3rem'
                    color='gray.600'
                    children={<HiOutlineLockClosed size={18}/>}
                  />
                  <Input
                    ref={passwordRef}
                    type={showPassword ? 'text' : 'password'}
                    _focus={{
                      boxShadow: 'none',
                    }}
                  />
                  <InputRightAddon
                  backgroundColor='white'
                    paddingX={0}
                    paddingY={0}
                  >
                    <Button
                      color='gray.600'
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <MdVisibilityOff size={18}/> : <MdVisibility size={18}/>}
                    </Button>
                  </InputRightAddon>
                </InputGroup>
              </FormControl>
            </VStack>
            <Box width='full' paddingY='0.5rem'>
              <MotionButton
                type='submit'
                variant='solid'
                bg='cyan.600'
                width='full'
                whileTap={{ scale: 0.98 }}
              >Ingresar</MotionButton>
            </Box>
            <Flex width='full'>
              <Button as={Link} to='/' leftIcon={<ArrowBackIcon />} colorScheme='cyan' variant='ghost'>
                Regresar
              </Button>
            </Flex>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  )
}
