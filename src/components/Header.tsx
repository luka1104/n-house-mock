import { Box, HStack, Image, Link, Text } from "@chakra-ui/react"
import React from "react"

const Header: React.FC = () => {
  return (
    <HStack
      position="fixed"
      zIndex="200"
      top="0"
      w="100%"
      maxW="440px"
      h="64px"
      bg="white"
      justifyContent="space-between"
    >
      <Link href="/home" w="100%" textDecoration="none !important">
        <Image py="20px" pl="16px" src="/icons/Setting.png" />
      </Link>
      <Link href="/home" w="100%" textDecoration="none !important">
        <Text>N'HOUSE</Text>
      </Link>
      <Link href="/home" w="100%" textDecoration="none !important">
        <Image py="20px" pr="12px" src="/icons/Account.png" />
      </Link>
    </HStack>
  )
}

export default Header
