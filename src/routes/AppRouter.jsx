import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ListaCarreras from "../components/carreras/ListaCarreras";
import CrearCarrera from "../components/dashboard/CrearCarrera";
import CrearUniversidad from "../components/dashboard/CrearUniversidad";
import Error404 from "../components/error/Error404";
import ListaUniversidades from "../components/universidades/ListaUniversidades";
import EditarPerfil from "../components/usuario/EditarPerfil";
import { Home } from "../pages/Home";

export const AppRouter = () => {

  const listaCarreras = ['Ciencias', 'Arte', 'Arquitectura', 'Derecho', 'Ingeniería', 'Ciencias Sociales'];
  const listaUniversidades = ['Pública', 'Privada'];

  return (
    <div className="font-manrope">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carreras">
          <Route path="ciencias" element={<ListaCarreras nomCarrera={listaCarreras[0]}/>}/>
          <Route path="arte" element={<ListaCarreras nomCarrera={listaCarreras[1]}/>}/>
          <Route path="arquitectura" element={<ListaCarreras nomCarrera={listaCarreras[2]}/>}/>
          <Route path="derecho" element={<ListaCarreras nomCarrera={listaCarreras[3]}/>}/>
          <Route path="ingenieria" element={<ListaCarreras nomCarrera={listaCarreras[4]}/>}/>
          <Route path="ciencias-sociales" element={<ListaCarreras nomCarrera={listaCarreras[5]}/>}/>
        </Route>
        <Route path="/universidades">
          <Route path="publicas" element={<ListaUniversidades tipoUniversidad={listaUniversidades[0]}/>}/>
          <Route path="privadas" element={<ListaUniversidades tipoUniversidad={listaUniversidades[1]}/>}/>
        </Route>
        <Route path="/perfil" element={<EditarPerfil/>}/>
        <Route path="/crear-carrera" element={<CrearCarrera/>}/>
        <Route path="/crear-universidad" element={<CrearUniversidad/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  )
}
