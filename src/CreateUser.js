import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './CreateUser.css';
import {
	Grid, Row, Col, Image
} from 'react-bootstrap';
import {
	Input
} from 'react-materialize'

const CreateUser = ({ model }) => {
  return (
    <Grid className="text-center">
			<Row className="show-grid">
				<Col xs={10} xsOffset={1}  sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<center><Image src="http://174.138.48.60:3000/img/icons/lockone.png" /></center>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<h5 className="title">Crea tu usuario Yape</h5>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<span className="infoUser">Ingresa un nombre, email y clave de usuario</span>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input s={12} className="text-center user" placeholder="Nombre" onkeypress="return event.charCode >= 65 &amp;&amp; event.charCode <= 122"/>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input type="email" s={12} className="text-center message" placeholder="Email" onkeypress="return event.charCode >= 65 &amp;&amp; event.charCode <= 122"/>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input type="password" s={12} maxLength="6" className="text-center lock " placeholder="Contraseña" onkeypress="return event.charCode >= 65 &amp;&amp; event.charCode <= 122"/>
					<span className="note">Cuida esta clave como oro, es tu acceso a Yape.</span>
				</Col>
			</Row>
		</Grid>
  );
};

export default CreateUser;
