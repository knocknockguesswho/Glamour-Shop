import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSplash} from '../../assets/icon';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Signup');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <IconSplash />
      <Text style={styles.text}>Glamour Shop</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 20, color: '#112340', marginTop: 18},
});
