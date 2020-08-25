import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';

import {FormSignup, HeaderBackButton} from '../components/molecules';

import {Button} from '../components/atoms';
import {Login as LoginProcess} from '../redux/actions/auth';
import {connect} from 'react-redux';
import {config} from '../config/baseUrl';

export class Login extends Component {
  constructor(props) {
    super(props);
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
    console.log(this.props);
  }

  getData = (param, param2) => {
    this.setState((prevState) => ({
      formGroup: prevState.formGroup.map((form) =>
        form.placeholder === param
          ? Object.assign(form, {...form, value: param2})
          : form,
      ),
    }));
  };

  handleLogin = async () => {
    const {dispatch, navigation} = this.props;
    const {formGroup} = this.state;
    const data = {
      email: formGroup[0].value,
      password: formGroup[1].value,
    };

    await dispatch(LoginProcess(data))
      .then((res) => {
        Alert.alert('Login Success');
        navigation.replace('MainApp');
      })
      .catch((err) => {
        Alert.alert(err.response.data.data);
        console.log(err.response.data);
      });
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton submit={() => navigation.navigate('Signup')} />
        <View style={styles.formGroup}>
          <FormSignup
            title="Login"
            link="Forgot Your Password?"
            formGroup={this.state.formGroup}
            submit={this.getData}
            onPress={() => navigation.navigate('Forgot')}
          />
        </View>
        <View>
          <Button
            title="LOGIN"
            big={true}
            type="primary"
            submit={() => this.handleLogin()}
          />
          <View style={{padding: 10, alignItems: 'center'}}>
            <Text>Not registered?</Text>
          </View>
          <Button
            title="REGISTER"
            big={true}
            type="outline"
            submit={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Login);

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
