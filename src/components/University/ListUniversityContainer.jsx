import { Box, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ListUniversities } from "./ListUniversities";

export const ListUniversityContainer = () => {

  const { name } = useParams();

  let typeUniversity = name.split('-').map(word => word.split('').map((letter, i) => i === 0 ? letter.toUpperCase() : letter).join('')).join(' ');

  if (typeUniversity === 'Publicas') typeUniversity = 'Públicas';

  return (
    <Flex
      flexDirection='column'
      maxW='6xl'
      marginX='auto'
      marginTop='1rem'
      paddingX={2}
      overflowX='hidden'
    >
      <Box
        overflowX='auto'
      >
        <Box
          minW='full'
          paddingY='0.5rem'
          justifyContent='center'
        >
          <Heading
            marginBottom='1.5rem'
            fontSize='3xl'
            textAlign='center'
            color='cyan.600'
            fontWeight={600}
          >
            {typeUniversity}
          </Heading>
          <ListUniversities typeUniversity={typeUniversity}/>
        </Box>
      </Box>
    </Flex>
  )
}
