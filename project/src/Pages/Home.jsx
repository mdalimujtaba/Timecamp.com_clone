import { Box } from "@chakra-ui/react";
import { DivContainingClock } from "../Components/DivContainingClock";
import FirstDiv from "../Components/firstDiv";
import Navbar from "../Components/Navbar";

function Home(){
    return(
        <Box >
            <Navbar/>
            <FirstDiv/>
            <DivContainingClock/>

        </Box>
    )
}
export default Home 