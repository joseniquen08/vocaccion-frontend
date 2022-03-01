import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightAddon, Link, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { HiOutlineIdentification, HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { Link as RouterLink } from "react-router-dom"

const MotionButton = motion(Button);

export const SignUp = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  }

  const handleShowPasswordConfirmation = () => {
    setShowPasswordConfirmation(showPasswordConfirmation => !showPasswordConfirmation);
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
        width={{ base: '100%', md: '50%'}}
        paddingX={{ base: '1rem', sm: '1.5rem', lg: '2rem' }}
        paddingY='3rem'
        alignItems='center'
        justifyContent='center'
        position='relative'
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
              >
                Registrarse
              </Heading>
            </Box>
            <VStack
              as='form'
              width='full'
              marginTop='2rem'
              spacing='0.4rem'
              onSubmit={login}
            >
              <VStack
                width='full'
                spacing='0.5rem'
              >
                <FormControl isRequired>
                  <FormLabel color='gray.700' fontSize='0.825rem' htmlFor='first_name'>Nombres</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      paddingLeft='0.3rem'
                      color='gray.600'
                      children={<HiOutlineIdentification size={18}/>}
                    />
                    <Input
                      name="first_name"
                      type='text'
                      fontSize='sm'
                      letterSpacing='wide'
                      _focus={{
                        boxShadow: 'none',
                      }}
                      autoFocus
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color='gray.700' fontSize='0.825rem' htmlFor='last_name'>Apellidos</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      paddingLeft='0.3rem'
                      color='gray.600'
                      children={<HiOutlineIdentification size={18}/>}
                    />
                    <Input
                      name="last_name"
                      type='text'
                      fontSize='sm'
                      letterSpacing='wide'
                      _focus={{
                        boxShadow: 'none',
                      }}
                    />
                  </InputGroup>
                </FormControl>
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
                      name="email"
                      type='email'
                      fontSize='sm'
                      letterSpacing='wide'
                      _focus={{
                        boxShadow: 'none',
                      }}
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
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      fontSize='sm'
                      letterSpacing='wide'
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
                <FormControl isRequired>
                  <FormLabel color='gray.700' fontSize='0.825rem' htmlFor='password_confirmation'>Confirmar contraseña</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      paddingLeft='0.3rem'
                      color='gray.600'
                      children={<HiOutlineLockClosed size={18}/>}
                    />
                    <Input
                      name="password_confirmation"
                      type={showPasswordConfirmation ? 'text' : 'password'}
                      fontSize='sm'
                      letterSpacing='wide'
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
                        onClick={handleShowPasswordConfirmation}
                      >
                        {showPasswordConfirmation ? <MdVisibilityOff size={18}/> : <MdVisibility size={18}/>}
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
                  whileTap={{ scale: 0.98 }}
                >Registrarme</MotionButton>
                <Text fontSize='0.85rem' textAlign='center' letterSpacing='wide'>
                  ¿Ya tienes una cuenta? Inicia sesión <Link as={RouterLink} fontWeight={700} color='cyan.600' to='/login'>aquí</Link>
                </Text>
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
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
        >
          <Box
            maxW='lg'
            paddingX='1rem'
            paddingY='1.5rem'
            marginX='auto'
          >
            <Link as={RouterLink} to="/">
              <Heading
                as='h2'
                fontSize={{ base: '3xl' }}
                fontWeight={700}
                color='cyan.600'
              >
                vocacción
              </Heading>
            </Link>
          </Box>
        </Box>
      </Flex>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        width='50%'
        paddingX={{ base: '1rem', sm: '1.5rem', lg: '2rem' }}
        paddingY='3rem'
        alignItems='center'
        justifyContent='center'
        backgroundColor='cyan.600'
      >
        <Box
          width='full'
          maxW='md'
        >
          <Heading
            as='p'
            size='3xl'
            lineHeight='shorter'
            textAlign='left'
            fontWeight={700}
            color='white'
            cursor='default'
          >Ready to build your next app?</Heading>
        </Box>
      </Flex>
    </Flex>
  )
}
