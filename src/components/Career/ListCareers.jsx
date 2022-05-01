import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Collapse, HStack, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Select, SimpleGrid, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { FaSlidersH } from 'react-icons/fa';
import { db } from "../../config/firebase.config";
import { regiones } from "../../utils/data";
import { CardCarrer } from "./CardCareer";
import { CarrerSkeleton } from "./CareerSkeleton";

export const ListCarrers = ({ typeCarrer }) => {

  const [isLoad, setIsLoad] = useState(false);
  const [carrers, setCarrers] = useState([]);
  const [search, setSearch] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActiveFilter, setIsActiveFilter] = useState(false);

  useEffect(() => {
    const getCarrers = async() => {
      const { docs } = await getDocs(query(collection(db, 'totalCarreras'), where('divCarrera', '==', typeCarrer)));
      const data = docs.map(carrer => ({id: carrer.id, ...carrer.data()}));
      setCarrers(data);
      setIsLoad(true);
    }
    getCarrers();
  }, [typeCarrer]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const filteredCarrers = useMemo(() => {
    return carrers.filter(({ nombre }) => removeAccents(nombre.toLowerCase()).includes(removeAccents(search.toLowerCase())));
  }, [carrers, search]);

  return (
    <>
      <Box paddingX='1rem'>
        <HStack justifyContent="space-between" paddingY='3'>
          <Button onClick={() => setIsActiveFilter(state => !state)} leftIcon={<FaSlidersH />} colorScheme='cyan' color={isActiveFilter ? 'white' : 'cyan.500'} variant={isActiveFilter ? 'solid' : 'outline'} size='sm' flex='none'>
            Filtros
          </Button>
          <Button onClick={onOpen} leftIcon={<SearchIcon />} variant="outline" colorScheme='gray' color='gray.400' fontWeight="400" w='sm' justifyContent='left' size='sm' borderRadius='lg'>Buscar...</Button>
        </HStack>
        <Collapse in={isActiveFilter} animateOpacity>
          <Stack
            direction={['column', 'row']}
            border='1px solid'
            borderColor='gray.100'
            borderRadius='lg'
            overflow='hidden'
            spacing='1.5rem'
            marginY='1rem'
            paddingX='1.5rem'
            paddingY='1.2rem'
          >
            <Select
              variant='outline'
              placeholder='Región'
              size='sm'
              borderRadius='lg'
              width='12rem'
              flex='none'
              _focus={{
                boxShadow: 'none',
              }}
            >
              {
                regiones.map(({ id, nombre }) => (
                  <option key={id} value={id}>{nombre}</option>
                ))
              }
            </Select>
            <Checkbox colorScheme='cyan'>Acreditadas</Checkbox>
            <Checkbox colorScheme='cyan'>Traslado</Checkbox>
          </Stack>
        </Collapse>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size='xl' motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
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
          <ModalCloseButton />
          </ModalBody>
        </ModalContent>
      </Modal>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacingX='1.2rem'
        spacingY='1.3rem'
        paddingY='1.5rem'
        paddingX='1rem'
      >
        {
          isLoad ? (
            filteredCarrers.length > 0 ? (
              filteredCarrers.map(carrer => (
                <CardCarrer key={carrer.id} carrer={carrer}/>
              ))
            ) : (
              <Text textAlign='center'>No se han encontrado resultados</Text>
            )
          ) : (
            [0,1,2,3,4,5].map(index => (
              <CarrerSkeleton key={index}/>
            ))
          )
        }
      </SimpleGrid>
    </>
  )
}
