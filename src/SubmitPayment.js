import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import {
	Input, Button, Icon
} from 'react-materialize';
import './SubmitPayment.css';

const SubmitPayment = ({ model }) => {
	const list = model.accounts.map((item, index) => <li className="contact cash" key={item.uid}>{item.email}</li>)
	const onClick = (e) => {
		const emailDestino = 'luisa@gmail.com';
		var uidDestino = -1;
		model.accounts.forEach(e => {
			if (e.email === emailDestino)
				uidDestino = e.uid;
		});
		console.log('uidDestino', uidDestino);
		model.enviarDinero(uidDestino, 10);
	};
	return (
		<Grid className="text-center">
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<h5 className="titleSubmitPayment">USUARIO</h5>
				</Col>

			</Row>
			<br />
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<ul>
						{list}
					</ul>
				</Col>
			</Row>
			<hr />
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><h5 >Enviar dinero a: </h5></Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input type="text" className="moneda text-center" value={model.validateMonto} onChange={e => model.validateSubmitPayment(e)}></Input>
				</Col>
			</Row>
			<Row>
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Button className="btns" onClick={onClick} > Enviar </Button>
				</Col>

			</Row>
		</Grid>

	);
};

export default SubmitPayment;
