import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Button,
  Input,
  PseudoBox,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";

function Exchange(props) {
  const [isExchange, setExchange] = React.useState(false);
  const [swapValue, setSwapValue] = React.useState({
    near: "",
    aex: "",
  });
  const [tolerance, setTolerance] = React.useState(0.1);


  const swap = () => {
    setExchange((prevState) => !prevState);
  };
  const handleSwap = (event) => {
    setSwapValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };


  const slipPage = (slip) => {
    setTolerance(slip);
  };
  const slipInput = (event) => {
    setTolerance(event.target.value);
  };

  const swapToken = () => {
    console.log("Swap button has been clicked");
    console.log("minimum Aex: ", minimumAex);
    console.log("minimum Near: ", minimumNear);
  };

  const calculatedAexOutput = swapValue.aex / 111;
  const calculatedNearOutput = 111 * swapValue.near;
  const tolerancePercentage = tolerance / 100;
  const calcDifferenceAex = tolerancePercentage * calculatedAexOutput;
  const calcDifferenceNear = tolerancePercentage * calculatedNearOutput;
  const minimumAex = calculatedAexOutput - calcDifferenceAex;
  const minimumNear = calculatedNearOutput - calcDifferenceNear;

  let color1 = "#FFFFFF4D;";
  let color2 = "#FFFFFF4D;";
  let color3 = "#FFFFFF4D;";
  if (tolerance === 0.1) {
    color1 = "#ffffff";
  }
  if (tolerance === 0.5) {
    color2 = "#ffffff";
  }
  if (tolerance === 1) {
    color3 = "#ffffff";
  }

  return (
    <Box
      height="100%"
      w="257.56px"
      bgColor="#1f1f1f"
      position="absolute"
      top="0"
    >
      <Center>
        <div
          className="m cursor-pointer  hover:bg-[#ffffff39]  flex flex-col
        background-#1F1F1F
        gap-0.5
        mb-[26.825px]
        mt-2
        "
          onClick={props.toggleWallet}
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

      <Flex
        mb="94.53px"
        mx="16.44px"
        gap="160.29px"
        alignItems="center"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
      >
        <Flex
          gap="5.48px"
          alignItems="center"
          onClick={() => props.exchange()}
          cursor="pointer"
        >
          <Image
            src={"../resources/Arrow - Right1.png"}
            color="#FFFFFF4D;"
            w="8.25425px"
            h="10.275px"
          />
          <Text color="#FFFFFF4D;">Back</Text>
        </Flex>
        <Text color="#FFFFFF4D;">Pool</Text>
      </Flex>

      <Text
        textAlign="center"
        fontWeight="500"
        fontSize="12.33px"
        fontFamily="Poppins"
        color="#ffffff"
        mb="27.4px"
      >
        Exchange tokens
      </Text>

      {/* first input */}
      {isExchange ? (
        <Flex
          mb="5.48px"
          w="191.8px"
          h="38.36px"
          bgColor="#191A1B"
          borderRadius="10.275px"
          mx="32.88px"
          p="8.22px"
          alignItems="center"
          fontSize="10.96px"
          color="white"
          fontFamily="Poppins"
          fontWeight="342.5px"
          gap="10.96px"
        >
          <Flex
            alignItems="center"
            width="65.075px"
            height="21.92px"
            gap="5.48px"
          >
            <Image
              src={"../resources/Group 14030.png"}
              w="21.92px"
              h="21.92px"
            />
            <Text color="rgba(255, 255, 255, 0.3)" fontSize="10.96px">
              NEAR
            </Text>
          </Flex>

          <Image src={"../resources/Vector 976.png"} />

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              onChange={handleSwap}
              type="number"
              placeholder="0"
              name="near"
              style={{
                backgroundColor: "#191a1b",
                color: "rgba(255, 255, 255, 0.3)",
                width: "65.075px",
                height: "21.92px",
              }}
            />
            <label style={{ color: "#FFFFFF26" }}>MAX</label>
          </div>
        </Flex>
      ) : (
        <Flex
          mb="5.48px"
          w="191.8px"
          h="38.36px"
          bgColor="#191A1B"
          borderRadius="10.275px"
          mx="32.88px"
          p="8.22px"
          alignItems="center"
          fontSize="10.96px"
          color="white"
          fontFamily="Poppins"
          fontWeight="342.5px"
          gap="10.96px"
        >
          <Flex
            alignItems="center"
            width="65.075px"
            height="21.92px"
            gap="5.48px"
          >
            <Image
              src={"../resources/Group 14031.png"}
              w="21.92px"
              h="21.92px"
            />
            <Text color="rgba(255, 255, 255, 0.3)" fontSize="10.96px">
              AEX
            </Text>
          </Flex>

          <Image src={"../resources/Vector 976.png"} />

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              onChange={handleSwap}
              type="number"
              name="aex"
              placeholder="0"
              style={{
                backgroundColor: "#191a1b",
                color: "rgba(255, 255, 255, 0.3)",
                width: "65.075px",
                height: "21.92px",
              }}
            />
            <label style={{ color: "#FFFFFF26", cursor: "pointer" }}>MAX</label>
          </div>
        </Flex>
      )}
      <Text
        mb="10.96px"
        textAlign="center"
        fontFamily="Poppins"
        fontWeight="400"
        fontSize="9.59"
        color="#FFFFFF4D"
      >
        Available: 102.4 NEAR
      </Text>

      {/* INPUT BEFORE SLIPPAGE TOLLERNCE STARTS */}

      <Flex w="191.8px" h="38.36px" mb="10.96px" gap="5.48px" mx="32.88px">
        <Flex
          bgColor="#1B1B1B"
          borderRadius="10.275px"
          justifyItems="center"
          fontFamily="Poppins"
          alignItems="center"
          fontSize="10.96px"
          fontWeight="500"
          py="14.385px"
          px="16.44"
          w="120.56px"
          h="38.36px"
        >
          <Text
            color={color1}
            cursor="pointer"
            onClick={() => slipPage(0.1)}
            mr="19.18px"
          >
            0.1%
          </Text>

          <Text
            color={color2}
            // ml="39.045px"
            mr="19.18px"
            cursor="pointer"
            onClick={() => slipPage(0.5)}
          >
            0.5%
          </Text>

          <Text color={color3} cursor="pointer" onClick={() => slipPage(1)}>
            1%
          </Text>
        </Flex>

        <input
          onChange={slipInput}
          type="number"
          style={{
            color: "#6054f0",
            textAlign: "center",
            backgroundColor: "#1B1B1B",
            border: "2px solid #6054f0",
            width: "65.76px",
            height: "38.36px",
            borderRadius: "10.275px",
          }}
        />
      </Flex>

      {/* INPUT BEFORE SLIPPAGE TOLLERNCE ENDS */}

      <Text
        mb="27.4px"
        textAlign="center"
        fontFamily="Poppins"
        fontWeight="400"
        fontSize="9.59"
        color="#FFFFFF4D;"
      >
        Slippage Tolerance
      </Text>

      <Flex mb="27.4px" mx="32.88px" gap="9.03515px" alignItems="center">
        <Box
          w="82.85px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="1px"
          borderRadius="6.85px"
        ></Box>

        <Image
          src={"../resources/Group 1.png"}
          w="16.44px"
          h="16.44px"
          cursor="pointer"
          onClick={() => swap()}
        />

        <Box
          w="82.85px"
          bgColor="rgba(255, 255, 255, 0.3);"
          height="1px"
          borderRadius="3.425px"
        ></Box>
      </Flex>

      {/* second input */}
      {isExchange ? (
        <Flex
          mb="5.48px"
          w="191.8px"
          h="38.36px"
          bgColor="#191A1B"
          borderRadius="10.275px"
          mx="32.88px"
          p="8.22px"
          alignItems="center"
          fontSize="10.96px"
          color="white"
          fontFamily="Poppins"
          fontWeight="342.5px"
          gap="10.96px"
        >
          <Flex
            alignItems="center"
            width="65.075px"
            height="21.92px"
            gap="5.48px"
          >
            <Image
              src={"../resources/Group 14031.png"}
              w="21.92px"
              h="21.92px"
            />
            <Text color="rgba(255, 255, 255, 0.3)" fontSize="10.96px">
              AEX
            </Text>
          </Flex>

          <Image src={"../resources/Vector 976.png"} />

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              disabled="true"
              type="number"
              placeholder={calculatedNearOutput}
              style={{
                backgroundColor: "#191a1b",
                color: "rgba(255, 255, 255, 0.3)",
                width: "65.075px",
                height: "21.92px",
                cursor: "not-allowed",
              }}
            />
            {/* <label style={{ color: "#FFFFFF26" }}>MAX</label> */}
          </div>
        </Flex>
      ) : (
        <Flex
          mb="5.48px"
          w="191.8px"
          h="38.36px"
          bgColor="#191A1B"
          borderRadius="10.275px"
          mx="32.88px"
          p="8.22px"
          alignItems="center"
          fontSize="10.96px"
          color="white"
          fontFamily="Poppins"
          fontWeight="342.5px"
          gap="10.96px"
        >
          <Flex
            alignItems="center"
            width="65.075px"
            height="21.92px"
            gap="5.48px"
          >
            <Image
              src={"../resources/Group 14030.png"}
              w="21.92px"
              h="21.92px"
            />
            <Text color="rgba(255, 255, 255, 0.3)" fontSize="10.96px">
              NEAR
            </Text>
          </Flex>

          <Image src={"../resources/Vector 976.png"} />

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              disabled="true"
              cursor="not-allowed"
              placeholder={calculatedAexOutput}
              type="number
            "
              style={{
                backgroundColor: "#191a1b",
                color: "rgba(255, 255, 255, 0.3)",
                width: "65.075px",
                height: "21.92px",
                cursor: "not-allowed",
              }}
            />
            {/* <label style={{ color: "#FFFFFF26" }}>MAX</label> */}
          </div>
        </Flex>
      )}
      {/* second input end */}

      <Text
        mb="16.44px"
        textAlign="center"
        fontFamily="Poppins"
        fontWeight="400"
        fontSize="9.59"
        color="#FFFFFF4D;"
      >
        1 NEAR = 3.9 AEX
      </Text>

      <Text
        textAlign="center"
        mb="10.96px"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="342.5"
        color="#ffffff"
      >
        Details
      </Text>

      <Flex
        mb="27.4px"
        w="191.8px"
        mx="32.88px"
        p="10.9px"
        gap="10.96px"
        flexDirection="column"
        bgColor="#191a1b"
        borderRadius="10.275px"
      >
        <Flex
          justifyContent="space-between"
          fontFamily="Poppins"
          fontWeight="274"
          fontSize="9.59px"
        >
          <Text color="rgba(255, 255, 255, 0.3)">Minimum received</Text>
          {isExchange ? (
            <Text
              fontFamily="Poppins"
              fontWeight="400"
              fontSize="9.59"
              color="#FFFFFF4D"
            >
              {minimumNear}
            </Text>
          ) : (
            <Text
              fontFamily="Poppins"
              fontWeight="400"
              fontSize="9.59"
              color="#FFFFFF4D"
            >
              {minimumAex}
            </Text>
          )}
          {/* <Text color="#ffffff">3.9666666</Text> */}
        </Flex>
        <Flex
          justifyContent="space-between"
          fontFamily="Poppins"
          fontWeight="274"
          fontSize="9.59px"
        >
          <Text color="rgba(255, 255, 255, 0.3)">Pool fee</Text>
          <Text color="#ffffff">0.59% / 0.005 NEAR</Text>
        </Flex>
      </Flex>

      <Center>
        <Button
          fontFamily="Poppins"
          fontSize="10.96px"
          color="#ffffff"
          fontWeight="600"
          bgColor="#6054F0;"
          w="191.8px"
          h="38.36px"
          onClick={swapToken}
          cursor="pointer"
        >
          <Image src={"../resources/Frame 5556.png"} mr="5.48px" />
          Change
        </Button>
      </Center>
      <Center mt="5px">
        {/* {isExchange ? (
          <Text
            fontFamily="Poppins"
            fontWeight="400"
            fontSize="9.59"
            color="#FFFFFF4D"
          >
            minimuim near recieved :{minimumNear}
          </Text>
        ) : (
          <Text
            fontFamily="Poppins"
            fontWeight="400"
            fontSize="9.59"
            color="#FFFFFF4D"
          >
            minimuim aex recieved :{minimumAex}
          </Text>
        )} */}
      </Center>
    </Box>
  );
}

export default Exchange;
