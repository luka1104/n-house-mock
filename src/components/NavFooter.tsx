import { Box, Center, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"
import React from "react"

const NavFooter: React.FC = () => {
  return (
    <Box position="fixed" zIndex="200" bottom="0" w="100%" maxW="440px" h="74px" bg="transparent">
      <HStack gap="4px" px="4px" h="100%">
        <Link href="/home" w="100%">
          <Center h="100%" w="100%">
            <VStack gap="8px">
              <Image h="24px" src="/icons/Home.png" />
              <Text fontFamily="Roboto" fontSize="12px" lineHeight="1.5" fontWeight="400" color="white">
                HOME
              </Text>
            </VStack>
          </Center>
        </Link>
        <Link href="/mypage" w="100%">
          <Center h="100%" w="100%">
            <VStack gap="8px">
              <Image h="24px" color="black" src="/icons/MyPage.png" />
              <Text fontFamily="Roboto" fontSize="12px" lineHeight="1.5" fontWeight="400" color="white">
                MY PAGE
              </Text>
            </VStack>
          </Center>
        </Link>
        <Link href="/setting" w="100%">
          <Center h="100%" w="100%">
            <VStack gap="8px">
              <Image w="24px" src="/icons/Setting.png" />
              <Text fontFamily="Roboto" fontSize="12px" lineHeight="1.5" fontWeight="400" color="white">
                SETTING
              </Text>
            </VStack>
          </Center>
        </Link>
      </HStack>
    </Box>
  )
}

export default NavFooter
