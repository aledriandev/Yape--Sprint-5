import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import YapeModel from './YapeModel'

const model = new YapeModel();
const render = () => {
	ReactDOM.render(<App model = {model}/>, document.getElementById('root'));
}

model.subscribe(render);
render();
registerServiceWorker();