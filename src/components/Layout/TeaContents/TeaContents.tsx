import React from 'react'
import styled from 'styled-components'

import { Tea } from '../../../types/application'
import { List } from '../../shared/List'
import { Heading } from '../../shared/Heading'
import { space, mediaQuery } from '../../../themes/size'

interface Props {
  teas: Tea[]
  lang?: string
  heading?: string
}

export const TeaContents: React.FC<Props> = ({ teas, lang, heading = 'Tea List' }) => {
  return (
    <Wrapper>
      <Contents>
        <Heading tag="h2" className="blockTitle">
          {heading}
        </Heading>
        <List teas={teas} lang={lang} />
      </Contents>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f5efe0;
  overflow-y: scroll;

  @media screen and (max-width: ${mediaQuery.sp}px) {
    width: 100%;
    overflow-y: visible;
    height: auto;
  }
`

const Contents = styled.div`
  width: 85%;
  padding: ${space.xl} 0;
  margin: 0 auto;
`
