import React, {Component} from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../components/atoms';
import {FormSignup, HeaderBackButton} from '../components/molecules';
import {Verification} from '../redux/actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Password: '',
      formGroup: [
        {
          placeholder: 'Code',
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
      email: this.props.route.params.email,
      code: formGroup[1].value,
    };
    await dispatch(Verification(data))
      .then((res) => {
        Alert.alert('Verify Success');
        navigation.replace('ResetPassword', {email: data.email});
      })
      .catch((err) => {
        Alert.alert(err.response.data.data);
        console.log(err.response.data);
      });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton
          submit={() => this.props.navigation.replace('Signup')}
        />
        <View style={styles.formGroup}>
          <FormSignup
            title="Insert OTP"
            link={null}
            formGroup={this.state.formGroup}
            submit={this.getData}
          />
        </View>
        <View>
          <Button
            title="Verify"
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
