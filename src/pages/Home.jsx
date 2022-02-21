import { Navbar } from "../components/Navbar";

export const Home = () => {

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if(user){
  //       console.log('usuario logeado')
  //       console.log(user.uid)
  //       const objUsuario = {
  //         nombre: '',
  //         apellido: '',
  //         usuario: 'Nickname',
  //         correo: user.email,
  //         edad: '',
  //         photoUrl: ''
  //       }
  //       db.collection("dataUsuarios").doc(user.uid).set(objUsuario)
  //     } else {
  //       console.log('no hay usuario')
  //     }
  //   })
  // }, []);

  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="h-full overflow-hidden bg-white flex items-center">
        <div className="h-full mx-auto max-w-7xl py-40">
          <div className="z-10 h-full bg-white lg:w-full">
            <main className="flex items-center justify-center h-full px-4 mx-auto mt-0 lg:justify-center max-w-7xl sm:px-6 lg:px-8">
              <div className="">
                <h1 className="text-4xl break-words font-extrabold tracking-tight text-center text-gray-900 leading-titulo sm:text-7xl">¿No sabes qué estudiar?</h1>
                <p className="mb-4 text-lg text-center text-gray-500 lg:mt-8 lg:text-xl sm:mt-5 sm:text-2xl sm:mx-auto md:mt-5 lg:mx-0">
                  Te damos ese empujoncito que necesitas para decidir tu futuro.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
