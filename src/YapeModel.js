import React, { Component } from 'react';
import axios from 'axios';
import {getUserData} from './GitHubApi';
class Model {
	constructor () {
		this.notify = null;
		this.user = {
      password: null,
      name: null,
      email: null,
      
    }
  }
	subscribe (render) {
		this.notify = render;
  }
}

export default Model;