import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { Redirect, Route, Switch } from 'react-router'

import { Top } from './components/App/Top'
import { GreenTea } from './components/App/GreenTea'
import { BlackTea } from './components/App/BlackTea'
import { TeaCup } from './components/App/TeaCup'
import { Contact } from './components/App/Contact'

import './App.css'

const App: React.FC<{}> = () => (
  <>
    <Reset />
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Top} />
      <Route path="/greentea" component={GreenTea} />
      <Route path="/blacktea" component={BlackTea} />
      <Route path="/teacup" component={TeaCup} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/" />;
    </Switch>
  </>
)

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Hind&display=swap');
  html {
    height: 100%;
    font-family: 'Hind', sans-serif;
    font-size: 62.5%;
    color: #333;
  }

  body {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  #root {
    height: 100%;
  }
`

export default App
