///<reference types='webpack-env' />
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import styles from './index.css';
import './reset.css';

const App = () => (
  <div className={styles.main}>
    这世界是一个竞技场
    <span className={styles['main-subtitle']}>
      每个人心中都有一个小小英雄
    </span>
    <footer className={styles['main-footer']}>
      虎扑前端团队 @hupu-fed
    </footer>
  </div>
);

render(<App />, document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}

