import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';

import {
  HeaderBackButton
} from '../components/molecules';

import {
  SearchBar
} from '../components/atoms';

class ShippingAddress extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  handleBackButton = () =>{
    console.log('Go Back')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton submit={this.handleBackButton} middleComponent={true} midCompTitle='Shipping Address' />
        <View styl={styles.searchBarContainer}>
          <SearchBar placeholder='Search' value={this.state.search} type='web-search' />
        </View>
      </View>
    )
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer:{
    height: height,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9'
  },
  searchBarContainer:{
    backgroundColor: 'yellow'
  }
})

export default ShippingAddress;
