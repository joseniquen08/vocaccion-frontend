import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const CareersPage = () => {

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) navigate('/', { replace: true });
  }, []);

  return (
    <Box minH='100vh'>
      <Navbar/>
      <Outlet/>
    </Box>
  )
}
