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
import {connect} from 'react-redux';
import {Register} from '../redux/actions/auth';

class Signup extends Component {
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

  getData = (param, param2) => {
    this.setState((prevState) => ({
      formGroup: prevState.formGroup.map((form) =>
        form.placeholder === param
          ? Object.assign(form, {...form, value: param2})
          : form,
      ),
    }));
  };

  handleSignUp = async () => {
    const {dispatch, navigation} = this.props;
    const {formGroup} = this.state;
    const data = {
      name: formGroup[0].value,
      email: formGroup[1].value,
      password: formGroup[2].value,
    };
    await dispatch(Register(data))
      .then((res) => {
        Alert.alert(
          'Register Success, Check your email for get activation code',
        );
        navigation.replace('Verification');
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
        <HeaderBackButton submit={this.handleBackButton} />
        <View style={styles.formGroup}>
          <FormSignup
            title="Sign Up"
            link="Already have an account?"
            formGroup={this.state.formGroup}
            submit={this.getData}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View>
          <Button
            title="SIGN UP"
            big={true}
            type="primary"
            submit={() => {
              this.handleSignUp();
            }}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Signup);

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
