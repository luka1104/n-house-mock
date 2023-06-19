import PropertyReservationCard from "@/components/PropertyReservationCard"
import { properties } from "@/data/mockdata"
import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react"

const House: NextPage = () => {
  const property = properties[0]
  return (
    <>
      <PropertyReservationCard property={property} />
    </>
  )
}

export default House
