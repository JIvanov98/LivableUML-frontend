import React from 'react';
import './App.css';

// Allow query params with router
import { QueryParamProvider } from 'use-query-params';

// Link routing and store
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Routing
// https://reacttraining.com/react-router/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Store
//  https://react-redux.js.org/introduction/quick-start
//  https://react-redux.js.org/next/api/hooks
// eslint-disable-next-line no-restricted-globals
import { history, persistor, store } from './redux/store';

// Material UI's theming/styling solution
//  https://material-ui.com/styles/basics/
//  https://material-ui.com/customization/theming/
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './common/theme';

import Editor from './pages/editor/Editor';
import Home from './pages/home/Home';


const home = (
  <Route path="/">
    <Editor />
  </Route>
);

const editor = (
  <Route path="/editor">
    <Editor />
  </Route>
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <QueryParamProvider ReactRouterRoute={Route}>
            <ThemeProvider theme={theme}>
              <Switch>
                {editor}
                {home}
              </Switch>
            </ThemeProvider>
          </QueryParamProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
