import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase.config'

const Register = () => {

    const navigate = useNavigate()
    // const [firstName, setFirstName] = useState('prueba')
    // const [lastName, setLastName] = useState('prueba')
    // const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [passError, setPassError] = useState(null)
    const [passErrorFocus, setPassErrorFocus] = useState('')
    const [check, setCheck] = useState(false)
    const [logeado, setLogeado] = useState(false)
    const [objeto, setObjeto] = useState([])

    // const objUsuario = {
    //     nombre: firstName,
    //     apellido: lastName,
    //     usuario: nickname,
    //     correo: email
    // }

    const addUser = (e) => {
        e.preventDefault()
        const resultado = auth.createUserWithEmailAndPassword(email, pass)
        resultado.then(r => {
            setPassErrorFocus(false)
            setEmail('')
            setPass('')
            setCheck(false)
            setObjeto(r)
            console.log(objeto)
            navigate.push('/')
        })
        .catch(e =>{
            console.log(e)
            if(e.code === 'auth/email-already-in-use'){
                setEmailError('El correo electrónico ya está registrado.')
            }
            if(e.code === 'auth/invalid-email'){
                setEmailError('Correo Electrónico inválido.')
            }
            if(e.code === 'auth/weak-password'){
                setPassError('La contraseña debe tener 6 o más caracteres más.')
                setPassErrorFocus('true')
            }
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                setLogeado(true)
            } else {
                setLogeado(false)
            }
        })

        if(logeado){
            navigate.push('/')
        }
    })

    return (
        <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-3xl font-bold text-center text-blue-id">
                        Registro
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={addUser} >
                    <div className="-space-y-px">
                        <div>
                            <input
                                onChange={(e) => {setEmail(e.target.value)}}
                                value={email}
                                type="email"
                                required
                                autoFocus
                                className="block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Correo Electrónico"
                            />
                            {
                                emailError ? (
                                    <div>
                                        <p className="my-1 font-medium text-center text-red-500">{emailError}</p>
                                    </div>
                                ) : (
                                    <Fragment></Fragment>
                                )
                            }
                        </div>
                        <div>
                            <input
                                onChange={(e) => {setPass(e.target.value)}}
                                value={pass}
                                type="password"
                                required
                                className={passErrorFocus ? 'block w-full px-3 py-2 mt-4 text-red-700 placeholder-gray-500 border border-red-300 rounded-md appearance-none focus:outline-none focus:ring-red-500 focus:border-red-600 focus:z-10 sm:text-sm' : 'block w-full px-3 py-2 mt-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'}
                                placeholder="Contraseña"
                            />
                            {
                                passError ? (
                                    <div>
                                        <p className="my-1 font-medium text-center text-red-500">{passError}</p>
                                    </div>
                                ) : (
                                    <Fragment></Fragment>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                onChange={(e) => setCheck(e.target.checked)}
                                type="checkbox"
                                checked={check}
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <p  className="block ml-2 text-sm text-gray-900">
                                Acepto los Términos y Condiciones
                            </p>
                        </div>
                    </div>

                    <div>
                        <input
                            value="Registrarme"
                            type="submit"
                            disabled={check ? false : true}
                            className={check ? 'flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md cursor-pointer bg-blue-id group hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' : 'flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md opacity-50 bg-blue-id group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-0'}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;