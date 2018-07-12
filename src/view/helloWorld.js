import React from 'react';
// 函数式组件
const HelloWorld = (props) => {
  const sayHi = () => {console.log(props);}
  return (
    <div onClick={sayHi}>Hello World {props.text}</div>
  )
}

export default HelloWorld;