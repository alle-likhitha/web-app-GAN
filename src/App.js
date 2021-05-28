import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import Welcome from './containers/Welcome/Welcome';


function App() {

  let routes = (
    <Switch>
      <Route path='/' exact component={Welcome} />
      <Route path='/main' exact component={MainPage} />
      <Redirect to='/' />
    </Switch>
  )

  return (
    <div className="App">
     {routes}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default withRouter(App);
