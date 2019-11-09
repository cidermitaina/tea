import * as React from 'react'
import styled from 'styled-components'

import { Layout } from '../../Layout'
import { Heading } from '../../shared/Heading'
import { Text } from '../../shared/Text'
import { space } from '../../../themes/size'
import mv from '../../../images/ReadingSideDoodle.svg'

export const Top: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual>
        <img src={mv} className="App-logo" alt="logo" />
      </MainVisual>
      <MainContents>
        <Contents>
          <Heading className="headTitle">お茶の時間にしませんか</Heading>
          <HeadingText lang="ja" size="s">
            お気に入りの日本茶、紅茶、中国茶を集めました。
            <br />
            お茶の時間にしませんか
          </HeadingText>
        </Contents>
      </MainContents>
    </Layout>
  )
}

const MainVisual = styled.div`
  width: 50%;
  text-align: center;
  background-color: #f5efe0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainContents = styled.section`
  width: 50%;
  height: 100%;
  color: #fff;
  background-color: lightseagreen;
  background-color: tan;
  position: relative;
`

const Contents = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`

const HeadingText = styled(Text)`
  padding-top: ${space.m};
`
