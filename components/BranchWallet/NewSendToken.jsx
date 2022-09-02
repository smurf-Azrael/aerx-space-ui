import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";
import SendingTokens from "./SendingTokens";
import { MinusIcon } from "@chakra-ui/icons";
import { nearStore } from "../../store/near";

function SendTokens(props) {
  const nearState = nearStore((state) => state);

  const [amount, setAmount] = React.useState("");
  const [receiver, setReceiver] = React.useState("")
  const [isProceed, setProceed] = React.useState(false);

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleUser = (event) => {
    setReceiver(event.target.value)
  
  }

  const transferAex = async () => {
    console.log("Send button clicked")
    console.log("Details: ", amount,receiver)
    try {
      await nearState.tokenContract.ft_transfer({
        receiver_id: receiver,
        amount: amount + "000000000000000000000000" ,
        memo: "AEX Transfer",
      },
        "300000000000000",
        "1",
      )
      nearState.setSuccessfulTransfer(true);
      console.log("Transfer successful")
      //show successful page
    } catch (error) {
      console.log("Transfer not successful: ", error)
      //show error page
    }

  }

  const handleClick = () => {
    setProceed((prevState) => !prevState);
  };
  let bgColor;
  let disabled;
  const propsColor =
    amount.length < 1 ? (bgColor = "#FFFFFF1D;") : (bgColor = "#6054F0");
  const propsDisabled =
    amount.length < 1 ? (disabled = true) : (disabled = false);

  return (
    <Box
      height="739.8px"
      w="257.56px"
      bgColor="#1f1f1f;"
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
      <Box
        mb="204.13px"
        mx="16.44px"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
      >
        <Flex
          gap="5.48px"
          alignItems="center"
          onClick={props.upload}
          cursor="pointer"
          mb="204.13px"
        >
          <Image
            src={"../resources/Arrow - Right1.png"}
            color="#FFFFFF4D;"
            w="8.25425px"
            h="10.275px"
          />
          <Text color="#FFFFFF4D;">Back</Text>
        </Flex>
      </Box>
      <Center mb="27.4px">
        <Text
          fontFamily="Poppins"
          fontSize="12.33px"
          fontWeight="500"
          color="#ffffff"
        >
          Send Tokens
        </Text>
      </Center>
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
          <Image src={"../resources/Group 14031.png"} w="21.92px" h="21.92px" />
          <Text color="rgba(255, 255, 255, 0.3)" fontSize="10.96px">
            AEX
          </Text>
        </Flex>

        <Image src={"../resources/Vector 976.png"} />

        <div>
          <input
            type="number"
            placeholder="0"
          onChange={(e) => handleAmount(e)}
            style={{
              backgroundColor: "#191a1b",
              color: "rgba(255, 255, 255, 0.3)",
              width: "65.075px",
              height: "21.92px",
            }}
          />
        </div>


      </Flex>
      <Center fontFamily="Poppins" mb="10.96px">
        <Text fontSize="10.96px" color="rgba(255, 255, 255, 0.3)">
          ≈ $155.13 USD
        </Text>
      </Center>

      <Box mb="16.44px">
        <Input
          placeholder="pashq.testnet"
          color="#DB3333"
          fontFamily="Poppins"
          fontSize="10.96px"
          alignSelf="center"
          width="191.8px"
          height="38.36px"
          backgroundColor="#191A1B"
          borderRadius="10.275px"
          marginInline="32.88px"
          border="2px"
          borderColor="#DB3333"
          paddingInline="16.44px"
          fontWeight="500"
          onChange={(e) => handleUser(e)}
        />
        <Image
          src={"../resources/akar-icons_circle-check.png"}
          w="21.92px"
          h="21.92px"
          position="relative"
          left="190px"
          top="-30px"
          cursor="pointer"
        />
      </Box>

      <Center mb="21.92px">
        <Button
          disabled={disabled}
          onClick={transferAex}
          fontFamily="Poppins"
          fontSize="10.96px"
          color="#ffffff"
          // opacity="0.3"
          fontWeight="600"
          bgColor={bgColor}
          w="191.8px"
          h="38.36px"
          cursor="pointer"
        >
          <Image
            src={"../resources/Arrow - Right.png"}
            w="8.25425px"
            h="10.275px"
            mr="5.48px"
          />
          Send
        </Button>
      </Center>

      <Flex
        alignItems="center"
        flexDirection="column"
        gap="5.48px"
        fontFamily="Poppins"
        fontSize="9.59px"
        fontWeight="400"
      >
        <Text color="#ffffff4d">Available to send</Text>
        <Text color="#ffffff4d">{nearState.aexBalance} AEX</Text>
      </Flex>
    </Box>
  );
}


export default SendTokens;

        {/* <div>
          <select
            style={{
              backgroundColor: "#191a1b",
              color="rgba(255, 255, 255, 0.3)"
              width="65.075px"
              height="21.92px"
            }}
          >
            <option>
              <label>
                 <img
                  src="../resources/Group 14031.png"
                  w="21.92px"
                  h="21.92px"
                /> 
                <Image src={"../resources/.png"} w="21.92px" h="21.92px" />

                <Text>AEX</Text>
              </label>
            </option>
            <option>
              <label>
                <Image src={"../resources/.png"} w="21.92px" h="21.92px" />
                 <img
                  src="../resources/Group 14031.png"
                  w="21.92px"
                  h="21.92px"
                /> 
                <Text>NEAR</Text>
              </label>
            </option>
          </select>
        </div> */}

        {/* <div>
          <img src="../resources/Vector 976.png" alt="" />
        </div>

        <Image src={"../resources/Vector 976.png""} />



        <div>
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
        </div> */}