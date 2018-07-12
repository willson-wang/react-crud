import React, { Component } from 'react';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      userName: '',
      content: ''
    }
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
    
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.input.focus();
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  submit() {
    this.state.commentList.push({
      userName: this.state.userName,
      content: this.state.content
    })
    this.setState({
      commentList: this.state.commentList
    })
    this.setState({
      content: ''
    })
  }

  handlerInputName(e) {
    this.setState({
      userName: e.target.value
    })
  }

  handlerInputContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  render() {
    console.log('render');
    // ref属性对应的属性值为一个函数，函数内传入的参数就是改元素的dom
    return (
      <div>
        <div>
          用户名： <input ref={(input) => {this.input = input}} value={this.state.userName} onChange={this.handlerInputName.bind(this)}/>
        </div>
        <div>
          评论内容： <textarea value={this.state.content} onChange={this.handlerInputContent.bind(this)}></textarea>
        </div>
        <div>
          <button type="button" onClick={this.submit.bind(this)}>发布</button>
        </div> 
        <ul>
          {
            this.state.commentList.map((item, index) => {
              return (
                <li key={index}>{item.userName}{item.content}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Comment;