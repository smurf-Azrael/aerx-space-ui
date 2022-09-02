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
import { nearStore } from "../../store/near";

function NewAddLiquidity(props) {
  const nearState = nearStore((state) => state);
  const addLiquidity = () => {
    console.log("Add liquidity has been clicked");
    // try {
    //   nearState.DexContract.lend({
    //     pool_id: 1,
    //     token_id: "near.near",
    //     amount: ,
    //     min_expected: ,
    //     equivalent_aex: ,
    //   })
    // } catch (error) {

    // }
  };

  const [tolerance, setTolerance] = React.useState(0.1);

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
      height="739.8px"
      w="257.56px"
      bgColor="#1f1f1f"
      position="absolute"
      top="0"
    >
      {/* drag button */}

      <Center>
        <div
          className="m cursor-pointer  hover:bg-[#ffffff39]  flex flex-col
        background-#1F1F1F
        gap-0.5
        mb-[26.825px]
        mt-2
        "
          onClick={props.toggleWallet}
          cursor="pointer"
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

      {/* back button */}

      <Flex
        mb="160.29px"
        gap="5.48px"
        alignItems="center"
        justifyItems="center"
        ml="16.44px"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
        onClick={() => props.liquidity()}
        cursor="pointer"
      >
        <Image
          src={"../resources/Arrow - Right1.png"}
          color="#FFFFFF4D;"
          //   w="8.25425px"
          h="10.275px"
        />
        <Text color="#FFFFFF4D;">Back</Text>
      </Flex>

      {/* add liquidity text */}

      <Text
        mb="27.4px"
        textAlign="center"
        fontFamily="Poppins"
        fontSize="12.33px"
        fontWeight="342.5"
        color="#ffffff"
      >
        Add Liquidity
      </Text>

      {/* fisrt input */}

      <Flex
        mb="10.96px"
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
          <Image src={"../resources/Group 14030.png"} w="21.92px" h="21.92px" />
          <Text color="rgba(255, 255, 255, 0.3)" fontSize="10.96px">
            NEAR
          </Text>
        </Flex>

        <Image src={"../resources/Vector 976.png"} />

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="number"
            placeholder="0"
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

      {/* small text below it */}

      <Text
        mb="16.44px"
        textAlign="center"
        fontFamily="Poppins"
        fontWeight="400"
        fontSize="9.59"
        color="#FFFFFF4D"
      >
        Available: 102.4 NEAR
      </Text>

      {/* second input */}

      <Flex
        mb="10.96px"
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
          <Image src={"../resources/Group 14031.png"} w="21.92px" h="21.92px" />
          <Text color="rgba(255, 255, 255, 0.3)" fontSize="10.96px">
            AEX
          </Text>
        </Flex>

        <Image src={"../resources/Vector 976.png"} />

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="number"
            placeholder="0"
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

      {/* text under it */}

      <Text
        mb="16.44px"
        textAlign="center"
        fontFamily="Poppins"
        fontWeight="400"
        fontSize="9.59"
        color="#FFFFFF4D"
      >
        Available: 888.4 AEX
      </Text>

      {/* DYNAMIC INPUT */}

      <Flex w="191.8px" h="38.36px" mb="10.96px" gap="5.48px" mx="32.88px">
        <Flex
          bgColor="#1B1B1B;"
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
            color={color3}
            cursor="pointer"
            onClick={() => slipPage(0.1)}
            mr="19.18px"
          >
            0.1%
          </Text>

          <Text
            color={color2}
            mr="19.18px"
            cursor="pointer"
            onClick={() => slipPage(0.5)}
          >
            0.5%
          </Text>

          <Text color={color1} cursor="pointer" onClick={() => slipPage(1)}>
            1%
          </Text>
        </Flex>

        <input
          value=""
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

      {/* SLIPPAGE TOLERANCE */}

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

      {/* BUTTON */}

      <Center mb="21.92px">
        <Button
          fontFamily="Poppins"
          fontSize="10.96px"
          color="#ffffff"
          fontWeight="411"
          bgColor="#6054F0"
          w="191.8px"
          h="38.36px"
          letterSpacing="0.02px"
          onClick={addLiquidity}
        >
          Add Liquidity
        </Button>
      </Center>

      {/* END */}
    </Box>
  );
}

export default NewAddLiquidity;
