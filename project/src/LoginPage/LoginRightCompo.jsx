import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from 'axios'

function LoginRightCompo() {
    const {isAuth,token,handlLogin}=useContext(AuthContext)
    const navigate=useNavigate()
    const [object,setObject]=useState({
        name:'',
        password:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target 
        setObject({...object,[name]:value})
    }
    const handleSubmit=()=>{
        axios.post("https://reqres.in/api/login",{
            email:object.name,
            password:object.password
        }).then((res)=>{
            handlLogin(res.data.token)
            navigate('/')
        })
    }
  return (
    <Box
      w={["300", "420px", "490px", "520px"]}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      borderRadius={"3xl"}
    >
      <Flex
        direction={"column"}
        align="center"
        p={["4", "7", "10", "14"]}
        gap={"6"}
      >
        <Heading size={"md"}>Log in to TimeCamp</Heading>
        <Button bg={"white"} border={"1px solid grey"} w={"100%"}>
          <Image
            mr={"2.5"}
            h={"6"}
            src="https://i.ibb.co/yPYCXhz/googel.png"
          ></Image>{" "}
          Log in with Google
        </Button>
        <Text>Or</Text>

        <Input placeholder="Email" type="email" name='name' onChange={handleChange}></Input>
        <Input placeholder="Password" type="password" name='password' onChange={handleChange}></Input>
        <Text color={"#25CF60"}>Forgotten Password?</Text>
        <Button color={"white"} size={"lg"} borderRadius={"3xl"} bg={"#25CF60"} onClick={handleSubmit}>
          Login
        </Button>

        <Text cursor={"pointer"} color={"#25CF60"} onClick={()=>navigate('/signup')}>
          No account? Sign up or Log in with SSO
        </Text>
      </Flex>
    </Box>
  );
}

export default LoginRightCompo;
