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
import {Forgot, ChangePassword} from '../redux/actions/auth';
import {connect} from 'react-redux';

export class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formGroup: [
        {
          placeholder: 'New Password',
          value: '',
          type: 'password',
          secure: true,
        },
        {
          placeholder: 'Password Confirmation',
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

  handleLogin = async () => {
    const {dispatch, navigation} = this.props;
    const {formGroup} = this.state;
    const data = {
      email: this.props.route.params.email,
      password: formGroup[0].value,
      password2: formGroup[1].value,
    };

    if (data.password2 !== data.password) {
      return Alert.alert('Password not match');
    }
    delete data.password2;
    await dispatch(ChangePassword(data))
      .then((res) => {
        Alert.alert('Password has been changed');
        navigation.replace('Login');
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
        <HeaderBackButton submit={() => navigation.goBack()} />
        <View style={styles.formGroup}>
          <FormSignup
            title="Change Password"
            link={null}
            formGroup={this.state.formGroup}
            submit={this.getData}
          />
        </View>
        <View>
          <Button
            title="Change Password"
            big={true}
            type="primary"
            submit={() => this.handleLogin()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(ForgotPassword);

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
