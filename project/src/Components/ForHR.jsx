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
export function ForHR() {
  return (
    <Box
      border={"1px solid black"}
      h={["fit-content"]}
      w="100%"
      
    >
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        // border="1px solid blue"
        w={["80%"]}
        ml={["10%"]}
        mt={"50px"}
      >
        <Box
          //  border={"1px solid blue"}
          h={["300px", "300px", "300px", "800px"]}
          display={["none", "none", "flex", "flex", "flex"]}
        >
          <Image
            w={["100%"]}
            height={["90%", "90%", "60%", "50%"]}
            mt={["10px", "10px", "200px", "200px"]}
            src="https://cdn-m.timecamp.com/img/greenbranding/features/attendance-features.svg"
          />
        </Box>
        <Box
          //   border={"1px solid black"}
          h={["auto", "700px", "1000px", "800px"]}
        >
          <Text
            color={"rgb(53,211,108)"}
            // border="1px solid yellow"
            fontWeight={600}
            mt={"50px"}
            w="80%"
          >
            FOR HR
          </Text>
          <Text
            mt={"20px"}
            w="80%"
            fontSize={["28px", "28px", "36px", "36px", "36px"]}
            fontWeight={[600, 600, 600, 700, 700]}
            lineHeight={[1,1,1.2,1.5,1.5]}
          >
            Check Timesheets and control attendance in one place
          </Text>
          <Text mt={"20px"} w="80%" fontWeight={500}>
            With TimeCamp you can forget about endless stacks of papers! Take
            advantage of convenient and easy to use tools to support your daily
            HR and payroll work.
          </Text>
          <Accordion mt={"50px"} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "black", fontWeight: 500 }}
                >
                  <Box flex="1" textAlign="left">
                    Track attendance automatically
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                TimeCamp allows both you and your employees to keep an eye on
                their absence, sick days, or vacation leaves. Track attendance
                and working hours easily as never before. tracked!
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "black", fontWeight: 500 }}
                >
                  <Box flex="1" textAlign="left">
                    Check and approve employees Timesheets
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Enjoy the benefits of fully automated timesheet submissions -
                quickly approve or reject them and leave notes to make sure the
                employees understand what needs to be done to get approved.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "black", fontWeight: 500 }}
                >
                  <Box flex="1" textAlign="left">
                    Integrate with payroll tools to work faster
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Make sure your employees are paid fairly! Use TimeCamp to
                connect the attendance data with payroll tools to create payroll
                lists with just a few clicks.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box
            mt={"100px"}
            w="80%"
            ml={["10%", "10%", "0%", "0%"]}
            display="flex"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <Link _hover={{ textDecoration: "none" }}>
              <Button
                _hover={{ bg: "green" }}
                bg={"rgb(37,207,96)"}
                p="25px 40px 25px 40px"
                color="white"
                borderRadius="25px"
              >
                Make HR's work easier
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          //  border={"1px solid blue"}
          h={["300px", "300px", "300px", "800px"]}
          display={["flex", "flex", "none", "none", "none"]}
        >
          <Image
            w={["100%"]}
            height={["90%", "90%", "60%", "50%"]}
            mt={["10px", "10px", "200px", "200px"]}
            src="https://cdn-m.timecamp.com/img/greenbranding/features/attendance-features.svg"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
