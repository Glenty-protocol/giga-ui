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
    pid: 1,
    risk: 5,
    lpSymbol: 'GLENTY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xfcdf033e55ca6a62300337d88da1810933a54f82',
    },
    tokenSymbol: 'GLENTY',
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
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x746c3c8c107e7a9f2930f46d860e9001cabf9706',
    },
    tokenSymbol: 'BNB',
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
    lpSymbol: 'GLENTY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7a5d6a465950b7631a975cf4b9581e96dadbbffe',
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
    pid: 0,
    risk: 5,
    isTokenOnly: true,
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
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
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
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ADA',
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
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'USDc',
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
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'vXRP',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'vXRP',
    tokenAddresses: {
      97: '',
      56: '0xb248a295732e0225acd3337607cc01068e3b9c10',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DOGE',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DOT',
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
    pid: 11,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'UNI',
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
    pid: 14,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BCH',
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
    pid: 15,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LTC',
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
    pid: 16,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LINK',
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
    pid: 17,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'vDAI',
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
    pid: 18,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ETC',
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
    pid: 19,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'POLYGON',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'POLYGON',
    tokenAddresses: {
      97: '',
      56: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'TRX',
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
    pid: 21,
    risk: 5,
    isTokenOnly: true,
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
    pid: 22,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CHS',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'CHS',
    tokenAddresses: {
      97: '',
      56: '0xadd8a06fd58761a5047426e160b2b88ad3b9d464',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 24,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ATOM',
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
    pid: 25,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'XTZ',
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
    pid: 26,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'COMP',
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
    pid: 27,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'IOTA',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'IOTA',
    tokenAddresses: {
      97: '',
      56: '0xd944f1d1e9d5f9bb90b62f9d45e447d989580782',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 28,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'AVAX',
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
    pid: 29,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BTT',
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
    pid: 30,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ZEC',
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
    pid: 31,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'AXS',
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
    pid: 33,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'YFI',
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
    pid: 32,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SNX',
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
    pid: 34,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PAX',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'PAX',
    tokenAddresses: {
      97: '',
      56: '0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 36,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BAT',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'BAT',
    tokenAddresses: {
      97: '',
      56: '0x101d82428437127bf1608f699cd651e6abf9766e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 35,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'NEAR',
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
    pid: 37,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ZIL',
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
    pid: 38,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ONT',
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
    pid: 39,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xdb4a77674610934775fce8eb5d95a614db021b13', // GLENTY-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 23,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd6B0eDc79b11D6F3eAAA6bFbdBF4E50790c6864E', // GLENTY-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 24,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 25,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 26,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 27,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 28,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 29,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 30,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 31,
  //   risk: 4,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 32,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BSCX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // }
]

export default farms
