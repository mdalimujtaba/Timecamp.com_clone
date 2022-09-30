import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
export function ProductTourDiv() {
  return (
    <Box h={"550px"} 
    // border={"1px solid red"}
    >
      <Box bg={"rgb(0,0,0)"} h={["auto", "450px", "450px", "450px"]} w="100%">
        <SimpleGrid
          columns={[1, 2, 2, 2, 2]}
          h={"100%"}
          w={["96%", "94%", "94%", "88%"]}
          ml={["1%", "1%", "2%", "8%"]}
        >
          <Box 
        //   border={"1px solid red"} 
          height="90%" mt={"5%"}>
            <Text
              fontSize={["36px", "36px", "48px", "48px"]}
              fontWeight={600}
              color={"white"}
              lineHeight={1.1}
              mb={"25px"}
            >
              Want a product tour? Here you can book a call demo with our
              expert.
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={500}
              color={"white"}
              mb={"20px"}
            >
              Learn all of the time tracking basics of TimeCamp and track time
              like a true pro.
            </Text>
            <Box
              display={"flex"}
              justifyContent={["center", "center", "flex-start", "flex-start"]}
            >
              <Button
                bg={"rgb(247,184,1)"}
                _hover={{ bg: "rgb(223,166,1)" }}
                p={[
                  "25px 80px 25px 80px",
                  "25px 40px 25px 40px",
                  "25px 40px 25px 40px",
                  "25px 40px 25px 40px",
                ]}
                borderRadius={"25px"}
                color={"white"}
              >
                Book a demo
              </Button>
            </Box>
          </Box>
          <Box 
        //   border={"1px solid blue"}
           height="90%" mt={"5%"}>
            <Image
              src="https://i.postimg.cc/d3ynvGMv/black-cta-img-platform.png"
              pt={["50px", "120px", "150px", "100px"]}
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
// h={'86%'} mt={'7%'}w={'50%'}
