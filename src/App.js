import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';

import Home from './Home';
import Register from "./Register";
import PhoneValidation from './PhoneValidation';
import CodeValidation from "./CodeValidation"
import CreateUser from './CreateUser';
import Login from './Login';

import RegisterCard from './RegisterCard';
import PasswordCard from './PasswordCard';
import Account from './Account';
import SubmitPayment from './SubmitPayment';
import ReceivePayment from './ReceivePayment';

const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/"
              render={() => <Redirect to= {'/home'}/>}/>
          <Route path="/Yape--Sprint-5"
            render={() => <Redirect to= {'/home'}/>}/>
          <Route  path="/home" render={() => <Home model={model} />}/>
          <Route  path="/register" render={() => <Register model={model} />}/>
          <Route  path="/phone-validation" render={() => <PhoneValidation model={model} />}/>
          <Route  path="/code-validation" render={() => <CodeValidation model={model} />}/>
          <Route  path="/login" render={() => <Login model={model} />}/>
          
          <Route  path="/create-user" render={() => <CreateUser model={model} />}/>
          <Route  path="/register-card" render={() => <RegisterCard model={model} />}/>
          <Route  path="/password-card" render={() => <PasswordCard model={model} />}/>
          <Route  path="/account" render={() => <Account model={model} />}/>
          <Route  path="/submit-payment" render={() => <SubmitPayment model={model} />}/>
          <Route  path="/receive-payment" render={() => <ReceivePayment model={model} />}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;