import { SearchIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, VisuallyHidden, VStack } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../config/firebase.config";

export const ListCarrers = ({ typeCarrer }) => {

  const [carrers, setCarrers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getCarrers = async() => {
      const { docs } = await getDocs(query(collection(db, 'totalCarreras'), where('divCarrera', '==', typeCarrer)));
      const data = docs.map( carrera => ({id: carrera.id, ...carrera.data()}));
      setCarrers(data);
    }
    getCarrers();
  }, [typeCarrer]);

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
    <>
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
          autoComplete={false}
        />
      </InputGroup>
      <Box overflowX='auto' borderRadius='lg' border='1px solid' borderColor='gray.100'>
        <Table variant='simple' colorScheme='gray' minW='full'>
          <Thead>
            <Tr>
              <Th>Carrera</Th>
              <Th>Universidad / Facultad</Th>
              <Th textAlign='center'>Actualización</Th>
              <Th><VisuallyHidden>Más Información</VisuallyHidden></Th>
            </Tr>
          </Thead>
          {
            filteredCarrers.length > 0 ? (
              <Tbody>
                {
                  filteredCarrers.map(({ id, nombre, duracion, img, universidad, facultad, act }) => (
                    <Tr key={id}>
                      <Td>
                        <Flex
                          alignItems='center'
                        >
                          <VStack alignItems='left' spacing='0.2rem'>
                            <Text fontWeight={600} color='gray.700'>{nombre}</Text>
                            <Text fontWeight={500} fontSize='sm' color='gray.500'>{duracion}</Text>
                          </VStack>
                        </Flex>
                      </Td>
                      <Td>
                        <Flex
                          alignItems='center'
                        >
                          <Image src={img} objectFit='contain' w='2rem' h='2rem' marginRight='0.5rem'/>
                          <VStack alignItems='left' spacing='0'>
                            <Text fontWeight={600} fontSize='sm' isTruncated color='gray.800'>{universidad}</Text>
                            <Text fontWeight={500} fontSize='sm' color='gray.500'>{facultad}</Text>
                          </VStack>
                        </Flex>
                      </Td>
                      <Td>
                        <Flex
                          justifyContent='center'
                        >
                          <Badge variant='subtle' cursor='default' fontSize='0.8rem' paddingX={2} paddingY={0.5} colorScheme='cyan'>{act}</Badge>
                        </Flex>
                      </Td>
                      <Td>
                        <Button variant='ghost' color='cyan.700' colorScheme='cyan' size='sm'>Más información</Button>
                      </Td>
                    </Tr>
                  ))
                }
              </Tbody>
            ) : (
              <TableCaption textAlign='center'>No se han encontrado resultados</TableCaption>
            )
          }
        </Table>
      </Box>
    </>
  )
}
