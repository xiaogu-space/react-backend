import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'antd/lib/button';

import Home from './components/home'
import Plan from './components/plan'
import TestRouter from './components/testrouter.js'

// 引入路由
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()


class App extends Component {
  state = {users: []};
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}

        <Button type="primary">Button</Button>
        <Router history = {history}>
            <div className="contentBox">
              <ul className="nav">
                <li><Link to="/">首页</Link></li>
                <li><Link to="/plan">计划表</Link></li>
                <li><Link to="/test">二级路由</Link></li>
              </ul>
              <div className="content"> 
                <Route exact path="/" component={Home}/>
                <Route path="/plan" component={Plan}/>
                <Route path="/test" component={TestRouter}/>
              </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
