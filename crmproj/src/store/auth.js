import firebase from 'firebase/app'

export default {
  action: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        console.log()
        throw e
      }
    }
  }
}
