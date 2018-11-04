import React, { Component } from 'react';
import user from '../assets/css/user-info.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class User extends Component {
    static propTypes = {
        history: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = {
            statusList: [
                {
                    count: 15,
                    label: '头条'
                },
                {
                    count: 15,
                    label: '关注'
                },
                {
                    count: 15,
                    label: '粉丝'
                },
                {
                    count: 15,
                    label: '获赞'
                }
            ],
            collectList: [
                {
                    label: '我的收藏',
                    icon: 'test'
                },
                {
                    label: '我的评论',
                    icon: 'test'
                },
                {
                    label: '我的点赞',
                    icon: 'test'
                },
                {
                    label: '浏览历史',
                    icon: 'test'
                },
            ],
            settingList: [
                {
                    title: '消息通知',
                    icon: 'test',
                    decs: ''
                },
                {
                    title: '阅读公益',
                    icon: 'test',
                    decs: '进入阅读84分钟'
                },
                {
                    title: '我的钱包',
                    icon: 'test',
                    decs: '借钱利率0.03%起'
                },
                {
                    title: '京东特供',
                    icon: 'test',
                    decs: '年终购物狂欢节'
                },
                {
                    title: '用户反馈',
                    icon: 'test',
                    decs: ''
                },
                {
                    title: '系统设置',
                    icon: 'test',
                    decs: '',
                    path: 'user/setting'
                },
            ]
        };
    }

    handlerLinkTo (item) {
        console.log('handlerLinkTo', item, this);
        this.props.history.push(item.path);
    }

    render() {
        console.log(this);
        return (
            <div className={user.user}>
                <div className={user['user__header']}>
                    <img />
                    <div>
                        <span>剑九二</span>
                        <button>申请认证</button>
                    </div>
                    <span>&gt;</span>
                </div>
                {
                    this.state.statusList.length > 0 && <ul className={user['user__statuslist']}>
                        {
                            this.state.statusList.map((item, index) => {
                                return <li key={index}><strong>{item.count}</strong><span>{item.label}</span></li>;
                            })
                        }
                    </ul>
                }
                {
                    this.state.collectList.length > 0 && <ul className={user['user__collectlist']}>
                        {
                            this.state.collectList.map((item, index) => {
                                return <li key={index}><i className={item.icon}></i><span>{item.label}</span></li>;
                            })
                        }
                    </ul>
                }
                {
                    this.state.settingList.length > 0 && <ul className={user['user__settinglist']}>
                        {
                            this.state.settingList.map((item, index) => {
                                return <li key={index} onClick={this.handlerLinkTo.bind(this, item)}><h6>{item.title}</h6>
                                    {item.decs.length > 0 && <span>{item.decs}</span>}
                                    <i className={item.icon}></i></li>;
                            })
                        }
                    </ul>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logined: state.logined,
        userInfo: state.userInfo
    };
};

export default connect(mapStateToProps)(User);
