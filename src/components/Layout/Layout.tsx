import * as React from 'react'
import styled from 'styled-components';

import { Header } from './Header'

interface Props {
  children?: React.ReactNode[]
  color?: string
}

export const Layout: React.FC<Props> = ({
  children,
  color
}) => {
  const links = [
    { name: 'about', url: '/about' },
    { name: 'Black Tea', url: '/blacktea' },
    { name: 'Green Tea', url: '/greentea' },
    { name: 'Cafe', url: '/cafe' },
  ];

  return (
    <Wrapper>
      <Header
        links={links}
      />
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
`

const Footer = styled.footer`

`
