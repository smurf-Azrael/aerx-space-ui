import React from "react";
import { Box, Button, Image, Text, Container, Flex, } from "@chakra-ui/react";

import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";
import { loginToken } from "../../lib/auth";
import { nearStore } from "../../store/near";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { logo } = useSelector(getUserState);




  function connectWallect() {
    const state = nearStore((state) => state);
    console.log("Register/login button clicked");
    loginToken(state)
  }


  return (

    <Flex
      justifyItems="center"
      overflow="hidden"
      marginInline="150px"
      mt={6}
      mb="60px"

    >

      <Image src="../resources/aerx_logo-removebg-preview 1 (Traced) copy.svg" alt="logo" w="125px" h="47px" />







      <Flex alignItems="center" gap="56px" className="links" overflow="hidden" marginLeft="99px">

        <Text fontFamily="Poppins" fontWeight="400" color="rgba(50, 46, 101, 0.5);
" >
          Home
        </Text>
        <Text fontFamily="Poppins" fontWeight="400" color="rgba(50, 46, 101, 0.5);
">
          Features
        </Text>
        <Text fontFamily="Poppins" fontWeight="400" color="rgba(50, 46, 101, 0.5);
" >
          About us
        </Text>
      </Flex>

      <Button
        bgColor="#8D00FF"
        py="12px"
        px="40px"
        fontFamily="Poppins"
        borderRadius={50}
        fontWeight="600"
        color="white"
        marginLeft="auto"
        onClick={connectWallect}
      >
        Login/Register
      </Button>


    </Flex>

  );
};

export default Header;
