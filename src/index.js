import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import SignInPage from './pages/SigninPage';
import HomePage from './pages/HomePage';
import AuthenticatedRoute from './components/AuthRoute';
import NavigationBar from './components/NavigationBar';
import store from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <React.Fragment>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={SignInPage} />
            <AuthenticatedRoute exact path="/home" component={HomePage} />
          </Switch>
        </React.Fragment>
      </HashRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
