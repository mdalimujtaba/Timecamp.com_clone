import { ReactNode } from "react";
import {
  
  Flex,
  
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {  ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBarChartLine, BsCalendarCheck } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
// import {IoServerOutline } from "react-icons/io";
import {IoServerOutline } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GiPathDistance } from "react-icons/gi";
export default function Integrations(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
         <Menu isOpen={isOpen} >
              <MenuButton
              varient='ghost'
                
                
                border="none"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                backgroundColor="white"
                fontWeight={500}
                p={0}
                _hover={{ color: "green" ,backgroundColor:"white"}}
              >
                Integrations
                {<ChevronDownIcon />}
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    bg: "rgb(37,207,96)",
                    color: "white",
                  }}
                >
                  <Flex alignItems={"center"}>
                    <AiOutlineClockCircle
                      size={"20px"}
                    
                    />
                    <Text ml={5}>Trello</Text>
                  </Flex>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    bg: "rgb(37,207,96)",
                    color: "white",
                  }}
                >
                  <Flex alignItems={"center"}>
                    <BsBarChartLine size={"20px"} />
                    <Text ml={5}>Google Calendar</Text>
                  </Flex>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    bg: "rgb(37,207,96)",
                    color: "white",
                  }}
                >
                  <Flex alignItems={"center"}>
                    <FcStatistics size={"20px"} />
                    <Text ml={5}>iCal</Text>
                  </Flex>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    bg: "rgb(37,207,96)",
                    color: "white",
                  }}
                >
                  <Flex alignItems={"center"}>
                    < BsCalendarCheck size={"20px"} />
                    <Text ml={5}>Asana</Text>
                  </Flex>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    bg: "rgb(37,207,96)",
                    color: "white",
                  }}
                >
                  <Flex alignItems={"center"}>
                    < IoServerOutline size={"20px"} />
                    <Text ml={5}>Monday.Com</Text>
                  </Flex>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    bg: "rgb(37,207,96)",
                    color: "white",
                  }}
                >
                     <Flex alignItems={"center"}>
                    < RiMoneyDollarBoxLine size={"20px"} />
                    <Text ml={5}>Jira</Text>
                  </Flex>
                  
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    bg: "rgb(37,207,96)",
                    color: "white",
                  }}
                >
                     <Flex alignItems={"center"}>
                    < GiPathDistance size={"20px"} />
                    <Text ml={5}>All integrations</Text>
                  </Flex>
                  
                </MenuItem>
               
              </MenuList>
            </Menu>
        </>
    )
}