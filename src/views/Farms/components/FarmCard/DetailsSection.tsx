import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Wrapper = styled.div`
  margin-top: 8px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: white;
  display: flex;
  align-items: center;

  svg {
    display:none;
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
      <Flex justifyContent="flex-start" marginBottom='5%'>
        <Link external href={bscScanAddress} bold={false} color='#e3b82f' style={{fontFamily:'Kanit',fontWeight:200}}>
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex>
        <StyledLinkExternal
          href={
            isTokenOnly
              ? `https://exchange.glentyswap.finance/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://exchange.glentyswap.finance/#/add/${liquidityUrlPathParts}`
          } 
          style={{fontFamily:'Kanit',fontWeight:200,color:'#e3b82f',marginBottom:'5%'}}
        >
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text color='white'>{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text color='white'>{totalValueFormated}</Text>
        </Flex>
      )}
    </Wrapper>
  )
}

export default DetailsSection
