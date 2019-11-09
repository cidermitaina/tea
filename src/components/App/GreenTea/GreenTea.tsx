import React from 'react'
import styled from 'styled-components'

import { Layout } from '../../Layout'
import { Heading } from '../../shared/Heading'
import { List } from '../../shared/List'
import { space } from '../../../themes/size'

import { greenTeas } from '../../../data/greenTea'

export const GreenTea: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual>
        <Heading className="sectionTitle">Japanese Tea</Heading>
      </MainVisual>
      <MainContents>
        <TeaContents>
          <Heading tag="h2" className="blockTitle">
            Tea List
          </Heading>
          <List teas={greenTeas} lang="ja" />
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
  background-color: darkseagreen;
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
