import { Box, HStack, Image } from "@chakra-ui/react"
import React from "react"

const Header: React.FC = () => {
  return (
    <HStack position="fixed" zIndex="200" top="0" w="100%" maxW="440px" h="64px" bg="white">
      <Box>
        <Image src="/icons/Setting.png" />
      </Box>
    </HStack>
  )
}

export default Header
