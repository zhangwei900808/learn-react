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
import WelcomeDialog from './components/WelcomeDialog'
import Apps from './components/App'
import FilterableProductTable from './components/FilterableProductTable'
//我的router组件
import Router from './router/index'
import ParamsExample from './router/ParamsExample'

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<ParamsExample />, document.getElementById('root'));
// ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>,document.getElementById('root'));
registerServiceWorker();
