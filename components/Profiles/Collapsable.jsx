import React, { useEffect, useState } from "react";
import { Box, Image, Text, Center, Flex, Button } from "@chakra-ui/react";
import { useDispatch } from "../../store/store";
import { expandChat, expandFlow } from "../../store/slices/modulesSlices";

function collapsable(props) {
  const [hideProfile, setHideProfile] = useState(false);
  const dispatch = useDispatch();

  setInterval(() => {
    setHideProfile(true);
  }, 20000);

  return (
    <Flex>
      <Flex
        h="100%"
        bgColor="#141414"
        position="absolute"
        w="48px"
        borderRight="1px solid rgba(255, 255, 255, 0.15)"
        flexDirection="column"
        // gap="10%"
        zIndex={props.index}
        justifyContent="space-between"
        alignItems="center"
        display={hideProfile ? "none" : "flex"}
      >
        <Flex flexDirection="column" h="full" gap="10px" alignItems="center">
          <Image src="../resources/æ.png" mt={5} mb="auto" w="24px" h="17px" />
          <Box
            className="super-ellipse"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="rgba(255, 255, 255, 0.05)"
            color="#fff"
            backdropBlur="10px"
            backdropFilter="10px"
            cursor="pointer"
            w="32px"
            h="32px"
          >
            <Image src="resources/Plus-con.png" />
          </Box>
          <Image
            src={"../resources/Vector 38.png"}
            bgColor="rgba(255, 255, 255, 0.05);"
            py="5.48px"
            px="9.59px"
            borderRadius="10.275px"
            w="32px"
            h="32px"
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
        {/* <Flex>
          <div
            className=" color-[white]  rounded-[10.275px] cursor-pointer mx-auto  flex items-center bg-[#ffffff16] hover:bg-[#ffffff39] w-[24.66px] h-[77.13px] "
            onClick={props.toggle}
          >
            <Image src="resources/Frame 14290.png" w="8px" h="16px" ml="8px" />
          </div>
        </Flex> */}

        <Flex
          flexDirection="column"
          gap="14px"
          alignItems="center"
          borderTop="1.5px solid rgba(255, 255, 255, 0.05)"
          marginLeft="0"
          px={0.5}
          w="full"
          py={3}
          justifyContent="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Flex
              alignItems="center"
              justifyItems="center"
              position="relative"
              gap={3}
              bgColor="#1A1A1A"
              w="34px"
              h="67px"
              p={1}
              borderRadius="12px"
              flexDirection="column"
            >
              <Box>
                <Image src="resources/moon-icon.png" />
              </Box>
              <Box>
                <Image src="resources/sun-icon.png" />
              </Box>
            </Flex>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Image w="19px" h="20px" src={"resources/Setting.png"} />
          </Box>
          <Box cursor="pointer" onClick={props.logOutUser} display="flex">
            <Image src="resources/Logout-icon.png" />
          </Box>
        </Flex>
      </Flex>
      <Box
        color="#fff"
        justifyContent="center"
        display={hideProfile ? "none" : "flex"}
        flexDirection="column"
        px={2}
        onClick={() => props.toggle()}
        cursor="pointer"
        ml={hideProfile ? 0 : 12}
        h="full"
      >
        <Image w="16px" h="16px" src={"resources/open-profile.png"} />
      </Box>
      <Box
        color="#fff"
        justifyContent="center"
        display={hideProfile ? "flex" : "none"}
        flexDirection="column"
        px={2}
        onClick={() => props.toggle()}
        cursor="pointer"
        ml={hideProfile ? 0 : 12}
        h="full"
        onMouseOver={() => { 
          props.toggle() 
          setHideProfile(false)
        }}
      >
        <Image w="16px" h="16px" src={"resources/open-profile.png"} />
      </Box>
    </Flex>
  );
}

export default collapsable;
