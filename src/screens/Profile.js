import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

import {HeaderBackButton} from '../components/molecules';

import {Button} from '../components/atoms';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = (props) => {
  const handleSearchButton = () => {
    console.log('Searching');
  };

  const [profile, setProfile] = useState({
    avatar: '../../assets/images/avatar.png',
    fullName: 'Matilda Brown',
    email: 'matildabrown@mail.com',
  });

  const [listedButton, setListedButton] = useState([
    {
      title: 'My Orders',
      description: 'Already have 12 orders',
      submit: () => props.navigation.push('MyOrders'),
    },
    {
      title: 'Shipping Address',
      description: '3 Addresses',
      submit: () => props.navigation.push('ShippingAddress'),
    },
    {
      title: 'Settings',
      description: 'Notifications, Password',
      submit: () => props.navigation.push('MyProfileSettings'),
    },
  ]);

  return (
    <View style={styles.mainContainer}>
      <HeaderBackButton
        rightComponent={true}
        rightCompName="search"
        leftComp={false}
        backgroundColor="#F9F9F9"
        search={handleSearchButton}
      />
      <View style={{paddingLeft: width * 0.04}}>
        <Text style={styles.profileTitle}>My Profile</Text>

        <TouchableOpacity style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover',
                borderRadius: 100,
              }}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.fullName}>{profile.fullName}</Text>
            <Text style={styles.email}>{profile.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.listedButtonContainer}>
        {listedButton.map((data, index) => {
          return (
            <Button
              key={index}
              type="listed"
              title={data.title}
              description={data.description}
              submit={data.submit}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Profile;

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
  },
  profileTitle: {
    fontSize: width * 0.07,
    fontWeight: '700',
  },
  avatarSection: {
    flexDirection: 'row',
    marginTop: width * 0.04,
  },
  avatarContainer: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 100,
  },
  nameContainer: {
    width: '70%',
    paddingLeft: width * 0.05,
    justifyContent: 'center',
  },
  fullName: {
    fontSize: width * 0.04,
    fontWeight: '700',
    color: '#222',
  },
  email: {
    color: '#22222280',
  },
  listedButtonContainer: {
    marginTop: width * 0.03,
  },
});
