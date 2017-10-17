class YapeModel {
	constructor () {
		this.notify = null;
		this.user = {
      phone: null,
      passwordSMSuser: null,
      name: "",
      email: "",
      password: "",
      numberCard: "",
      cardMonth: "",
      cardYear: "",
      passwordCard: '',
      passwordSMS: Math.round(Math.random()*(999999-100000)+100000),
    }
    this.timer = 20;
    this.activeNextRegisterCard = false;
    this.nextPage = false;
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
      this.isCompleteRegisterCard();
      this.notify();
    }
  }
  getCardMonth(e)
  {
    let month = parseInt(e.target.value);
    if(!isNaN(month))
    {
        if((month > 0) && (month < 13))
        {
          this.user.cardMonth = month;
          this.isCompleteRegisterCard();
          console.log(month);
          this.notify();
        } 
    }
    this.notify();
  }
  getCardYear(e)
  {
    let year = parseInt(e.target.value);
    if(!isNaN(year))
    {
      if((year > 16) && (year > 0))
      {
        this.user.cardYear = e.target.value;
        this.isCompleteRegisterCard();
        this.notify();
      } 
    }
  }
  isCompleteRegisterCard()
  {
    if((this.user.numberCard.length == 16) && (this.user.cardMonth.length == 2) && (this.user.cardYear.length == 2))
    {
      this.activeNextRegisterCard = true;
    }
  }
<<<<<<< HEAD
  saveInfo()
  {
    localStorage.setItem(this.user.phone, JSON.stringify(this.user));
    let guardado = localStorage.getItem(this.user.phone);
    guardado = JSON.parse(guardado);
    console.log('objetoObtenido: ', guardado.passwordCard);
  }
=======

  saveInfo()
  {
    localStorage.setItem("user1", JSON.stringify(this.user));
    let guardado = localStorage.getItem('user1');
    guardado = JSON.parse(guardado);
    console.log('objetoObtenido: ', guardado.passwordCard);
  }  
>>>>>>> 97c04577b5f2a26a5020497673fd536bccc91100
  decrement () {
    this.timer = (this.timer - 1);
    this.notify();
  }
  validationSMS (e) {
    if (!isNaN(e.target.value))
    {
      this.user.passwordSMSuser = e.target.value;
      console.log(this.user.passwordSMS.length)
      this.isVerificateSMS();
      this.notify();
    }
  }
  isVerificateSMS() {
    if(this.user.passwordSMSuser == this.user.passwordSMS)
    {
      this.nextPage = true;
    }
  }
}

export default YapeModel;