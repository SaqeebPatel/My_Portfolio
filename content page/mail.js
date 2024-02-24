const firebaseConfig = {
  //   copy your firebase config informations\
    apiKey: "AIzaSyDeZJ232NIGabJudRzxn-K6LnvQLsvgoN0",
    authDomain: "portfoliosp-4c382.firebaseapp.com",
    databaseURL: "https://portfoliosp-4c382-default-rtdb.firebaseio.com",
    projectId: "portfoliosp-4c382",
    storageBucket: "portfoliosp-4c382.appspot.com",
    messagingSenderId: "388513341708",
    appId: "1:388513341708:web:4032b1954862a425e6a929"
  };


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};