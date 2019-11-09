import React from 'react'
import styled from 'styled-components'

import { font } from '../../../themes/size'

interface Props {
  children: string
  type?: 'screenTitle' | 'sectionTitle' | 'blockTitle' | 'subBlockJaTitle' | 'subBlockTitle'
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

export const Heading: React.FC<Props> = ({ tag = 'h1', type = 'ScreenTitle', className = '', children }) => {
  return (
    <Wrapper as={tag} className={`${type} ${className}`}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');

  font-weight: bold;
  &.headTitle {
    font-size: ${font.xl};
    font-weight: normal;
  }
  &.sectionTitle {
    font-family: 'Hind', sans-serif;
    font-size: ${font.xl};
    letter-spacing: 5px;
  }
  &.blockTitle {
    font-family: 'Hind', sans-serif;
    font-size: ${font.l};
    letter-spacing: 2px;
  }
  &.subBlockJaTitle {
    font-size: ${font.m};
    letter-spacing: 2px;
  }
  &.subBlockTitle {
    font-family: 'Hind', sans-serif;
    font-size: ${font.m};
    letter-spacing: 2px;
  }
`
