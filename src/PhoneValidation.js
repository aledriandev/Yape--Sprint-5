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
	Button,
} from 'react-materialize';
import { Grid, Row, Col, Form, FormGroup, InputGroup, FormControl, Image, Checkbox } from 'react-bootstrap';

// const PhoneValidation = ({ model }) => {
//   return (
//     <h2>PhoneValidation</h2>
//   );
// };
class PhoneValidation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
	}

	number(e) {
		if (e.target.value.length == 9) {
			this.setState({
				active: true
			});
		} else {
			this.setState({
				active: false
			});
		}
	};

	render() {
		return (

			<Grid className="text-center">
				<Row className="show-grid">
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><center><Image className="spaceInit" src={phone} /></center></Col>
				</Row>
				<Row className="show-grid">
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><h5>Para comenzar validemos tu número</h5></Col>
				</Row>
				<Row className="show-grid">
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><p>Recibirás un SMS con un código de validación</p></Col>
				</Row>
				<Form>
					<Row className="show-grid">
						<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
							<FormGroup controlId="formValidationSuccess4" validationState="success">
								<InputGroup>

									<FormControl onChange={(e) => this.number(e)} className="input-yellow-bottom text-purple-dark text-center" type="text" placeholder=" ingresa tu celular" maxLength="9" />
									
									 <input type="checkbox" id="terms" /> 
									<label for="terms">Acepto los <span className="text-turquoise">términos y condiciones</span></label><br />
								</InputGroup>

							</FormGroup>
					
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
							{
								this.state.active ?
									<NavLink to={"/code-validation"} className="block button-register bg-yellow text-white">CONTINUAR</NavLink>
									:
									<NavLink to={"/code-validation"} className="button-register bg-gray-light text-white">CONTINUAR</NavLink>
							}
						</Col>
					</Row>
				</Form>

			</Grid>

		)
	}

}


export default PhoneValidation;


