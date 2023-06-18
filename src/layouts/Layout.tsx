import NavFooter from "@/components/NavFooter"
import { Box, Container } from "@chakra-ui/react"
import { ReactElement, memo, useEffect, useState } from "react"
import { useRouter } from "next/router"

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = memo(({ children }: LayoutProps) => {
  const router = useRouter()
  const hideFooter = router.pathname === "/"
  return (
    <>
      <Container maxW="440px" h="100%" minH="100vh" p={0} bgColor="#000000">
        <Box w="100%" h="100%">
          {children}
        </Box>
        {hideFooter ? null : <NavFooter />}
      </Container>
    </>
  )
})

export default Layout
