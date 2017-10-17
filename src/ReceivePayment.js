import React, {Component} from 'react';
import {Grid, Row, Col, Form, Image} from 'react-bootstrap';
import {Input, Button} from 'react-materialize';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import qr from './images/qr.png';
import './ReceivePayment.css';

const ReceivePayment = ({ model }) => {
  return (
    <Grid className="text-center receivePaymentGrid">
			<Row className="show-grid">
				<Col xs={2} sm={2} md={2} lg={2}>
					<NavLink to={"/account"}><span className="fa fa-angle-left fa-2x"></span></NavLink>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={8} xsOffset={2} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
					<h5 className="titleReceivePayment" >Presenta este código para recibir pagos</h5>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
					<p>Este código te identifica como usuario en Yape y protege tu número de teléfono</p>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={8} xsOffset={2}  sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
					<center><div className="circulo"><Image className="imgQR" src={qr}/></div></center>
				</Col>
			</Row>			
		</Grid>
  );
};

export default ReceivePayment;
