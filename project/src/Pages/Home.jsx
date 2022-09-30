import { Box } from "@chakra-ui/react";
import { DivContainingClock } from "../Components/DivContainingClock";
import FirstDiv from "../Components/firstDiv";
import { ForEmployees } from "../Components/ForEmployess";
import { ForEnterprises } from "../Components/ForEnterprise";
import { ForManager } from "../Components/ForManager";
import Navbar from "../Components/Navbar";
import { ProductTourDiv } from "../Components/ProductTourDiv";

function Home(){
    return(
        <Box >
            <Navbar />
            <FirstDiv/>
            <DivContainingClock/>
            <ForEmployees/>
           <ProductTourDiv/>
        </Box>
    )
}
export default Home 