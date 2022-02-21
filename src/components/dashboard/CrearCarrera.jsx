import { Fragment, useState } from 'react'
import { db } from '../../config/firebase.config'

const CrearCarrera = () => {

    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [univ, setUniv] = useState('')
    const [facu, setFacu] = useState('')
    const [image, setImage] = useState('/images/')
    const [link, setLink] = useState('')
    const [cycle, setCycle] = useState('')
    const [catCarrera, setCatCarrera] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorDuration, setErrorDuration] = useState('')
    const [errorUniv, setErrorUniv] = useState('')
    const [errorFacu, setErrorFacu] = useState('')
    const [errorImage, setErrorImage] = useState('')
    const [errorCycle, setErrorCycle] = useState('')

    const addCarrera = async (e) => {
        e.preventDefault()

        const error = 'El campo está vacío.'

        if(!name.trim()){
            setErrorName(error)
        }
        if(!duration.trim()){
            setErrorDuration(error)
        }
        if(!univ.trim()){
            setErrorUniv(error)
        }
        if(!facu.trim()){
            setErrorFacu(error)
        }
        if(image==='/images/'){
            setErrorImage(error)
        }
        if(!cycle.trim()){
            setErrorCycle(error)
        }

        const objCarrera = {
            nombre: name,
            duracion: duration,
            universidad: univ,
            facultad: facu,
            img: image,
            linkMasInfo: link,
            divCarrera: catCarrera,
            act: cycle
        }

        try{
            if(name!=='' && duration!=='' && univ!=='' && facu!=='' && cycle!=='' && image!=='/images/'){
                const data = await db.collection('totalCarreras').add(objCarrera)
                setName('')
                setDuration('')
                setUniv('')
                setFacu('')
                setImage('/images/')
                setLink('')
                setCycle('')
                console.log(data)
            }
            console.log(objCarrera)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="mx-auto mt-10 max-w-7xl">
            <div>
                <h1 className="mb-6 text-4xl font-medium">Añadir Carrera</h1>
            </div>
            <div className="md:gap-6">
                <div className="mt-5 md:mt-0">
                    <form onSubmit={addCarrera}>
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
                                            value={duration}
                                            onChange={(e) => {setDuration(e.target.value)}}
                                            placeholder="Duración"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {
                                            errorDuration ? (
                                                <div className="flex items-center justify-center w-full">
                                                    <p className="mt-1 font-medium text-red-500">{errorDuration}</p>
                                                </div>
                                            ) : (
                                                <Fragment></Fragment>
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <input
                                            value={univ}
                                            onChange={(e) => {setUniv(e.target.value)}}
                                            placeholder="Universidad"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {
                                            errorUniv ? (
                                                <div className="flex items-center justify-center w-full">
                                                    <p className="mt-1 font-medium text-red-500">{errorUniv}</p>
                                                </div>
                                            ) : (
                                                <Fragment></Fragment>
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <input
                                            value={facu}
                                            onChange={(e) => {setFacu(e.target.value)}}
                                            placeholder="Facultad"
                                            type="text"
                                            className="block w-full px-2 py-2 mt-1 border border-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {
                                            errorFacu ? (
                                                <div className="flex items-center justify-center w-full">
                                                    <p className="mt-1 font-medium text-red-500">{errorFacu}</p>
                                                </div>
                                            ) : (
                                                <Fragment></Fragment>
                                            )
                                        }
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <select onChange={(e) => {setCatCarrera(e.target.value)}} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option>Ciencias</option>
                                            <option>Arte</option>
                                            <option>Arquitectura</option>
                                            <option>Derecho</option>
                                            <option>Ingeniería</option>
                                            <option>Ciencias Sociales</option>
                                        </select>
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
                                    </div>
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

export default CrearCarrera;