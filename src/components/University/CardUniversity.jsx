import { Badge, Box, HStack, Image, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from 'react-router-dom';

const MotionLinkBox = motion(LinkBox);
const MotionBoxImage = motion(Box);

export const CardUniversity = ({ university }) => {
  return (
    <MotionLinkBox
      border='1px solid'
      borderColor='gray.100'
      borderRadius='2xl'
      w='full'
      h='9rem'
      whileHover="hover"
      transition={{ duration: 0.2 }}
      variants={{ hover: { scale: 1.02 } }}
    >
      <HStack w='full' h='full' >
        <MotionBoxImage
          flex='none'
          borderRadius='2xl'
          overflow='hidden'
          transition={{ duration: 0.1 }}
          variants={{ hover: { scale: 1.05, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' } }}
          bg='white'
        >
          <Image src={university.img} objectFit='contain' w='9rem' h='9rem' padding='0.5rem' marginRight='0.1rem'/>
        </MotionBoxImage>
        <VStack w='full' flexShrink='1' minW='0px' justifyContent='space-between' h='full' paddingX='0.6rem' paddingY='0.7rem'>
          <VStack w='full' alignItems='start'>
            <Text noOfLines={2} fontSize='lg' fontWeight={600} color='gray.700'>{university.nombre}</Text>
            <Badge variant='subtle' colorScheme='cyan' textTransform='none'>{university.region}</Badge>
            <LinkOverlay as={RouterLink} to='/' />
          </VStack>
          <HStack w='full' justifyContent='right'>
            <Badge variant='outline' colorScheme={university.licencia === 'Sí' ? 'cyan' : 'red'}>{university.licencia === 'Sí' ? 'licenciada' : 'no licenciada'}</Badge>
          </HStack>
        </VStack>
      </HStack>
    </MotionLinkBox>
  )
}
