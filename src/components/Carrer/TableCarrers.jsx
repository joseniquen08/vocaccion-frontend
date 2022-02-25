import { SearchIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, VisuallyHidden, VStack } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../config/firebase.config";

export const TableCarrers = ({ catCarrera }) => {

  const [allCarreras, setAllCarreras] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getCarreras = async() => {
      const { docs } = await getDocs(collection(db, 'totalCarreras'));
      const totalCarreras = docs.map( carrera => ({id: carrera.id, ...carrera.data()}));
      setAllCarreras(totalCarreras);
    }
    getCarreras();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const filteredUsers = useMemo(() =>
    allCarreras.filter((user) => {
      return removeAccents(user.nombre.toLowerCase()).includes(removeAccents(search.toLowerCase()));
    }),
    [allCarreras, search]
  );
  const mostrarCarrera = filteredUsers.map((carrera) =>
    carrera.divCarrera === catCarrera ? (
      <Tr key={carrera.id}>
        <Td>
          <Flex
            alignItems='center'
          >
            <VStack alignItems='left' spacing='0.2rem'>
              <Text fontWeight={600} color='gray.700'>{carrera.nombre}</Text>
              <Text fontWeight={500} fontSize='sm' color='gray.500'>{carrera.duracion}</Text>
            </VStack>
          </Flex>
        </Td>
        <Td>
          <Flex
            alignItems='center'
          >
            <Image src={carrera.img} objectFit='contain' w='2rem' h='2rem' marginRight='0.5rem'/>
            <VStack alignItems='left' spacing='0'>
              <Text fontWeight={600} fontSize='sm' isTruncated color='gray.800'>{carrera.universidad}</Text>
              <Text fontWeight={500} fontSize='sm' color='gray.500'>{carrera.facultad}</Text>
            </VStack>
          </Flex>
        </Td>
        <Td>
          <Flex
            justifyContent='center'
          >
            <Badge variant='subtle' cursor='default' fontSize='0.8rem' paddingX={2} paddingY={0.5} colorScheme='cyan'>{carrera.act}</Badge>
          </Flex>
        </Td>
        <Td>
          <Button variant='ghost' color='cyan.700' colorScheme='cyan' size='sm'>Más información</Button>
        </Td>
      </Tr>
    ) : (
        <></>
    )
  )

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
            mostrarCarrera.length > 0 ? (
              <Tbody>
                {mostrarCarrera}
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
