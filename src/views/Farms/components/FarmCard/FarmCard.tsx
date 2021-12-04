import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton,Tag } from '@pancakeswap-libs/uikit'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import useI18n from 'hooks/useI18n'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { QuoteToken } from 'config/constants/types'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
  padding:0px 24px;
`
const MultiplierTag = styled(Tag)`
  margin-left: 4px;
  background: white;
  color:black;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  bnbPrice?: BigNumber
  ethereum?: provider
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice, bnbPrice, ethereum, account }) => {
  const TranslateString = useI18n()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  // const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  // const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()
  const farmImage = farm.img

  const totalValue: BigNumber = useMemo(() => {
    if (!farm.lpTotalInQuoteToken) {
      return null
    }
    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
      return cakePrice.times(farm.lpTotalInQuoteToken)
    }
    return farm.lpTotalInQuoteToken
  }, [bnbPrice, cakePrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol])

  const totalValueFormated = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

  const lpLabel = farm.lpSymbol
  const earnLabel = 'GLENTY'
  const farmAPY =
    farm.apy &&
    farm.apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, risk } = farm
  return (
    <div className='coincont'>
      {window.innerWidth>900?(<div style={{display:'grid',gridTemplateColumns:'25% 25% 25% 25%',padding:"5% 1% 0% 1%",background:'rgb(49, 39, 131)',borderRadius:'18px'}} className="coin">
          <div className='logoCont'>
          <img style={{height:'56px',width:'56px',background:'white',borderRadius:'50%',textAlign:'right'}} className='gigapoolimage' src={farmImage} alt={farm.lpSymbol} />
          </div>
          <div style={{color:'white',fontSize:'13pt',marginTop:'30%',textAlign:'left'}} className='nameCont'>
          {farm.tokenSymbol}
        </div>
        <div style={{color:'white',fontSize:'10pt',marginTop:'30%'}} className='aprCont'>
        <div style={{fontFamily:'Kanit',fontWeight:200,margin:'auto',textAlign:'start',width:'80%'}}>APR</div>
        <div style={{margin:'auto',textAlign:'start',width:'80%',marginTop:'7%'}}>
        {farmAPY}%
        </div>
        </div>
        <div className='earned' style={{color:'white',fontSize:'10pt',marginTop:'30%'}}>
        <div style={{fontFamily:'Kanit',fontWeight:200,margin:'auto',textAlign:'start',width:'80%'}}>Earned</div>
        <CardActionsContainer farm={farm} ethereum={ethereum} account={account} />
        </div>

        <div style={{margin:'10px -100px 0% -4%',width:"408%",background:'#030e33',padding:'0px 12px',borderBottomLeftRadius:'25px',borderBottomRightRadius:'25px'}}>
        <CardActionsContainer farm={farm} ethereum={ethereum} account={account} />
      <div style={{margin:'15px',paddingTop:'10px',borderTop:'1px solid rgb(49, 39, 131)',width:'calc(100% + 24px)',marginLeft:'-12px',textAlign:'left'}} className='detailsCont'>
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      </div>
      <div className='detailssection'>
      <ExpandingWrapper expanded={showExpandableSection} style={{padding:'0px'}}>
      <Flex>
         <Text style={{ fontSize: '12pt',color:'white'}}>{TranslateString(10001, 'Deposit Fee')}</Text>
         <Text bold style={{ fontSize: '12pt',color:'#788cff',marginLeft:'5px' }}>
           {farm.depositFeeBP / 100}%
         </Text>
      </Flex> 
        <DetailsSection
          removed={removed}
          isTokenOnly={farm.isTokenOnly}
          bscScanAddress={
            farm.isTokenOnly
              ? `https://bscscan.com/token/${farm.tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://bscscan.com/token/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`
          }
          totalValueFormated={totalValueFormated}
          lpLabel={lpLabel}
          quoteTokenAdresses={quoteTokenAdresses}
          quoteTokenSymbol={quoteTokenSymbol}
          tokenAddresses={tokenAddresses}
        />
      </ExpandingWrapper>
      </div>
        </div>
      </div>):(
        <div style={{display:'grid',gridTemplateColumns:'20% 20% 20% 20% 20%',padding:"5% 1% 0% 1%",background:'#312783'}} className="coin">
          <div>
          <img style={{height:'48px',width:'48px',background:'white',borderRadius:'50%'}} className='gigapoolimage' src={farmImage} alt={farm.lpSymbol} />
          </div>
          <div style={{color:'white',fontSize:'9pt',marginTop:'30%',textAlign:'left'}}>
          {farm.tokenSymbol}
        </div>
        <div style={{color:'white',fontSize:'8pt',marginTop:'30%'}}>
        <div style={{fontFamily:'Kanit',fontWeight:200,margin:'auto',textAlign:'start',width:'80%'}}>APR</div>
        <div style={{margin:'auto',textAlign:'start',width:'80%',marginTop:'7%'}}>
        {farmAPY}%
        </div>
        </div>
        <div className='earned' style={{color:'white',fontSize:'8pt',marginTop:'30%'}}>
        <div style={{fontFamily:'Kanit',fontWeight:200,margin:'auto',textAlign:'start',width:'80%'}}>Earned</div>
        <CardActionsContainer farm={farm} ethereum={ethereum} account={account} />
        </div>
        <div style={{marginTop:'25%'}} className='mobileDetails'>
        <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      </div>
      <div className='detailssection' style={{marginTop:'10px',width:"510%",background:'#030e33',marginBottom:'0%',marginRight:'-1%',marginLeft:"-5%"}}>
      <ExpandingWrapper expanded={showExpandableSection} style={{padding:'0px 18px'}}>
      <CardActionsContainer farm={farm} ethereum={ethereum} account={account} />
      <Flex marginTop='20px'>
         <Text style={{ fontSize: '12pt',color:'white'}}>{TranslateString(10001, 'Deposit Fee')}</Text>
         <Text bold style={{ fontSize: '12pt',color:'#788cff',marginLeft:'5px' }}>
           {farm.depositFeeBP / 100}%
         </Text>
      </Flex> 
        <DetailsSection
          removed={removed}
          isTokenOnly={farm.isTokenOnly}
          bscScanAddress={
            farm.isTokenOnly
              ? `https://bscscan.com/token/${farm.tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://bscscan.com/token/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`
          }
          totalValueFormated={totalValueFormated}
          lpLabel={lpLabel}
          quoteTokenAdresses={quoteTokenAdresses}
          quoteTokenSymbol={quoteTokenSymbol}
          tokenAddresses={tokenAddresses}
        />
      </ExpandingWrapper>
      </div>
      </div>
      )}

    </div>
  )
}

export default FarmCard
