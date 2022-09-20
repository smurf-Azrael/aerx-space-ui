import React from "react";
import { Box, Image, Text, Center, Flex, Button } from "@chakra-ui/react";
import { useDispatch } from "../../store/store";
import { expandChat, expandFlow } from "../../store/slices/modulesSlices";

function collapsable(props) {
  const dispatch = useDispatch();
  return (
    <Flex
      h="100%"
      bgColor="#232323;"
      position="absolute"
      w="41.1px"
      flexDirection="column"
      // gap="10%"
      zIndex={props.index}
      justifyContent="space-between"
      alignItems="center"


    >
      <Flex
        flexDirection="column"
        gap="19.865px"
        alignItems="center"
        
      >
        <Image src="../resources/æ.png" mt="65%" w="21.92px" h="14.385px" />
        <Image
          src={"../resources/Vector 38.png"}
          bgColor="rgba(255, 255, 255, 0.05);"
          py="5.48px"
          px="9.59px"
          borderRadius="10.275px"
          w="32px"
          h="32px"
          mb="4.11px"
          cursor={"pointer"}
          onClick={() => dispatch(expandFlow())}
        />
        <Image
          src={"../resources/Frame 14042.png"}
          bgColor="rgba(255, 255, 255, 0.05);"
          py="6.48px"
          px="7.59px"
          borderRadius="10.275px"
          w="32px"
          h="32px"
          mb="4.11px"
          cursor={"pointer"}
          onClick={() => dispatch(expandChat())}

        />
        <Image
          src={"../resources/Frame 14289.png"}
          bgColor="rgba(255, 255, 255, 0.05);"
          py="6.48px"
          px="7.59px"
          borderRadius="10.275px"
          w="32px"
          h="32px"
          cursor={"pointer"}
          mb="19.865px"
        />
      </Flex>
      <Flex>
        <div
          className=" color-[white]  rounded-[10.275px] cursor-pointer mx-auto  flex items-center bg-[#ffffff16] hover:bg-[#ffffff39] w-[24.66px] h-[77.13px] "
          onClick={props.toggle}
        >
          <Image src="resources/Frame 14290.png" w="8px" h="16px" ml="8px" />
        </div>
      </Flex>

      <Flex flexDirection="column" gap="10.96px" alignItems="center" mt="451%">
        <Box
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="100%"
          p="4px"
        >
          <Text
            color="#ffffff"
            marginTop={-2}
            marginLeft={2}
            position="absolute"
            backgroundColor="red"
            px="3.5px"
            borderRadius="100%"
            fontFamily="Poppins"
            fontWeight="500"
            fontSize="9.59px"
          >
            3
          </Text>
          <Image
            src={"../resources/Notification22.png"}
            w="11.64px"
            h="13.7px" 
          />
        </Box>
        <Box
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="100%"
          p="4px"
        >
          <Image src={"../resources/Frame 5450.png"} w="13.015px" h="13.7px" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default collapsable;
