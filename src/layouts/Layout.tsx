import NavFooter from "@/components/NavFooter"
import Footer from "@/components/NavFooter"
import { Box, Container } from "@chakra-ui/react"
import { ReactElement, memo, useEffect, useState } from "react"

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = memo(({ children }: LayoutProps) => {
  return (
    <>
      <Container maxW="440px" h="100%" p={0} bgColor="#000000">
        <Box w="100%" h="100%" mb="74px">
          {children}
        </Box>
        <NavFooter />
      </Container>
    </>
  )
})

export default Layout
