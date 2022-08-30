import React from 'react'

function RecievedToken() {
  return (
 <Box 
 height="739.8px"
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
      <Box
        mb="158.235px"
        mx="16.44px"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
      >
        <Flex
          gap="5.48px"
          alignItems="center"
          mb="202.075px"
          ml="16.44px"
          onClick={props.recieved}
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
      </Box>
      
 </Box>
  )
}

export default RecievedToken