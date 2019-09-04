import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <React.Fragment>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={SignInPage} />
            <AuthenticatedRoute exact path="/home" component={HomePage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
