import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LoginInPage from "./LoginPage";
import Singup from "./Singup";

export function AllRoutes() {
  return (
    
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/login"} element={<LoginInPage />}/>
        <Route path={"/signup"} element={<Singup/>}/>
      </Routes>
   
  );
}
