import React, {useState, useEffect} from 'react';
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
import {TouchableOpacity} from 'react-native-gesture-handler';

import axios from 'axios';

const Home = () => {
  const [newest, setNewest] = useState([
    {
      id: 1,
      image: `https://i.pinimg.com/originals/9f/4a/e2/9f4ae27f629991c1f0ff0db2fe2aad91.jpg`,
    },
    {
      id: 2,
      image: `https://sc01.alicdn.com/kf/HTB1bx55QXXXXXXZaXXXq6xXFXXXT/225696021/HTB1bx55QXXXXXXZaXXXq6xXFXXXT.jpg`,
    },
  ]);

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={CoverHome} style={styles.background}>
          <Text style={styles.title}>Fashion Sale</Text>
        </ImageBackground>
        <View style={styles.contentText}>
          <View>
            <Text style={styles.contentTitle}>New</Text>
            <Text style={styles.desc}>You’ve never seen it before!</Text>
          </View>
          <TouchableOpacity onPress={() => alert('ok')}>
            <Text style={styles.link}>View All</Text>
          </TouchableOpacity>
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
