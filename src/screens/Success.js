import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';

import BackgroundImage from '../../assets/images/image.png';

import {FormSignup, HeaderBackButton} from '../components/molecules';

import {Button} from '../components/atoms';

class Success extends Component {
  constructor() {
    super();
    this.state = {
      formGroup: [
        {
          placeholder: 'Name',
          value: '',
          type: 'none',
          secure: false,
        },
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

  handleGoToHome = () => {
    console.log('Continue Shopping');
  };

  render() {
    return (
      <View style={styles.bgContainer}>
        <Image
          source={require('../../assets/images/image.png')}
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.successTitle}>Success!</Text>
          <Text style={styles.successMessage}>
            Your order will be delivered soon. Thank you for choosing our app!
          </Text>
          <Button
            title="Continue Shopping"
            big={false}
            type="primary"
            submit={this.handleSignup}
          />
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  bgContainer: {
    height: height,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
  },
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: width,
    alignItems: 'center',
    paddingTop: width * 0.25,
  },
  successTitle: {
    fontWeight: '700',
    fontSize: width * 0.08,
    textAlign: 'center',
    marginBottom: width * 0.03,
    color: '#222222',
  },
  successMessage: {
    fontWeight: '700',
    textAlign: 'center',
    width: width * 0.6,
    marginBottom: width * 0.03,
    letterSpacing: width * 0.0015,
    color: '#222222',
  },
});

export default Success;
