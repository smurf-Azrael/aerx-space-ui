import React from "react";
import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  Container,
  Flex,
} from "@chakra-ui/react";
import WithStar from "./WithStars";
import WithDots from "./WithDots";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";

const HeroSection: React.FC = () => {
  const { saly, group1 } = useSelector(getUserState);
  function authentication() {
    console.log("welcome to arex");
  }
  return (
    <Container
      maxWidth="container.xlg"
      
    >
     <Box w="1920" h="953"    bgImage="url('../resources/Frame 22415.png') "
        bgRepeat="no-repeat"
        bgPosition="center top"
        bgSize="contain">
     <Box
            bgColor="#8D00FF"
            className="button"
            fontFamily="Poppins"
            borderRadius={50}
            fontWeight="600"
            color="white"
            onClick={authentication}
            top="86%"
            left="16%"
            cursor="pointer"
            w="159.605px"
            h="46.58"
            // justifyContent="center"
            pt="13px"
            pl="32.88"
            position ="absolute"
          >
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="16.44px"
              lineHeight="24.66px"
              pt="-8%"
              color="#FFFFFF"
            pl="2%"


            >
              Get started
            </Text>
          </Box>
     </Box>
     {/* <Flex
        alignItems="center"
        py="30"
        flexDirection="row"
        marginRight="95px"
        marginLeft="95px"
     
        mt="-9%"
        height="100vh"

    
      > */}
        {/* bgGradient="linear(to-l,12% #FFFFFF)" */}
        {/* <Box> */}
          {/* <Heading
            fontSize="76px"
            lineHeight="114px"
            fontWeight="600"
            fontFamily="Poppins"
            color="#322E65"
          >
            <Image src="resources\Welcome.png" w="421.275px" ml="7%" />
            Welcome to Aerx
          </Heading> */}
          {/* <Text
            fontSize="24px"
            fontStyle="italic"
            fontWeight={300}
            fontFamily="Poppins"
            color="#322E65CC"
            lineHeight="36px"
          >
            <Image src="resources\web3.png" w="243.175px" ml="7%" mt={3} />

         
          </Text> */}
          {/* <Text
            fontSize="24px"
            lineHeight="36px"
            fontWeight="300"
            mt="48px"
            width={525}
            color="#322E6580"
          > */}
            {/* <Image
              src="resources\aerxcont.png"
              ml="7%"
              w="367.16px"
              h="73.98px"
            /> */}
            {/* Aerx is a web 3 social media platform with a <br /> fundamentally
              new approach to <br />
              monetization of user content */}
          {/* </Text> */}
          {/* <Box
            bgColor="#8D00FF"
            className="button"
            fontFamily="Poppins"
            borderRadius={50}
            fontWeight="600"
            color="white"
            onClick={authentication}
            mt="56px"
            ml="7%"
            cursor="pointer"
            w="159.605px"
            h="46.58"
            // justifyContent="center"
            pt="2%"
            pl="32.88"
          >
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="16.44px"
              lineHeight="24.66px"
              pt="auto"
              color="#FFFFFF"
            >
              Get started
            </Text>
          </Box>
        </Box> */}

        {/* <Box marginLeft="135px" marginTop="-125px">
          <Image width="100" src="resources\Group 5401.png" className="group1-a" />
        </Box> */}
        {/* <Box ml="12%">
          <Image
            src="resources/saly-2.png"
            mt="-8%"
            w="358.255px"
            h="390.45px"
          />
          <Image
            width="100"
            src="resources\Group 5401.png"
            className="group1-a"
            mt="-48%"
            ml="1%"
            w="108.23px"
            h="108.23px"
          />
        </Box> */}
      {/* </Flex> */}
    </Container>
  );
};
export default HeroSection;
