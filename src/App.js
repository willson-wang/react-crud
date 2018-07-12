import React, { Component } from 'react';
import './App.css';
import HelloWorld from './view/helloWorld'
import Comment from './view/comment'
import Clock from './view/clock'
import Wrap from './view/wrap'

class App extends Component {

  // state 是让组件控制自己的状态，props 是让外部对组件自己进行配置
  // 没有 state 的组件叫无状态组件（stateless component）函数式组件只能接受 props 而无法像跟类组件一样可以在 constructor 里面初始化 state。，设置了 state 的叫做有状态组件（stateful component）
  // React.js 并没有提供好的解决方案来管理这种组件之间的共享状态。在实际项目当中状态提升并不是一个好的解决方案，所以我们后续会引入 Redux 这样的状态管理工具来帮助我们来管理这种共享状态，对应vue中的slot
  // PropTypes.array，PropTypes.bool，对应vue中的props: {type: Array}
  // static propTypes = {
  //   name: PropTypes.string.isRequired
  // }

  static defaultProps = {
    name: 'jack'
  }

  constructor() {
    super();
    this.state = {
      isLiked: false,
      name: 'jack',
      count: 0,
      isShowClock: true,
      color: '#ccc',
      content: '<h3>这是一个标题</h3>'
    }
  }

  changLike(e) {
    console.log(this.state.isLiked); // false
    this.setState({
      isLiked: !this.state.isLiked
    })
    console.log(this.state.isLiked); // false，因为调用setState方法之后，不会了立马去修改state，而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新，目的是合并多次setState，减少渲染次数，优化性能，如果我们需要在setState之后操作需要改变后的state值，则需要给setState方法传入一个函数

    this.setState(() => {
      return {count: 1}
    })

    this.setState((prevState) => {
      return {count: prevState.count + 3 }
    })
  }

  handlerToggleClock() {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render() {
    const isGood = true;
    console.log(this.props);
    // render方法内需要注意的是可以把()，看成是``模板字符串，{}内可以放任何 JavaScript 的代码，包括变量、表达式计算、函数执行等等
    // 注意的是这些 on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上
    // 注意当要在事件的回到函数内让this只想当前的实例，需要手动调用bind方法进行绑定this
    // 如果你往 {} 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来,类似与v-for or ng-repeat等
    // this.props.children是一个数组
    // style 接受一个对象，这个对象里面是这个元素的 CSS 属性键值对，原来 CSS 属性中带 - 的元素都必须要去掉 - 换成驼峰命名，如 font-size 换成 fontSize，text-align 换成 textAlign

    const users = [
      { username: 'Jerry', age: 21, gender: 'male' },
      { username: 'Tomy', age: 22, gender: 'male' },
      { username: 'Lily', age: 19, gender: 'female' },
      { username: 'Lucy', age: 20, gender: 'female' }
    ]

    return (
      <div className="App" onClick={this.changLike.bind(this)}>
        {isGood ? <div>good</div> : <div>bad</div>}
        <div>
          {this.state.isLiked ? '取消' : '点赞' }
        </div> 
        <div style={{fontSize: '12px', color: this.state.color}}>{this.state.name}--- {this.state.count}</div>
        <HelloWorld text="老人与海" />
        <div>{[<span key="0">everyone</span>, <span key="1">is</span>, <span key="2">good</span>]}</div>
        <ul>
          {
            users.map((user, index) => {
              return (
                <li key={index}>
                  <span>{user.username}</span>
                  <span>{user.age}</span>
                  <span>{user.gender}</span>
                </li>
              )
            })
          }
        </ul>
        <Comment />
        <div onClick={this.handlerToggleClock.bind(this)}>toggle时钟</div>
        {this.state.isShowClock ? <Clock /> : null}
        <Wrap>
          <div className="header">
            对应children[0]
            <p>
              <span>0</span>
            </p>
          </div>
          <div className="main">1对应children[1]</div>
          <div className="footer">2对应children[2]</div>
        </Wrap>
        <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
      </div>
    );
  }
}

export default App;
