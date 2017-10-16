import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';
import './CodeValidation.css';
import {Input} from  'react-materialize';
import {Grid, Row, Col} from  'react-bootstrap'

const CodeValidation = ({ model }) => {
	let timer = 20;
	// setTimeout(()=>{(timer-1)},1000);
  return (
		<div>
			<Grid>
			<center>
				<Row>
					<Col xs={10} xsOffset={1}  sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
						<img className='cv-message' src="http://174.138.48.60:3000/img/icons/message.png"/>
						<h5 className='cv-title'>Ahora ingresa tu código</h5>
						<p>Enviamos un mensaje de texto al numero (escribir 123456)</p>
					</Col>
				</Row>
				<Row className="show-grid">
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
						<Input type="password" s={12} className="text-center cv-lock" maxLength="6" placeholder="-  -  -  -  -  -"/>
					</Col>
				</Row>
				<Row className='cv-retry'>
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
						<div>Reintentar en <img src="http://174.138.48.60:3000/img/icons/clock.png" className="cv-w-10" alt=""/> 
							{timer}
						</div>
					</Col>
				</Row>
			</center>
			</Grid>
		</div>
  );
};

export default CodeValidation;
