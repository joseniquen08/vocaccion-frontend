import { Fragment, useEffect, useState } from 'react'
import { auth, db } from '../../config/firebase.config'

const EditarPerfil = () => {

    const [nick, setNick] = useState('')
    const [email, setEmail] = useState('')
    const [photoUrl, setPhotoUrl] = useState('foto')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [editar, setEditar] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [firstNameOriginal, setFirstNameOriginal] = useState('')
    const [lastNameOriginal, setLastNameOriginal] = useState('')
    const [ageOriginal, setAgeOriginal] = useState('')
    const [id, setId] = useState('')
    const [errorFirstName, setErrorFirstName] = useState(false)
    const [errorLastName, setErrorLastName] = useState(false)
    const [errorAge, setErrorAge] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const dataUser = db.collection("dataUsuarios").doc(user.uid);
                dataUser.get()
                    .then((doc) => {
                        setNick(doc.data().usuario)
                        setEmail(doc.data().correo)
                        setFirstName(doc.data().nombre)
                        setLastName(doc.data().apellido)
                        setAge(doc.data().edad)
                        setFirstNameOriginal(doc.data().nombre)
                        setLastNameOriginal(doc.data().apellido)
                        setAgeOriginal(doc.data().edad)
                        setPhotoUrl(user.photoURL)
                        setId(doc.id)
                    })
            }
        })
    }, [])

    const clickUpdate = () => {
        setEditar(true)
        setDisabled(false)
    }

    const cancelar = () => {
        setEditar(false)
        setDisabled(true)
        setFirstName(firstNameOriginal)
        setLastName(lastNameOriginal)
        setAge(ageOriginal)
    }

    const setUpdate = async (e) => {
        e.preventDefault()
        let errorFN = false
        let errorLN = false
        let errorA = false
        if (!firstName.trim()) {
            alert("nombre no puede ser vacío")
            setErrorFirstName(true)
            errorFN = true
            setFirstName(firstNameOriginal)
        } else if (!lastName.trim()) {
            alert("apellido no puede ser vacío")
            setErrorLastName(true)
            errorLN = true
            setLastName(lastNameOriginal)
        } else if (!age.trim()) {
            alert("la edad no puede ser vacío")
            setErrorAge(true)
            errorA = true
            setAge(ageOriginal)
        } else if (Number.isInteger(age)) {
            alert("la edad tiene que ser un número")
            setErrorAge(true)
            errorA = true
            setAge(ageOriginal)
        }
        const objeto = {
            nombre: firstName,
            apellido: lastName,
            edad: age,
            correo: email,
            photoUrl: photoUrl,
            usuario: nick
        }
        try {
            if (!errorFN && !errorLN && !errorA) {
                await db.collection("dataUsuarios").doc(id).set(objeto)
                const data = await db.collection("dataUsuarios").doc(id);
                data.get()
                    .then((doc) => {
                        setFirstName(doc.data().nombre)
                        setLastName(doc.data().apellido)
                        setAge(doc.data().edad)
                        setFirstNameOriginal(doc.data().nombre)
                        setLastNameOriginal(doc.data().apellido)
                        setAgeOriginal(doc.data().edad)
                    })
            }
        } catch (e) {
            console.log(e)
        }
        setEditar(false)
        setDisabled(true)
    }

    return (
        <div className="bg-white">
            <div className="container pt-6 mx-4 md:mx-auto max-w-7xl">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full md:w-3/12 md:mx-2">
                        <div className="p-3 bg-white border-t-4 border-blue-id">
                            <div className="overflow-hidden image">
                                <img className="w-full h-auto mx-auto"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" />
                            </div>
                            <h1 className="my-2 text-2xl font-bold leading-8 text-gray-900">{nick}</h1>
                            <h3 className="leading-6 text-gray-600 font-lg text-semibold">{photoUrl}</h3>
                            <div>
                                <input type="file" className="opacity-50 cursor-pointer" />
                            </div>
                            <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                            <ul
                                className="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto"><span
                                        className="px-2 py-1 text-sm text-white bg-green-500 rounded">Active</span></span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Nov 07, 2016</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-64 px-2 mx-4 md:w-9/12">
                        <div className="px-6 py-3 bg-white bg-opacity-50 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mt-1 font-semibold leading-8 text-gray-900">
                                <div className="flex items-center space-x-2">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="text-lg tracking-wide">Información Personal</span>
                                </div>
                                <button type="button" className="px-3 py-0.5 border border-gray-200 rounded-md mr-2" onClick={() => { clickUpdate() }} >Editar</button>
                            </div>
                            <form onSubmit={setUpdate} className="mt-3 mb-2 text-gray-700">
                                <div className="grid text-base md:grid-cols-2">
                                    <div className="grid grid-cols-4">
                                        <div className="flex items-center justify-start col-span-1 px-4 py-2 font-semibold">Nombre</div>
                                        <div className="col-span-3 col-start-2 mr-2">
                                            <input disabled={disabled} value={firstName} onChange={(e) => { setFirstName(e.target.value) }} type="text" className="block w-full px-4 py-2 mt-1 placeholder-black placeholder-opacity-100 bg-white border border-gray-100 rounded-md disabled:opacity-60" />
                                            {
                                                errorFirstName ? <p>Campo inválido</p> : <Fragment></Fragment>
                                            }
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4">
                                        <div className="flex items-center justify-start col-span-1 px-4 py-2 font-semibold">Apellido</div>
                                        <div className="col-span-3 col-start-2 mr-2">
                                            <input disabled={disabled} value={lastName} onChange={(e) => { setLastName(e.target.value) }} type="text" className="block w-full px-4 py-2 mt-1 placeholder-black placeholder-opacity-100 bg-white border border-gray-100 rounded-md disabled:opacity-60" />
                                            {
                                                errorLastName ? <p>Campo inválido</p> : <Fragment></Fragment>
                                            }
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4">
                                        <div className="flex items-center justify-start col-span-1 px-4 py-2 font-semibold">Edad</div>
                                        <div className="col-span-3 col-start-2 mr-2">
                                            <input disabled={disabled} value={age} onChange={(e) => { setAge(e.target.value) }} type="text" className="block w-full px-4 py-2 mt-1 placeholder-black placeholder-opacity-100 bg-white border border-gray-100 rounded-md disabled:opacity-60" />
                                            {
                                                errorAge ? <p>Campo inválido</p> : <Fragment></Fragment>
                                            }
                                        </div>
                                    </div>
                                    {
                                        !editar ? (
                                            <div className="grid grid-cols-4">
                                                <div className="flex items-center justify-start col-span-1 px-4 py-2 font-semibold">Email</div>
                                                <div className="col-span-3 col-start-2 mr-2 opacity-60">
                                                    <p className="block w-full py-2 mt-1">{email}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <Fragment></Fragment>
                                        )
                                    }
                                </div>
                                {
                                    editar ? (
                                        <div className="flex items-center justify-end w-full mt-2">
                                            <button type="button" className="px-4 py-1.5 mt-3 mr-4 border border-gray-200 rounded-md" onClick={() => { cancelar() }} >Cancelar</button>
                                            <input type="submit" value="Guardar" className="px-4 py-1.5 mt-3 mr-6 bg-white cursor-pointer border border-gray-200 rounded-md" />
                                        </div>
                                    ) : (
                                        <Fragment></Fragment>
                                    )
                                }
                            </form>
                        </div>

                        <div className="my-4"></div>

                        <div className="px-6 py-3 bg-white bg-opacity-50 border border-gray-200 rounded-lg">

                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900">
                                        <span clas="text-green-500">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">Experience</span>
                                    </div>
                                    <ul className="space-y-2 list-inside">
                                        <li>
                                            <div className="text-teal-600">Owner at Her Company Inc.</div>
                                            <div className="text-xs text-gray-500">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Owner at Her Company Inc.</div>
                                            <div className="text-xs text-gray-500">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Owner at Her Company Inc.</div>
                                            <div className="text-xs text-gray-500">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Owner at Her Company Inc.</div>
                                            <div className="text-xs text-gray-500">March 2020 - Now</div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900">
                                        <span clas="text-green-500">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path fill="#fff"
                                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">Education</span>
                                    </div>
                                    <ul className="space-y-2 list-inside">
                                        <li>
                                            <div className="text-teal-600">Masters Degree in Oxford</div>
                                            <div className="text-xs text-gray-500">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                            <div className="text-xs text-gray-500">March 2020 - Now</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarPerfil;