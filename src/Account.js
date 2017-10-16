import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './Account.css';
import {Input} from  'react-materialize';
import {Grid, Row, Col} from  'react-bootstrap';

const Account = ({ model }) => {
  return (
		<div className='text-center account'>
			<Row className='hello'>
				<Col xs={10} xsOffset={1}  sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<img className='img-happy' src='http://174.138.48.60:3000/img/icons/happy-face.png'/>
					<h5 className='text-white bold'>Hola</h5>
					<span className='text-turquoise'> <img src="http://174.138.48.60:3000/img/icons/eye.png" className="eye w-7"/>Mostrar saldo</span>
				</Col>
			</Row>
			<div className='operations op text-left'>
				<span className='text-white'>ULTIMOS MOVIMIENTOS</span>
				<img className='show' src="http://174.138.48.60:3000/img/icons/right-arrow-circular-button.png"/>
			</div>
			<hr/>
			<div>
			{/* http://174.138.48.60:3000/img/icons/icon.png */}

			</div>
			<Row className='hello'>
				<Col xs={5} sm={5} md={6} lg={4}>
					<img className='img-happy' src='http://174.138.48.60:3000/img/icons/happy-face.png'/>
					<h5 className='text-white bold'>Hola</h5>
					<span className='text-turquoise'> <img src="http://174.138.48.60:3000/img/icons/eye.png" className="eye w-7"/>Mostrar saldo</span>
				</Col>
				<Col xs={7} sm={7} md={6} lg={4}>
					<img className='img-happy' src='http://174.138.48.60:3000/img/icons/happy-face.png'/>
					<h5 className='text-white bold'>Hola</h5>
					<span className='text-turquoise'> <img src="http://174.138.48.60:3000/img/icons/eye.png" className="eye w-7"/>Mostrar saldo</span>
				</Col>
			</Row>
		</div>
  );
};

export default Account;
