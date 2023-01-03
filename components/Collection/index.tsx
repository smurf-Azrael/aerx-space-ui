import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { collapseCollections } from "../../store/slices/modulesSlices";
import { useDispatch } from "../../store/store";
import Card from "./Card";

const data = [
  {
    image: "resources/bg-collection-1.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-2.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-3.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-4.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-1.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-2.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-3.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-4.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-1.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-2.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-3.png",
    amount: "12,03",
  },
  {
    image: "resources/bg-collection-4.png",
    amount: "12,03",
  },
];

export default function Collection() {
  const dispatch = useDispatch();

  const onCollapse = () => {
    dispatch(collapseCollections());
  }
  
  return (
    <Box
      bg="rgba(255, 255, 255, 0.07)"
      h="94vh"
      w="266px"
      borderRadius="15px"
      overflowY="hidden"
    >
      <Box p={4}>
        <Flex alignItems="center" mb={4}>
          <Box display="flex" alignItems="center" flex={1} gap={2}>
            <Image
              src="resources/collection-icon.png"
              h="32px"
              w="32px"
              alt="icon"
            />{" "}
            <Text
              fontWeight="500"
              color="#fff"
              lineHeight="100%"
              fontSize="14px"
              letterSpacing="-0.02em"
              textTransform="capitalize"
            >
              Collections
            </Text>
          </Box>
          <Box  className="cursor-pointer flex items-center hover:bg-black-light p-[3px]  transition duration-150 ease-in-out rounded-[10px]" ml="16.44px" onClick={() => onCollapse()}>
            <Image
              src="/assets/icons/chat-room-menu-icon.svg"
              alt="Meu"
              width="32px"
              height="32px"
            />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          h="32px"
          bg="rgba(255, 255, 255, 0.05)"
          borderRadius="100px"
          px={4}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            width="100%"
          >
            <Text
              fontWeight="400"
              color="#fff"
              lineHeight="100%"
              fontSize="12px"
              textTransform="capitalize"
              flex={1}
            >
              My Collections
            </Text>
            <Image
              src="resources/collection-forward.png"
              h="16px"
              w="16px"
              alt="icon"
            />{" "}
          </Box>
        </Flex>
        <Box
          mt={4}
        //   overflowY="scroll"
        //   overflowX="hidden"
        //   h="652px"
        //   w="full"
        //   css={{
        //     "&::-webkit-scrollbar": {
        //       width: "6px",
              
        //     },
        //     "&::-webkit-scrollbar-track": {
        //       width: "8px",
        //       backgroundColor: "#6054f0",

        //     },
        //     "&::-webkit-scrollbar-thumb": {
        //       display: "none",
        //       // borderRadius: "24px",
        //     },
        //     "&::-webkit-scrollbar-behaviour": {
        //       scrollBehavior: "smooth",
        //     },
        //   }}
        >
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2 }}
            spacing={2}
            justifyContent={{ md: "center" }}
          >
            {data.map((item, i) => (
              <Card key={i} image={item.image} amount={item.amount} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
