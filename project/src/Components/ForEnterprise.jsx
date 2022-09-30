import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
  Link,
} from "@chakra-ui/react";

export function ForEnterprises() {
  return (
    <Box  
    // border={"1px solid black"} 
    h={["fit-content"]} w="100%">
      
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        // border="1px solid blue"
        w={["80%"]}
        ml={["10%"]}
        
      >
        <Box
          // border={"1px solid black"}
          h={["auto", "700px", "750px", "800px"]}
        >
          <Text
            color={"rgb(53,211,108)"}
            // border="1px solid yellow"
            fontWeight={600}
            mt={"50px"}
            w="80%"
          >
            ENTERPRISE
          </Text>
          <Text mt={"20px"} w="80%" fontSize={"36px"} fontWeight={700}>
            Try enterprise time tracking at the highest level
          </Text>
          <Text mt={"20px"} w="80%" fontWeight={500}>
            Custom needs? No problem! Contact us, and we will definitely find a
            perfect solution for your enterprise.
          </Text>
          <Accordion mt={"50px"} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "black", fontWeight: 500 }}
                >
                  <Box flex="1" textAlign="left">
                    Transfer multilevel project structures
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                No matter how many projects your team is currently working on,
                with TimeCamp you'll be able to organize work time without any
                problem.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "black", fontWeight: 500 }}
                >
                  <Box flex="1" textAlign="left">
                    Achieve full compliance with data regulation
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Our time tracking tool is fully GDPR compliant so that you can
                leave personal data and its privacy on us.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "black", fontWeight: 500 }}
                >
                  <Box flex="1" textAlign="left">
                    Get help from our Customer Success Manager
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Does your organization have more advanced or extraordinary
                needs? Our team would be happy to ensure you a private cloud
                implementation and help with dedicated onboarding.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box
            mt={"100px"}
            w="80%"
            display="flex"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
            ml={['10%','10%','0%','0%']}
            // border="1px solid black"
          >
            <Link _hover={{ textDecoration: "none" }}>
              
              <Button
                _hover={{ bg: "green" }}
                bg={"rgb(37,207,96)"}
                p={["20px 10px 20px 10px","25px 40px 25px 40px","25px 40px 25px 40px","25px 40px 25px 40px"]}
                color="white"
                borderRadius="25px"
                
              >
                Contact for customized solution
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          //   border={"1px solid blue"}
          h={["300px", "300px", "300px", "800px"]}
        >
          <Image
            w={["100%"]}
            height={['90%','90%','60%','50%']}
            mt={['10px','10px','200px','200px']}
            src="https://cdn-m.timecamp.com/img/greenbranding/features/project-structure.svg"
          />
        </Box>
      </SimpleGrid>
    </Box>
      
    
  );
}
