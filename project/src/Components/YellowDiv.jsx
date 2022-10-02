import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export function YellowDiv() {
  return (
    <>
      <Box
        // border={"1px solid black"}
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        position="relative"
        mt={"100px"}
        mb="100px"
        h="auto"
      >
        <Flex
          borderRadius={"20px"}
          bg={"rgb(247,184,1)"}
          w={{ base: "100%", sm: "90%", md: "80%", lg: "84%" }}
          h={{
            base: "fit-content",
            sm: "fit-content",
            md: "450px",
            lg: "500px",
          }}
          display="flex"
          alignItems={"center"}
        >
          <Box
            // border={"1px solid black"}
            w={["100%", "100%", "100%", "100%"]}
            h={["86%"]}
            display="flex"
            justifyContent={"center"}
          >
            <Box
              w={["90%", "90%", "60%", "60%"]}
              //   border={"1px solid blue"}
              display="flex"
              justifyContent={"center"}
            >
              <Box
                w="90%"
                //   border={"1px solid blue"}
              >
                <Text
                  fontSize={["46px"]}
                  textAlign={["center"]}
                  fontWeight={600}
                  lineHeight={1}
                >
                  Use TimeCamp to your advantage
                </Text>
                <Text
                  textAlign={["center"]}
                  fontSize={["18px"]}
                  fontWeight="500"
                  mt={["30px"]}
                >
                  If you’re struggling to keep track of your work across
                  different projects, you need a radical change. You need
                  TimeCamp.
                </Text>
                <Box mt={["30px"]}>
                  <InputGroup>
                    <Input
                      bg={"white"}
                      onInput={{ border: "none" }}
                      borderRadius="25px"
                      h="50px"
                      placeholder="Add your email"
                    />

                    <InputRightElement
                      h="100%"
                      w={"30%"}
                      display={["none", "none", "flex", "flex"]}
                      justifyContent={["center", "center", "center", "center"]}
                    >
                      <Button
                        h="100%"
                        bg="rgb(37,207,96)"
                        color="white"
                        _hover={{ bg: "rgb(37,207,96)" }}
                        borderRadius="25px"
                      >
                        Search tracking time
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup>
                    <InputRightElement
                      //   border ='1px solid black'
                      mt="30px"
                      w={"100%"}
                      display={["flex", "flex", "none", "none"]}
                      justifyContent={["center", "center", "space-between"]}
                    >
                      <Button
                        mb="60px"
                        h="100%"
                        w="100%"
                        bg="rgb(37,207,96)"
                        color="white"
                        _hover={{ bg: "rgb(37,207,96)" }}
                        borderRadius="25px"
                        // border ='1px solid black'
                      >
                        Search tracking time
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Box
                    mt={["40px"]}
                    //   border='1px solid black'
                    display={["block", "block", "flex", "flex"]}
                    justifyContent={["center", "center", "space-between"]}
                  >
                    <Box
                      //  border={"1px solid black"}
                      width={["25%"]}
                      display={["none", "none", "flex", "flex"]}
                      justifyContent={["center", "center", "center", "center"]}
                    >
                      <Text textAlign={"center"}>Or sign up with:</Text>
                      <Image src="https://cdn-m.timecamp.com/img/logos/google.svg" />
                    </Box>
                    <Link
                      w={["100%", "100%", "70%", "70%"]}
                      // border ='1px solid blue'
                      textAlign={"center"}
                      display={["none", "none", "flex", "flex"]}
                      justifyContent={["center", "center", "center", "center"]}
                      _hover={{textDecoration:'none'}}
                    >
                      By signing up you agree to our Terms and Conditions and
                      Privacy Policy.
                    </Link>
                  </Box>
                  <Link
                    mt={["40px"]}
                    display={["flex", "flex", "none", "none"]}
                    justifyContent={["center", "center", "space-between"]}
                    w={["100%", "100%", "25%", "25%"]}
                    // border="1px solid blue"
                    textAlign={"center"}
                    _hover={{textDecoration:'none'}}
                  >
                    By signing up you agree to our Terms and Conditions and
                    Privacy Policy.
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box
          //  border={'1px solid blue'}
          h={["70%", "80%", "100%", "100%"]}
          position={"absolute"}
          ml={"50%"}
          mt={["120px", "40px", "0px", "0px"]}
          mb={"0px"}
        >
          <Image src="https://cdn-m.timecamp.com/img/landing-page/banner-icon.svg" />
        </Box>
      </Box>
    </>
  );
}
