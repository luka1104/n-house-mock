import { NextPage } from "next"
import React from "react"
import { useRouter } from "next/router"
import { properties } from "@/data/mockdata"
import { Box, Text } from "@chakra-ui/react"

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
        <Box bg="white"></Box>
      </Box>
    </>
  )
}

export default Purchase
