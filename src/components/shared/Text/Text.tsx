import React from 'react'
import styled, { css } from 'styled-components'

import { font } from '../../../themes/size'

interface Props {
  children: React.ReactNode
  className?: string
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  lang?: 'en' | 'ja'
}

const fontSize = {
  xxs: font.xxs,
  xs: font.xs,
  s: font.s,
  m: font.m,
  l: font.l,
  xl: font.xl,
}

export const Text: React.FC<Props> = ({ className = '', size = 's', lang = 'en', children }) => (
  <Wrapper size={size} className={`${lang} ${className}`}>
    {children}
  </Wrapper>
)

const Wrapper = styled.p`
  ${({ size = 's' }: Props) => css`
    font-size: ${fontSize[size]};
  `};
  line-height: 1.4;
  &.ja {
    font-family: 'Sawarabi Mincho', sans-serif;
  }
`
