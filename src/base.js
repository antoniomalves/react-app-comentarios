import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqXG6D3Yhe0atJVsfTrCT51r66dJBKhok",
  authDomain: "commentsreact-c7ffa.firebaseapp.com",
  databaseURL: "https://commentsreact-c7ffa.firebaseio.com",
  projectId: "commentsreact-c7ffa",
  storageBucket: "commentsreact-c7ffa.appspot.com",
  messagingSenderId: "79868776084"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base