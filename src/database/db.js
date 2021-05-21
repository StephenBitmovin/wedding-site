import firebase from 'firebase/app'

import 'firebase/database'
  
  // Set the configuration for your app
  // TODO: Replace with your project's config object
const config = {
  apiKey: "AIzaSyAjGhUhxaB665isNyR8Yl9RCgFkPytTCzw",
  authDomain: "wedding-website-e9ee4.firebaseapp.com",
  databaseURL: "https://wedding-website-e9ee4-default-rtdb.firebaseio.com",
  projectId: "wedding-website-e9ee4",
  storageBucket: "wedding-website-e9ee4.appspot.com",
  messagingSenderId: "359390995768",
  appId: "1:359390995768:web:aecfcac7289fc5a3da8dcd",
  measurementId: "G-8L6PSXJDQ2"
}

firebase.initializeApp(config)

// Get a reference to the database service
const database = firebase.database()

const addParty = party => {
  return firebase.database().ref('parties/').set({
    ...party
  })
}

export default addParty