import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserInfo from './user-info';
import PropTypes from 'prop-types';
import user from '../assets/css/user.module.css';
import UserSetting from './user-setting';

export default class User extends Component {
    static propTypes = {
        match: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = {
            routeList: [
                {
                    path: '/user',
                    component: UserInfo,
                    exact: true
                },
                {
                    path: '/user/setting',
                    component: UserSetting,
                    exact: false
                },
            ]
        };
    }

    render() {
        console.log('match', this.props.match);
        return (
            <div className={user.user}>
                <Switch>
                    {
                        this.state.routeList.map((item, index) => {
                            return <Route exact={!!item.exact} key={index} path={item.path} component={item.component}></Route>;
                        })
                    }
                </Switch>
            </div>
        );
    }
}
