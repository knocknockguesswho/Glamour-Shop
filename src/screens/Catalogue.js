import React, { Component } from 'react'
import { 
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native'


import {
  SortBy
} from '../components/molecules';

export class Catalogue extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text>Catalogue</Text>
          </View>
        </View>
        <View style={styles.sliderContainer}>
          <SortBy />
        </View>
      </>
    )
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container:{
    height: height,
    width: width,
  },
  headerContainer:{
    width: width
  },
  sliderContainer:{
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0
  }
})

export default Catalogue
