import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import app from '../assets/css/app.module.css';
import Home from '../components/home';
import User from '../components/user';
import TabBar from '../components/tab-bar';
import Header from '../components/header';
import Login from './login';
class App extends Component {
    render() {
        return (
            <Router>
                <div className={app.wrap}>
                    <Header></Header>
                    <div className={app.content}>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route exact path="/login" component={Login}></Route>
                    </div>
                    <TabBar></TabBar>
                </div>
            </Router>
        );
    }
}

export default App;
