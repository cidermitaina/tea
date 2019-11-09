import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { Redirect, Route, Switch } from 'react-router';

import { Top } from './components/App/Top';
import { GreenTea } from './components/App/GreenTea';
import { BlackTea } from './components/App/BlackTea';

import './App.css';


const App: React.FC<{}> = () => (
  <>
    <Reset />
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Top} />
      <Route path="/GreenTea" component={GreenTea} />
      <Route path="/BlackTea" component={BlackTea} />
      <Redirect to="/" />;
    </Switch>
  </>
);

const GlobalStyle = createGlobalStyle`@import url("https://fonts.googleapis.com/css?family=Sawarabi+Gothic|Sawarabi+Mincho&display=swap");
  html {
    height: 100%;
    font-family: 'Sawarabi Gothic', sans-serif;
    font-family: 'Sawarabi Mincho', sans-serif;
    color: #333;
  }

  body {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  #root {
    height: 100%;
  }
`

export default App;
