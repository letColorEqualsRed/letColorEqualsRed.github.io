import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import store, { history } from './store';

import './App.css';

import HomePage from './pages/HomePage';
import EditStoryPage from './pages/EditStoryPage';
import ViewStoryPage from './pages/ViewStoryPage';
import SelectStoryPage from './pages/SelectStoryPage';

function App() {
  return (
    <Provider store = {store}>
      <ConnectedRouter history = {history}>
        <Switch>
          <Route path="/story/edit" component={EditStoryPage} />
          <Route path="/story/view" component={ViewStoryPage} />
          <Route path="/story/select" component={SelectStoryPage} />
          <Route path="/" component = {HomePage}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
