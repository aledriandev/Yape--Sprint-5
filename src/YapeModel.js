class YapeModel {
	constructor () {
		this.notify = null;
		this.user = {
      phone: null,
      passwordSMS: null,
      name: null,
      email: null,
      password: null,
      numberCard: '12345678',
      cardMonth: null,
      cardYear: null,
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
    return ('****' + this.user.numberCard.slice(4));
  }
  validationPasswordCard(e)
  {
    if (!isNaN(e.target.value))
    {
      this.user.passwordCard = e.target.value;
      this.notify();
    }
  }
}

export default YapeModel;