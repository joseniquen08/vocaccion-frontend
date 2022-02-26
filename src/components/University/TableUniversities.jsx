import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../config/firebase.config";

export const TableUniversities = ({ typeUniversity }) => {

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

  const mostrarUniversidad = filteredUniversities.map((universidad) =>
    universidad.tipo === typeUniversity ? (
      <tr key={universidad.id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <img className="object-contain w-8 h-8 mr-2" src={universidad.img} alt=""/>
            <div className="">
              <div className="text-sm font-medium text-gray-900">
                {universidad.nombre}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div>
            <div className="text-sm text-gray-900">{universidad.region}</div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div>
            <div className="text-sm text-gray-900">{universidad.provincia}</div>
          </div>
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap">
          {
            universidad.licencia === 'Sí' ? (
              <span className="inline-flex px-3 py-1 text-sm font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                {universidad.licencia}
              </span>
            ) : (
              universidad.licencia === 'En proceso' ? (
                <span className="inline-flex px-3 py-1 text-sm font-semibold leading-5 text-yellow-800 bg-yellow-100 rounded-full">
                  {universidad.licencia}
                </span>
              ) : (
                <span className="inline-flex px-3 py-1 text-sm font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                  {universidad.licencia}
                </span>
              )
            )
          }
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <a href="https://google.com.pe" className="text-indigo-600 hover:text-indigo-900">Más Información</a>
        </td>
      </tr>
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
          autoComplete='off'
        />
      </InputGroup>
      <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                  <tr>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Nombre
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Región
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Provincia
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                          Licenciada
                      </th>
                      <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Carreras</span>
                      </th>
                  </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                  {mostrarUniversidad}
              </tbody>
          </table>
      </div>
    </>
  )
}
