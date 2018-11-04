import React, { Component } from 'react';
import topBar from '../assets/css/top-bar.module.css'; 

export default class TopBar extends Component {
    constructor() {
        super();

        this.state = {
            menuList: [
                {
                    label: '推荐',
                    tag: '__all__',
                },
                {
                    label: '视频',
                    tag: 'video',
                },
                {
                    label: '热点',
                    tag: 'news_hot',
                },
                {
                    label: '社会',
                    tag: 'news_society',
                },
                {
                    label: '娱乐',
                    tag: 'news_entertainment',
                },
                {
                    label: '军事',
                    tag: 'news_military',
                },
                {
                    label: '科技',
                    tag: 'news_tech',
                }
            ]
        };
    }

    render() {
        return (
            <ul className={topBar['top-bar']}>
                {
                    this.state.menuList.map((item, index) => {
                        return <li className={topBar['top-bar__item']} key={index} >{item.label}</li>;
                    })
                }
            </ul>
        );
    }
}
