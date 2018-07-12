import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * ReactDOM.render方法内的大致处理过程为
 * 1. app = new App() new一个实例
 * 2. domJsxObj = app.render()然后调用render方法生成一个dom对象
 * 3. 利用domJsxObj对象生成dom元素，appDom = createDomFromObject(domJsxObj)
 * 4. 将dom插入到传入的dom内，document.getElementById('root').appendChild(appDom)
 * 
 * 所以整个组件的生命周期如下
 * constructor()执行
 * render()调用
 * appendChild
 * 
 * 为了更好的掌控组件的挂载过程，添加了新的钩子函数
 * constructor()执行   【用于state 的初始化工作放】
 * componentWillMount() // render生成jsxObj之前调用 【进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动等】
 * render()调用
 * appendChild
 * componentDidMount() //  组件生成的DOM 元素append页面以后调用  【获取dom节点，如获取ref关联的dom节点，注意componentDidMount钩子函数内是还获取不到dom节点的】
 * componentWillUnmount // 组件对应的 DOM 元素从页面中删除之前调用 【数据的清理，如清除定时器等】
 * 
 * react除了提供组件挂载的过程中添加了钩子函数，在组件更新的过程中也添加了钩子函数
 * shouldComponentUpdate(nextProps, nextState)  控制组件是否重新渲染。如果返回 false 组件就不会重新渲染
 * componentWillReceiveProps(nextProps) 组件从父组件接收到新的 props 之前调用
 * componentWillUpdate() 组件开始重新渲染之前调用
 * componentDidUpdate() 组件重新渲染并且把更改变更到真实的 DOM 以后调用
 * */ 

ReactDOM.render(<App text="一本书" onClick={() => {console.log('aaa');}} />, document.getElementById('root'));
registerServiceWorker();
