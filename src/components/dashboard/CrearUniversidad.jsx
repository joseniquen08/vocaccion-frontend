import React, { Fragment, useState } from 'react'
import { db } from '../../config/firebase.config'

const CrearUniversidad = () => {

    const [name, setName] = useState('')
    const [region, setRegion] = useState('')
    const [province, setProvince] = useState('')
    const [license, setLicense] = useState('Sí')
    const [type, setType] = useState('Privada')
    const [image, setImage] = useState('/images/')
    const [errorName, setErrorName] = useState('')
    const [errorRegion, setErrorRegion] = useState('')
    const [errorProvince, setErrorProvince] = useState('')
    const [errorImage, setErrorImage] = useState('')

    const addUniversidad = (e) => {
        e.preventDefault()
        const error = 'El campo está vacío.'

        if(!name.trim()){
            setErrorName(error)
        }
        if(!region.trim()){
            setErrorRegion(error)
        }
        if(!province.trim()){
            setErrorProvince(error)
        }
        if(image==='/images/'){
            setErrorImage(error)
        }

        const objUniversidad = {
            nombre: name,
            tipo: type,
            provincia: province,
            region: region,
            licencia: license,
            img: image
        }

        try{
            if(name!=='' && region!=='' && province!=='' && image!=='/images/'){
                const data = db.collection('totalUniversidades').add(objUniversidad)
                setName('')
                setRegion('')
                setProvince('')
                setImage('/images/')
                console.log(data)
            }
            console.log(objUniversidad)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="mx-auto mt-10 max-w-7xl">
            <div>
                <h1 className="mb-6 text-4xl font-medium">Añadir Universidad</h1>
            </div>
            <div className="md:gap-6">
                <div className="mt-5 md:mt-0">
                    <form onSubmit={addUniversidad}>
                        <div className="overflow-hidden border border-gray-200 shadow sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <input
                                            value={name}
                                            onChange={(e) => {setName(e.target.value)}}
                                            placeholder="Nombre"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {
                                            errorName ? (
                                                <div className="flex items-center justify-center w-full">
                                                    <p className="mt-1 font-medium text-red-500">{errorName}</p>
                                                </div>
                                            ) : (
                                                <Fragment></Fragment>
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <input
                                            value={image}
                                            onChange={(e) => {setImage(e.target.value)}}
                                            placeholder="Imagen"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {
                                            errorImage ? (
                                                <div className="flex items-center justify-center w-full">
                                                    <p className="mt-1 font-medium text-red-500">{errorImage}</p>
                                                </div>
                                            ) : (
                                                <Fragment></Fragment>
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <input
                                            value={region}
                                            onChange={(e) => {setRegion(e.target.value)}}
                                            placeholder="Región"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {
                                            errorRegion ? (
                                                <div className="flex items-center justify-center w-full">
                                                    <p className="mt-1 font-medium text-red-500">{errorRegion}</p>
                                                </div>
                                            ) : (
                                                <Fragment></Fragment>
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <input
                                            value={province}
                                            onChange={(e) => {setProvince(e.target.value)}}
                                            placeholder="Provincia"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {
                                            errorProvince ? (
                                                <div className="flex items-center justify-center w-full">
                                                    <p className="mt-1 font-medium text-red-500">{errorProvince}</p>
                                                </div>
                                            ) : (
                                                <Fragment></Fragment>
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <select onChange={(e) => {setType(e.target.value)}} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option selected>Privada</option>
                                            <option>Pública</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <select onChange={(e) => {setLicense(e.target.value)}} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option selected>Sí</option>
                                            <option>En proceso</option>
                                            <option>No</option>
                                        </select>
                                    </div>

                                    {/* <div className="col-span-6 sm:col-span-3">
                                        <input
                                            value={image}
                                            onChange={(e) => {setImage(e.target.value)}}
                                            placeholder="Imagen"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {
                                            errorImage ? (
                                                <div className="flex items-center justify-center w-full">
                                                    <p className="mt-1 font-medium text-red-500">{errorImage}</p>
                                                </div>
                                            ) : (
                                                <Fragment></Fragment>
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <input
                                            value={link}
                                            onChange={(e) => {setLink(e.target.value)}}
                                            placeholder="Link de más información (dejar vacío)"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <input
                                            value={cycle}
                                            onChange={(e) => {setCycle(e.target.value)}}
                                            placeholder="Ciclo de Actualización"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {
                                            errorCycle ? (
                                                <div className="flex items-center justify-center w-full">
                                                    <p className="mt-1 font-medium text-red-500">{errorCycle}</p>
                                                </div>
                                            ) : (
                                                <Fragment></Fragment>
                                            )
                                        }
                                    </div> */}
                                </div>
                            </div>
                            <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                <input
                                    type="submit"
                                    value="Guardar"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default CrearUniversidad;