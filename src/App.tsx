import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { Redirect, Route, Switch } from 'react-router'

import { Top } from './components/App/Top'
import { GreenTea } from './components/App/GreenTea'
import { BlackTea } from './components/App/BlackTea'
import { TeaCup } from './components/App/TeaCup'

import './App.css'

const App: React.FC<{}> = () => (
  <>
    <Reset />
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Top} />
      <Route path="/GreenTea" component={GreenTea} />
      <Route path="/BlackTea" component={BlackTea} />
      <Route path="/TeaCup" component={TeaCup} />
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
    transition: 0.3s all;
    &:hover{
      opacity:.7;
    }
  }

  #root {
    height: 100%;
  }
`

export default App
