import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import ReactDOM  from 'react-dom';
import {Carousel} from 'react-responsive-carousel';
import {Button} from 'react-materialize';
import { Grid, Row, Col, Form, FormGroup, InputGroup, FormControl, Image, Checkbox } from 'react-bootstrap';
import './Register.css';


// https://www.npmjs.com/package/react-responsive-carousel


class Register extends React.Component{
  constructor(props) {
		super(props);
		this.state = {
			active: true,
		}
	}
  render() {
        return (
     
<Grid className="text-center">
<div className="item">
  <img src="data/images/icon-people.png" className="img-respoonsive"/>
  <b><h4 className="less-margin">Paga a tu amigos</h4></b>
  <p className="less-margin"> Paga a quien quieras desde donde quieras , sin usar efectivo</p>
</div>
<Form>
      <Row className="botonMily">
      <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
        {
          this.state.active ?
            <NavLink to={"/phone-validation"} className="block button-content bg-yellow text-white">REGISTRARME</NavLink>
            :
            <NavLink to={"/phone-validation"} className="button-content bg-gray-light text-white">REGISTRARME</NavLink>
        }
      </Col>
    </Row>
  </Form>
</Grid>
  
        );
    }
  }

    export default Register;

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls

{/* <Carousel>
<div>
    <img src="data/images/icon-people.png" />
    <p className="legend">Legend 1</p>
</div>
<div>
    <img src="data/images/group-people.png" />
    <p className="legend">Legend 2</p>
</div>
<div>
    <img src="data/images/happy-person.png" />
    <p className="legend">Legend 3</p>
</div>
<div>
    <img src="assets/4.jpeg" />
    <p className="legend">Legend 4</p>
</div>

</Carousel> */}

{/* //<Carousel className="carousel-slide">
//   <Carousel.Item>
//     <img className="img- img-responsive" alt="900x500" src={"/img/group-people.png"}/>
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <div className="text-center">
//   <Carousel.Item>
    
//     <img className="img-carousel img-responsive" alt="900x500" src={"/img/happy-person.png"}/>
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   </div>
//   <Carousel.Item>
//     <img className="img-carousel img-responsive" alt="900x500" src={"/img/icon-people.png"}/>
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel> */}
