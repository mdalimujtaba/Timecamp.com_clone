

import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

export default function FirstDiv() {
  return (
    <>
    <Box
      w={"100%"}
      h={{ base: "auto", sm: "auto", md: "900px", lg: "900px" }}
      backgroundImage="url('https://i.postimg.cc/s2v9fmdj/background-Top.png')"
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      display={{
        base: "none",
        sm: "none",
        md: "flex",
        lg: "flex",
        xl: "flex",
      }}
      // border ='1px solid black'
    >
      <Box
        h={{ base: "auto", sm: "auto", md: "900px", lg: "900px" }}
        alignItems="center"
        justifyContent={"center"}
        display="flex"
        // border ='1px solid black'
      >
        <Flex
          // border="1px solid grey"
          w={{ base: "100%", sm: "100%", md: "90%", lg: "90%" }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between",
          }}
          h={{ base: "90%", sm: "80%", md: "90%", lg: "80%" }}
          // position={"relative"}
        >
          <Box
            h={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
            w={{ base: "90%", sm: "90%", md: "50%", lg: "50%" }}
            // border={"1px solid blue"}
            bg={"rgba(255,255,255,.9)"}
            backdrop-filter=" blur(3px)"
            borderRadius={"10px"}
          >
            <Box
              h={{ base: "95%", sm: "97%", md: "90%", lg: "90%" }}
              mt="5%"
              w={"90%"}
              ml={"5%"}
              // border={"1px solid blue"}
            >
              <Text
                fontSize="15px"
                fontWeight={700}
                mb={"20px"}
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start",
                }}
              >
                Free time tracking software
              </Text>
              <Text
                fontSize="52px"
                fontWeight={700}
                lineHeight={1.1}
                mb={"20px"}
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start",
                }}
              >
                Increase project profitability with time tracking
              </Text>
              <List
                spacing={3}
                mb={"20px"}
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start",
                }}
              >
                <ListItem>
                  <ListIcon as={CheckIcon} color="black" />
                  Unlimited users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="black" />
                  Unlimited projects
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="black" />
                  30+ integrations
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={CheckIcon} color="black" />
                  Automated time tracking
                </ListItem>
              </List>
              <Box mb={"20px"}>
                <Input
                  placeholder="Your e-mail address"
                  borderRadius={"20px"}
                  padding="20px"
                  boxShadow="xl"
                  variant="unstyled"
                  
                />
                <Text
                  fontSize={14}
                  textAlign="center"
                  fontWeight={500}
                  mt="20px"
                >
                  By signing up you agree to our{" "}
                  <a href="" color="green">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="" color="green">
                    Privacy
                  </a>
                  Policy .
                </Text>
                <Box
                  // border={"1px solid black"}
                  mt="40px"
                  display={{
                    base: "block",
                    sm: "block",
                    md: "block",
                    lg: "flex",
                    xl: "flex",
                  }}
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "space-between",
                  }}
                  alignItems="center"
                >
                  <Button
                    bg={"rgb(37,207,96)"}
                    color="white"
                    p={"25px 40px 25px 40px"}
                    borderRadius={"30px"}
                    _hover={{ bg: "rgb(29,164,76)" }}
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
                  >
                    Start tracking time
                  </Button>
                  <Flex
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Text>Or sign up with :</Text>
                    <Link href="https://app.timecamp.com/auth/google_auth/register">
                      <Image
                        src="https://cdn-m.timecamp.com/img/logos/google.svg"
                        size="30px"
                      />
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            h={{ md: "65%", lg: "55%", xl: "70%" }}
            w="46%"
            bg={"rgba(255,255,255,.9)"}
            backdrop-filter=" blur(3px)"
            borderRadius={"10px"}
            display={{
              base: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
            mt={{ md: "32%", lg: "20%", xl: "8%" }}
            justifyContent="center"
            alignItems={"center"}
          >
            <Box
              // border={"1px solid yellow"}
              h={{ md: "80%", lg: "80%" }}
              w="90%"
            >
              <Box
                // border={"1px solid black"}
                height="20%"
                w="22%"
                ml="35%"
                mb={"10%"}
              >
                <Image src="https://i.postimg.cc/L4rByvMW/CFO-PHOTO.png" />
              </Box>
              <Box h={"auto"}>
                <Text
                  fontSize={"20px"}
                  fontWeight="500"
                  textAlign={"center"}
                  mb={"5%"}
                >
                  Adam Wagner, Co-owner and Chief Strategy Officer
                </Text>
              </Box>
              <Box h={"auto"}>
                <Text
                  fontSize={"16px"}
                  fontWeight="400"
                  textAlign={"center"}
                  mb={"5%"}
                >
                  „TimeCamp proved to be an essential management tool that gives
                  us clear insight into a project’s efficiency and helps to
                  avoid an overblown workload for our team.”
                </Text>
              </Box>
              <Box
                // border={"1px solid black"}
                height="20px"
                w="26%"
                ml="37%"
                mb={"10%"}
              >
                <Image
                  h={"fit-content"}
                  w={"fit-content"}
                  src="https://i.postimg.cc/6QjS4bpM/Screenshot-1678-removebg-preview.png"
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
    <Box
      w={"100%"}
      h={{ base: "auto", sm: "auto", md: "900px", lg: "900px" }}
      // backgroundImage="url('https://i.postimg.cc/s2v9fmdj/background-Top.png')"
      // backgroundRepeat={'no-repeat'}
      // backgroundSize={'cover'}
      display={{
        base: "flex",
        sm: "flex",
        md: "none",
        lg: "none",
        xl: "none",
      }}
      border ='1px solid black'
    >
      <Box
        h={{ base: "auto", sm: "auto", md: "900px", lg: "900px" }}
        alignItems="center"
        justifyContent={"center"}
        display="flex"
        // border ='1px solid black'
      >
        <Flex
          // border="1px solid grey"
          w={{ base: "100%", sm: "100%", md: "90%", lg: "90%" }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between",
          }}
          h={{ base: "90%", sm: "80%", md: "90%", lg: "80%" }}
          // position={"relative"}
        >
          <Box
            h={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
            w={{ base: "90%", sm: "90%", md: "50%", lg: "50%" }}
            // border={"1px solid blue"}
            bg={"rgba(255,255,255,.9)"}
            backdrop-filter=" blur(3px)"
            borderRadius={"10px"}
          >
            <Box
              h={{ base: "95%", sm: "97%", md: "90%", lg: "90%" }}
              mt="5%"
              w={"90%"}
              ml={"5%"}
              // border={"1px solid blue"}
            >
              <Text
                fontSize="15px"
                fontWeight={700}
                mb={"20px"}
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start",
                }}
              >
                Free time tracking software
              </Text>
              <Text
                fontSize="52px"
                fontWeight={700}
                lineHeight={1.1}
                mb={"20px"}
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start",
                }}
              >
                Increase project profitability with time tracking
              </Text>
              <List
                spacing={3}
                mb={"20px"}
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start",
                }}
              >
                <ListItem>
                  <ListIcon as={CheckIcon} color="black" />
                  Unlimited users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="black" />
                  Unlimited projects
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="black" />
                  30+ integrations
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={CheckIcon} color="black" />
                  Automated time tracking
                </ListItem>
              </List>
              <Box mb={"20px"}>
                <Input
                  placeholder="Your e-mail address"
                  borderRadius={"20px"}
                  padding="20px"
                  boxShadow="xl"
                  variant="unstyled"
                />
                <Text
                  fontSize={14}
                  textAlign="center"
                  fontWeight={500}
                  mt="20px"
                >
                  By signing up you agree to our{" "}
                  <a href="" color="green">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="" color="green">
                    Privacy
                  </a>
                  Policy .
                </Text>
                <Box
                  // border={"1px solid black"}
                  mt="40px"
                  display={{
                    base: "block",
                    sm: "block",
                    md: "block",
                    lg: "flex",
                    xl: "flex",
                  }}
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "space-between",
                  }}
                  alignItems="center"
                >
                  <Button
                    bg={"rgb(37,207,96)"}
                    color="white"
                    p={"25px 40px 25px 40px"}
                    borderRadius={"30px"}
                    _hover={{ bg: "rgb(29,164,76)" }}
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
                  >
                    Start tracking time
                  </Button>
                  <Flex
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Text>Or sign up with :</Text>
                    <Link href="https://app.timecamp.com/auth/google_auth/register">
                      <Image
                        src="https://cdn-m.timecamp.com/img/logos/google.svg"
                        size="30px"
                      />
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            h={{ md: "65%", lg: "55%", xl: "70%" }}
            w="46%"
            bg={"rgba(255,255,255,.9)"}
            backdrop-filter=" blur(3px)"
            borderRadius={"10px"}
            display={{
              base: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
            mt={{ md: "32%", lg: "20%", xl: "8%" }}
            justifyContent="center"
            alignItems={"center"}
          >
            <Box
              // border={"1px solid yellow"}
              h={{ md: "80%", lg: "80%" }}
              w="90%"
            >
              <Box
                // border={"1px solid black"}
                height="20%"
                w="22%"
                ml="35%"
                mb={"10%"}
              >
                <Image src="https://i.postimg.cc/L4rByvMW/CFO-PHOTO.png" />
              </Box>
              <Box h={"auto"}>
                <Text
                  fontSize={"20px"}
                  fontWeight="500"
                  textAlign={"center"}
                  mb={"5%"}
                >
                  Adam Wagner, Co-owner and Chief Strategy Officer
                </Text>
              </Box>
              <Box h={"auto"}>
                <Text
                  fontSize={"16px"}
                  fontWeight="400"
                  textAlign={"center"}
                  mb={"5%"}
                >
                  „TimeCamp proved to be an essential management tool that gives
                  us clear insight into a project’s efficiency and helps to
                  avoid an overblown workload for our team.”
                </Text>
              </Box>
              <Box
                // border={"1px solid black"}
                height="20px"
                w="26%"
                ml="37%"
                mb={"10%"}
              >
                <Image
                  h={"fit-content"}
                  w={"fit-content"}
                  src="https://i.postimg.cc/6QjS4bpM/Screenshot-1678-removebg-preview.png"
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
    
    </>
  );
}
