import { Box, Flex, Heading, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex
      h='full'
      overflow='hidden'
      bg='white'
      alignItems='center'
    >
      <Box h='full' marginX='auto' maxWidth='5xl' paddingY='10rem'>
        <Box w='full'>
          <Heading
            as='p'
            fontSize='7xl'
            fontWeight='semibold'
            color='cyan.700'
            textAlign='center'
          >
            ¿No sabes qué estudiar?
          </Heading>
          <Text
            textAlign='center'
            marginY={{ base: '1rem', sm: '1.25rem'}}
            color='gray.500'
            fontSize='xl'
          >
            Te damos ese empujoncito que necesitas para decidir tu futuro.
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}
