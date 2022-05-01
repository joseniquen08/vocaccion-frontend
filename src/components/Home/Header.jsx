import { Box, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from 'react-router-dom';

const MotionLink = motion(Link);

export const Header = () => {
  return (
    <Flex
      h='full'
      overflow='hidden'
      bg='white'
      alignItems='center'
    >
      <Box h='full' marginX='auto' maxWidth='5xl' paddingY='10rem' paddingX='2rem'>
        <VStack w='full' spacing='2rem'>
          <Heading
            as='p'
            fontSize={{ base: '6xl', md: '7xl' }}
            lineHeight='1.1'
            fontWeight='700'
            color='cyan.500'
            textAlign='center'
          >
            ¿No sabes qué estudiar?
          </Heading>
          <Text
            textAlign='center'
            marginY={{ base: '1rem', sm: '1.25rem'}}
            color='gray.500'
            fontSize='xl'
            fontWeight='400'
          >
            Te damos ese empujoncito que necesitas para decidir tu futuro.
          </Text>
          <Flex w='full' alignItems='center' justifyContent='center'>
            <MotionLink
              as={RouterLink}
              to="/login"
              textAlign='center'
              fontSize='1.1rem'
              paddingY='0.8rem'
              paddingX='1.5rem'
              borderRadius={12}
              bg='cyan.500'
              color='white'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
            >
              Empezar
            </MotionLink>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  )
}
