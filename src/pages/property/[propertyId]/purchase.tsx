import { NextPage } from "next"
import React from "react"
import { useRouter } from "next/router"
import { properties } from "@/data/mockdata"
import { Box, Button, Center, Link, Text } from "@chakra-ui/react"

const Purchase: NextPage = () => {
  const router = useRouter()
  const propertyId = router.query.propertyId
  const property = properties.find((property) => property.id === propertyId)
  if (!property) {
    return <div>loading...</div>
  }
  return (
    <>
      <Box w="100%" h="100vh" bgSize="cover" maxW="440px" bgImage="/images/BluePurchased.png">
        <Box
          fontFamily="Oswald"
          color="white"
          fontSize="120px"
          fontWeight="700"
          lineHeight="1"
          fontStyle="normal"
          float="left"
          textAlign="left"
          mt="84px"
          ml="32px"
        >
          <Text>GOT`</Text>
          <Text>EM</Text>
        </Box>
        <Box position="absolute" bottom="32px" w="100%" maxW="440px">
          <Center w="100%">
            <Box bg="white" w="83.5%" h="144px"></Box>
          </Center>
          <Link href="/home" textDecoration="none !important">
            <Center w="100%">
              <Button
                color="white"
                fontFamily="Noto Sans"
                mt="20px"
                fontSize="16px"
                fontWeight={700}
                lineHeight="1.5"
                bg="#00A7C1"
                w="83.5%"
                h="56px"
                borderRadius="0px"
                _hover={{ bg: "#00A7C1" }}
              >
                はじめる
              </Button>
            </Center>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Purchase
