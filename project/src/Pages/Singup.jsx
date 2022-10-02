import { Box, Center } from "@chakra-ui/react";
import React from "react";
import SignUpCompo from "../SignUpPage/SignupForm";
import SignUpNavbar from "../SignUpPage/SignupNav";

const Singup = () => {
  return (
    <Box minW={"100%"}>
      <SignUpNavbar />
      <Center p={"14"}>
        <SignUpCompo />
      </Center>
    </Box>
  );
};

export default Singup;
