import firebase from 'firebase'

const database = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
}

const config = {
  apiKey: database.apiKey,
  authDomain: database.authDomain,
  databaseURL: database.databaseURL,
  storageBucket: database.storageBucket,
  messagingSenderId: database.messagingSenderId,
}
const randomString = new Date().getTime()
const otherApp = firebase.initializeApp(config, `DailyApp${randomString}`)

// Get a reference to the database service
const Database = otherApp.database()

console.log('connect db')

export default Database
