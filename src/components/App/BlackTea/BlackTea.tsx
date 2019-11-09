import React from 'react'
import styled from 'styled-components'

import { Layout } from '../../Layout'
import { List } from '../../shared/List'
import { Heading } from '../../shared/Heading'
import { space } from '../../../themes/size'

import { blackTeas } from '../../../data/blackTea'

export const BlackTea: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual>
        <Heading className="sectionTitle">Black Tea</Heading>
      </MainVisual>
      <MainContents>
        <TeaContents>
          <Heading tag="h2" className="blockTitle">
            Tea List
          </Heading>
          <List teas={blackTeas} />
        </TeaContents>
      </MainContents>
    </Layout>
  )
}

const TeaContents = styled.div`
  width: 85%;
  margin: ${space.xl} auto 0;
`

const MainVisual = styled.div`
  width: 50%;
  text-align: center;
  background-color: darksalmon;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainContents = styled.section`
  width: 50%;
  height: 100%;
  background-color: #f5efe0;
  overflow-y: scroll;
`
