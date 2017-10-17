import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';

const SubmitPayment = ({ model }) => {
	const list = model.accounts.map ( (item, index) => <li key={item.uid} > {item.email} </li>)
	const onClick = (e) => {
			const emailDestino = 'luisa@gmail.com';
			var uidDestino = -1;
			model.accounts.forEach ( e => {
				if (e.email === emailDestino) 
					uidDestino = e.uid;
			});  
			console.log ('uidDestino', uidDestino);
			model.enviarDinero (uidDestino , 10 );
	};	
	return (
		<div>
    <h2>destino</h2>
		<ul>
			{list} 
		</ul>
		<h3>enviar dinero</h3>
		<button onClick={onClick} > nviar 10 soles a luisa </button>
		</div>
  );
};

export default SubmitPayment;
