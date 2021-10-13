import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 0,
  //   risk: 5,
  //   lpSymbol: 'GLENTY-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd6b0edc79b11d6f3eaaa6bfbdbf4e50790c6864e',
  //   },
  //   tokenSymbol: 'GLENTY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x27162118C8690E30B584EC759E1Aa52AfDab4488',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    category: 'glenty',
    img:'./images/gigapoolIcons/Fichier 1.svg',
    lpSymbol: 'GLENTY',
    lpAddresses: {
      97: '',
      56: '0x7a5d6a465950b7631a975cf4b9581e96dadbbffe', // GLENTY-BUSD LP
    },
    tokenSymbol: 'GLENTY',
    tokenAddresses: {
      97: '',
      56: '0x97769506e36988d08745b64e78f66e37858f14e9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    isTokenOnly: true,
    category: 'glenty',
    img:'./images/gigapoolIcons/TOP100_logo.svg',
    lpSymbol: 'Top100',
    lpAddresses: {
      97: '',
      56: '0xfcdf033e55ca6a62300337d88da1810933a54f82',
    },
    tokenSymbol: 'Top 100',
    tokenAddresses: {
      97: '',
      56: '0x97769506e36988d08745b64e78f66e37858f14e9',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    isTokenOnly: true,
    category: 'gigapool',
    lpSymbol: 'Bitcoin',
    img:'./images/gigapoolIcons/bitcoin-btc-logo.svg',
    lpAddresses: {
      97: '',
      56: '0x746c3c8c107e7a9f2930f46d860e9001cabf9706',
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/ethereum-eth-logo.svg',
    lpSymbol: 'Ethereum',
    lpAddresses: {
      97: '',
      56: '0x7a5d6a465950b7631a975cf4b9581e96dadbbffe',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    lpSymbol: 'cardano',
    img:'./images/gigapoolIcons/cardano-ada-logo.svg',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x81c15d3e956e55e77e1f3f257f0a65bd2725fc55',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    lpSymbol: 'Tether',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'Tether',
    img:'./images/gigapoolIcons/tether-usdt-logo.svg',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    lpSymbol: 'Binance Coin',
    img:'./images/gigapoolIcons/binance-coin-bnb-logo.svg',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/xrp-xrp-logo.svg',
    lpSymbol:'Venus XRP',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'VXRP',
    tokenAddresses: {
      97: '',
      56: '0xb248a295732e0225acd3337607cc01068e3b9c10',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/solana-sol-logo.svg',
    lpSymbol: 'Solana',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SOL',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    lpSymbol: 'USD Coin',
    img:'./images/gigapoolIcons/usd-coin-usdc-logo.svg',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/polkadot-new-dot-logo.svg',
    lpSymbol: 'Polkadot',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Doge Coin',
    category: 'gigapool',
    img:'./images/gigapoolIcons/dogecoin-doge-logo.svg',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'Doge',
    tokenAddresses: {
      97: '',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 33,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/terra-luna-luna-logo.svg',
    lpSymbol: 'Terra',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'LUNA',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 48,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/avalanche-avax-logo.svg',
    lpSymbol: 'Avalanche',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'AVAX',
    tokenAddresses: {
      97: '',
      56: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/uniswap-uni-logo.svg',
    lpSymbol: 'Uniswap',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/binance-usd-busd-logo.svg',
    lpSymbol: 'Binance USD',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/chainlink-link-logo.svg',
    lpSymbol: 'Chainlink',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 36,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/algorand-algo-logo.svg',
    lpSymbol: 'Algorand',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ALGO',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/litecoin-ltc-logo.svg',
    lpSymbol: 'Litecoin',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'LTC',
    tokenAddresses: {
      97: '',
      56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/bitcoin-cash-bch-logo.svg',
    lpSymbol: 'Bitcoin Cash',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BCH',
    tokenAddresses: {
      97: '',
      56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 17,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/wrapped-bitcoin-wbtc-logo.svg',
    lpSymbol: 'Wrapped Bitcoin',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/XVS.png',
    lpSymbol: 'Venus DAI',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'vDAI',
    tokenAddresses: {
      97: '',
      56: '0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 42,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/cosmos-atom-logo.svg',
    lpSymbol: 'Cosmos',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ATOM',
    tokenAddresses: {
      97: '',
      56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/polygon-matic-logo.svg',
    lpSymbol: 'Polygon',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/internet-computer-icp-logo.svg',
    lpSymbol: 'Internet Computer',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ICP',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 25,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/filecoin-fil-logo.svg',
    lpSymbol: 'File Coin',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'FIL',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 123,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/multi-collateral-dai-dai-logo.svg',
    lpSymbol: 'Dai',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/stellar-xlm-logo.svg',
    lpSymbol: 'Stellar',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XLM',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 37,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/ftx-token-ftt-logo.svg',
    lpSymbol: 'Ftx token',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'FTT',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 27,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/tron-trx-logo.svg',
    lpSymbol: 'Tron',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'TRX',
    tokenAddresses: {
      97: '',
      56: '0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/ethereum-classic-etc-logo.svg',
    lpSymbol: 'Ethereum Classic',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ETC',
    tokenAddresses: {
      97: '',
      56: '0x3d6545b08693dae087e957cb1180ee38b9e3c25e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 26,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/vechain-vet-logo.svg',
    lpSymbol: 'VeChain',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'VET',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 45,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/tezos-xtz-logo.svg',
    lpSymbol: 'Tezos',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XTZ',
    tokenAddresses: {
      97: '',
      56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 24,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/theta-theta-logo.svg',
    lpSymbol: 'THETA',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'THETA',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/bitcoin-btc-logo.svg',
    lpSymbol: 'Bitcoin BEP2',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 124,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/download.jpg',
    lpSymbol: 'eCash',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XEC',
    tokenAddresses: {
      97: '',
      56: '0x0ef2e7602add1733bfdb17ac3094d0421b502ca3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 28,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/monero-xmr-logo.svg',
    lpSymbol: 'Monero',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XMR',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 57,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/elrond-egld-egld-logo.svg',
    lpSymbol: 'Elrond',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'EGLD',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 35,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/pancakeswap-cake-logo.svg',
    lpSymbol: 'Pancakeswap',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'Cake',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 32,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/crypto-com-mco-logo.svg',
    lpSymbol: 'Crypto.com',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MCO',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 66,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/axie-sold.png',
    lpSymbol: 'Axie Infinity',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'AXS',
    tokenAddresses: {
      97: '',
      56: '0x715d400f88c167884bbcc41c5fea407ed4d2f8a0',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
  {
    pid: 29,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/eos-eos-logo.svg',
    lpSymbol: 'EOS',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'EOS',
    tokenAddresses: {
      97: '',
      56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 30,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/aave-aave-logo.svg',
    lpSymbol: 'Aave',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 77,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/quant-qnt-logo.svg',
    lpSymbol: 'Quant',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'QNT',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 50,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/hedera-hashgraph-hbar-logo.svg',
    lpSymbol: 'Hedera Hashgraph',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'HBAR',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 82,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/near-protocol-near-logo.svg',
    lpSymbol: 'Near Protocol',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'NEAR',
    tokenAddresses: {
      97: '',
      56: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 125,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/fantom-ftm-logo.svg',
    lpSymbol: 'Fantom',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'FTM',
    tokenAddresses: {
      97: '',
      56: '0xad29abb318791d579433d831ed122afeaf29dcfe',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 47,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/iota-miota-logo.svg',
    lpSymbol: 'Iota',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MIOTA',
    tokenAddresses: {
      97: '',
      56: '0xd944f1d1e9d5f9bb90b62f9d45e447d989580782',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 51,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/the-graph-grt-logo.svg',
    lpSymbol: 'The graph',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'GRT',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 34,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/shiba-inu-shib-logo.svg',
    lpSymbol: 'SHIP INU',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SHIP',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 54,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/kusama-ksm-logo.svg',
    lpSymbol: 'Kusama',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'KSM',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 39,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/klaytn-klay-logo.svg',
    lpSymbol: 'Klaytn',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'KLAY',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 44,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/neo-neo-logo.svg',
    lpSymbol: 'NEO',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'NEO',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 43,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/UST2.png',
    lpSymbol: 'TerraUSD',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'UST',
    tokenAddresses: {
      97: '',
      56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 31,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/unus-sed-leo-leo-logo.svg',
    lpSymbol: 'UNUS SED LEO',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'LEO',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 56,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/waves-waves-logo.svg',
    lpSymbol: 'Waves',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'WAVES',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 41,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/bitcoin-sv-bsv-logo.svg',
    lpSymbol: 'Bitcoin SV',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BSV',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 126,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/maker-mkr-logo.svg',
    lpSymbol: 'Maker',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MKR',
    tokenAddresses: {
      97: '',
      56: '0x5f0da599bb2cccfcf6fdfd7d81743b6020864350',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 55,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/bittorrent-btt-logo.svg',
    lpSymbol: 'Bittorent',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BTT',
    tokenAddresses: {
      97: '',
      56: '0x8595f9da7b868b1822194faed312235e43007b49',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 91,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/celo-celo-logo.svg',
    lpSymbol: 'CELO',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CELO',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 46,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/compound-comp-logo.svg',
    lpSymbol: 'Compound',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'COMP',
    tokenAddresses: {
      97: '',
      56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 49,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/amp-amp-logo.svg',
    lpSymbol: 'Amp',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'AMP',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 71,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/helium-hnt-logo.svg',
    lpSymbol: 'Helium',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'HNT',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 70,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/xdc-icon.svg',
    lpSymbol: 'XinFin Network',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XDC',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 88,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/harmony-one-logo.svg',
    lpSymbol: 'Harmony',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ONE',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 52,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/dash-dash-logo.svg',
    lpSymbol: 'Dash',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'DASH',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 74,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/thorchain-rune-logo.svg',
    lpSymbol: 'Thorchain',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'RUNE',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 59,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/Chiliz.png',
    lpSymbol: 'Chiliz',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CHZ',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 65,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/stacks-stx-logo.svg',
    lpSymbol: 'Stacks',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'STX',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 61,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/trueusd-tusd-logo.svg',
    lpSymbol: 'True USD',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'TUSD',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 60,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/decred-dcr-logo.svg',
    lpSymbol: '',
    lpAddresses: {
      97: 'Decred',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'DCR',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 53,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/theta-fuel-tfuel-logo.svg',
    lpSymbol: 'Theta Fuel',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'TFUEL',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 128,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/arweave-ar-logo.svg',
    lpSymbol: 'Arweave',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'AR',
    tokenAddresses: {
      97: '',
      56: '0xa142182D9Be18F300F42cca82660d274EED5eBBa',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 90,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/revain-rev-logo.svg',
    lpSymbol: 'Revain',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'REV',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 76,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/holo-hot-logo.svg',
    lpSymbol: 'Holo',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'HOT',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 64,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/zcash-zec-logo.svg',
    lpSymbol: 'ZCash',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ZEC',
    tokenAddresses: {
      97: '',
      56: '0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 75,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/sushiswap-sushi-logo.svg',
    lpSymbol: 'Sushiswap',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 63,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/nem-xem-logo.svg',
    lpSymbol: 'Nem',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XEM',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1291,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/omg-omg-logo.svg',
    lpSymbol: 'OMG Network',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'OMG',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 58,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/huobi-token-ht-logo.svg',
    lpSymbol: 'Huobi Token',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'HT',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 68,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/decentraland-mana-logo.svg',
    lpSymbol: 'Decentraland',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MANA',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 62,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/celsius-cel-logo.svg',
    lpSymbol: 'Celsius',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CEL',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 69,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/synthetix-network-token-snx-logo.svg',
    lpSymbol: 'Synthetix Network',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SNX',
    tokenAddresses: {
      97: '',
      56: '0x9ac983826058b8a9c7aa1c9171441191232e8404',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 67,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/yearn-finance-yfi-logo.svg',
    lpSymbol: 'Yearn Finance',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'YFI',
    tokenAddresses: {
      97: '',
      56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 129,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/ren-ren-logo.svg',
    lpSymbol: 'Ren',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'REN',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 72,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/enjin-coin-enj-logo.svg',
    lpSymbol: 'Enjin Coin',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: '',
    tokenAddresses: {
      97: 'ENJ',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 130,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/60c86af9254af11894ff971b_export.png',
    lpSymbol: 'Perpetual Protocol',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: '',
    tokenAddresses: {
      97: 'PERP',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 98,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/curve-dao-token-crv-logo.svg',
    lpSymbol: 'Curve Dao',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CRV',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 133,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/logo.png',
    lpSymbol: 'Mina',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MINA',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 134,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/icon-icx-logo.svg',
    lpSymbol: 'ICON',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ICX',
    tokenAddresses: {
      97: '',
      56: '0x587c3de49bfb8bcf3ea56b0e45eed6d5620c6044',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 135,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/iostoken-iost-logo.svg',
    lpSymbol: 'IOST',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'IOST',
    tokenAddresses: {
      97: '',
      56: '0x519663c084e760a6af43549897219f539c902532',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 136,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/serum-srm-logo.svg',
    lpSymbol: 'Serum',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SRM',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 83,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/flow-flow-logo.svg',
    lpSymbol: 'Flow',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'FLOW',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 137,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/1_6u6SfjGCCZmKs69C83N-mw.png',
    lpSymbol: 'Celer Network',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CELR',
    tokenAddresses: {
      97: '',
      56: '0x1f9f6a696c6fd109cd3956f45dc709d2b3902163',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 84,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/zilliqa-zil-logo.svg',
    lpSymbol: 'Zilliqa',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ZIL',
    tokenAddresses: {
      97: '',
      56: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 102,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/ravencoin-rvn-logo.svg',
    lpSymbol: 'Rave Coin',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'RVN',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 138,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/Pax_Dollar.png',
    lpSymbol: 'Pax Dollar',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'USDP',
    tokenAddresses: {
      97: '',
      56: '0xb3c11196a4f3b1da7c23d9fb0a3dde9c6340934f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 95,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/qtum-qtum-logo.svg',
    lpSymbol: 'Qtum',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'QTUM',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 85,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/bitcoin-gold-btg-logo.svg',
    lpSymbol: 'Bitcoin Gold',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BTG',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 89,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/okb-okb-logo.svg',
    lpSymbol: 'OKB',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'OKB',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 86,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/telcoin-tel-logo.svg',
    lpSymbol: 'Tel coin',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'TEL',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 80,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/kucoin-token-kcs-logo.svg',
    lpSymbol: 'Kucoin Token',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'KCS',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 140,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/AudiusCoinLogo_2x.png',
    lpSymbol: 'Audius',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'AUDIO',
    tokenAddresses: {
      97: '',
      56: '0xb4e2da2116412bb287d014424a9e92c1475fe6fa',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 78,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/nexo-nexo-logo.svg',
    lpSymbol: 'NEXO',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'NEXO',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 79,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/mandala.png',
    lpSymbol: 'Mandala Exchange',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MDEX',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 87,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/bancor-bnt-logo.svg',
    lpSymbol: 'Bancor',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BNT',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 106,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/horizon.png',
    lpSymbol: 'Horizen',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ZEN',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 101,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/0x-zrx-logo.svg',
    lpSymbol: '0x',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ZRX',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 110,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/wbtc.png',
    lpSymbol: 'renBTC',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'RENBTC',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 97,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/siacoin-sc-logo.svg',
    lpSymbol: 'Siacoin',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SC',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 109,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/images.jpg',
    lpSymbol: 'Raydium',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'RAY',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 93,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/ontology-ont-logo.svg',
    lpSymbol: 'Ontology',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ONT',
    tokenAddresses: {
      97: '',
      56: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 94,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/digibyte-dgb-logo.svg',
    lpSymbol: 'Digibyte',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'DGB',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 114,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/Voyager-vgx.png',
    lpSymbol: 'Voyager Token',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'VGX',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 99,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/swissborg.svg',
    lpSymbol: 'Swissborg',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CHSB',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 116,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/ankr-ankr-logo.svg',
    lpSymbol: 'Ankr',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ANKR',
    tokenAddresses: {
      97: '',
      56: '0xf307910a4c7bbc79691fd374889b36d8531b08e3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 117,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/iotex-iotx-logo.svg',
    lpSymbol: 'IoTeX',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'IOTX',
    tokenAddresses: {
      97: '',
      56: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/uma-uma-logo.svg',
    lpSymbol: 'UMA',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'UMA',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 118,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/fetch-fet-logo.svg',
    lpSymbol: 'Fetch.ai',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'FET',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 119,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/nano-nano-logo.svg',
    lpSymbol: 'Nano',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'NANO',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 121,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/the-sandbox-sand-logo.svg',
    lpSymbol: 'The Sandbox',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SAND',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 122,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/kava-kava-logo.svg',
    lpSymbol: 'Kava',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'KAVA',
    tokenAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
