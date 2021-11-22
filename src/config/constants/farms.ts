/* eslint-disable */
import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
/* {
  pid: 41,
  id:410,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'GLENTY-BUSD LP',
  lpAddresses: {
    97: '',
    56: '0x7a5d6a465950b7631a975cf4b9581e96dadbbffe',
  },
  tokenSymbol: 'GLENTY',
  tokenAddresses: {
    97: '',
    56: '0x97769506e36988D08745b64E78F66E37858f14E9',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
}, */
  {
    pid: 1,
    id: 1,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'GLENTY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xfcdf033e55ca6a62300337d88da1810933a54f82',
    },
    tokenSymbol: 'GLENTY',
    tokenAddresses: {
      97: '',
      56: '0x97769506e36988D08745b64E78F66E37858f14E9',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    id: 2,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x746c3c8c107e7a9f2930f46d860e9001cabf9706',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    /// new ones ///
  { //!
    pid: 0,
    id: 0,
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
      56: '0x97769506e36988D08745b64E78F66E37858f14E9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  /*{
    pid: 3,
    id:1010,
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
  },*/
  {//!
    pid: 4,
    id: 4,
    risk: 3,
    isTokenOnly: true,
    category: 'gigapool',
    lpSymbol: 'Bitcoin',
    img:'./images/gigapoolIcons/bitcoin-btc-logo.svg',
    lpAddresses: {
      97: '',
      56: '0xa80c24d8543746005caa86ffbe927b833391df44',
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {//
    pid: 5,
    id: 5,
    risk: 3,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/ethereum-eth-logo.svg',
    lpSymbol: 'Ethereum',
    lpAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {//
    pid: 6,
    id: 6,
    risk: 3,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/binance-coin-bnb-logo.svg',
    lpSymbol: 'Binance Coin',
    lpAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {//
    pid: 7,
    id: 7,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    lpSymbol: 'cardano',
    img:'./images/gigapoolIcons/cardano-ada-logo.svg',
    lpAddresses: {
      97: '',
      56: '0x81c15d3e956e55e77e1f3f257f0a65bd2725fc55', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x81c15d3e956e55e77e1f3f257f0a65bd2725fc55',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
/* {
  pid: 14,
  id:1411,
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
}, */

  {//
    pid: 8,
    id: 8,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    lpSymbol: 'USD Coin',
    img:'./images/gigapoolIcons/usd-coin-usdc-logo.svg',
    lpAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // GLENTY-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
   {//
    pid: 9,
    id: 9,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/xrp-xrp-logo.svg',
    lpSymbol:'Venus XRP',
    lpAddresses: {
      97: '',
      56: '0xb248a295732e0225acd3337607cc01068e3b9c10', // GLENTY-BUSD LP
    },
    tokenSymbol: 'VXRP',
    tokenAddresses: {
      97: '',
      56: '0xb248a295732e0225acd3337607cc01068e3b9c10',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {//
    pid: 10,
    id: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Doge Coin',
    category: 'gigapool',
    img:'./images/gigapoolIcons/dogecoin-doge-logo.svg',
    lpAddresses: {
      97: '',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43', // GLENTY-BUSD LP
    },
    tokenSymbol: 'Doge',
    tokenAddresses: {
      97: '',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {//
      pid: 12,
      id: 12,
      risk: 5,
      isTokenOnly: true,
      category: 'gigapool',
      img:'./images/gigapoolIcons/polkadot-new-dot-logo.svg',
      lpSymbol: 'Polkadot',
      lpAddresses: {
        97: '',
        56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', // GLENTY-BUSD LP
      },
      tokenSymbol: 'DOT',
      tokenAddresses: {
        97: '',
        56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      },
      quoteTokenSymbol: QuoteToken.BUSD,
      quoteTokenAdresses: contracts.busd,
    },
   {//
    pid: 13,
    id: 13,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/uniswap-uni-logo.svg',
    lpSymbol: 'Uniswap',
    lpAddresses: {
      97: '',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1', // GLENTY-BUSD LP
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {//
      pid: 14,
      id: 14,
      risk: 5,
      isTokenOnly: true,
      category: 'gigapool',
      img:'./images/gigapoolIcons/bitcoin-cash-bch-logo.svg',
      lpSymbol: 'Bitcoin Cash',
      lpAddresses: {
        97: '',
        56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf', // GLENTY-BUSD LP
      },
      tokenSymbol: 'BCH',
      tokenAddresses: {
        97: '',
        56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
      },
      quoteTokenSymbol: QuoteToken.BUSD,
      quoteTokenAdresses: contracts.busd,
    }, 
  {//
    pid: 16,
    id: 16,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/chainlink-link-logo.svg',
    lpSymbol: 'Chainlink',
    lpAddresses: {
      97: '',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd', // GLENTY-BUSD LP
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
/* {
  pid: 19,
  id:190,
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
}, */
  {//
    pid: 20,
    id: 20,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/tron-trx-logo.svg',
    lpSymbol: 'Tron',
    lpAddresses: {
      97: '',
      56: '0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B', // GLENTY-BUSD LP
    },
    tokenSymbol: 'TRX',
    tokenAddresses: {
      97: '',
      56: '0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
/* {
  pid: 20,
  id:201,
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
}, */

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////
       ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
         ////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////
           ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    pid: 40,
    id: 40,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/solana-sol-logo.svg',
    lpSymbol: 'Solana',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SOL',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 41,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    lpSymbol: 'Tether',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'Tether',
    img:'./images/gigapoolIcons/tether-usdt-logo.svg',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 42,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/terra-luna-luna-logo.svg',
    lpSymbol: 'Terra',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'LUNA',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
  {
    pid: 40,
    id: 43,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/binance-usd-busd-logo.svg',
    lpSymbol: 'Binance USD',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 44,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/algorand-algo-logo.svg',
    lpSymbol: 'Algorand',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ALGO',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 45,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/wrapped-bitcoin-wbtc-logo.svg',
    lpSymbol: 'Wrapped Bitcoin',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 46,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/polygon-matic-logo.svg',
    lpSymbol: 'Polygon',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 47,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/internet-computer-icp-logo.svg',
    lpSymbol: 'Internet Computer',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ICP',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 48,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/filecoin-fil-logo.svg',
    lpSymbol: 'File Coin',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'FIL',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 49,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/stellar-xlm-logo.svg',
    lpSymbol: 'Stellar',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XLM',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 50,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/ftx-token-ftt-logo.svg',
    lpSymbol: 'Ftx token',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'FTT',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 51,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/vechain-vet-logo.svg',
    lpSymbol: 'VeChain',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'VET',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 52,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/theta-theta-logo.svg',
    lpSymbol: 'THETA',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'THETA',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 53,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/bitcoin-btc-logo.svg',
    lpSymbol: 'Bitcoin BEP2',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
  {
    pid: 40,
    id: 54,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/monero-xmr-logo.svg',
    lpSymbol: 'Monero',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XMR',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 55,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/elrond-egld-egld-logo.svg',
    lpSymbol: 'Elrond',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'EGLD',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 56,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/crypto-com-mco-logo.svg',
    lpSymbol: 'Crypto.com',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MCO',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 57,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/aave-aave-logo.svg',
    lpSymbol: 'Aave',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 58,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/quant-qnt-logo.svg',
    lpSymbol: 'Quant',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'QNT',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 59,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/hedera-hashgraph-hbar-logo.svg',
    lpSymbol: 'Hedera Hashgraph',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'HBAR',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 60,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/the-graph-grt-logo.svg',
    lpSymbol: 'The graph',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'GRT',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 61,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/shiba-inu-shib-logo.svg',
    lpSymbol: 'SHIP INU',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SHIP',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 62,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/kusama-ksm-logo.svg',
    lpSymbol: 'Kusama',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'KSM',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 63,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/klaytn-klay-logo.svg',
    lpSymbol: 'Klaytn',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'KLAY',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 64,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/neo-neo-logo.svg',
    lpSymbol: 'NEO',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'NEO',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 65,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/unus-sed-leo-leo-logo.svg',
    lpSymbol: 'UNUS SED LEO',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'LEO',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 66,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/waves-waves-logo.svg',
    lpSymbol: 'Waves',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'WAVES',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 67,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/bitcoin-sv-bsv-logo.svg',
    lpSymbol: 'Bitcoin SV',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BSV',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 68,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/celo-celo-logo.svg',
    lpSymbol: 'CELO',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CELO',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 69,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/amp-amp-logo.svg',
    lpSymbol: 'Amp',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'AMP',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 70,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/helium-hnt-logo.svg',
    lpSymbol: 'Helium',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'HNT',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 71,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/xdc-icon.svg',
    lpSymbol: 'XinFin Network',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XDC',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 72,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/harmony-one-logo.svg',
    lpSymbol: 'Harmony',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ONE',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 73,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/dash-dash-logo.svg',
    lpSymbol: 'Dash',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'DASH',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 74,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/thorchain-rune-logo.svg',
    lpSymbol: 'Thorchain',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'RUNE',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 75,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/Chiliz.png',
    lpSymbol: 'Chiliz',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CHZ',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 76,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/stacks-stx-logo.svg',
    lpSymbol: 'Stacks',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'STX',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 77,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/trueusd-tusd-logo.svg',
    lpSymbol: 'True USD',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'TUSD',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 78,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/decred-dcr-logo.svg',
    lpSymbol: 'Decred',
    lpAddresses: {
      97: 'Decred',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'DCR',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 79,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/theta-fuel-tfuel-logo.svg',
    lpSymbol: 'Theta Fuel',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'TFUEL',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 80,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/revain-rev-logo.svg',
    lpSymbol: 'Revain',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'REV',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 81,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/holo-hot-logo.svg',
    lpSymbol: 'Holo',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'HOT',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 82,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/sushiswap-sushi-logo.svg',
    lpSymbol: 'Sushiswap',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 83,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/nem-xem-logo.svg',
    lpSymbol: 'Nem',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'XEM',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 84,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/omg-omg-logo.svg',
    lpSymbol: 'OMG Network',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'OMG',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 85,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/huobi-token-ht-logo.svg',
    lpSymbol: 'Huobi Token',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'HT',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 86,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/decentraland-mana-logo.svg',
    lpSymbol: 'Decentraland',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MANA',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 87,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/celsius-cel-logo.svg',
    lpSymbol: 'Celsius',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CEL',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 88,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/ren-ren-logo.svg',
    lpSymbol: 'Ren',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'REN',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 40,
    id: 89,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/curve-dao-token-crv-logo.svg',
    lpSymbol: 'Curve Dao',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CRV',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 90,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/logo.png',
    lpSymbol: 'Mina',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MINA',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 40,
    id: 91,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/serum-srm-logo.svg',
    lpSymbol: 'Serum',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SRM',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 92,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/flow-flow-logo.svg',
    lpSymbol: 'Flow',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'FLOW',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 40,
    id: 93,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/ravencoin-rvn-logo.svg',
    lpSymbol: 'Rave Coin',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'RVN',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
  {
    pid: 40,
    id: 94,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/qtum-qtum-logo.svg',
    lpSymbol: 'Qtum',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'QTUM',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 95,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/bitcoin-gold-btg-logo.svg',
    lpSymbol: 'Bitcoin Gold',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BTG',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 96,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/okb-okb-logo.svg',
    lpSymbol: 'OKB',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'OKB',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 97,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/telcoin-tel-logo.svg',
    lpSymbol: 'Tel coin',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'TEL',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 98,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/kucoin-token-kcs-logo.svg',
    lpSymbol: 'Kucoin Token',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'KCS',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 99,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/nexo-nexo-logo.svg',
    lpSymbol: 'NEXO',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'NEXO',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 100,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/mandala.png',
    lpSymbol: 'Mandala Exchange',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MDEX',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 101,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/bancor-bnt-logo.svg',
    lpSymbol: 'Bancor',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BNT',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 102,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/horizon.png',
    lpSymbol: 'Horizen',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ZEN',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 103,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/0x-zrx-logo.svg',
    lpSymbol: '0x',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'ZRX',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 104,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/wbtc.png',
    lpSymbol: 'renBTC',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'RENBTC',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 105,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/siacoin-sc-logo.svg',
    lpSymbol: 'Siacoin',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SC',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 106,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/images.jpg',
    lpSymbol: 'Raydium',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'RAY',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
  {
    pid: 40,
    id: 107,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/digibyte-dgb-logo.svg',
    lpSymbol: 'Digibyte',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'DGB',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 108,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/Voyager-vgx.png',
    lpSymbol: 'Voyager Token',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'VGX',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 109,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/swissborg.svg',
    lpSymbol: 'Swissborg',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CHSB',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 40,
    id: 110,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/uma-uma-logo.svg',
    lpSymbol: 'UMA',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'UMA',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 111,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/fetch-fet-logo.svg',
    lpSymbol: 'Fetch.ai',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'FET',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 112,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/nano-nano-logo.svg',
    lpSymbol: 'Nano',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'NANO',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 113,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/the-sandbox-sand-logo.svg',
    lpSymbol: 'The Sandbox',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'SAND',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    id: 114,
    risk: 5,
    isTokenOnly: true,
    category: 'outsiders',
    img:'./images/gigapoolIcons/kava-kava-logo.svg',
    lpSymbol: 'Kava',
    lpAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce', // GLENTY-BUSD LP
    },
    tokenSymbol: 'KAVA',
    tokenAddresses: {
      97: '',
      56: '0x9860d0fe88eb83cecca80843ec57fcc361f674ce',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////
       ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
         ////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////
           ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* {
  pid: 48,
  id:480,
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
  pid: 42,
  id:420,
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
  pid: 123,
  id:1230,
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
  pid: 45,
  id:450,
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
  pid: 124,
  id:1240,
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
  pid: 35,
  id:350,
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
  pid: 66,
  id:660,
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
  id:290,
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
  pid: 82,
  id:820,
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
  id:1250,
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
}, */
  {//
    pid: 27,
    id: 27,
    risk: 5,
    isTokenOnly: true,
    category: 'gigapool',
    img:'./images/gigapoolIcons/iota-miota-logo.svg',
    lpSymbol: 'Iota',
    lpAddresses: {
      97: '',
      56: '0xd944f1d1e9d5f9bb90b62f9d45e447d989580782', // GLENTY-BUSD LP
    },
    tokenSymbol: 'MIOTA',
    tokenAddresses: {
      97: '',
      56: '0xd944f1d1e9d5f9bb90b62f9d45e447d989580782',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

/* {
  pid: 43,
  id:430,
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
  pid: 126,
  id:1260,
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
  id:550,
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
  pid: 46,
  id:460,
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
  pid: 128,
  id:1280,
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
  pid: 64,
  id:640,
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
  pid: 69,
  id:690,
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
  id:670,
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
  pid: 72,
  id:720,
  risk: 5,
  isTokenOnly: true,
  category: 'gigapool',
  img:'./images/gigapoolIcons/enjin-coin-enj-logo.svg',
  lpSymbol: 'Enjin Coin',
  lpAddresses: {
    97: '',
    56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
  },
  tokenSymbol: 'ENJ',
  tokenAddresses: {
    97: '',
    56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 130,
  id:1300,
  risk: 5,
  isTokenOnly: true,
  category: 'gigapool',
  img:'./images/gigapoolIcons/60c86af9254af11894ff971b_export.png',
  lpSymbol: 'Perpetual Protocol',
  lpAddresses: {
    97: '',
    56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
  },
  tokenSymbol: 'PERP',
  tokenAddresses: {
    97: '',
    56: '0xdb4a77674610934775fce8eb5d95a614db021b13',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 134,
  id:1340,
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
  id:1350,
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
  pid: 137,
  id:1370,
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
  id:840,
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
  pid: 138,
  id:1380,
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
  pid: 140,
  id:1400,
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
  pid: 93,
  id:930,
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
  pid: 116,
  id:1160,
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
  id:1170,
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
}, */
]

export default farms
