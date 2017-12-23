import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBl5xRf5DZx9_ADaR1-zbZG_7fEjchonxM',
      authDomain: 'auth-87657.firebaseapp.com',
      databaseURL: 'https://auth-87657.firebaseio.com',
      projectId: 'auth-87657',
      storageBucket: 'auth-87657.appspot.com',
      messagingSenderId: '398739795829'
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}
