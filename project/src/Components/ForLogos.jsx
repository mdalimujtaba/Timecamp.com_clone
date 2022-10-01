import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export function FourLogos(){
    return(
        <Box  h={'auto'} >
            <SimpleGrid columns={[2,2,4,4]} spacing={['50px']} h={'auto'} width={['84%']} border={'1px solid black'} ml={['8%']}>
                <Box border={'1px solid blue'} mt={'50px'}><Image src="https://i.postimg.cc/59gMByf2/crozdesk.png"/></Box>
                <Box border={'1px solid blue'} mt={'50px'}><Image src="https://i.postimg.cc/bJR49VcB/capterra.png"/></Box>
                <Box border={'1px solid blue'} ><Image src="https://i.postimg.cc/QMGPGZjz/crowd.png"/></Box>
                <Box border={'1px solid blue'}  ><Image src="https://i.postimg.cc/6qmjMDHY/get-app.png"/></Box>
            </SimpleGrid>

        </Box>
    )
}