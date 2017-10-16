import React, {Component} from 'react';
import {
	BrowserRouter, Route,	Switch,	NavLink, Redirect
} from 'react-router-dom';
import {
	Grid,	Row, Col, Image,	OverlayTrigger,	Tooltip
} from 'react-bootstrap';
import './RegisterCard.css';
import bcpCard from './images/bcpCard.png';
import {
	Input,	Button, 	Icon
} from 'react-materialize';

const RegisterCard = ({ model }) => {
  return (
		<Grid className="text-center">
			<Row className="show-grid">
				<Col xs={10} xsOffset={1}  sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<center><Image src={bcpCard} className="bcpCardRC" /></center>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<h5 className="title">Registra tu tarjeta de débito BCP</h5>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<p>Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</p>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input type="text" 
						s={12} 
						maxlength="16" 
						className="text-center card" 
						value={model.user.numberCard}
						onChange={e => model.validateNumberCard(e)}/>
				</Col>
			</Row>
			<Row className="show-grid scan">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Image src="http://174.138.48.60:3000/img/icons/scan.png" className="logoScan"/>
					<OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">No disponible en este momento</Tooltip>}>
      					<Button bsStyle="default" className="link">Escanear Tarjeta</Button>
    				</OverlayTrigger>
				</Col>
			</Row>
			<Row className="show-grid date-group">
				<Col xs={6} className="dates">
					<p className="date">Fecha de Vencimiento</p>
				</Col>
				<Col xs={2} className="dates">	
					<Input className='text-center input-date' 
						type='text' 
						maxLength="2"
						placeholder="Mes"
						value={model.user.cardMonth}
						onChange={e => model.getCardMonth(e)} />
				</Col>
				<Col xs={1} className="dates">
					<p className='text-center slash'>/</p>
				</Col>
				<Col xs={2} className="dates">
				<Input className='text-center input-date' 
						type='text' 
						maxLength="2"
						placeholder="Año"
						value={model.user.cardYear}
						onChange={e => model.getCardYear(e)} />
				</Col>
			</Row>
			<Row>
				<Col className="btns" xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					{
						!model.user.password
          	? <NavLink to="/register-card" className="navRegisterCard">Crear Cuenta</NavLink>
          	: <Button className="btnRegisterCard">Crear Cuenta</Button>
					}
				</Col>
			</Row>
		</Grid>
  );
};

export default RegisterCard;
