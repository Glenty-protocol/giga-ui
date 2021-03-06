import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,
  farmImage,
  tokenSymbol,
  depositFee,
}) => {
  return (
    <div className='tokenHeader' style={{backgroundColor: "#788cff",borderTopRightRadius:'25px',borderTopLeftRadius:'25px'}} >
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px" padding='20px 12px'>
      <Image src={farmImage} alt={tokenSymbol} width={70} height={70} />
      <Flex flexDirection="column" alignItems="flex-end">
        <h1 style={{color:'white',fontSize:'20pt',marginBottom:'15px',paddingRight:'20%'}}>{tokenSymbol}</h1>
        <Flex justifyContent="center">
          {depositFee === 0 ? <NoFeeTag /> : null}
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          {/* <RiskTag risk={risk} /> */}
        </Flex>
        <p style={{color:"white",fontSize:'8pt'}}>Stack {lpLabel} earn GLENTY</p>
      </Flex>
    </Wrapper>
    </div>
  )
}

export default CardHeading
