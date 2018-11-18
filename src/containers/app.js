import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import app from '../assets/css/app.module.css';
import Layout from './layout';
import Login from './login';
class App extends Component {
    render() {
        return (
            <Router>
                <div className={app.wrap}>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/user" component={Layout}></Route>
                    <Route exact path="/" component={Layout}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
