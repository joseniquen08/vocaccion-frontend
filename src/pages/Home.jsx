import { Box } from "@chakra-ui/react";
import { Header } from "../components/Home/Header";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <Box minH='100vh'>
      <Navbar/>
      <Header/>
    </Box>
  )
}
