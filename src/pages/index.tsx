import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react"

const Index: NextPage = () => {
  return (
    <>
      <Box w="100%" maxW="400px" h="100%" position="fixed" zIndex="1" bgImage="/images/HomeTop.png" />
      <Box zIndex="100" color="black" position="absolute">
        <Box pt="475px" pl="33px" color="white" fontFamily="Noto Sans">
          <Text>ほげほげほげほげほげ</Text>
          <Text>ほげほげほげほげほげ</Text>
        </Box>
      </Box>
    </>
  )
}
export default Index
