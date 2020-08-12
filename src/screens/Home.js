import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {CoverHome} from '../../assets/images';
import {Label} from '../components/atoms';
import {CardHome} from '../components/molecules';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={CoverHome} style={styles.background}>
        <Text style={styles.title}>Fashion Sale</Text>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentText}>
          <View>
            <Text style={styles.contentTitle}>New</Text>
            <Text style={styles.desc}>You’ve never seen it before!</Text>
          </View>
          <Text style={styles.link}>View All</Text>
        </View>
        <View style={styles.container}>
          <CardHome />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  background: {width: 400, height: 450},
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    maxWidth: 200,
    paddingTop: 268,
    paddingLeft: 15,
  },
  contentText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginTop: 33,
  },
  contentTitle: {fontSize: 34, fontWeight: 'bold', color: '#222222'},
  desc: {fontSize: 11, color: '#9B9B9B'},
  link: {fontSize: 11, color: '#222222', marginTop: 25},
  container: {
    marginTop: 20,
  },
});
