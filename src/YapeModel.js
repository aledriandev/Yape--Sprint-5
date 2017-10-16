import React, { Component } from 'react';

class YapeModel {
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

export default YapeModel;