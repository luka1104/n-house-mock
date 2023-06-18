import { Box, Link, Text } from "@chakra-ui/react"
import React from "react"

type Props = {
  property: any
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <>
      <Link w="100%" href={property.href}>
        <Box w="100%" h="560px" bgSize="cover" maxW="440px" borderRadius="16px" bgImage={property.image}>
          <Text>N’HOUSE</Text>
          <Text>{property.title}</Text>
        </Box>
      </Link>
    </>
  )
}

export default PropertyCard
