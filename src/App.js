import React from 'react';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header/'
import Sidebar from './components/Sidebar/Sidebar'
import Items from './components/Item/Items'
import ExactItem from './components/Item/ExactItem'

import './styles/main.scss'

import { ItemsProvider } from './items.context'
import { СonfigProvider } from './config.context';

function App() {
  return (
    <СonfigProvider>
    <ItemsProvider >
      <HashRouter basename="/">
      <Header />
      <Switch>
          <Route exact path="/">
            <main>
              <Sidebar />
              <Items />
            </main>
          </Route>
          <Route  path="/products/:id">
            <ExactItem />
          </Route>
        </Switch>
      </HashRouter>
    </ItemsProvider>
    </СonfigProvider>
  );
}

export default App;
