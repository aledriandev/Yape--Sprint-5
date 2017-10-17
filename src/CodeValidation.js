import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';
import './CodeValidation.css';
import { Input } from 'react-materialize';
import { Grid, Row, Col } from 'react-bootstrap'

const CodeValidation = ({ model }) => {
	let numer;
	const counter = () => {
		numer = setInterval(()=>{
			model.timer --;
			model.notify()
			console.log(model.timer);
			
		}, 5000);
	}
	const stop = () => {
		clearInterval(numer);
	}
	counter();
	return (
		<div>
			<Grid>
				<center>
					<Row>
						<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
							<img className='cv-message' src="http://174.138.48.60:3000/img/icons/message.png" />
							<h5 className='cv-title'>Ahora ingresa tu código</h5>
							<p>Enviamos un mensaje de texto al numero (escribir 123456)</p>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
							<Input type="text" s={12} className="text-center cv-lock" maxLength="6" placeholder="-  -  -  -  -  -" 
							onChange={e => model.validationSMS(e)}/>
						</Col>
					</Row>
					<Row className='cv-retry'>
						<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
							<p>Tu codigo es {model.user.passwordSMS}</p>
							<div>Reintentar en <img src="http://174.138.48.60:3000/img/icons/clock.png" className="cv-w-10" alt="" />
								{model.timer}
							</div>
						</Col>
					</Row>
					{model.nextPage &&
						<Route path="/code-validation"
            			render={() => <Redirect to= {'/create-user'}/>}/>
					}
				</center>
			</Grid>
		</div>
	);
};

export default CodeValidation;
