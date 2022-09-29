import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Link,
} from "@chakra-ui/react";
export function ForManager() {
  return (
    <Box
    //  border={"1px solid black"} 
    h={["400px"]} w="100%" >
      
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        // border="1px solid blue"
        w={["80%"]}
        ml={["10%"]}
        
      >
        <Box
        //  border={"1px solid blue"} 
        h={["300px", "300px", "300px", "800px"]} display={['none','none','flex','flex','flex']}>
          <Image
            w={["100%"]}
            height={['90%','90%','60%','50%']}
            mt={["10px", "10px", "200px", "200px"]}
            src="https://cdn-m.timecamp.com/img/greenbranding/features/tools-integrations.svg"
          />
        </Box>
        <Box
        //   border={"1px solid black"}
          h={["1000px", "700px", "1000px", "800px"]}
        >
          <Text
            color={"rgb(53,211,108)"}
            // border="1px solid yellow"
            fontWeight={600}
            mt={"50px"}
            w="80%"
          >
            FOR MANAGERS
          </Text>
          <Text mt={"20px"} w="80%" fontSize={"36px"} fontWeight={700}>
            Track project time and budget easier than ever before
          </Text>
          <Text mt={"20px"} w="80%" fontWeight={500}>
            Stay on top of your team’s performance and create accurate resource
            estimates for all the projects.
          </Text>
          <Accordion mt={"50px"} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "black", fontWeight: 500 }}
                >
                  <Box flex="1" textAlign="left">
                    Ensure project profitability by analyzing reports
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                TimeCamp provides you with all the data you need to analyze the
                projects’ performance to ensure your team always stays on track.
                Look at the clear graphics and get a better view of the time
                tracked!
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "black", fontWeight: 500 }}
                >
                  <Box flex="1" textAlign="left">
                    Integrate with other tools for better performance
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Use seamless and quick setup to track time directly from a tool
                you already use, or import your project structure into TimeCamp.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "black", fontWeight: 500 }}
                >
                  <Box flex="1" textAlign="left">
                    Track your activities automatically
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                No more guessing! With TimeCamp you will get reasonable
                estimates for your projects and keep an eye on the resources
                usage.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box
            mt={"100px"}
            w="80%"
            display="flex"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <Link _hover={{ textDecoration: "none" }}>
              {" "}
              <Button
                _hover={{ bg: "green" }}
                bg={"rgb(37,207,96)"}
                p="25px 40px 25px 40px"
                color="white"
                borderRadius="25px"
              >
                Increase team productivity
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
        //  border={"1px solid blue"}
          h={["300px", "300px", "300px", "800px"]} display={['flex','flex','none','none','none']}>
          <Image
            w={["100%"]}
             height={['90%','90%','60%','50%']}
            mt={["10px", "10px", "200px", "200px"]}
            src="https://cdn-m.timecamp.com/img/greenbranding/features/tools-integrations.svg"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
