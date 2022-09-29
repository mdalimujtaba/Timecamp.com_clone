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
    <Box
    h={{base:"1000px",sm:'1000px',md:'900px',lg:'900px'}}
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Box position={"absolute"} w={"100%"} h={{base:"1000px",sm:'1000px',md:'900px',lg:'900px'}}>
        <Image
          src="https://i.postimg.cc/s2v9fmdj/background-Top.png"
          w={"100%"}
          h={{base:"1000px",sm:'1000px',md:'900px',lg:'900px'}}
        />
      </Box>
      <Flex
        border="1px solid grey"
        w={"90%"}
        justifyContent={"space-between"}
        h={{base:"90%",sm:'90%',md:'90%',lg:'80%'}}
        position={"relative"}
      >
        <Box
          h={{base:"100%",sm:'100%',md:'100%',lg:'100%'}}
          w="50%"
          border={"1px solid blue"}
          bg={"rgba(255,255,255,.9)"}
          backdrop-filter=" blur(3px)"
          borderRadius={"10px"}
        >
          <Box h={"90%"} mt="5%" w={"90%"} ml={"5%"} border={"1px solid blue"}>
            <Text fontSize="15px" fontWeight={700} mb={"20px"}>
              Free time tracking software
            </Text>
            <Text fontSize="52px" fontWeight={700} lineHeight={1.1} mb={"20px"}>
              Increase project profitability with time tracking
            </Text>
            <List spacing={3} mb={"20px"}>
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
              <Text fontSize={14} textAlign="center" fontWeight={500} mt="20px">
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
                border={"1px solid black"}
                mt="40px"
                display={{base:"block",sm:'block',md:'block',lg:'flex',xl:'flex'}}
                justifyContent={{base:'center',sm:'center',md:'center',lg:"space-between"}}
                alignItems="center"
              >
                <Button
                  bg={"rgb(37,207,96)"}
                  color="white"
                  p={"25px 40px 25px 40px"}
                  borderRadius={"30px"}
                  _hover={{ bg: "rgb(29,164,76)" }}
                  w={{base:'100%',sm:'100%',md:'100%',lg:"50%"}}
                >
                  Start tracking time
                </Button>
                <Flex  w={{base:'100%',sm:'100%',md:'100%',lg:"50%"}} alignItems="center" justifyContent={'center'}>
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
        <Box h={"100%"} w="45%" border={"1px solid red"}></Box>
      </Flex>
    </Box>
  );
}
