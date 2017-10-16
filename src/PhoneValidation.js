import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';
import phone from "./phone.png";

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
			<div className="container-fluid text-center">
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="pt-63 content-center text-center">
							<img src={phone} className="w-40" alt="" />
							<h5 className="less-margin rem-1"><strong>Para comenzar validemos tu número</strong></h5>
							<span className="fs-12">Recibirás un SMS con un código de validación</span>
							<input type="number" onChange={(e) => this.number(e)} className="input-yellow-bottom text-purple-dark text-center" maxlength="9" placeholder="959666666" />
							{/* <input type="number" id="numMobile" onChange={(e)=>this.getNumber(e)} className="form-control inp-l" placeholder="959666666" required="" /> */}
							<br />
							<input type="checkbox" id="terms" />
							<label for="terms">Acepto los <span className="text-turquoise">términos y condiciones</span></label>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						{
							this.state.active ?
							 <a href="#" className="block button-register bg-yellow"><span className="text-uppercase text-white rem-08">continuar</span><br /></a>
							 :
							 <a href="#" className="block button-register bg-gray-light"><span className="text-uppercase text-white rem-08">continuar</span><br /></a>

						}
						 
						{/* {
								this.state.active ?
									<NavLink to={"/code-validation"} className="block button-register bg-yellow" >Next</NavLink>
									:
									<NavLink to={"/code-validation"} className="block button-register bg-gray-light" >Next</NavLink>
							} */}
					</div>

				</div >

			</div>
		)
	}

}


export default PhoneValidation;


