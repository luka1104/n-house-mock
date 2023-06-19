import { Box, HStack, Image, Link, Text } from "@chakra-ui/react"
import { usePrivy } from "@privy-io/react-auth"
import React from "react"

const Header: React.FC = () => {
  const { ready, authenticated, user, login, logout } = usePrivy()
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
      <Link href="/home" w="24px" ml="16px" textDecoration="none !important">
        <Image w="24px" my="20px" src="/icons/Setting.png" />
      </Link>
      <Link href="/home" textDecoration="none !important">
        <Text>N'HOUSE</Text>
      </Link>
      <Link w="24px" href="/home" mr="12px" textDecoration="none !important">
        <Image w="24px" my="20px" src={authenticated ? "/icons/AccountActive.png" : "/icons/Account.png"} />
      </Link>
    </HStack>
  )
}

export default Header
