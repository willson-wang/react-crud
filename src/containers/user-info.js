import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInfo from '../components/user-info';

class User extends Component {
    static propTypes = {
        history: PropTypes.object,
        logined: PropTypes.bool,
        userInfo: PropTypes.object
    }

    constructor(props) {
        super(props);

    }

    render() {
        console.log(this);
        return (
            <UserInfo logined={this.props.logined} userInfo={this.props.userInfo} history={this.props.history}></UserInfo>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        logined: state.logined,
        userInfo: state.userInfo
    };
};

export default connect(mapStateToProps)(User);
