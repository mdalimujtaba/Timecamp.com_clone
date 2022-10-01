import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export function FourLogos() {
  return (
    <Box h={"auto"} mt={'50px'}>
      <SimpleGrid
        columns={[2, 2, 4, 4]}
        spacing={["50px"]}
        h={"auto"}
        width={["84%"]}
        // border={"1px solid black"}
        ml={["8%"]}
      >
        <Box  mt={"50px"}>
          <Image src="https://i.postimg.cc/59gMByf2/crozdesk.png" />
        </Box>
        <Box  mt={"50px"}>
          <Image src="https://i.postimg.cc/bJR49VcB/capterra.png" />
        </Box>
        <Box  mt={["0px", "0px", "50px", "50px"]}>
          <Image src="https://i.postimg.cc/QMGPGZjz/crowd.png" />
        </Box>
        <Box  mt={["0px", "0px", "50px", "50px"]}>
          <Image src="https://i.postimg.cc/6qmjMDHY/get-app.png" />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
