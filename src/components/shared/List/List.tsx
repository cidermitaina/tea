import React from 'react'
import styled, { css } from 'styled-components'

import { Tea } from '../../../types/application'
import { Tag } from '../../shared/Tag'
import { space, font } from '../../../themes/size'

interface Props {
  className?: string
  teas: Tea[]
  lang?: string
}

export const List: React.FC<Props> = ({ className = '', teas, lang = 'en' }) => {
  return (
    <Wrapper className={className}>
      {teas.map(tea => (
        <li key={tea.name}>
          <a href={tea.href} target="_blank" rel="noopener noreferrer">
            <figure>
              <img src={tea.src} alt={tea.alt} />
              <Figcaption lang={lang}>{tea.name}</Figcaption>
            </figure>
          </a>
          <Tag tags={tea.tags} />
        </li>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${space.xl};
  a {
    display: block;
    transition: 0.3s all;

    &:hover {
      opacity: 0.7;
    }
  }
  & > li {
    width: 50%;
    padding: ${space.xs};
    box-sizing: border-box;
  }
  img {
    width: 100%;
  }
`

const Figcaption = styled.figcaption`
  font-weight: bold;
  padding-top: ${space.xs};
  line-height: 1.4;
  font-size: ${font.xs};
  text-align: left;
  ${props =>
    props.lang === 'ja' &&
    css`
      @import url('https://fonts.googleapis.com/css?family=Sawarabi+Gothic|Sawarabi+Mincho&display=swap');

      font-family: 'Sawarabi Mincho', sans-serif;
    `};
`
