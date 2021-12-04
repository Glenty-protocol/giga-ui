import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@pancakeswap-libs/uikit'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  margin:auto;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper />
    )
}

export default PageLoader
