import React from "react";
import { Box, Text, Center, Flex, Image } from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";

function CircleList(props) {
  props.setter((prevState) => !prevState)
  
  return (
    <Box
      height="739.8px"
      w="257.56px"
      bgColor="#1f1f1f"
    //   position="absolute"
    //   top="0"
    // zIndex="6"
      fontFamily="poppins"
    >
         
         <Center mb="16.44px">
      <div
        className="m cursor-pointer  hover:bg-[#ffffff39]  flex flex-col
        background-#1F1F1F
        gap-0.5
        mt-2
        "
        
        onClick={props.switched}
      >
        <MinusIcon
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
          />
          <MinusIcon
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
          />
      </div>
      </Center>

      {/* circle text */}
      <Center>
        <Text
          mb="21.92px"
          fontFamily="poppins"
          fontSize="16.44px"
          color="#ffffff"
          fontWeight="411"
        >
          Circles
        </Text>
      </Center>

      {/* family text */}

      <Center>
        <Text
          mb="16.44px"
          fontFamily="poppins"
          fontSize="12.33px"
          color="#ffffff"
          fontWeight="342.5"
        >
          Family
        </Text>
      </Center>

      {/* Images grid */}
      <Flex flexDirection="column" gap="6.96px" mb="10.96px">
        <Flex mx="16.44px" gap="16.44px">
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 3604.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360a.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360b.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360d.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
        </Flex>

        <Flex mx="16.44px" gap="16.44px">
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 3604.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360a.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360b.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Damola
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Box
              bgColor="#FFFFFF0D"
              w="43.84px"
              h="43.84px"
              borderRadius="13.7px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={"../resources/Add User.png"} w="13.7px" h="13.7px" />
            </Box>
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Center>
        <Text
          mb="10.96px"
          fontFamily="poppins"
          fontSize="12.33px"
          color="#ffffff"
          fontWeight="342.5"
        >
          Work
        </Text>
      </Center>

      <Flex flexDirection="column" gap="6.96px" mb="10.96px">
        <Flex mx="16.44px" gap="16.44px">
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 3604.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360a.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360b.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360d.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
        </Flex>

        <Flex mx="16.44px" gap="16.44px">
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 3604.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360a.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360b.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360d.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
        </Flex>

        <Flex mx="16.44px" gap="16.44px">
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 3604.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360a.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360b.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Damola
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Box
              bgColor="#FFFFFF0D"
              w="43.84px"
              h="43.84px"
              borderRadius="13.7px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={"../resources/Add User.png"} w="13.7px" h="13.7px" />
            </Box>
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Center>
        <Text
          mb="10.96px"
          fontFamily="poppins"
          fontSize="12.33px"
          color="#ffffff"
          fontWeight="342.5"
        >
          Friends
        </Text>
      </Center>

      <Flex flexDirection="column" gap="6.96px" mb="10.96px">
        <Flex mx="16.44px" gap="16.44px">
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 3604.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360a.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              patrick
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360b.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360d.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
        </Flex>

        <Flex mx="16.44px" gap="16.44px">
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 3604.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              pavel
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360a.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360b.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360d.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
        </Flex>

        <Flex mx="16.44px" gap="16.44px">
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 3604.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Moses
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360a.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Image src={"../resources/Rectangle 360b.png"} w="43.84px" />
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Damola
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="5.48px" alignItems="center">
            <Box
              bgColor="#FFFFFF0D"
              w="43.84px"
              h="43.84px"
              borderRadius="13.7px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={"../resources/Add User.png"} w="13.7px" h="13.7px" />
            </Box>
            <Text fontSize="10.96px" color="#ffffff" fontWeight="342.5px">
              Anna
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CircleList;
