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
    this.nextCreateUser = false;
    this.emailValid = false;
    this.activeCheckboxPhone = false;
    this.activeNextRegisterPhone = false;
    this.lengthPhone = null;
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
    if(!isNaN(e.target.value))
    {
        this.user.cardMonth = e.target.value;
        this.isCompleteRegisterCard();
        this.notify();   
    }
  }
  getCardYear(e)
  {
    if(!isNaN(e.target.value))
    {
      this.user.cardYear = e.target.value;
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
  saveInfo()
  {
    localStorage.setItem(this.user.phone, JSON.stringify(this.user));
    let guardado = localStorage.getItem(this.user.phone);
    guardado = JSON.parse(guardado);
    console.log('objetoObtenido: ', guardado.passwordCard);
  }
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
  validateName(e)
  {
    if(isNaN(e.target.value))
    {
      this.user.name = e.target.value;
      this.validateAllUser();
      this.notify();
    }
  }
  validateEmail(e)
  {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    this.user.email = e.target.value;
			if (emailRegex.test(this.user.email)) {
          this.emailValid = true;
      }
      this.notify(); 
  }
  validatePassword(e)
  {
    if(!isNaN(e.target.value))
    {
      this.user.password = e.target.value;
      this.validateAllUser();
      this.notify();
    }
  }
  validateAllUser(e)
  {
    if((this.user.password.length == 6) && (this.user.name.length >= 2) && (this.emailValid == true))
    {
      this.nextCreateUser = true;
    } else 
    {
      this.nextCreateUser = false;
    }
  }
    validateNumberPhone(e){
    if (e.target.value.length == 9) {
			this.lengthPhone = true;
		
		} else {
			this.lengthPhone= false;
		
		}
    this.notify();
  }
  checkboxPhone(e){	
      if(this.activeCheckboxPhone = e.target.checked){
        this.activeCheckboxPhone = true;
      } else{
        this.activeCheckboxPhone = false;
      }	
      this.notify();
  }

  isCompleteRegisterPhone(){
    if((this.activeCheckboxPhone == true)&&(this.lengthPhone == true)){
      this.activeNextRegisterPhone = true;
    }   
  }
}

export default YapeModel;