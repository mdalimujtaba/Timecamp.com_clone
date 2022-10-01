import { Box } from "@chakra-ui/react";
import { DivContainingClock } from "../Components/DivContainingClock";
import { FAQ } from "../Components/FAQ";
import FirstDiv from "../Components/firstDiv";
import Footer from "../Components/Footer";
import { ForEmployees } from "../Components/ForEmployess";
import { ForEnterprises } from "../Components/ForEnterprise";
import { FourLogos } from "../Components/ForLogos";
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
           <FourLogos/>
           <FAQ/>
           <Footer/>
        </Box>
    )
}
export default Home 