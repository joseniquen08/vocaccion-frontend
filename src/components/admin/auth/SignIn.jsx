import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightAddon, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';

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
      height='full'
      minHeight='100vh'
    >
      <Flex
        width='full'
        paddingX={{ base: '1rem', sm: '1.5rem', lg: '2rem' }}
        paddingY='3rem'
        alignItems='center'
        justifyContent='center'
      >
        <Box
          width='full'
          maxW='sm'
        >
          <VStack
            as={Flex}
            flexDirection='column'
            spacing='2.2rem'
            paddingX='1.8rem'
            paddingY='2.8rem'
            backgroundColor='white'
          >
            <Box width='full' paddingY='0.3rem'>
              <Heading
                as='p'
                size='xl'
                textAlign='center'
                fontWeight={800}
                color='cyan.600'
                cursor='default'
              >
                Admin
              </Heading>
            </Box>
            <VStack
              as='form'
              width='full'
              marginTop='2rem'
              spacing='1.2rem'
              onSubmit={login}
            >
              <VStack
                width='full'
                spacing='0.6rem'
              >
                <FormControl isRequired>
                  <FormLabel color='gray.700' fontSize='0.825rem' htmlFor='email'>Correo Electrónico</FormLabel>
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
                      size='md'
                      _focus={{
                        boxShadow: 'none',
                      }}
                      autoFocus
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color='gray.700' fontSize='0.825rem' htmlFor='password'>Contraseña</FormLabel>
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
              <VStack width='full' paddingY='0.5rem' spacing='0.6rem'>
                <MotionButton
                  type='submit'
                  variant='solid'
                  bg='cyan.600'
                  width='full'
                  whileTap={{ scale: 0.95 }}
                >Ingresar</MotionButton>
              </VStack>
              <Flex width='full'>
                <Button
                  as={RouterLink}
                  to='/'
                  leftIcon={<ArrowBackIcon />}
                  colorScheme='cyan'
                  variant='ghost'
                  fontSize='0.95rem'
                >
                  Regresar
                </Button>
              </Flex>
            </VStack>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  )
}
