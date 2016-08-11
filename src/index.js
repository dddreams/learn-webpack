import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Link, Route ,browserHistory} from 'react-router';
import App from './js/App.js';

let res = ReactDOM.render(
	<App />,
	document.getElementById('app')
);