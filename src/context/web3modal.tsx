'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = 'baf8428698c7cddf0e212bcff8ffabdf'

// 2. Set chains
const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
}
const eduChain = {
    chainId: 656476,
    name: 'Arbitrum Sepolia 421614',
    currency: 'EDU',
    explorerUrl: 'https://opencampus-codex.blockscout.com',
    rpcUrl: 'https://rpc.open-campus-codex.gelato.digital'

}

// 3. Create a metadata object
const metadata = {
    name: 'mento',
    description: 'mento platform',
    url: 'https://mywebsite.co', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}
// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: '...', // used for the Coinbase SDK
    defaultChainId: 1 // used for the Coinbase SDK
})

// 5. Create a AppKit instance
createWeb3Modal({
    ethersConfig,
    chains: [eduChain],
    projectId,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export function AppKit({ children }: Readonly<{ children: React.ReactNode }>) {
    return children
}