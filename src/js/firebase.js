// Initialize Firebase
const config = {
  apiKey: "AIzaSyCtd80iZcrm5aEb2zIB9KuVHfFFBAwXlLU",
  authDomain: "contact-form-ca97a.firebaseapp.com",
  databaseURL: "https://contact-form-ca97a.firebaseio.com",
  projectId: "contact-form-ca97a",
  storageBucket: "contact-form-ca97a.appspot.com",
  messagingSenderId: "437338974718"
};
firebase.initializeApp(config);

//Get references collection
const messagesRef = firebase.database().ref('messages');

//Save messages to Firebase
const saveMessage = (name, company, email, phone, message) => {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name,
    company,
    email,
    phone,
    message
  })
};