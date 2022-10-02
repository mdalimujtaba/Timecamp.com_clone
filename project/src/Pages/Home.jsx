import { Box } from "@chakra-ui/react";
import { Blog } from "../Components/Blog";
import { DivContainingClock } from "../Components/DivContainingClock";
import { FAQ } from "../Components/FAQ";
import FirstDiv from "../Components/firstDiv";
import Footer from "../Components/Footer";
import { ForEmployees } from "../Components/ForEmployess";

import { FourLogos } from "../Components/ForLogos";

import Navbar from "../Components/Navbar";
import { ProductTourDiv } from "../Components/ProductTourDiv";
import { YellowDiv } from "../Components/YellowDiv";

function Home(){
    return(
        <Box >
            <Navbar />
            <FirstDiv/>
            <DivContainingClock/>
            <ForEmployees/>
           <ProductTourDiv/>
           <FourLogos/>
           <YellowDiv/>
           <FAQ/>
           <Blog/>
           <Footer/>
        </Box>
    )
}
export default Home 