import * as React from 'react'
import styled from 'styled-components'

import { Layout } from '../../Layout'
import { Heading } from '../../shared/Heading'
import { Text } from '../../shared/Text'
import { space, mediaQuery } from '../../../themes/size'
import mv from '../../../images/ReadingSideDoodle.svg'

export const Top: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual>
        <img src={mv} alt="mainvisual" />
      </MainVisual>
      <MainContents>
        <Contents>
          <Heading className="headTitle">お茶の時間にしませんか</Heading>
          <TextWrapper>
            <HeadingText lang="ja" size="s">
              一期一会とは茶道におけるお茶会の心得です。
            </HeadingText>
            <HeadingText lang="ja" size="s">
              「人との出会いを一生に一度のものと思い、相手に対し最善を尽くしながらお茶を点てること」を意味しています。
            </HeadingText>
            <HeadingText lang="ja" size="s">
              お気に入りのお茶を集めてみました。
            </HeadingText>
            <HeadingText lang="ja" size="s">
              大切な誰かに心を込めてお茶を淹れてみませんか？
            </HeadingText>
          </TextWrapper>
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

  @media screen and (max-width: ${mediaQuery.sp}px) {
    width: 100%;
  }

  > img {
    width: 60%;

    @media screen and (max-width: ${mediaQuery.sp}px) {
      width: 70%;
    }
  }
`

const MainContents = styled.div`
  width: 50%;
  height: 100%;
  color: #fff;
  background-color: tan;
  position: relative;

  @media screen and (max-width: ${mediaQuery.sp}px) {
    width: 100%;
  }
`

const Contents = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;

  @media screen and (max-width: ${mediaQuery.sp}px) {
    padding: 0 ${space.xs};
  }
`

const TextWrapper = styled.div`
  width: 70%;
  padding-top: ${space.m};

  @media screen and (max-width: ${mediaQuery.sp}px) {
    width: 90%;
  }
`

const HeadingText = styled(Text)`
  padding-top: ${space.s};
  line-height: 1.6;
`
