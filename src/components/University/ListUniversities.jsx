import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, SimpleGrid, Text } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../config/firebase.config";
import { CardUniversity } from "./CardUniversity";
import { UniversitySkeleton } from "./UniversitySkeleton";

export const ListUniversities = ({ typeUniversity }) => {

  const [isLoad, setIsLoad] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [search, setSearch] = useState('');

  typeUniversity = typeUniversity.split('').filter((letter, i) => i !== typeUniversity.length - 1).join('');

  useEffect(() => {
    const getUniversities = async () => {
      const { docs } = await getDocs(query(collection(db, 'totalUniversidades'), where('tipo', '==', typeUniversity)));
      const data = docs.map(university => ({id: university.id, ...university.data()}));
      setUniversities(data);
      setIsLoad(true);
    }
    getUniversities();
  }, [typeUniversity]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const filteredUniversities = useMemo(() => {
    return universities.filter(({ nombre }) => removeAccents(nombre.toLowerCase()).includes(removeAccents(search.toLowerCase())))
  }, [universities, search]);

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
        columns={{ base: 1, lg: 2 }}
        spacingX='1.8rem'
        spacingY='1.6rem'
        paddingY='1.5rem'
        paddingX='1rem'
      >
        {
          isLoad ? (
            filteredUniversities.length > 0 ? (
              filteredUniversities.map(university => (
                <CardUniversity key={university.id} university={university}/>
              ))
            ) : (
              <Text textAlign='center'>No se han encontrado resultados</Text>
            )
          ) : (
            [0,1,2,3,4,5].map(index => (
              <UniversitySkeleton key={index}/>
            ))
          )
        }
      </SimpleGrid>
    </>
  )
}
