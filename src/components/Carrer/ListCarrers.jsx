import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, SimpleGrid, Text } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../config/firebase.config";
import { CardCarrer } from "./CardCarrer";

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
          autoComplete='off'
        />
      </InputGroup>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingX='1rem' spacingY='1.3rem'>
        {
          filteredCarrers.length > 0 ? (
            filteredCarrers.map(carrer => (
              <CardCarrer key={carrer.id} carrer={carrer}/>
            ))
          ) : (
            <Text textAlign='center'>No se han encontrado resultados</Text>
          )
        }
      </SimpleGrid>
    </>
  )
}
