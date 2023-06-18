import PropertyCard from "@/components/PropertyCard"
import { properties } from "@/data/mockdata"
import { Box } from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react"
const Home: NextPage = () => {
  return (
    <>
      <Box w="100%">
        {properties.map((property) => (
          <PropertyCard property={property} />
        ))}
      </Box>
    </>
  )
}

export default Home
