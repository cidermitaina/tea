import React from 'react'
import styled, { css } from 'styled-components'

import { Heading } from '../../shared/Heading'
import { mediaQuery } from '../../../themes/size'

interface Props {
  bgColor: string
}

export const MainVisual: React.FC<Props> = ({ bgColor, children }) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Heading className="sectionTitle" tag="h1">
        {children}
      </Heading>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  text-align: center;
  ${({ bgColor }: Props) => css`
    background-color: ${bgColor};
  `}
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${mediaQuery.sp}px) {
    width: 100%;
  }
`
