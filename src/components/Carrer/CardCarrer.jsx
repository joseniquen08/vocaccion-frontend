import { Badge, Flex, HStack, Image, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

export const CardCarrer = ({ carrer }) => {
  return (
    <LinkBox
      border='1px solid'
      borderColor='gray.100'
      borderRadius='lg'
      overflow='hidden'
      paddingX='1.7rem'
      paddingY='1rem'
    >
      <VStack spacing='1rem' alignItems='start'>
        <Flex justifyContent='space-between' w='full'>
          <Text w='full' fontWeight={500} fontSize='sm' color='gray.500'>{carrer.duracion}</Text>
          <Badge variant='subtle' cursor='default' fontSize='0.8rem' paddingX={2} paddingY={0.5} colorScheme='cyan' borderRadius='md'>{carrer.act}</Badge>
        </Flex>
        <Text w='full' fontWeight={600} fontSize='xl' textAlign='left' color='gray.700'>
          <LinkOverlay as={RouterLink} to='/'>{carrer.nombre}</LinkOverlay>
        </Text>
        <HStack
          alignItems='center'
          justifyContent='start'
          overflow='hidden'
          w='full'
        >
          <Image src={carrer.img} flex='none' objectFit='contain' w='2rem' h='2rem' marginRight='0.1rem'/>
          <VStack alignItems='left' flexShrink='1' minW='0px' spacing='0'>
            <Text fontWeight={600} fontSize='sm' isTruncated color='gray.800'>{carrer.universidad}</Text>
            <Text fontWeight={500} fontSize='sm' isTruncated color='gray.500'>{carrer.facultad}</Text>
          </VStack>
        </HStack>
      </VStack>
    </LinkBox>
  )
}
