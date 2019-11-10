import * as React from 'react'
import styled from 'styled-components'

import { Header } from './Header'
import { mediaQuery } from '../../themes/size'

interface Props {
  children?: React.ReactNode[]
  color?: string
}

export const Layout: React.FC<Props> = ({ children }) => {
  const menus = [
    { name: 'Top', url: '/' },
    { name: 'Black Tea', url: '/blacktea' },
    { name: 'Green Tea', url: '/greentea' },
    { name: 'Tea Cup', url: '/teacup' },
    { name: 'Contact', url: '/contact' },
  ]

  return (
    <Wrapper>
      <Header menus={menus} />
      <Main>{children}</Main>
      <Footer></Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
`

const Main = styled.main`
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 0;

  @media screen and (max-width: ${mediaQuery.sp}px) {
    display: block;
  }
`

const Footer = styled.footer``
