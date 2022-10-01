import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
 
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
       border={'1px solid black'}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10} mt={'70px'}  border={'1px solid black'}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 6,lg:6,xl:6 }} spacing={8}  border={'1px solid black'}>
            <Stack align={['center','center','flex-start','flex-start']}>
              <ListHeader>Product</ListHeader>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Overview</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Features</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Tutorials</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Pricing</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Releases</Link>
            </Stack>
            <Stack align={['center','center','flex-start','flex-start']}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Support</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Knowledge base</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Developer API</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Server Status</Link>
            </Stack>
            <Stack align={['center','center','flex-start','flex-start']}>
              <ListHeader>Integrations</ListHeader>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Trello</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Monday.com</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Google Calendar</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Asana</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Jira</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>All integrations</Link>

            </Stack>
            <Stack align={['center','center','flex-start','flex-start']}>
              <ListHeader>Resources</ListHeader>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Contact</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>HeySpace</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>About us</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Press</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Become a Partner</Link>
            </Stack>
            
            <Stack align={['center','center','flex-start','flex-start']}>
              <ListHeader>Calculators</ListHeader>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Profit Margin Calculator</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Online Timer</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Overtime Calculator</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>ROI Calculator</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Time Card Calculator</Link>
            </Stack>
            <Stack align={['center','center','flex-start','flex-start']}>
              <ListHeader>Legal</ListHeader>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Terms</Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Privacy </Link>
              <Link href={'#'} color="rgb(125,125,128)" _hover={{color:'rgb(250,218,124)'}}>Security</Link>
             
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          Copyright © 2022 TimeCamp. Inc.
          </Text>
        </Box>
      </Box>
    );
  }