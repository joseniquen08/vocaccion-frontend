import { Box, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { TableUniversities } from "./TableUniversities";

export const ListUniversity = () => {

  const { name } = useParams();

  let university = name.split('-').map(word => word.split('').map((letter, i) => i === 0 ? letter.toUpperCase() : letter).join('')).join(' ');

  if (university === 'Publicas') university = 'Públicas';

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
          >{university}</Heading>
          <TableUniversities tipoUniversidad={university}/>
        </Box>
      </Box>
    </Flex>
  )
}
