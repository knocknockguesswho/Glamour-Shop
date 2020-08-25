import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import {HeaderBackButton} from '../components/molecules';

import {Button, TextFieldMedium} from '../components/atoms';

class AddShippingAddress extends Component {
  constructor() {
    super();
    this.state = {
      formGroup: [
        {
          placeholder: 'Full name',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Address',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'City',
          value: '',
          type: 'none',
          secure: true,
        },
        {
          placeholder: 'State/Province/Region',
          value: '',
          type: 'none',
          secure: true,
        },
        {
          placeholder: 'Zip Code (Postal Code)',
          value: '',
          type: 'none',
          secure: true,
        },
        {
          placeholder: 'Country',
          value: '',
          type: 'none',
          secure: true,
          withArrow: true, //will poping up country list
        },
      ],
    };
  }

  handleSignup = () => {
    console.log('Thanks for register');
  };

  handleBackButton = () => {
    this.props.navigation.goBack();
  };

  handleSaveAddressButton = () => {
    const {dispatch, navigation} = this.props;
    const {formGroup} = this.state;
    const data = {
      name: formGroup[0].value,
      address: formGroup[1].value,
    };

    console.log(data);
  };

  getData = (param, param2) => {
    console.log(param, param2);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton
          submit={this.handleBackButton}
          middleComponent={true}
          midCompTitle="New Address"
        />
        <View style={styles.formContainer}>
          {this.state.formGroup.map((form, index) => {
            return (
              <TextFieldMedium
                key={index}
                placeholder={form.placeholder}
                value={form.value}
                type={form.type}
                secure={form.secure}
                withArrow={form.withArrow}
                submit={() => this.getData(form.placeholder, form.value)}
              />
            );
          })}
        </View>
        <View style={styles.saveButton}>
          <Button
            title="SAVE ADDRESS"
            type="primary"
            big={true}
            submit={this.handleSaveAddressButton}
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
  formContainer: {
    alignItems: 'center',
    marginTop: width * 0.09,
  },
  saveButton: {
    marginTop: width * 0.09,
  },
});

export default AddShippingAddress;
