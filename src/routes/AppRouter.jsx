import { Route, Routes } from "react-router-dom";
import { SignIn } from "../components/auth/SignIn";
import { SignUp } from "../components/auth/SignUp";
import { ListCarrersContainer } from "../components/Carrer/ListCarrersContainer";
import CrearCarrera from "../components/dashboard/CrearCarrera";
import CrearUniversidad from "../components/dashboard/CrearUniversidad";
import Error404 from "../components/error/Error404";
import { ListUniversity } from "../components/University/ListUniversity";
import EditarPerfil from "../components/usuario/EditarPerfil";
import { CarrersPage } from "../pages/CarrersPage";
import { Home } from "../pages/Home";
import { Universities } from "../pages/Universities";

export const AppRouter = () => {
  return (
    <div className="font-manrope">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carreras" element={<CarrersPage/>}>
          <Route path=":name" element={<ListCarrersContainer/>}/>
        </Route>
        <Route path="/universidades" element={<Universities/>}>
          <Route path=":name" element={<ListUniversity/>}/>
        </Route>
        <Route path="/perfil" element={<EditarPerfil/>}/>
        <Route path="/crear-carrera" element={<CrearCarrera/>}/>
        <Route path="/crear-universidad" element={<CrearUniversidad/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  )
}
