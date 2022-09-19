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
     <Box w="1920" h="743"    
     bgImage="url('../resources/Frame 22415.png') "
        bgRepeat="no-repeat"
        bgPosition="100%  1%"
        bgSize="contain"
        >
     <Box
            bgColor="#8D00FF"
            className="button"
            fontFamily="Poppins"
            borderRadius={50}
            fontWeight="600"
            color="white"
            onClick={authentication}
            top="77%"
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
    
    </Container>
  );
};
export default HeroSection;
