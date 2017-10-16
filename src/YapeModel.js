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
    this.activeNextRegisterCard = false;
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
      console.log(this.user.numberCard.length)
      this.isCompleteRegisterCard();
      this.notify();
    }
  }
  getCardMonth(e)
  {
    if(!isNaN(e.target.value))
    {
      this.user.cardMonth = e.target.value;
      console.log(this.user.cardMonth.length)
      this.isCompleteRegisterCard();
      this.notify();
    }
  }
  getCardYear(e)
  {
    if(!isNaN(e.target.value))
    {
      this.user.cardYear = e.target.value;
      console.log(this.user.cardYear)
      this.isCompleteRegisterCard();
      this.notify();
    }
  }
  isCompleteRegisterCard()
  {
    if((this.user.numberCard.length == 16) && (this.user.cardMonth.length == 2) && (this.user.cardYear.length == 2))
    {
      this.activeNextRegisterCard = true;
    }
  }
}

export default YapeModel;