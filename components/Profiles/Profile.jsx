import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";
import { nearStore } from "../../store/near";
import { MinusIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";
import LogOut from "./LogOut";
import CircleList from "./CircleList";
import Circle from "./Circle";
import { expandChat, expandFlow } from "../../store/slices/modulesSlices";


function Profile(props) {
  const nearState = nearStore((state) => state);
  const dispatch = useDispatch();
  const { ellipse4, ellipse5, ellipse3, logoP, frameP1, frameP2 } =
    useSelector(getUserState);
  const [isLogout, setLogout] = React.useState(false);
  const logOutUser = () => {
    setLogout((prevState) => !prevState);
  };

  let zIndex;
  let backdrop;
  isLogout ? (zIndex = 1) : (zIndex = -8);
  isLogout ? (backdrop = 1) : (backdrop=-1)
  const [circ,setCirc] = React.useState(false)
  const remCirc = () => {
    setCirc((prevState) => !prevState)
    console.log('done',circ)
  }
  let disabled
  let opacity

  props.shadow ? disabled=true : disabled=false
//   props.shadow ? opacity=`` : opacity="none"
const mouseDown= (e) => {
    return(

  <Circle/>
  )
}


  return (
    
    circ ? <CircleList  remove={remCirc} /> :
<Flex 
  

>

    <Box  bgColor="#191919" position="absolute" 
    h="100%" w="257.56px"
   
     

    >
      {/* profile */}
      <Flex

        // className="
        // linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
        
        // "
        bgImage=
        
        { 
              
          `url('${nearState.profile.profileImg}')`
        
        }
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="30 0"
        backgroundSize="100% 100%"
        height="45%"
        width="100%"
        backgroundColor="#000000"
        // bgGradient={[
        //   'linear(to-tr, teal.300, yellow.400)',
        //   'linear(to-t, blue.200, teal.500)',
        //   'linear(to-b, orange.100, purple.300)',
        // ]}
        // opacity="15%"
        
    
     

        // bgGradient="to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73"
        
  

      onDoubleClick={(e) => props.doubleClick(e)}
      cursor="pointer"

      >
        <Box
        width="100%"
        position="absolute"
        bgColor="#000000B2"
        zIndex="2"
        top="35%"
        h="10%"
         bgGradient={[
          'linear(to-tr, whie.300, white.200)',
          'linear(to-t, white.200, white.500)',
          'linear(to-b, black.700, black.700)',
          
        ]}
        opacity="45%"

        >
hi
        </Box>
        <Flex
          flexDirection="column"
          gap="10.96px"
          ml="16.44px"
          mt="21.92px"
          cursor="pointer"
        >
          <Box
            color="#6054F0"
            width="27.4px"
            height="27.4px"
            border="2px solid"
            bgColor="#FFFFFF"
            borderColor="#FFFFFF"
            borderRadius="6.85px"
            onClick={() => props.toggle()}
          >
            <Image
              src="../resources/Frame 14290.svg"
              w="18px"
              py="5px"
              px="auto"
              pl="4px"
            />
          </Box>
        </Flex>
        <Flex flexDirection="column" alignItems="center" mx="auto" gap="60%">
          <Image width="42.47px" height="15.755px" src={logoP} mt="21.92px" />

          <Box h="235px">
            <Heading
              fontSize="21.92px"
              color="#FFFFFF"
              fontFamily="Poppins"
              fontWeight="700"
              fontStyle="normal"
              lineHeight="100%"
              textAlign="center"
              letterSpacing="-0.02em"
              mt="25px"
              textTransform="capitalize"
            >
              {nearState.profile.fullName}
            </Heading>

            <Flex
              alignItems="center"
              justifyContent="center"
              gap="16px"
              // mt="55px"
            >
              <Text
                fontSize="12.33px"
                fontFamily="Poppins"
                fontStyle="italic"
                color="#FFFFFFB2"
                fontWeight="400"
                letterSpacing="-0.02em"
                marginTop="5.48px"
                mb="11.645px"
                mt="12px"
                lineHeight=" 100%"
                /* identical to box height, or 18px */
              >
                {nearState.profile.username}
              </Text>

              <Flex
              // boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
              // boxShadow = "rgba(0, 0, 0, 0.25) 30px 154px 155px,  10px -212px 130px, rgba(0, 0, 0, 0.12) 10px 24px 6px, rgba(0, 0, 0, 0.17) 12px 12px 13px, rgba(0, 0, 0, 0.09) 10px -13px 65px"
              >
                <Image src={ellipse3} marginRight={2} w="10.96px" />
                <Text
                  color="#FFFFFF80"
                  fontFamily="Poppins"
                  fontWeight="500"
                  fontSize="9.59px"
                  lineHeight="100%"
                  /* identical to box height, or 14px */

                  letterSpacing="-0.02em"
                >
                  Aura: 2k
                </Text>
              </Flex>
              <Box
                // bgGradient="linear(to-b, #1f1f1f 0%, #191919 100%)"
                w="261.56px"
                position="absolute"
                top="295px"
                h="34px"
              >
                .
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex flexDirection="column" gap="10.96px" mr="14.385px" mt="21.92px">
          {/* first */}
          <Box
          cursor="pointer"
          onClick={() => dispatch(expandFlow())}
          
          >
          <Image
            src={frameP1}
            w="24.88px"
            h="24.88px"
            position="absolute"
            mt="1.5%"
            ml="2%"
          />
          <Image
            src="../resources/Squircle.png"
            // opacity="15%"
            w="34px"
            h="34px"
          />
          </Box>
          {/* second */}
          <Box
            cursor={"pointer"}
            onClick={() => dispatch(expandChat())}
          >
          <Image
            src={frameP2}
            w="24.88px"
            h="24.88px"
            position="absolute"
            mt="1.5%"
            ml="2%"
          />

          <Image
            src="../resources/Squircle.png"
            // opacity="15%"
            w="34px"
            h="34px"
          />
          </Box>
          {/* third*/}
          <Image
            src="../resources/Frame 14281.png"
            w="22.88px"
            h="22.88px"
            position="absolute"
            mt="37%"
            ml="2%"
          />
          <Image
            src="../resources/Squircle.png"
            // opacity="15%"
            w="34px"
            h="34px"
          />
        </Flex>
      </Flex>
      {/* profile */}
      {/* image carousel  */}
      <Flex
        bgColor="#1F1F1F"
        borderRadius="50px 50px 0px 0px"
        height="21%"
        flexDirection="column"
      >
        <Center>
            <div
              className="m cursor-pointer  hover:bg-[#ffffff39]  flex flex-col
        background-#1F1F1F
        gap-0.5
        mt-2
        "
              onClick={remCirc}
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
        <Text
          marginLeft="16.44px"
          marginTop="2%"
          fontWeight="500"
          fontSize="10.96px"
          color="rgba(255, 255, 255, 0.3);"
          height={21}
          fontFamily="Poppins"
          overflow="hidden"
        >
          Circles
        </Text>
        <Flex
          justifyContent="space-around"
          flexDirection="row"
          marginLeft="18.495px"
          mt="2%"
          overflowX="hidden"
          flex="auto"
          ml="8px"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            width="auto"
            onDoubleClick={(e) => props.doubleClick(e)}
            cursor="pointer"
            onClick={props.remove}
          >
            <Image
              src={ellipse4}
              width="43.84px"
              borderRadius="100%"
              //   mb="5.48px"
            />
            <Text
              fontSize="10.96px"
              fontFamily="Poppins"
              h="32.88px"
              fontWeight="400"
              color="#ffffff"
            >
              Work
            </Text>
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            width="auto"
            cursor="pointer"
            onDoubleClick={(e) => props.doubleClick(e)}
            onClick={props.remove}
          >
            <Image
              src={ellipse5}
              width="43.84px"
              borderRadius="100%"
              //   mb="5.48px"
            />
            <Text
              fontSize="10.96px"
              fontFamily="Poppins"
              h="32.88px"
              fontWeight="400"
              color="#ffffff"
            >
              Family
            </Text>
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            width="auto"
            onDoubleClick={(e) => props.doubleClick(e)}
            cursor="pointer"
            onClick={props.remove}
          >
            <Image
              src={ellipse4}
              width="43.84px"
              borderRadius="100%"
              //   mb="5.48px"
            />
            <Text
              fontSize="10.96px"
              fontFamily="Poppins"
              h="32.88px"
              fontWeight="400"
              color="#ffffff"
            >
              Friends
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            width="auto"
            onDoubleClick={(e) => props.doubleClick(e)}
            cursor="pointer"
            onClick={props.remove}
          >
            <Image
              src={ellipse4}
              width="43.84px"
              borderRadius="100%"
              //   mb="5.48px"
            />
            <Text
              fontSize="10.96px"
              fontFamily="Poppins"
              h="32.88px"
              fontWeight="400"
              color="#ffffff"
            >
              Followers
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex bgColor="#242424" borderTopRadius="34.25px" h="25%" mt="12%">
        <Box
          bgColor="#242424"
          width="257.56px"
          marginLeft="0"
          borderTopRadius="34.25px"
          position="absolute"
          h="15%"
          top="62%"
        >
          <Center>
            <div
              className="m cursor-pointer  hover:bg-[#ffffff39]  flex flex-col
        background-#1F1F1F
        gap-0.5
        mt-2
        "
              onClick={props.wallet}
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
          <Flex flexDirection="column">
          <Text
            marginLeft="16.44px"
            marginTop="8.22px"
            fontWeight="500"
            fontSize="10.96px"
            fontFamily="Poppins"
            color="rgba(255, 255, 255, 0.3);"
          >
            Wallet
          </Text>
          <Flex  gap="12%" justifyContent="space-between" mt="2%" alignItems="center">
            <Text
            marginLeft="16.44px"

              fontSize="16.44px"
              fontWeight="700"
              color="#ffffff"
              fontFamily="Poppins"
            //   mr="30.14px"
            >
              {nearState.aexBalance} AEX
            </Text>
            <Flex>
              <div
                className="cursor-pointer  hover:bg-[#ffffff39]
        background-#1F1F1F
        w-[16.44px]
        h-[16.44px]
        mr-[10.275px]

       "
              >
                <Image
                  src={"resources/Download.png"}
                  alt="download"
                  w="16.44px"
                  h="16.44px"
                />
              </div>
              <div
                className="cursor-pointer  hover:bg-[#ffffff39]
        background-#1F1F1F
        w-[16.44px]
        h-[16.44px]
        mr-[10.275px]

       "
                onClick={props.wallet}
              >
                <Image
                  src={"resources/Upload.png"}
                  alt="upload"
                  w="16.44px"
                  h="16.44px"
                  mr="10.275px"
                />
              </div>
              <div
                className="cursor-pointer  hover:bg-[#ffffff39]
        background-#1F1F1F
        w-[16.44px]
        h-[16.44px]
        mr-[10.275px]

       "
                onClick={props.wallet}
              >
                <Image
                  src={"resources/Frame 5556.png"}
                  alt="upload"
                  w="16.44px"
                  h="16.44px"
                  mr="10.275px"
                />
              </div>
              <div
                className="cursor-pointer  hover:bg-[#ffffff39]
        background-#1F1F1F
        w-[16.44px]
        h-[16.44px]
        mr-[10.275px]

       "
                onClick={props.wallet}
              >
                <Image
                  src={"resources/plant 1.png"}
                  alt="upload"
                  w="16.44px"
                  h="16.44px"
                  mr="10.275px"
                />
              </div>
            </Flex>
          </Flex>
          </Flex>
        </Box>
        <Box
          bgColor="#242424"
          width="257.56px"
          marginLeft="0"
          // borderTopRadius="34.25px"
          position="absolute"
          h="23%"
          top="74%"
        >
          <Flex mt="" ml="16.44px" overflow="hidden">
            <Box marginRight="10.96px" position="relative">
              <Flex position="absolute" left="30.825px" top="28.77px">
                <Image
                  src={"resources/Ticket Star.png"}
                  w="13.7px"
                  h="12.33px"
                />
                <Text
                  fontWeight="400"
                  fontSize="10.96px"
                  marginLeft="21.92px"
                  color="#ffffff"
                  position="absolute"
                  fontFamily="Poppins"
                >
                  Art
                </Text>
              </Flex>
              <Text
                position="absolute"
                color="#ffffff"
                top="48.633px"
                left="17.125px"
                fontSize="12.33px"
                fontWeight={600}
                fontFamily="Poppins"
              >
                NFT Name
              </Text>
              <Text
                position="absolute"
                top="63.705px"
                left="26.03px"
                color="#ffffff"
                fontWeight={400}
                fontSize="10.96px"
                fontFamily="Poppins"
              >
                24,6 aex
              </Text>
              <Image
                src={"resources/Rectangle 3421.png"}
                maxWidth="95.9px"
                height="85%"
              />
            </Box>

            <Box marginRight="16px" position="relative">
              <Flex position="absolute" left="22.825px" top="28.77px">
                <Image src={"resources/Fill 1.png"} w="13.7px" h="12.33px" />
                <Text
                  fontWeight="400"
                  color="#ffffff"
                  fontSize="10.96px"
                  marginLeft="21.92px"
                  position="absolute"
                  fontFamily="Poppins"
                >
                  Ticket
                </Text>
              </Flex>
              <Text
                position="absolute"
                color="#ffffff"
                top="48.633px"
                left="17.125px"
                fontSize="12.33px"
                fontWeight={600}
                fontFamily="Poppins"
              >
                NFT Name
              </Text>
              <Text
                position="absolute"
                top="63.705px"
                left="26.03px"
                color="#ffffff"
                fontWeight={400}
                fontSize="10.96px"
                fontFamily="Poppins"
              >
                24,6 aex
              </Text>
              <Image
                src={"resources/Rectangle 3527.png"}
                maxWidth="95.9px"
                height="85%"
              />
            </Box>

            <Box marginRight="16px" position="relative">
              <Flex position="absolute" left="30.825px" top="28.77px">
                <Image
                  src={"resources/Ticket Star.png"}
                  w="13.7px"
                  h="12.33px"
                />
                <Text
                  fontWeight="400"
                  fontSize="10.96px"
                  marginLeft="21.92px"
                  color="#ffffff"
                  position="absolute"
                  fontFamily="Poppins"
                >
                  Art
                </Text>
              </Flex>
              <Text
                position="absolute"
                color="#ffffff"
                top="48.633px"
                left="17.125px"
                fontSize="12.33px"
                fontFamily="Poppins"
              >
                NFT Name
              </Text>
              <Text
                position="absolute"
                top="63.705px"
                left="26.03px"
                color="#ffffff"
                fontWeight={400}
                fontSize="10.96px"
                fontFamily="Poppins"
              >
                24,6 aex
              </Text>
              <Image
                src={"resources/Rectangle 3421.png"}
                maxWidth="95.9px"
                height="85%"
              />
            </Box>
          </Flex>
        </Box>

        <Box
          position="absolute"
          bgColor="#303030;"
          width="257.56px"
          marginLeft="0"
          borderTopRadius="50px"
          h="10%"
          top="90%"
          
        >
   
          
 

          <Center
            display="flex"
            marginTop="8.22px"
            // mb="5px"
            gap="21.92px"
            ml="28px"
            pt="4px"
          >
            <Box
              border="1px"
              borderColor="rgba(255, 255, 255, 0.1);"
              borderRadius="100%"
              padding="3.8px"

            >
              <Flex alignItems="center" justifyItems="center" 
               >
                <Text
                  color="#ffffff"
                  marginTop={-4}
                  marginLeft={3}
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
                  src={"resources/Notification.png"}
                  w="19.52895px"
                  h="21.26895px"
                />
              </Flex>
            </Box>
            <Box
              border="1px"
              borderColor="rgba(255, 255, 255, 0.1);"
              borderRadius="100%"
              padding="5px"
              cursor="pointer"
              onClick={logOutUser}
            >
              <Image
                src={nearState.profile.profileImg}
                w="21.92px"
                h="21.92px"
                borderRadius="100%"
              />
            </Box>
            <Box
              border="1px"
              borderColor="rgba(255, 255, 255, 0.1);"
              marginRight="32px"
              borderRadius="100%"
              padding="5px"
            >
              <Image src={"resources/Setting.png"} w="17.35105px" />
            </Box>
          </Center>
        </Box>
      </Flex>
      {/* end of image carousel */}
      {/* wallet head */}

      {/* end of wallet head */}

      {/* end */}

    </Box>
<Flex h="100%" position="fixed" zIndex={backdrop}
 w="282.905px" bg="#000000B2"
>
.
</Flex>
    <LogOut zIndex={zIndex} revert={setLogout} log={isLogout}    />

    </Flex>

  );
}

export default Profile;
