import * as firebase from 'firebase';

class Firebase {
  // Initialize Firebase
  constructor() {
    var config = {
      apiKey: 'AIzaSyDGMmmRTIMUoxoy0ONO7T8FWoBqBoOq49U',
      authDomain: 'cms-aocsa.firebaseapp.com',
      databaseURL: 'https://cms-aocsa.firebaseio.com',
      projectId: 'cms-aocsa',
      storageBucket: 'cms-aocsa.appspot.com',
      messagingSenderId: '961699715151'
    };
    firebase.initializeApp(config);

    // Observador de el estado de atenticación
    firebase
      .auth()
      .onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          console.log('Si está autorizado');
        } else {
          // No user is signed in.
          console.log('No está autorizado');          
        }
      });
    this.database = firebase.database();
  }
  // 0. Autenticar
  login(email, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log('Sesión terminada');
      }, function (error) {
        // An error happened.
        console.log('Error en terminar la sesión: ' + error);
      });
  }

  // 1. Crear platillos
  transaction(origen, destino, monto) {
    var date = new Date();
    return this
      .database
      .ref('yape/')
      .push({
        origen: origen,
        destino: destino,
        monto: monto,
        fecha: date.getUTCDay()
      });
  }

  query(origen) {
    return this
      .database
      .ref('yape/')
      .on('value', (snapshot) => {
        snapshot.forEach(childSnapshot => {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log(childData);
        })
      });
  }
}

class YapeModel {
  constructor() {
    this.notify = null;
    this.firebase = new Firebase();
    this.isLogging = false;
    this.user = {
      uid : -1,
      phone: "",
      passwordSMSuser: null,
      name: "",
      email: "",
      password: "",
      numberCard: "",
      cardMonth: "",
      cardYear: "",
      passwordCard: '',
      passwordSMS: Math.round(Math.random() * (999999 - 100000) + 100000),
      accountBalance :   Math.round(Math.random() * (999 - 100) + 100)
    }
    this.timer = 20;
    this.activeNextRegisterCard = false;
    this.nextPage = false;
    this.nextCreateUser = false;
    this.emailValid = false;
    this.activeCheckboxPhone = undefined;
    this.activeNextRegisterPhone = false;
    this.accounts = [];
    this.validateMonto = "";

  }
  
  subscribe(render) {
    this.notify = render;
    
    this.firebase.database.ref('account').on('value', (items) => {
      this.accounts = [];
      items.forEach ( snap => {
        var user = snap.val();
        user.uid = snap.key;
        this.accounts.push (user);
      });
      this.notify();      
    });    
    this.notify();
  }

  enviarDinero (uidDestino, monto) {
    this.user.accountBalance -= monto;
    this.firebase.database.ref ('account/' + this.user.uid).set (this.user).then ( () => {
      console.log ('cuenta yape actualizada!');
    }) ;

    this.firebase.database.ref ('account/' + uidDestino).once ('value').then ( (snap) => {
      var userDestino = snap.val();
      userDestino.accountBalance += monto;
      this.firebase.database.ref ('account/' + uidDestino).set (userDestino).then ( () => {
        console.log ('cuenta yape actualizada!');
      }) ;
    }) ;


   } 

  hidePartCard()
  {
    return ('************' + this.user.numberCard.slice(-4));
  }
  validationPasswordCard(e)
  {
    if (!isNaN(e.target.value)) {
      this.user.passwordCard = e.target.value;
      this.notify();
    }
  }
  validateNumberCard(e)
  {
    if (!isNaN(e.target.value)) {
      this.user.numberCard = e.target.value;
      this.isCompleteRegisterCard();
      this.notify();
    }
  }
  getCardMonth(e)
  {
    if (!isNaN(e.target.value)) {
      this.user.cardMonth = e.target.value;
      this.isCompleteRegisterCard();
      this.notify();
    }
  }
  getCardYear(e)
  {
    if (!isNaN(e.target.value)) {
      this.user.cardYear = e.target.value;
      this.isCompleteRegisterCard();
      this.notify();
    }
  }
  isCompleteRegisterCard()
  {
    if ((this.user.numberCard.length == 16) && (this.user.cardMonth.length == 2) && (this.user.cardYear.length == 2)) {
      this.activeNextRegisterCard = true;
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then ( (ret) => {
        console.log ('login uid', ret.uid);
        this.firebase.database.ref ('account/' + ret.uid).set (this.user).then ( () => {
          console.log ('cuenta yape creada!');
        }) ;
        
        this.firebase.database.ref ('account/' + ret.uid).on('value',  snap => {            
          this.user = snap.val();
          this.user.uid = snap.key;
          console.log ("on...", this.user);
          this.notify();
        }); 

      });
    }
  }
  saveInfo()
  {
    localStorage.setItem(this.user.phone, JSON.stringify(this.user));
    let guardado = localStorage.getItem(this.user.phone);
    guardado = JSON.parse(guardado);
    console.log('objetoObtenido: ', guardado.passwordCard);
  }
  decrement() {
    this.timer = (this.timer - 1);
    this.notify();
  }
  validationSMS(e) {
    if (!isNaN(e.target.value)) {
      this.user.passwordSMSuser = e.target.value;
      console.log(this.user.passwordSMS.length)
      this.isVerificateSMS();
      this.notify();
    }
  }
  isVerificateSMS() {
    if (this.user.passwordSMSuser == this.user.passwordSMS) {
      this.nextPage = true;
    }
  }
  validateName(e)
  {
    if (isNaN(e.target.value)) {
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
    if (!isNaN(e.target.value)) {
      this.user.password = e.target.value;
      this.validateAllUser();
      this.notify();
    }
  }

  validateAllUser(e)
  {
    if ((this.user.password.length == 6)  && (this.emailValid == true)) {
      this.firebase.login(this.user.email, this.user.password).then ( (ret) => {
             
        this.firebase.database.ref ('account/' + ret.uid).on('value',  snap => {            
          this.user = snap.val();
          this.user.uid = snap.key;
          console.log ("on...", this.user);
          this.notify();
        }); 
        this.isLogging = true;   
        console.log ("login correcto", this.user.email);
        this.notify();
        
      }).catch ( (e) => {
        this.isLogging = false;        
        console.log ("login incorrecto", this.user.email);
        this.notify();
      }) ; 
    }
    if ((this.user.password.length == 6) && (this.user.name.length >= 2) && (this.emailValid == true)) {
      this.nextCreateUser = true;

    } else {
      this.nextCreateUser = false;
    }
  }

  validateNumberPhone(e) {
    if (!isNaN(e.target.value)) {
      this.user.phone = e.target.value;
      console.log(this.user.phone.length)
      this.isCompleteRegisterPhone();
      this.notify();
    }
  }
  checkboxPhone(e) {
    this.activeCheckboxPhone = e.target.checked;
    this.isCompleteRegisterPhone();
    this.notify();
    console.log(this.activeCheckboxPhone)
  }

  isCompleteRegisterPhone() {
    if ((this.activeCheckboxPhone == true) && (this.user.phone.length == 9)) {
      this.activeNextRegisterPhone = true;
    } else{
      this.activeNextRegisterPhone = false;
    }
  }
  validateSubmitPayment(e){
    if (!isNaN(e.target.value)) {
      this.validateMonto = e.target.value;
      console.log(this.validateMonto)
      this.notify();
    }
  }

}

export default YapeModel;