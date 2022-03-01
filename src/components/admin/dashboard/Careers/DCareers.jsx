import { SearchIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex, Heading, HStack, Image, Input, InputGroup, InputLeftElement, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../../../config/firebase.config";

export const DCareers = () => {

  const [carrers, setCarrers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getCarrers = async() => {
      const { docs } = await getDocs(query(collection(db, 'totalCarreras')));
      const data = docs.map( carrera => ({id: carrera.id, ...carrera.data()}));
      setCarrers(data);
      console.log(data);
    }
    getCarrers();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  const filteredCarrers = useMemo(() => {
    return carrers.filter(({ nombre }) => removeAccents(nombre.toLowerCase()).includes(removeAccents(search.toLowerCase())));
  }, [carrers, search]);

  return (
    <Box>
      <Heading
        marginBottom='1.5rem'
        fontSize='3xl'
        textAlign='center'
        color='cyan.500'
      >Carreras</Heading>
      <Box paddingX='1rem'>
        <InputGroup marginY='1rem' maxW='md' marginX='auto'>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.300'/>}
          />
          <Input
            type='text'
            _focus={{
              boxShadow: 'none',
            }}
            borderRadius='lg'
            fontSize='sm'
            placeholder='Buscar...'
            value={search}
            onChange={handleSearch}
            autoComplete='off'
          />
        </InputGroup>
      </Box>
      <Box overflowX='auto' display='block'>
          {
            filteredCarrers.length > 0 ? (
              <Table variant='simple' colorScheme='gray' minW='full' display='block' whiteSpace='nowrap' overflowX='auto' paddingX='1rem'>
                <Tbody display='table' w='full'>
                  <Tr
                    bg='cyan.400'
                    boxShadow='rgba(0, 0, 0, 0.2) 0px 5px 15px'
                  >
                    <Th color='white' borderBottom='none' borderLeftRadius='md'>Carrera</Th>
                    <Th color='white' borderBottom='none' borderRightRadius='md'>Acción</Th>
                  </Tr>
                  {
                    filteredCarrers.map(({ id, nombre, duracion, img, universidad, facultad, act }) => (
                      <Tr key={id}>
                        <Td>
                          <Flex
                            alignItems='start'
                            marginBottom='0.5rem'
                          >
                            <Image src={img} objectFit='contain' w='2.5rem' h='2.5rem' marginRight='0.75rem'/>
                            <VStack alignItems='left' spacing='0.25rem'>
                              <Text fontWeight={600} color='gray.800' fontSize='lg'>{nombre}</Text>
                              <VStack alignItems='left' spacing='0'>
                                <Text fontWeight={600} fontSize='sm' isTruncated color='gray.600'>{universidad}</Text>
                                <Text fontWeight={500} fontSize='xs' color='gray.500'>{facultad}</Text>
                              </VStack>
                            </VStack>
                          </Flex>
                          <HStack
                            justifyContent='start'
                            spacing='0.5rem'
                          >
                            <Badge variant='subtle' cursor='default' fontSize='0.75rem' paddingX={2} paddingY={0.5} colorScheme='cyan'>{act}</Badge>
                            <Badge variant='subtle' cursor='default' fontSize='0.75rem' paddingX={2} paddingY={0.5} colorScheme='cyan' textTransform='none'>{duracion}</Badge>
                          </HStack>
                        </Td>
                        <Td>
                          <Button variant='ghost' color='cyan.700' colorScheme='cyan' size='sm'>Más información</Button>
                        </Td>
                      </Tr>
                    ))
                  }
                </Tbody>
              </Table>
            ) : (
              <Box w='full' paddingX='1rem'>
                <Table variant='simple' colorScheme='gray' minW='full' whiteSpace='nowrap' overflowX='auto'>
                  <Thead display='table' w='full'>
                    <Tr
                      bg='cyan.400'
                      boxShadow='rgba(0, 0, 0, 0.2) 0px 5px 15px'
                    >
                      <Th color='white' borderBottom='none' borderLeftRadius='md'>Carrera</Th>
                      <Th color='white' borderBottom='none' borderRightRadius='md' textAlign='center'>Acción</Th>
                    </Tr>
                  </Thead>
                  <TableCaption>No se han encontrado resultados</TableCaption>
                </Table>
              </Box>
            )
          }
      </Box>
    </Box>
  )
}
