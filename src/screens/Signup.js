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

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Email: '',
      Password: '',
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

  
  handleSignup = (param, param2) => {
    this.setState(prevState => ({
      formGroup: prevState.formGroup.map(
        form => (form.placeholder===param? Object.assign(form, {...form, value: param2}) : form)
      )
    }))
  };
  
  handleBackButton = () => {
    console.log('Go Back');
  };
  
  render() {

    //panggil per-index
    console.log(this.state.formGroup[0].value)
    console.log(this.state.formGroup[1].value)
    console.log(this.state.formGroup[2].value)
    ///
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton submit={this.handleBackButton} />
        <View style={styles.formGroup}>
          <FormSignup
            title="Sign Up"
            link="Already have an account?"
            formGroup={this.state.formGroup}
            submit={this.handleSignup}
          />
        </View>
        <View>
          <Button
            title="SIGN UP"
            big={true}
            type="primary"
            submit={()=>this.handleSignup('Name', 'Test')}
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

export default Signup;
