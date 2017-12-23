import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmail = (email) => {
    this.setState({ email })
  }

  handlePassword = (password) => {
    this.setState({ password })
  }

  onButtonPress = () => {
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={this.handleEmail}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            value={this.state.password}
            onChangeText={this.handlePassword}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Log in
          </Button>
        </CardSection>

      </Card>
    )
  }
}
