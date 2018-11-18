import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/home';
import User from '../containers/user';
import TabBar from '../components/tab-bar';
import Header from '../components/header';
import layout from '../assets/css/layout.module.css';

export default class Layout extends Component {
    render() {
        return (
            <div className={layout.layout}>
                <Header></Header>
                <div className={layout.content}>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/user" component={User}></Route>
                </div>
                <TabBar></TabBar>
            </div>
        );
    }
}
