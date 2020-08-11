import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';

import {
  MultipleTextFieldGroup,
  HeaderBackButton
} from '../components/molecules';

import {
  Button
} from '../components/atoms';

class ChangeAddress extends Component {
  constructor(){
    super();
    this.state = {
      formGroup: [
        {
          placeholder: 'Name',
          value: '',
          type: 'none',
          secure: false
        },
        {
          placeholder: 'Email',
          value: '',
          type: 'emailAddress',
          secure: false
        },
        {
          placeholder: 'Password',
          value: '',
          type: 'password',
          secure: true
        },
      ]
    }
  }

  handleSignup = () =>{
    console.log('Thanks for register')
  }

  handleBackButton = () =>{
    console.log('Go Back')
  }

  handleSaveAddressButton = () =>{
    console.log('Pressed')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton submit={this.handleBackButton} middleComponent={true} midCompTitle='Change Address' />
        <View style={styles.formContainer}>
          <MultipleTextFieldGroup formGroup={this.state.formGroup} />
        </View>
        <Button title='SAVE ADDRESS' type='primary' big={true} submit={this.handleSaveAddressButton} />
      </View>
    )
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    height: height,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9'
  },
  formContainer:{
    alignItems: 'center'
  }
})

export default ChangeAddress;
