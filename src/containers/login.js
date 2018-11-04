import React, { Component } from 'react';
import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import { login, saveUserInfo } from '../reducers/user';
import { connect } from 'react-redux';

class Login extends Component {

    static propTypes = {
        form: PropTypes.object,
        onSubmit: PropTypes.func,
        onLogin: PropTypes.func,
        history: PropTypes.object
    }

    handlerLogin () {
        this.props.onSubmit && this.props.onSubmit({
            username: 'wks',
            password: '123456', 
        });
        this.props.onLogin && this.props.onLogin(true);
        this.props.history.push('/');
    }
    
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div style={{width: '100%'}}>
                <List>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="phone"
                        placeholder="186 1234 1234"
                    >手机号码</InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="****"
                    >密码</InputItem>
                    <Button type="primary" onClick={this.handlerLogin.bind(this)}>登录</Button>
                </List>
            </div>
        );
    }
}

const BasicInputWrapper = createForm()(Login);

const mapStateToProps = (state) => {
    return {
        logined: state.logined,
        userInfo: state.userInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (userInfo) => {
            console.log('login', userInfo);
            dispatch(saveUserInfo(userInfo));
        },
        onLogin: (logined) => {
            dispatch(login(logined));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicInputWrapper);
