import React from "react";
import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  Container,
  FormControl,
  Input,
  Flex,
  InputLeftElement,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

import WithStar from "./WithStars";
import WithDots from "./WithDots";
import { useDispatch, useSelector } from "../../store/store";
import { getUserState, setImages } from "../../store/slices/imageSlices";
import emailjs from "@emailjs/browser";
// import { AnyArray } from 'immer/dist/internal';

const NewsLetterForm = () => {
  const dispatch = useDispatch();
  const [status,setStatus] = React.useState("false")
  const { saly1, saly2, frame1, frame2, frame3, star } =
    useSelector(getUserState);

  const form = React.useRef();
let a
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9v25bmq",
        "template_g9pb15f",
        form.current,
        "HfwX7F4o4IC3V4Loe"
      )
      .then(
        (result) => {
            a=result.text === "ok" ? false: true
            // setStatus((prevState) => !prevState)
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  let load

  const GetStatus= () => {
    setStatus((prevState) => !prevState)
  }

  return (
    <Box className="form">
      <Container
        maxWidth="container.xlg"
        mt="209px"
        bgImage="url('../resources/Group 5419.png')"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="100%"
      >
        <Flex
          display="flex"
          alignItems="center"
          py="30"
          flexDirection="row"
          marginRight="95px"
          marginLeft="95px"
        >
          <Box
            ml={0}
            width={615}
            bgImage="url('../resources/Group 5403.png')"
            bgRepeat="no-repeat"
            bgPosition="center top"
            bgSize="65%"
            height="100vh"
          ></Box>

          <Box width={695}>
            <Heading
              fontSize="64px"
              fontWeight="600"
              fontFamily="Poppins"
              lineHeight="96px"
            >
              <Image src="resources\team2.png" />
              {/* Be part of the team */}
            </Heading>
            <Box display="flex" flexDirection="row">
              {/* <Image  src={star} mr={3}/> */}
              <Text
                className="easily"
                fontFamily="Poppins"
                fontStyle="italic"
                fontWeight="800"
                fontSize="96px"
                lineHeight="144px"
                color="#8d00ff"
              >
                <Image src="resources\Group 5381.png" />
              </Text>
            </Box>
            <Text
              fontSize="20px"
              lineHeight="30px"
              fontWeight="300"
              my="48px"
              color="#322E6580"
            >
              <Image src="resources\subscribe.png" />
              {/* Kindly subscribe to our email news letter to get amazing information. */}
            </Text>
            <form ref={form} onSubmit={sendEmail} >
              <InputGroup width="50%">
                <Input
                  name="user_email"
                  width="100%"
                  borderRadius="25"
                  py="24px"
                  borderColor="8E8E8E"
                  //  pl="32px"
                  placeholder="Enter your email here"
                  type="text"
                />
                <InputRightElement width=""

                
                >
                  <Button
                    bgColor="#8D00FF"
                    borderRadius="100%"
                    color="white"
                    mt={5}
                    className="inner"
                    marginTop="7px"
                    cursor="pointer"
                    ml="130%"
                    //  isLoading="false"
                    // isLoading={status ? false: true}

                    type="submit"
                    // onClick={GetStatus}
                //   onSubmit={sendEmail}

                  >
                    {/* {show ? 'Hide' : 'Show'} */}
                    <Image width={6} height={3} src={frame3}
                 
                    
                    />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </form>

            <Box display="flex" flexDirection="row" mt={35} mb={55}>
              <Image
                src={frame1}
                mr="32px"
                color="#ebe8fe"
                w="45px"
                height="45px"
              />
              <Image src={frame2} color="#ebe8fe" w="48px" height="48px " />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default NewsLetterForm;
