import React, { Component } from 'react';
import styles from '../assets/css/app.module.css';

class App extends Component {
  render() {
    console.log(styles)
    return (
      <div className={styles.wrap}>
        hello world!
      </div>
    );
  }
}

export default App;
