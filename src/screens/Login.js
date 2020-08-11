import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import {FormSignup, HeaderBackButton} from '../components/molecules';

import {Button} from '../components/atoms';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      formGroup: [
        {
          placeholder: 'Email',
          value: '',
          type: 'emailAddress',
          secure: false,
        },
        {
          placeholder: 'Password',
          value: '',
          type: 'password',
          secure: true,
        },
      ],
    };
  }

  handleLogin = () => {
    console.log('Thanks for register');
  };

  handleBackButton = () => {
    console.log('Go Back');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton submit={this.handleBackButton} />
        <View style={styles.formGroup}>
          <FormSignup
            title="Login"
            link="Forgot Your Password?"
            formGroup={this.state.formGroup}
            submit={this.handleLogin}
          />
        </View>
        <View>
          <Button
            title="LOGIN"
            big={true}
            type="primary"
            submit={this.handleLogin}
          />
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
  },
  formGroup: {
    marginTop: width * 0.09,
    alignItems: 'center',
  },
});

export default Login;
