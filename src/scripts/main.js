/**
 * Created by CAN on 2016/9/25.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/helloWorld.js');
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('app')
);
