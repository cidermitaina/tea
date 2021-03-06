import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Top } from './components/App/Top'
import { GreenTea } from './components/App/GreenTea'
import { BlackTea } from './components/App/BlackTea'
import { TeaCup } from './components/App/TeaCup'
import { Contact } from './components/App/Contact'

const App: React.FC<{}> = () => (
  <>
    <Reset />
    <GlobalStyle />
    <BrowserRouter basename="/tea">
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/greentea" component={GreenTea} />
        <Route path="/blacktea" component={BlackTea} />
        <Route path="/teacup" component={TeaCup} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />;
      </Switch>
    </BrowserRouter>
  </>
)

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Hind&display=swap');
@import url('https://fonts.googleapis.com/css?family=Sawarabi+Gothic|Sawarabi+Mincho&display=swap');

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
