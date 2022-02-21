import { collection, getDocs } from 'firebase/firestore';
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { db } from '../../config/firebase.config';
import Search from '../Search';

const TrUniversidad = (props) => {

    const [allUniv, setAllUniv] = useState([]);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null)

    useEffect(() => {
        const getUniversidades = async () => {
            const { docs } = await getDocs(collection(db, 'totalUniversidades'));
            const totalUniversidades = docs.map( universidad => ({id: universidad.id, ...universidad.data()}))

            setAllUniv(totalUniversidades)
        }
        getUniversidades()
    }, [])

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const filteredUsers = useMemo(() =>
        allUniv.filter((user) => {
            return removeAccents(user.nombre.toLowerCase()).includes(removeAccents(search.toLowerCase()));
        }),
        [allUniv, search]
    )

    console.log(props.tipoUniversidad)

    const mostrarUniversidad = filteredUsers.map((universidad) =>
        universidad.tipo === props.tipoUniversidad ? (
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
            <Fragment></Fragment>
        )
    )

    return (
        <Fragment>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
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
        </Fragment>
    );
}

export default TrUniversidad;