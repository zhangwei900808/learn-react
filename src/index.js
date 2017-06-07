import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// 我的组件
import NameForm from './components/NameForm'
import EssayForm from './components/EssayForm'
import FlavorForm from './components/FlavorForm'
import Reservation from './components/Reservation'
import Calculator from './components/Calculator'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Calculator />,document.getElementById('root'));
registerServiceWorker();
