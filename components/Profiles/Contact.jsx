import { GridItem, Image, Text, Box } from "@chakra-ui/react";
import React from "react";

function Contact({
  src = "../resources/Rectangle 3604.png",
  name = "Annas",
  selected,
  onClick,
}) {
  return (
    <GridItem
      cursor="pointer"
      pos="relative"
      onClick={onClick}
      display="flex"
      justifyContent="flex-start"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image
          src={src}
          w="48px"
          h="48px"
          bgColor="rgba(255, 255, 255, 0.05)"
          backdropFilter="10px"
          borderRadius="15px"
        />
        <Text
          fontFamily="poppins"
          textAlign="center"
          pt={2}
          fontWeight="500"
          color="#ffffff"
          lineHeight="18px"
          fontSize="12px"
        >
          {name}
        </Text>
      </Box>
      {selected && (
        <Box
          bg="linear-gradient(0deg, rgba(96, 84, 240, 0.8), rgba(96, 84, 240, 0.8)), url(.jpg), rgba(255, 255, 255, 0.05)"
          backdropFilter="10px"
          pos="absolute"
          top="0"
          left="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="48px"
          w="48px"
          overflow="hidden"
          borderRadius="15px"
        >
          <Image src="resources/selected.png" h="20px" w="20px" />
        </Box>
      )}
    </GridItem>
  );
}

export default Contact;
