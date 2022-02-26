import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, SimpleGrid, Text } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../config/firebase.config";
import { CardCarrer } from "./CardCarrer";
import { CarrerSkeleton } from "./CarrerSkeleton";

export const ListCarrers = ({ typeCarrer }) => {

  const [isLoad, setIsLoad] = useState(false);
  const [carrers, setCarrers] = useState([]);
  const [search, setSearch] = useState('');

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
