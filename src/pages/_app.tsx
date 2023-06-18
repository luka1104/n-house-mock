import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@/layouts/Layout"
import { styles } from "@/themes"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={styles}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
