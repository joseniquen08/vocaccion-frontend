import { collection, getDocs } from 'firebase/firestore';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { db } from '../../config/firebase.config';

const TrCarrera = (props) => {

    const [allCarreras, setAllCarreras] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getCarreras = async() => {
            const { docs } = await getDocs(collection(db, 'totalCarreras'));
            const totalCarreras = docs.map( carrera => ({id: carrera.id, ...carrera.data()}))

            setAllCarreras(totalCarreras)
        }
        getCarreras()
    }, [])

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
    )

    console.log(props.catCarrera)

    const mostrarCarrera = filteredUsers.map((carrera) =>
        carrera.divCarrera === props.catCarrera ? (
        <tr key={carrera.id}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="">
                        <div className="text-base font-medium text-gray-900">
                            {carrera.nombre}
                        </div>
                        <div className="text-sm text-gray-500">
                            {carrera.duracion}
                        </div>
                    </div>
                </div>
            </td>
            <td className="flex px-6 py-4 whitespace-nowrap">
                <img className="object-contain w-8 h-8 mr-2" src={carrera.img} alt=""/>
                <div>
                    <div className="text-sm text-gray-900">{carrera.universidad}</div>
                    <div className="text-sm text-gray-500">{carrera.facultad}</div>
                </div>
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap">
                <span className="inline-flex px-3 py-1 text-sm font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    {carrera.act}
                </span>
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
            <div className="relative mb-4 text-gray-300 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </span>
                <input type="text" value={search} onChange={handleSearch} name="q" className="py-2 border w-72 border-gray-300 text-sm text-gray-900 bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Buscar..." autoComplete="off" />
            </div>
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                Carrera
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                Universidad / Facultad
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                Actualización
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Más Información</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mostrarCarrera}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default TrCarrera;