import { Box, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ListCarrers } from "./ListCareers";

export const ListCarrersContainer = () => {

  const { name } = useParams();

  let typeCarrer = name.split('-').map(word => word.split('').map((letter, i) => i === 0 ? letter.toUpperCase() : letter).join('')).join(' ');

  if (typeCarrer === 'Ingenieria') typeCarrer = 'Ingeniería';

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
            {typeCarrer}
          </Heading>
          <ListCarrers typeCarrer={typeCarrer}/>
        </Box>
      </Box>
    </Flex>
  )
}
