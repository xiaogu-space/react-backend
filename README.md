# react-backend
express+create-react-app

**创建express app**
全局安装 express-generator

    $ npm install -g express-generator

创建express app

    $ express react-backend

安装依赖包

    $ npm install

修改react-backend/routes/users.js, 返回简单的数据，方便测试

    var express = require('express');
    var router = express.Router();
    
    /* GET users listing. */
    router.get('/', function(req, res, next) {
        // Comment out this line:
      //res.send('respond with a resource');
    
      // And insert something like this instead:
      res.json([{
          id: 1,
          username: "samsepi0l"
      }, {
          id: 2,
          username: "D0loresH4ze"
      }]);
    });
    
    module.exports = router;

启动express app

    $ PORT=3001 node bin/www

把端口设置成3001的原因是因为react app 会使用3000端口，避免冲突

**创建react app**
全局安装 create-react-app

    $ npm install -g create-react-app

在react-backend文件夹下创建react app（也可以在其他文件夹下）

    # 在这里安装的时候  真心很慢，回头我研究一下，改成自己创建react应用，应该会快一点
    $ create-react-app client

设置proxy

    $ cd client
    $ vim package.json
    
    # 代码
    
     "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
      },
      "proxy": "http://localhost:3001"

proxy 是你后台服务器的地址

修改client/src/App.js

    import React, { Component } from 'react';
    import './App.css';
    
    class App extends Component {
      state = {users: []}
    
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
          </div>
        );
      }
    }
    
    export default App;

启动应用

    $ npm start

在浏览器上访问localhost:3000,就能看到传递过来的用户列表了。

参考链接：https://daveceddia.com/create-react-app-express-backend/
