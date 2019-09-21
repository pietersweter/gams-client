import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import GameSelectionPage from './pages/GameSelectionPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
