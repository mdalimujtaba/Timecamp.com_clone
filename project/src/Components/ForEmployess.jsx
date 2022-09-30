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
import { ForEnterprises } from "./ForEnterprise";
import { ForManager } from "./ForManager";
export function ForEmployees() {
  return (
    <>
      <Box
        // border={"1px solid black"}
        h={["auto"]}
        w="100%"
      >
        <Box
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          w="100%"
        >
          <Text fontSize={"36px"} w="600px" fontWeight={700} lineHeight={1}>
            Time tracking for everyone in your organization
          </Text>
        </Box>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          // border="1px solid blue"
          w={["80%"]}
          ml={["10%"]}
          mt={"50px"}
        >
          <Box
            // border={"1px solid black"}
            h={["800px", "700px", "750px", "800px"]}
          >
            <Text
              color={"rgb(53,211,108)"}
              // border="1px solid yellow"
              fontWeight={600}
              mt={"50px"}
              w="80%"
            >
              FOR EMPLOYEES
            </Text>
            <Text mt={"20px"} w="80%" fontSize={"36px"} fontWeight={700}>
              Track your employees working time
            </Text>
            <Text mt={"20px"} w="80%" fontWeight={500}>
              Log working hours of your employees automatically or manually and
              make sure they are billed fairly.
            </Text>
            <Accordion mt={"50px"} allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ color: "black", fontWeight: 500 }}
                  >
                    <Box flex="1" textAlign="left">
                      Check logged time on the handy Timesheet
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Enjoy the transparency - check your employees time records
                  with more detailed information on the handy timesheet or a
                  graphical, calendar-like view.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ color: "black", fontWeight: 500 }}
                  >
                    <Box flex="1" textAlign="left">
                      Try our easy-to-use desktop app.
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  TimeCamp desktop app is reliable and easy to use time tracking
                  tool that works in the background and seamlessly fills the
                  timesheets. All you have to do is to focus on your work!
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
                  Fill your timesheets with the daily activities and time
                  entries with just one click. Easy time tracking app is here!
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
                {" "}
                <Button
                  _hover={{ bg: "green" }}
                  bg={"rgb(37,207,96)"}
                  p="25px 40px 25px 40px"
                  color="white"
                  borderRadius="25px"
                >
                  Track employees time
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
              height={["90%", "90%", "60%", "50%"]}
              mt={["10px", "10px", "200px", "200px"]}
              src="https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.svg"
            />
          </Box>
        </SimpleGrid>
        <ForManager />
        <ForEnterprises />
      </Box>
    </>
  );
}
