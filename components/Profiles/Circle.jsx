import React from 'react'
import {Box, Flex, Image, Text, Button, Heading} from "@chakra-ui/react";

// type Props = {}

const Circle = () => {
  return (
    <Box w="413px" h="682px" position="absolute" borderRadius="20px" bgColor="#191919" left="500px" top="0" px="auto" zIndex="-1">
        <Image src={"../resources/Frame 139.png"} position="absolute" w="24px" h="24px"  top="32px" right="16px"/>
        <Box  bgImage="url('../resources/Rectangle 321.png')"
      bgRepeat="no-repeat"
    //   bgColor="#191919"

    // bgGradient='linear(to-b, pink, black)'
    // opacity="0.2"
    blur="15px"
      borderTopRadius="20px"
    //   left="3.5px"
      w="413px"
      height="434px"
    top="16px"
    position="absolute"
    zIndex="-2"
    >

    </Box>
       <Flex flexDirection="column" alignItems="center" position="absolute" top="370px" >
       <Heading
            fontSize="32px"
            color="#FFFFFF"
            fontFamily="Poppins"
            fontWeight="700"
            fontStyle="normal"
            lineHeight="32px"
            mb="7px"
            // backdropBlur="25px"
            // bgColor="black"
          >
            Anna Smith
        </Heading>
            <Text
              fontSize="18px"
              fontFamily="Poppins"
              fontStyle="italic"
              color="#FFFFFFB2"
              fontWeight="400px"
              letterSpacing="-0.02em"
              mb="14px"
            >
              smith.aerx
            </Text>
        <Flex mb="14px">
            <Image src={"../resources/Ellipse 702.png"} marginRight={2} w="16px" h="16px" />
            <Text
                color="#FFFFFF80"
                fontFamily="Poppins"
                fontWeight="500"
                fontSize="14px"
              >
                Aura: 2k
            </Text>
        </Flex>
        <Flex justifyItems="center" alignItems="center" gap="8px" mb="14px">
            <Text px="10px" py="6px" borderRadius="20px" fontFamily="Poppins" fontWeight="400" fontSize="16px" color="#ffffff" bgColor="rgba(255, 255, 255, 0.1)" >#crypto</Text>
            <Text px="10px" py="6px" borderRadius="20px" fontFamily="Poppins" fontWeight="400" fontSize="16px" color="#ffffff" bgColor="rgba(255, 255, 255, 0.1)" >#nfts</Text>
            <Text px="10px" py="6px" borderRadius="20px" fontFamily="Poppins" fontWeight="400" fontSize="16px" color="#ffffff" bgColor="rgba(255, 255, 255, 0.1)" >#future</Text>
            <Text px="10px" py="6px" borderRadius="20px" fontFamily="Poppins" fontWeight="400" fontSize="16px" color="#ffffff" bgColor="rgba(255, 255, 255, 0.1)" >#Aerx</Text>
        </Flex>
        <Text fontFamily="Poppins" fontWeight="400" color="#ffffff" textAlign="center" px="20px" lineHeight="180%" opacity="0.7" mb="27px">I work as a doctor, but in my free time I like to make funny pictures and videos.</Text>
        <Button py="25px" px="37px" bgColor="#B882E1" borderRadius="10px"><Image src={"../resources/Frame 14044.png"} mr="8px" w="32px" h="32px"/> <Text fontFamily="Poppins" fontWeight="600" fontSize="16px" color="#ffffff" letterSpacing="-0.02px" lineHeight="100%">Start</Text></Button>
       </Flex>
    </Box>
  )
}

export default Circle