import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onButtonPress() {
    return;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="name@domain.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
          />
        </CardSection>
        <CardSection>
          <Button
            text="login"
            onPress={this.onButtonPress.bind(this)}
          >
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
