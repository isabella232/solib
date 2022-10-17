import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { init, mainnetBetaWalletConnect, PhantomConnector, WalletConnectConnector } from 'solib'
import { ColorModeProvider, ChakraProvider } from '@chakra-ui/react'

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID!

console.log({ PROJECT_ID })

init({
  connectorName: WalletConnectConnector.connectorName,
  connectors: [
    new PhantomConnector(),
    new WalletConnectConnector({
      projectId: PROJECT_ID,
      relayerRegion: 'wss://relay.walletconnect.com',
      metadata: {
        description: 'Test app for solib',
        name: 'Test Solib dApp',
        icons: ['https://avatars.githubusercontent.com/u/37784886'],
        url: 'http://localhost:3000'
      },
      autoconnect: true,
      qrcode: true
    })
  ],
  chosenCluster: mainnetBetaWalletConnect(PROJECT_ID)
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
