import React, { Component } from 'react';
import HomeComponent from '../components/home';
import { ListView } from 'antd-mobile';
import { connect } from 'react-redux';
import { getRecommandList } from '../reducers/home';
import PropTypes from 'prop-types';

const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2
});

class Home extends Component {

    static propTypes = {
        recommandList: PropTypes.array,
        isLoading: PropTypes.bool,
        getList: PropTypes.func,
        history: PropTypes.object,
        hasMore: PropTypes.bool,
    }

    constructor(props) {
        super(props);

        this.state = {
            dataSource: dataSource.cloneWithRows([]),
            refreshing: false,
            height: document.documentElement.clientHeight - 44 - 36 - 46,
        };
    }

    UNSAFE_componentWillMount() {
        this._getRecommandList();
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            isLoading: props.isLoading,
            hasMore: props.hasMore,
            dataSource: dataSource.cloneWithRows(props.recommandList)
        });
    }

    _getRecommandList (flag = 'min') {
        if (this.props.isLoading && !this.props.hasMore) {
            return;
        }
        this.setState({
            refreshing: true
        });

        let params = {};
        params[`${flag}_behot_time`] = (+new Date()).toString().slice(0, 10);
        params['flag'] = flag;
        this.props.getList('https://m.toutiao.com/list/', params).then(() => {
            this.setState({
                refreshing: false
            });
        });
        
    }

    render() {
        return (
            <HomeComponent 
                dataSource={this.state.dataSource} 
                hasMore={this.props.hasMore} 
                height={this.state.height} 
                isLoading={this.props.isLoading}
                _getRecommandList={this._getRecommandList.bind(this)}
                refreshing={this.state.refreshing}>
            </HomeComponent>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        recommandList: state.recommandList,
        isLoading: state.isLoading,
        hasMore: state.hasMore,
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        getList: (url, params) => {
            return dispatch(getRecommandList(url, params));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

