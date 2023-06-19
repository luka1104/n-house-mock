import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@/layouts/Layout"
import { PrivyProvider } from "@privy-io/react-auth"
import { useRouter } from "next/router"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <PrivyProvider
        createPrivyWalletOnLogin
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
        config={{
          appearance: {
            // This configures your login modal to show wallet login options above other options.
            showWalletLoginFirst: false,
          },
          // This configures wallet, email, Google, and Twitter login for your app.
          loginMethods: ["wallet", "email", "google", "apple"],
        }}
        onSuccess={() => {
          router.pathname === "/property/[propertyId]" && router.push("/house?propertyId=1")
        }}
      >
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </PrivyProvider>
    </LocalizationProvider>
  )
}
