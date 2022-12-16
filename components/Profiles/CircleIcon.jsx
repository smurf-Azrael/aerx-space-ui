import React, { useState } from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Button,
  Grid,
  GridItem,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  MinusIcon,
  PhoneIcon,
  RepeatClockIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import AddIcon from "./AddIcon";

const data = [
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 0,
  },
  {
    src: "../resources/Folder-circle-icon.png",
    name: "Have",
    id: 1,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Scave",
    id: 2,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Ronan",
    id: 3,
  },
  {
    src: "../resources/Folder-circle-icon.png",
    name: "Nore",
    id: 4,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 5,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 0,
  },
  {
    src: "../resources/Folder-circle-icon.png",
    name: "Have",
    id: 1,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Scave",
    id: 2,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Ronan",
    id: 3,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Nore",
    id: 4,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 5,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 0,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Have",
    id: 1,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Scave",
    id: 2,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Ronan",
    id: 3,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Nore",
    id: 4,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 5,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 0,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Have",
    id: 1,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Scave",
    id: 2,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Ronan",
    id: 3,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Nore",
    id: 4,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 5,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 0,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Have",
    id: 1,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Scave",
    id: 2,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Ronan",
    id: 3,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Nore",
    id: 4,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 5,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 0,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Have",
    id: 1,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Scave",
    id: 2,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Ronan",
    id: 3,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Nore",
    id: 4,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 5,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 0,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Have",
    id: 1,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Scave",
    id: 2,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Ronan",
    id: 3,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Nore",
    id: 4,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 5,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 0,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Have",
    id: 1,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Scave",
    id: 2,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Ronan",
    id: 3,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Nore",
    id: 4,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 5,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 0,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Have",
    id: 1,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Scave",
    id: 2,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Ronan",
    id: 3,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Nore",
    id: 4,
  },
  {
    src: "../resources/Search-circle-icon.svg",
    name: "Anna",
    id: 5,
  },
];

function CircleIcon(props) {
  const [selectedIcon, setSelectedIcons] = useState([]);

  const handleClick = (item) => {
    setSelectedIcons((ps) => {
      if (ps.includes(item)) {
        return [...ps.filter((arr) => arr !== item)];
      } else {
        return [item];
      }
    });
  };

  const handleDone = () => {
    props.icon(selectedIcon);
    props.remove();
  };

  return (
    <Box
      height="100vh"
      w="250px"
      bgColor="#1f1f1f"
      // zIndex="6"
      fontFamily="poppins"
      display="flex"
      flexDirection="column"
    >
      <Center borderRadius="50px 50px 0px 0px" zIndex={6}>
        <Button
          onClick={props.remove}
          cursor="pointer"
          background="none"
          h="16px"
          w="16px"
          my={3}
          px="0"
        >
          <Image src="/resources/arrow-down.png" />
        </Button>
      </Center>

      <Flex alignItems="center" flexDirection="column" mx={0}>
        <Text
          my={1}
          fontFamily="poppins"
          fontSize="14px"
          color="#ffffff"
          fontWeight="600"
          letterSpacing="-0.02em"
          lineHeight="21px"
        >
          Select icon
        </Text>
      </Flex>

      <Box
        border="1.5px dashed rgba(255, 255, 255, 0.15)"
        borderRadius="10px"
        mx={4}
        my={4}
        h="40px"
        cursor="pointer"
      >
        <Flex justifyContent="center" alignItems="center" gap={2} h="full">
          <Image h="24px" w="24px" src="resources/circle-upload.png" />
          <Text fontSize="12px" fontWeight={500} lineheight="100%" color="#fff">
            Upload image
          </Text>
        </Flex>
      </Box>

      {/* <Box
        bg="rgba(255, 255, 255, 0.05)"
        borderRadius="10px"
        mx={4}
        my={4}
        h="48px"
        cursor="pointer"
        display="flex"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          gap={2}
          h="full"
          ml={2}
          mr="auto"
        >
          <Image h="32px" w="32px" src="resources/placeholder-circle-icon.png" border="1px dashed grey" />
          <Text
            fontSize="12px"
            fontWeight={500}
            fontStyle="italic"
            lineheight="100%"
            color="#fff"
          >
            Picture.png
          </Text>
        </Flex>
        <Flex color="#fff" justifyContent="center" alignItems="center" mr={4}>
          <Image h="24px" w="24px" src="resources/cancel-circle-icon.png" />
        </Flex>
      </Box> */}

      <Box overflowY="scroll" flex={2} mb={0}>
        <Box mx={1}>
          <Grid
            templateColumns="repeat(4, auto)"
            alignContent="center"
            h="auto"
            gap={2}
            ml={4}
          >
            {data.map((item, index) => (
              <AddIcon
                key={index}
                src={item.src}
                selected={selectedIcon.includes(item) ? true : false}
                onClick={() => handleClick(item)}
              />
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="center"
        justifyContent="center"
        my={4}
        bg="linear-gradient(180deg, #1F1F1F 0%, rgba(31, 31, 31, 0) 100%)"
      >
        {selectedIcon.length === 1 ? (
          <Button
            bgColor="#6054F0"
            borderRadius="10px"
            px="12px"
            py="24px"
            w="226px"
            h="40px"
            onClick={handleDone}
          >
            <Text
              color="#fff"
              fontFamily="poppins"
              letterSpacing="-0.02em"
              fontSize="14px"
              fontWeight={600}
              lineHeight="100%"
            >
              Done
            </Text>
          </Button>
        ) : (
          <Button
            bgColor="rgba(255, 255, 255, 0.05)"
            borderRadius="10px"
            px="12px"
            py="24px"
            w="226px"
            h="40px"
            disabled
          >
            <Text
              color="#fff"
              opacity="0.3"
              fontFamily="poppins"
              letterSpacing="-0.02em"
              fontSize="14px"
              fontWeight={600}
              lineHeight="100%"
            >
              Select
            </Text>
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default CircleIcon;
