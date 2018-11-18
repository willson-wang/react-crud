import React, { Component } from 'react';
import { PullToRefresh, ListView } from 'antd-mobile';
import home from '../assets/css/home.module.css';
import Row from './tpl/row';
import TopBar from '../components/top-bar';
import PropTypes from 'prop-types';

export default class Home extends Component {

    static propTypes = {
        isLoading: PropTypes.bool,
        refreshing: PropTypes.bool,
        hasMore: PropTypes.bool,
        height: PropTypes.number,
        dataSource: PropTypes.object,
        _getRecommandList: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    onEndReached = () => {
        this.props._getRecommandList && this.props._getRecommandList('max');
    }

    onRefresh = () => {
        this.props._getRecommandList && this.props._getRecommandList();
    }

    render() {
        const row = (dataRow, index) => {
            return (
                <Row key={index} data={dataRow}></Row>
            );
        };
        return (
            <div className={home.home}>
                <TopBar></TopBar>
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.props.dataSource}
                    renderFooter={() => (<div style={{ padding: 0, textAlign: 'center' }}>
                        {this.props.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    renderRow={row}
                    style={{
                        height: this.props.height,
                        overflow: 'auto',
                    }}
                    pageSize={4}
                    pullToRefresh={<PullToRefresh
                        damping={50}
                        refreshing={this.props.refreshing}
                        onRefresh={this.onRefresh}
                        distanceToRefresh={25}
                    />}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={100}
                />
            </div>
        );
    }
}
