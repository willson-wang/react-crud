import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import tabBar from '../assets/css/tab-bar.module.css';
export default class TabBar extends Component {
    constructor () {
        super();
        this.state = {
            menuList: [
                {
                    label: '首页',
                    icon: '',
                    path: '/',
                    exact: true
                },
                {
                    label: '我的',
                    icon: '',
                    path: 'user',
                    exact: false
                }
            ]
        };
    }
    render() {
        return (
            <ul className={tabBar['tab-bar']}>
                {
                    this.state.menuList.map((item, index) => {
                        return <li className={tabBar['tab-bar__item']} key={index}><Link to={item.path} exact={item.exact.toString()}>{item.label}</Link></li>;
                    })
                }
            </ul>
        );
    }
}
