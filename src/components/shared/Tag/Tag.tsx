import React from 'react'
import styled from 'styled-components'

import { Tea } from '../../../types/application'
import { space, font } from '../../../themes/size'

interface Props {
  tags: Tea['tags']
}

export const Tag: React.FC<Props> = ({ tags }) => {
  return (
    <Wrapper>
      {tags.map(tag => (
        <Item># {tag}</Item>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  padding-top: ${space.xxs};
  display: flex;
`

const Item = styled.li`
  font-size: ${font.xs};
  color: #666;
  &:not(:first-child) {
    padding-left: ${space.xxs};
  }
`
