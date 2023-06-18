import { Box, Container } from "@chakra-ui/react"
import { ReactElement, memo, useEffect, useState } from "react"

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = memo(({ children }: LayoutProps) => {
  return (
    <>
      <Container maxW="400px" h="100vh" p={0}>
        <Box w="100%" h="100%">
          {children}
        </Box>
      </Container>
    </>
  )
})

export default Layout