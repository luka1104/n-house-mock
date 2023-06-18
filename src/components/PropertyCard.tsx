import { Box, Link } from "@chakra-ui/react"
import React from "react"

type Props = {
  image: string
  title: string
  description: string
  label: string
  href: string
}

const PropertyCard: React.FC<Props> = ({ image, title, description, label, href }) => {
  return (
    <>
      <Link href={href}>
        <Box w="100%" maxW="440px" borderRadius="16px" bgImage={image}></Box>
      </Link>
    </>
  )
}

export default PropertyCard
