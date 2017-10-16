import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import {Grid, Row, Col, Form, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';
import './App.css';
import bcpCard from './images/bcpCard.png';

const PasswordCard = ({ model }) => {
  return (
    <Grid className="text-center">
			<Row className="show-grid">
				<Col xs={4} xsOffset={4}><img src={bcpCard}/></Col>
			</Row>
			<Row className="show-grid">
				<Col xs={4} xsOffset={4}><h4>Ingresa la clave de tu tarjeta</h4></Col>
			</Row>
			<Row className="show-grid">
				<Col xs={4} xsOffset={4}><p>Tarjeta</p></Col>
			</Row>
			<Form>
				<Row className="show-grid">
					<Col xs={4} xsOffset={4}>
						<FormGroup controlId="formValidationSuccess4" validationState="success">
							<InputGroup>
								<InputGroup.Addon><i class="fa fa-lock" aria-hidden="true"></i></InputGroup.Addon>
								<FormControl type="text" />
							</InputGroup>
							<FormControl.Feedback />
						</FormGroup>
					</Col>							
				</Row>
				<Row className="show-grid">
					<Col xs={4} xsOffset={4}>
						<Button type="submit">REGISTRAR</Button>
					</Col>
				</Row>	
			</Form>
		</Grid>
  );
};

export default PasswordCard;