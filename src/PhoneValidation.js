import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './PhoneValidation.css';
import phone from "./phone.png";
import {
	Input, Button, Icon
} from 'react-materialize';

import { Grid, Row, Col, Image } from 'react-bootstrap';

const PhoneValidation = ({ model }) => {

	return (
		<Grid className="text-center">
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><center><Image className="phoneImg" src={phone} /></center></Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><h5 >Para comenzar validemos tu número</h5></Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><p>Recibirás un SMS con un código de validación</p></Col>
			</Row>

			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input
						className="input-yellow-bottom text-center"
						type="text"
						placeholder=" ingresa tu celular"
						maxLength="9"
						value={model.user.phone}
						onChange={e => model.validateNumberPhone(e)} />
					<input type="checkbox" id="terms" onChange={e => model.checkboxPhone(e)} />
					<label for="terms">Acepto los <span className="text-turquoise">términos y condiciones</span></label><br />
				</Col>
			</Row>
			<Row >
				<Col className="btns" xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					{
						model.activeNextRegisterPhone 
							    ? <NavLink to="/code-validation" className="navPhoneValidation">Continuar</NavLink>
          				: <Button className="btnPhoneValidation">Continuar</Button>
					}
				</Col>
			</Row>
		</Grid>
	);
};

export default PhoneValidation;


