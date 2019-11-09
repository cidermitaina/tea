import React from 'react'
import styled from 'styled-components'

import { Layout } from '../../Layout'
import { Heading } from '../../shared/Heading'
import { space } from '../../../themes/size'

import okumidori from '../../../images/aokumidori.jpg'
import uchinochaho from '../../../images/uchinochaho.jpg'

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
          <List>
            <li>
              <div>
                <img src={okumidori} alt="okumidori" />
              </div>
              <p>東京茶寮 005 OKUMIDORI おくみどり</p>
            </li>
            <li>
              <div>
                <img src={uchinochaho} alt="uchinochaho" />
              </div>
              <p>東京茶寮 005 OKUMIDORI ほうじ茶</p>
            </li>
          </List>
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

const List = styled.ul`
  @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');

  display: flex;
  flex-wrap: wrap;
  padding-top: ${space.xl};
  li {
    width: 50%;
    padding: 16px;
    box-sizing: border-box;
  }
  img {
    width: 100%;
  }
  p {
    font-weight: bold;
    padding-top: 16px;
    line-height: 1.4;
    font-size: 14px;
    text-align: left;
  }
`
