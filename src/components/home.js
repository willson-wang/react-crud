import React, { Component } from 'react';
import { PullToRefresh, ListView } from 'antd-mobile';
import home from '../assets/css/home.module.css';
import { getRecommandList } from '../api/home';
import Row from './tpl/row';
import TopBar from '../components/top-bar';

const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2
});

export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            initData: [],
            dataSource: dataSource.cloneWithRows([]),
            isLoading: false,
            refreshing: false,
            hasMore: false,
            height: document.documentElement.clientHeight - 44 - 36 - 46,
        };
    }

    UNSAFE_componentWillMount() {
        this._getRecommandList();
    }

    _getRecommandList (flag = 'min') {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({
            isLoading: true,
            refreshing: true
        });

        let params = [];
        params[`${flag}_behot_time`] = (+new Date()).toString().slice(0, 10);

        getRecommandList('https://m.toutiao.com/list/', params).then((res) => {
            console.log(this.state.initData, this.state.initData.length);
            this.setState({
                initData: flag === 'min' ? res.data : this.state.initData.concat(res.data),
                dataSource: dataSource.cloneWithRows(flag === 'min' ? res.data : this.state.initData.concat(res.data))
            });
        }).catch((err) => {
            console.log('err', err);
        }).finally(() => {
            this.setState({
                isLoading: false,
                refreshing: false
            });
        });
    }

    onEndReached = () => {
        this._getRecommandList('max');
    }

    onRefresh = (e) => {
        console.log('refresh', e);
        this._getRecommandList();
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
                    dataSource={this.state.dataSource}
                    renderFooter={() => (<div style={{ padding: 0, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    renderRow={row}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    pageSize={4}
                    pullToRefresh={<PullToRefresh
                        damping={36}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                        distanceToRefresh={window.devicePixelRatio * 25}
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
