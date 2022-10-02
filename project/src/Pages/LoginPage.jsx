import { Box, SimpleGrid } from "@chakra-ui/react";

import LoginLeftCompo from "../LoginPage/LoginLeftCompo";
import LoginNavbar from "../LoginPage/LoginNavbar";
import LoginRightCompo from "../LoginPage/LoginRightCompo";
const stile = {
  transition: "all 0.8s ease-in-out",
};
function LoginInPage() {
  return (
    <Box style={stile} w={"100%"}>
      <LoginNavbar />
      <SimpleGrid columns={[1, 1, 1, 2]} gap={"28"} p={["1", "10", "14", "20"]}>
        <LoginLeftCompo />
        <LoginRightCompo />
      </SimpleGrid>
    </Box>
  );
}

export default LoginInPage;
