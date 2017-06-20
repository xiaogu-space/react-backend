import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'antd/lib/button';

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
      </div>
    );
  }
}

export default App;
