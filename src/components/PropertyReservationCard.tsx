import React from "react"
import { Box, Button, Center, Text, VStack } from "@chakra-ui/react"

type Props = {
  property: any
}

const PropertyReservationCard: React.FC<Props> = ({ property }) => {
  return (
    <VStack
      w="100%"
      h="560px"
      bgSize="cover"
      maxW="440px"
      borderRadius="16px"
      bgImage={property.image}
      justifyContent="space-between"
    >
      <Box
        fontFamily="Oswald"
        color="white"
        fontSize="60px"
        fontWeight="700"
        lineHeight="1.5"
        fontStyle="normal"
        float="right"
        textAlign="right"
        mt="20px"
        mr="20px"
      >
        <Text>N’HOUSE</Text>
        <Text mt="-18px">{property.title}</Text>
      </Box>
      <Center w="100%" pb="40px">
        <Button
          color="#00A7C1"
          fontFamily="Noto Sans"
          mt="20px"
          fontSize="16px"
          fontWeight={700}
          lineHeight="1.5"
          bg="white"
          w="83.5%"
          h="56px"
          borderRadius="0px"
          _hover={{ bg: "white" }}
          // onClick={logoutHandler}
        >
          予約する
        </Button>
      </Center>
    </VStack>
  )
}

export default PropertyReservationCard
