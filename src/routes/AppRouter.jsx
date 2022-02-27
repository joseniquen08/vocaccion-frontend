import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { SignIn as SignInAdmin } from "../components/admin/auth/SignIn";
import { Dashboard } from "../components/admin/dashboard/Dashboard";
import { SignIn as SignInUser } from "../components/auth/SignIn";
import { SignUp } from "../components/auth/SignUp";
import { ListCarrersContainer } from "../components/Career/ListCareersContainer";
import CrearCarrera from "../components/dashboard/CrearCarrera";
import CrearUniversidad from "../components/dashboard/CrearUniversidad";
import Error404 from "../components/error/Error404";
import { ListUniversityContainer } from "../components/University/ListUniversityContainer";
import EditarPerfil from "../components/usuario/EditarPerfil";
import { AdminPage } from "../pages/admin/AdminPage";
import { CareersPage } from "../pages/CareersPage";
import { Home } from "../pages/Home";
import { UniversitiesPage } from "../pages/UniversitiesPage";

export const AppRouter = () => {
  return (
    <Box fontFamily='body'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carreras" element={<CareersPage/>}>
          <Route path=":name" element={<ListCarrersContainer/>}/>
        </Route>
        <Route path="/universidades" element={<UniversitiesPage/>}>
          <Route path=":name" element={<ListUniversityContainer/>}/>
        </Route>
        {/* Private Routes */}
        <Route path='/admin' element={<AdminPage/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='login' element={<SignInAdmin/>}/>
        </Route>
        <Route path="/perfil" element={<EditarPerfil/>}/>
        <Route path="/crear-carrera" element={<CrearCarrera/>}/>
        <Route path="/crear-universidad" element={<CrearUniversidad/>}/>
        <Route path="/login" element={<SignInUser/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Box>
  )
}
