import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
  Redirect,
  onChange
  } from 'react-router-dom'
import ReactDOM  from 'react-dom';
import { Grid, Row, Col, img, Carousel } from 'react-bootstrap';
import './Register.css';

// https://www.npmjs.com/package/react-responsive-carousel

const CarouselYape=()=>{
  return(
  <Carousel>
  <Carousel.Item>
  
    <img className="imgYape rounded mx-auto d-block" src="http://174.138.48.60:3000/img/icons/icon-people.png"/>
    <div className="divm text-center">
    <h4 className="strongm"><strong>Paga a tu amigos</strong></h4>
    <p className="paragraphm"> Paga a quien quieras desde donde quieras , sin usar efectivo</p>
    </div>

  </Carousel.Item>
  <Carousel.Item>
    <img className="imgYape" src="http://174.138.48.60:3000/img/icons/happy-person.png"/>
    <div className="divm text-center">
    <h4 className="strongm"><strong>Sin número de cuenta</strong></h4>
    <p className="paragraphm">Elige a quién pagar desde tu lista de contactos.</p>
    </div>
  
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgYape" src="http://174.138.48.60:3000/img/icons/group-people.png"/>
    <div className="divm text-center">
    <h4 className="strongm"><strong>Gratis y Seguro</strong></h4>
    <p className="paragraphm">La transferencia es inmediata y gratutita de una cuenta a otra.</p>
    </div>

  </Carousel.Item>
</Carousel>
 )}

const ButtonYape=({model})=>{
  return(
    <Grid className="text-center">
        <Row className="botonMily">
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
            {
              <NavLink to={"/phone-validation"} className="button-content  bg-yellow text-white">REGISTRARME</NavLink>
            }
          </Col>
        </Row>
        <section className="container-fluid downMily">
        <span>¿Ya tienes cuenta? </span>
        {
                <NavLink to={"/login"} className="block milygreen">Inicia Sesión</NavLink>
           
            }
        </section>   
    </Grid>  

  )

}

const Register = ({model}) => {
  return (
    <div>
    <CarouselYape model={model}/>
    <ButtonYape model={model}/>
    </div>
  );
}
export default Register;