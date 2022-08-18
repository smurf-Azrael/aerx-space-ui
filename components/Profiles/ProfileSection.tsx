import React from "react";
import {
  Box,
  Spacer,
  Image,
  Text,
  Heading,
  SimpleGrid,
  extendTheme,
  Center,
  Flex,
  Container,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";


type Props = {};

const ProfileSection = (props: Props) => {
  const dispatch = useDispatch();
  const {
    groupP1,
    groupP2,
    ellipse1,
    ellipse2,
    ellipse3,
    logoP,
    frameP1,
    frameP2,
  } = useSelector(getUserState);

  return (
  
    <Flex
      bgImage="url('../resources/Rectangle 3212.png')"
      bgRepeat="no-repeat"
      bgPosition="0 48px"
      bgColor="#191919"
      w="376px"
      height="494px"
    top="0"
    // position="absolute"
    zIndex="-2"
   

    >
      <Flex flexDirection="column" gap="16px" ml="24px" mt="32px">
        {/* never put border and border rad */}
        <Image  width={10} height={10}   border="2px solid"
          borderColor="white"
          padding="2px"
          borderRadius="100%"
          src={"../resources/Ellipse 1.svg"}
          />
      

        <Image
          width={10}
          height={10}
          padding="2px"
          border="2px solid"
          borderColor="white"
          borderRadius="100%"
          src={"../resources/Ellipse 2.png"}
        />

        <Image width={10} height={10} border="2px solid"
          borderColor="white"
          borderRadius="100%"
          padding="2px"
          src={"../resources/Ellipse 3.png"}
           />

        <Image
          width={10}
          height={10}
          src={"../resources/Ellipse 4.svg"}
          border="2px solid"
          padding="2px"
          borderColor="white"
          borderRadius="100%" />

      </Flex>
      {/* end */}
      <Flex flexDirection="column" alignItems="center" mx="auto">
        <Image width={16} height={16} src={logoP} mt="14px" />

        <Box mt="232px">
          <Heading
            fontSize="32px"
            color="#FFFFFF"
            fontFamily="Poppins"
            fontWeight={700}
            fontStyle="normal"
            lineHeight="100%"
          >
            Pavel Dantsev
          </Heading>

          <Flex alignItems="center" flexDirection="column">
            <Text
              fontSize="18px"
              fontFamily="Poppins"
              fontStyle="italic"
              color="#FFFFFFB2"
              fontWeight={400}
              letterSpacing="-0.02em"
              marginTop="8px"
            >
              pashq.aerx
            </Text>

            <Flex>
              <Image src={ellipse3} marginRight={2} />
              <Text
                color="#FFFFFF80"
                fontFamily="Poppins"
                fontWeight="500"
                fontSize="14px"
              >
                Aura: 2k
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      {/* end */}

      <Flex flexDirection="column" gap="32px" mr="21px" mt="32px">
        <Image src={frameP1} />
        <Image src={frameP2} />
      </Flex>
    </Flex>
    //    end
  );
};

export default ProfileSection;
