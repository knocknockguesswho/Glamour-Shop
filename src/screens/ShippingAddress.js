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
  AddressList,
  HeaderBackButton
} from '../components/molecules';

import {
  Button,
  SearchBar
} from '../components/atoms';

class ShippingAddress extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      addresses: [
        {
          name:'Jane Doe',
          address:'3 Newbridge Court Chino Hills, CA 91709, United States'
        },
        {
          name:'Jane Doe',
          address:'3 Newbridge Court Chino Hills, CA 91709, United States'
        },
        {
          name:'Jane Doe',
          address:'3 Newbridge Court Chino Hills, CA 91709, United States'
        },
      ]
    }
  }

  handleBackButton = () =>{
    this.props.navigation.goBack();
  }

  handleGoToChangeAddress = () =>{
    this.props.navigation.push('ChangeAddress')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton submit={this.handleBackButton} middleComponent={true} midCompTitle='Shipping Address' />
        <View style={styles.searchBarContainer}>
          <SearchBar placeholder='Search' value={this.state.search} type='web-search' />
        </View>
        <View style={styles.addressList}>
          <AddressList title='Shipping Address' addresses={this.state.addresses} />
        </View>
        <View>
          <Button title='ADD NEW ADDRESS' big={true} type='outline' submit={()=>console.log('Pressed')} />
        </View>
      </View>
    )
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    height: height,
    width: width,
    alignSelf: 'center'
  },
  searchBarContainer:{
    marginTop: width*.05,
    marginBottom: width*.03,
    alignItems: 'center',
  },
  addressList:{
    marginBottom: width*.04
  }
})

export default ShippingAddress;
