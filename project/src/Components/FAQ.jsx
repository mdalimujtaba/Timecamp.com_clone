import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  OrderedList,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
export function FAQ() {
  return (
    <Box h={"auto"} mt={["100px"]} mb={['120px']}
    //  border="1px solid black"
     >
      <Box
        display={"flex"}
        justifyContent="center"
        fontSize={"36px"}
        fontWeight={600}
      >
        FAQ
      </Box>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        w={["96%", "90%", "84%", "84%"]}
        ml={["2%", "5%", "8%", "8%"]}
      >
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" mr={5} />
                  ) : (
                    <AddIcon fontSize="12px" mr={5} />
                  )}
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={"20px"}
                    fontWeight={500}
                  >
                    What is time tracker?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text lineHeight={2}>
                  {" "}
                  A time tracker is computer software or a web app that allows
                  teams, managers, and freelancers to measure time spent on
                  tasks and projects. It is used in many industries (law firms,
                  accounting, creative agencies, IT teams) for settling up with
                  hourly workers and billing clients for work.
                </Text>
                <Text lineHeight={2}>
                  You can integrate a time tracker with third-party tools for
                  project management, accounting, customer service, to-do lists,
                  and many more.
                </Text>
                <Text lineHeight={2}>
                  Speaking shortly, a time tracker helps you understand which
                  practices in your business lead to time waste. With this
                  knowledge, you can reduce bad practices and optimize workflow.
                </Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" mr={5} />
                  ) : (
                    <AddIcon fontSize="12px" mr={5} />
                  )}
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={"20px"}
                    fontWeight={500}
                  >
                    Why use time tracker?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                There are many reasons to use time tracking software. Here are
                the main use cases for a time tracker:
                <OrderedList>
                  <ListItem>
                    <Text fontWeight="500">Tracking billable hours: </Text>helps
                    freelancers and employees who are paid on an hourly basis
                    measure time spent on work with accuracy up to every second.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="500">Improving productivity: </Text>
                    employees who struggle with poor time management and
                    distractions can work on their efficiency, understand how
                    they work, and what takes most of their time.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="500">Timesheet management: </Text>one of
                    the most common features of time tracker is a timesheet – a
                    digital version of a paper timesheet. With a time tracker,
                    your team can have it filled out automatically.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight="500">Work automation: </Text>time tracker
                    helps to save time on administrative and repetitive tasks,
                    better allocate resources, cut costs, and smoothen teams’
                    workflow.
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" mr={5} />
                  ) : (
                    <AddIcon fontSize="12px" mr={5} />
                  )}
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={"20px"}
                    fontWeight={500}
                  >
                    What are the benifits of time tracking?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Here are all the benefits of using time tracking software in a
                nutshell.
                <UnorderedList>
                  <ListItem>Increased productivity</ListItem>
                  <ListItem>Accurate timesheets</ListItem>
                  <ListItem>Real-time updates on projects status</ListItem>
                  <ListItem>Easy attendance management</ListItem>
                  <ListItem>Workflow automation</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" mr={5} />
                  ) : (
                    <AddIcon fontSize="12px" mr={5} />
                  )}
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={"20px"}
                    fontWeight={500}
                  >
                    How to bill clients on hourly work?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text lineHeight={2}>
                  With TimeCamp, you can set up billing rates for your team
                  members, projects, and clients.
                </Text>
                <Text lineHeight={2}>
                  Have the time tracker record billable time and easily turn
                  timesheet data into invoices, adjust the tax rates for your
                  country and profession. And then, simply export the document
                  or send it straight to your clients.
                </Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" mr={5} />
                  ) : (
                    <AddIcon fontSize="12px" mr={5} />
                  )}
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={"20px"}
                    fontWeight={500}
                  >
                    How to save the time on timesheets?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text lineHeight={2}>
                  There is nothing better than having your timesheet filled out
                  automatically!
                </Text>
                <Text lineHeight={2}>
                  TimeCamp’s non-intrusive desktop app works in the background
                  so you and your team can focus on what really matters, while
                  the time tracker collects all the data for timesheets.
                </Text>
                <Text lineHeight={2}>
                  Edit your time logs any time or add time manually for even
                  more accuracy. Approve your team’s daily or weekly timesheets
                  with one click without effort.
                </Text>
                <Text lineHeight={2}>
                  Quick, easy, and painless timesheet management!
                </Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
