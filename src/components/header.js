import React, { Component } from 'react';
import header from '../assets/css/header.module.css';

export default class Header extends Component {
    render() {
        return (
            <div className={header.header}>
                <span className={header['header__news']}>消息</span>
                <p className={header['header__title']}>每日头条</p>
                <span className={header['header__search']}>搜索</span>
            </div>
        );
    }
}
