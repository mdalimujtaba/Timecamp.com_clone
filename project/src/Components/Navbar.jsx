import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  background,
  Text,
  RadioGroup,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Radio,
  DrawerFooter,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// import {IoServerOutline } from "react-icons/io";

import Features from "./FeaturesTab";
import Integrations from "./IntegrationTab";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        // border="2px solid black"
        background="rgb(255,255,255)"
        position={'sticky'}
        zIndex='1030'
        top={0}
        right={0}
        left={0}
      >
        <Flex
          h={"100px"}
          alignItems={"center"}
          w={{base:'94%', sm: "94%", md: "84%", lg: "84%" }}
          ml={{ sm: "3%", md: "8%", lg: "8%" }}
          justifyContent={"space-between"}
          // border="1px solid blue"
        >
          <Flex
            alignItems={"center"}
            // border="1px solid red"
            w={{ base: "30%", sm: "30%", md: "18%", lg: "12%" }}
            h={"100px"}
          >
            <Image src="https://www.timecamp.com/kb/wp-content/uploads/2020/11/colorLogo_lc.png" />
          </Flex>

          <Flex
            // border="1px solid red"
            w="34%"
            h={"100"}
            alignItems="center"
            justifyContent={"space-between"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            }}
          >
            <Features />
            <Link
              _hover={{ bg: "white", color: "green", textDecoration: "none" }}
            >
              <Text fontWeight={500} bg={"white"}>
                Pricing
              </Text>
            </Link>
            <Integrations />
            <Link
              _hover={{ bg: "white", color: "green", textDecoration: "none" }}
            >
              <Text fontWeight={500} bg={"white"}>
                Blog
              </Text>
            </Link>
          </Flex>
          <Flex
            // border="1px solid red"
            w="38%"
            h={"100px"}
            alignItems="center"
            justifyContent={"space-between"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            }}
          >
            <Link
              _hover={{ bg: "white", color: "green", textDecoration: "none" }}
            >
              <Text fontWeight={500} bg={"white"}>
                Book a Demo
              </Text>
            </Link>

           
              <Text fontWeight={500} bg={"white"} onClick={()=>navigate("/login")} cursor={'pointer'}>
                Sign in
              </Text>
            
            <Button
              bg={"rgb(247,184,1)"}
              color="white"
              p={"25px 40px 25px 40px"}
              borderRadius={"30px"}
              _hover={{ bg: "orange" }}
            >
              Start tracking time
            </Button>
          </Flex>

          <Button
            onClick={onOpen}
            display={{ sm: "block", md: "block", lg: "none", xl: "none" }}
          >
            <HamburgerIcon size="100px" />
          </Button>
        </Flex>
      </Box>
      <Box>
        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerFooter />
          <DrawerContent w={"100%"} mt={"100px"}>
            <DrawerBody
              w={{ sm: "94%", md: "84%" }}
              ml={{ sm: "3%", md: "8%" }}
            >
              <Features />
              <Link
                _hover={{ bg: "white", color: "green", textDecoration: "none" }}
              >
                <Text fontWeight={500} bg={"white"}>
                  Pricing
                </Text>
              </Link>
              <Integrations />
              <Link
                _hover={{ bg: "white", color: "green", textDecoration: "none" }}
              >
                <Text fontWeight={500} bg={"white"}>
                  Blog
                </Text>
              </Link>

              <Link
                _hover={{ bg: "white", color: "green", textDecoration: "none" }}
              >
                <Text fontWeight={500} bg={"white"}>
                  Book a Demo
                </Text>
              </Link>
              <Text fontWeight={500} bg={"white"} onClick={()=>navigate("/login")} cursor={'pointer'}>
             Sign in
                </Text>
              
              <Button
                bg={"rgb(247,184,1)"}
                color="white"
                p={"25px 40px 25px 40px"}
                borderRadius={"30px"}
                _hover={{ bg: "orange" }}
                w="100%"
              >
                Start tracking time
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
