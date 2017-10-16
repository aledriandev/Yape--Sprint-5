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
	Input, Button
} from 'react-materialize'

const CreateUser = ({ model }) => {
  return (
    <Grid className="text-center" id="createUser">
			<Row className="show-grid">
				<Col xs={10} xsOffset={1}  sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<center><Image src="http://174.138.48.60:3000/img/icons/lockone.png" className="imgLockone" /></center>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<h5 className="titleCU">Crea tu usuario Yape</h5>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<span className="infoUserCU">Ingresa un nombre, email y clave de usuario</span>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input s={12} className="text-center userCU" placeholder="Nombre"/>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input type="email" s={12} className="text-center messageCU" placeholder="Email"/>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input maxLength="6" type="password" s={12} className="text-center lockCU" placeholder="Password"/>
					<div className="noteCU">Cuida esta clave como oro, es tu acceso a Yape.</div>
				</Col>
			</Row>

			<Row>
				<Col className="btnsCU" xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					{
						!model.user.password
          	? <NavLink to="/register-card" className="navCreateUser">Crear Cuenta</NavLink>
          	: <Button className="btnCreateUser">Crear Cuenta</Button>
					}
				</Col>
			</Row>
		</Grid>
  );
};

export default CreateUser;
