import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './Account.css';
import {Input, Button} from  'react-materialize';
import {Grid, Row, Col} from  'react-bootstrap';

const Account = ({ model }) => {
  return (
		<div className='text-center ac-account'>
			<Row className='ac-hello'>
				<Col xs={10} xsOffset={1}  sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<img className='ac-img-happy' src='http://174.138.48.60:3000/img/icons/happy-face.png'/>
					<h5 className='ac-text-white ac-bold'>Hola</h5>
					<span className='ac-text-turquoise'> <img src="http://174.138.48.60:3000/img/icons/eye.png" className="ac-eye ac-w-7"/>
					 Saldo: S/. {model.user.accountBalance} </span>
				</Col>
			</Row>
			<div className='ac-operations ac-op text-left'>
				<span className='ac-text-white'>ULTIMOS MOVIMIENTOS</span>
				<img className='ac-show' src="http://174.138.48.60:3000/img/icons/right-arrow-circular-button.png"/>
			</div>
			<hr/>
			<Row className='ac-operations ac-pd-0'>
				<Col xs={5} sm={5} md={6} lg={4}>
					<img className='ac-img-icon' src='http://174.138.48.60:3000/img/icons/icon.png'/>
				</Col>
				<Col xs={7} sm={7} md={6} lg={8} className='text-left ac-mg-20'>
					<h6 className='ac-text-white ac-bold'>¿Aún no realizas tu primer pago?</h6>
					<p className='ac-text-white'>Es rapido y sencillo</p>
				</Col>
			</Row>
			<Row className='ac-operations ac-pd-20'>
				<Col xs={6} sm={6} md={6} lg={6}>
					<NavLink to='/submit-payment'><Button floating large className='red' waves='light' icon='near_me' /></NavLink>
					<p className='ac-text-white ac-bold'>ENVIAR PAGO</p>
				</Col>
				<Col xs={6} sm={6} md={6} lg={6}>
					<NavLink to='/receive-payment'><Button floating large className='amber' waves='light' icon='crop_free' /></NavLink>
					<p className='ac-text-white ac-bold'>RECIBIR PAGO</p>
				</Col>
			</Row>
		</div>
  );
};

export default Account;
