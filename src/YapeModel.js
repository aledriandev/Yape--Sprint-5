class YapeModel {
	constructor () {
		this.notify = null;
		this.user = {
      phone: null,
      passwordSMS: null,
      name: null,
      email: null,
      password: null,
      numberCard: "",
      cardMonth: "",
      cardYear: "",
      passwordCard: '',
    }
    this.timer = null;
  }
	subscribe (render) {
    this.notify = render;
    this.notify();
  }
  hidePartCard()
  {
    return ('************' + this.user.numberCard.slice(-4));
  }
  validationPasswordCard(e)
  {
    if (!isNaN(e.target.value))
    {
      this.user.passwordCard = e.target.value;
      this.notify();
    }
  }
  validateNumberCard(e)
  {
    if (!isNaN(e.target.value))
    {
      this.user.numberCard = e.target.value;
      this.notify();
      console.log(this.user.numberCard);
    }
  }
  
}

export default YapeModel;