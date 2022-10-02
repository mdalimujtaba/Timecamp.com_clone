import { Box, Button, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";

export function Blog() {
  return (
    <Box backgroundColor={"rgb(243,243,243)"} h={"auto"}
    //  border="1px solid red"
     >
      <Box 
    //   border={"1px solid black"} 
      h="80%" w={"84%"} ml="8%" mt="5%">
        <Text
          fontWeight={500}
          color="green"
          display={["flex", "flex", "flex", "flex"]}
          justifyContent={["center", "center", "center", "flex-start"]}
        >
          BLOG
        </Text>
        <Box
          display={["flex", "flex", "flex", "flex"]}
          alignItems={["center"]}
          justifyContent={["center", "center", "center", "space-between"]}
          w={"100%"}
          mt="20px"
        >
          <Text fontSize={[ '30px','30px','30px',"40px"]} fontWeight={[700]} >
            Check the latest blog updates
          </Text>
          <Button
            display={["none", "none", "none", "flex"]}
            p={["25px 40px 25px 40px"]}
            color="white"
            backgroundColor={"rgb(37,207,96)"}
            borderRadius={"25px"}
          >
            Check all articles
          </Button>
        </Box>
        <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing={10}>
          <Box
            // border="1px solid blue"
            h={"320px"}
            mt="20px"
            w={["100%", "86%", "100%", "100%"]}
            ml={["0%", "7%", "0%", "0%"]}
          >
            <Image
              src="https://i.postimg.cc/wT3y7tdJ/remote-work-automation-header-400x219.jpg"
              w={["100%"]}
              h={["60%", "60%", "50%", "50%"]}
            />
            <Text
              fontSize={"22px"}
              fontWeight="500"
              ml={["10px"]}
              mt={["10px"]}
            >
              What Is An Automation For Remote Workers?
            </Text>
            <Link
              _hover={{ textDecoration: "none" }}
              color="green"
              fontWeight={500}
              ml={["10px"]}
              mt={["20px"]}
            >
              Read more
            </Link>
          </Box>
          <Box
            // border="1px solid blue"
            h={"320px"}
            mt="20px"
            w={["100%", "86%", "100%", "100%"]}
            ml={["0%", "7%", "0%", "0%"]}
          >
            <Image
              src="https://i.postimg.cc/1R74h9Nz/time-tracking-for-architects-400x219.jpg"
              w={["100%"]}
              h={["60%", "60%", "50%", "50%"]}
            />
            <Text
              fontSize={"22px"}
              fontWeight="500"
              ml={["10px"]}
              mt={["10px"]}
            >
              13 Best Time Tracking Software For Architects
            </Text>
            <Link
              _hover={{ textDecoration: "none" }}
              color="green"
              fontWeight={500}
              ml={["10px"]}
              mt={["20px"]}
            >
              Read more
            </Link>
          </Box>
          <Box
            // border="1px solid blue"
            h={"320px"}
            mt="20px"
            w={["100%", "86%", "100%", "100%"]}
            ml={["0%", "7%", "0%", "0%"]}
          >
            <Image
              src="https://i.postimg.cc/NMfGSVsT/project-time-tracking-min-300x164.jpg"
              w={["100%"]}
              h={["60%", "60%", "50%", "50%"]}
            />
            <Text
              fontSize={"22px"}
              fontWeight="500"
              ml={["10px"]}
              mt={["10px"]}
            >
              13 Best Tools For Project Time Tracking
            </Text>
            <Link
              _hover={{ textDecoration: "none" }}
              color="green"
              fontWeight={500}
              ml={["10px"]}
              mt={["20px"]}
            >
              Read more
            </Link>
          </Box>
        </SimpleGrid>
        <Box
          display={["flex", "flex", "flex", "none"]}
          justifyContent={["center", "center", "center", "space-between"]}
        >
          <Button
            p={["25px 40px 25px 40px"]}
            color="white"
            backgroundColor={"rgb(37,207,96)"}
            borderRadius={"25px"}
          >
            Check all articles
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
