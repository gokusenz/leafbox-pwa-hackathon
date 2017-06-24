import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBi56RzLzF4dCgdh53vJjZfBsGzIrJ5YHA",
  authDomain: "leafbox-pwa-hackathon.firebaseapp.com",
  databaseURL: "https://leafbox-pwa-hackathon.firebaseio.com",
  projectId: "leafbox-pwa-hackathon",
  storageBucket: "leafbox-pwa-hackathon.appspot.com",
  messagingSenderId: "179178003414"
}
const randomString = new Date().getTime()
const otherApp = firebase.initializeApp(config, `LeafBox${randomString}`)

// Get a reference to the database service
const Database = otherApp.database()

console.log('connect db')

export default Database
