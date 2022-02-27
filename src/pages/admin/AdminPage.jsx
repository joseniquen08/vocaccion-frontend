import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const AdminPage = () => {

  // const { name } = useParams();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!name) navigate('login', { replace: true });
  // }, []);

  return (
    <Box minH='100vh'>
      <Outlet/>
    </Box>
  )
}
