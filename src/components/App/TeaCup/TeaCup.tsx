import React from 'react'

import { Layout } from '../../Layout'
import { TeaContents } from '../../Layout/TeaContents'
import { MainVisual } from '../../Layout/MainVisual'

import { teaCup } from '../../../data/teaCup'

export const TeaCup: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual bgColor="#add8e6">Tea Cup</MainVisual>
      <TeaContents teas={teaCup} />
    </Layout>
  )
}
