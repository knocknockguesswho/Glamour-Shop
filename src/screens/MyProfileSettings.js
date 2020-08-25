import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  HeaderBackButton,
  PasswordChange,
  ToggleOnOffWithTitle,
} from '../components/molecules';

import {TextFieldMedium} from '../components/atoms';

//on 'Change' button pressed, show  PasswordChange slidinguppanel

export class MyProfileSettings extends Component {
  constructor() {
    super();
    this.state = {
      slideSize: 0,
      notification: [
        {
          title: 'Sales',
          toggleActive: true,
        },
        {
          title: 'New Arrivals',
          toggleActive: false,
        },
        {
          title: 'Delivery Status Changes',
          toggleActive: false,
        },
      ],
      personalInformation: [
        {
          placeholder: 'Full name',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Date of Birth',
          value: '',
          type: 'none',
          secure: false,
        },
      ],
      password: [
        {
          placeholder: 'Password',
          value: '',
          type: 'password',
          secure: true,
        },
      ],
    };
  }

  handleShowSlide = () => {
    if (this.state.slideSize === 0) {
      this.setState({
        ...this.state,
        slideSize: width * 1.05,
      });
    } else {
      this.setState({
        ...this.state,
        slideSize: 0,
      });
    }
  };

  handleGoBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <HeaderBackButton
            rightComponent={true}
            backgroundColor="#F9F9F9"
            rightCompName="search"
            rightCompOnPress={() => this.props.navigation.push('Search')}
            submit={this.handleGoBack}
          />
          <Text style={styles.screenTitle}>Settings</Text>
          <View style={styles.mainContent}>
            <Text style={styles.formTitle}>Personal Information</Text>
            {this.state.personalInformation.map((data, index) => {
              return (
                <View key={index} style={styles.formGroup}>
                  <TextFieldMedium
                    placeholder={data.placeholder}
                    value={data.value}
                    type={data.type}
                    secure={data.secure}
                    check={false}
                  />
                </View>
              );
            })}
            <View
              style={{
                width: width * 0.9,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
              }}>
              <Text style={styles.formTitle}>Password</Text>
              <TouchableOpacity
                onPress={this.handleShowSlide}
                style={{justifyContent: 'center'}}>
                <Text style={{fontSize: width * 0.03, color: '#22222280'}}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
            {this.state.password.map((data, index) => {
              return (
                <View key={index} style={styles.formGroup}>
                  <TextFieldMedium
                    placeholder={data.placeholder}
                    value={data.value}
                    type={data.type}
                    secure={data.secure}
                    check={false}
                  />
                </View>
              );
            })}

            <View style={styles.toggleContainer}>
              <Text style={styles.toggleSectionTitle}>Notifications</Text>
              {this.state.notification.map((data, index) => {
                return (
                  <ToggleOnOffWithTitle
                    key={index}
                    title={data.title}
                    toggleActive={data.toggleActive}
                  />
                );
              })}
            </View>
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <PasswordChange
            slideSize={this.state.slideSize}
            title="Password Change"
            showSlide={this.handleShowSlide}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#00000010',
            }}></View>
        </View>
      </>
    );
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#F9F9F9',
  },
  screenTitle: {
    width: width * 0.9,
    color: '#222',
    fontWeight: '700',
    fontSize: 34,
    alignSelf: 'center',
  },
  sliderContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: 50,
  },
  mainContent: {
    width: width,
  },
  formTitle: {
    width: '90%',
    fontWeight: '700',
    letterSpacing: width * 0.002,
    alignSelf: 'center',
    marginBottom: width * 0.04,
    marginTop: width * 0.04,
  },
  formGroup: {
    width: width,
    alignItems: 'center',
  },
  toggleContainer: {
    alignSelf: 'center',
  },
  toggleSectionTitle: {
    fontSize: width * 0.04,
    fontWeight: '700',
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: width * 0.1,
    marginBottom: width * 0.05,
  },
});

export default MyProfileSettings;
