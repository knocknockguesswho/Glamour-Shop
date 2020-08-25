import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSplash} from '../../assets/icon';
import {connect} from 'react-redux';

const Splash = ({navigation, auth}) => {
  useEffect(() => {
    setTimeout(() => {
      if (auth.data.token) {
        return navigation.replace('MainApp');
      }
      navigation.replace('Signup');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.page}>
      <IconSplash />
      <Text style={styles.text}>Glamour Shop</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Splash);

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 20, color: '#112340', marginTop: 18},
});
