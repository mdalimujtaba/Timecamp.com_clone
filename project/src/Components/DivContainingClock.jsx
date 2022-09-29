import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

export function DivContainingClock() {
  return (
    <>
      <Box border={"1px solid black"} w={"100%"} display={"flex"} justifyContent={"center"} position ="relative" mt={'100px'}
      mb="100px">
        <Flex
          borderRadius={"20px"}
          bg={"rgb(27,27,32)"}
          w={{ base: "100%", sm: "90%",md:'80%', lg: "84%" }}
          h={{ base: "300px", sm: "300px", md:'400px', lg: "450px" }}
          
        >
          <Box
        //    border={"1px solid white"} 
          w={["80%", "80%", "60%", "40%"]} ml={['5%']}>
            <Box w={['90%','90%','100%','100%']} mt={"10%"} mb={"15%"} justifyContent={"flex-start"} >
              <Heading
                fontSize={["30px", "30px", "40px"]}
                fontWeight={"600"}
                color={"rgb(255,255,255)"}
              >
                Stay on top of your teams’ productivity and profitability!
              </Heading>
            </Box>
            <Box>
              <Button
                bg={"rgb(247,184,1)"}
                _hover={{ bg: "rgb(223,166,1)" }}
                p={"25px 40px 25px 40px"}
                borderRadius={"25px"}
                color={"white"}
              >
                Book a demo
              </Button>
            </Box>
          </Box>
        </Flex>
        <Box
        //  border={'1px solid blue'} 
        h={['70%','80%','100%','100%']}  position={'absolute'} ml={'50%'} mt={['120px','40px','0px','0px']} mb={'0px'}>
          <Image src="https://cdn-m.timecamp.com/img/landing-page/banner-icon.svg" />
        </Box>
      </Box>
    </>
  );
}
