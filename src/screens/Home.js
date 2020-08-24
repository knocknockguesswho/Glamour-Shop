/* eslint-disable react-hooks/exhaustive-deps */
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

import {connect} from 'react-redux';
import {getAllProducts} from '../redux/actions/products';

const Home = (props) => {
  const [newest, setNewest] = useState([]);

  const getAllProducts = async () => {
    const token = props.auth.data.token;

    await props
      .getAllProducts(token)
      .then((response) => {
        console.log(response);
        setNewest(response.value.data.data);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

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
          <CardHome products={newest} />
        </View>
      </ScrollView>
    </View>
  );
};

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

const mapStateToProps = (state) => ({
  auth: state.auth,
  products: state.products,
});

const mapDispatchToProps = {getAllProducts};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
