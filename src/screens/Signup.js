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
  FormSignup
} from '../components/molecules';

export class Signup extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <FormSignup />
      </View>
    )
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer:{
    height: height,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9'
  }
})

export default Signup
