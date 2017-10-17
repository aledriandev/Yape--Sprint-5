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