import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';

import {
  AddressCard
} from '../atoms';

export default AddressList = ({title, submit}) =>{

  const [address, setAddress] = useState([
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
  ])

  return(
    <>
      <View style={styles.mainContainer}>
        <View style={{alignSelf:'center'}}>
          <Text style={styles.formTitle}>{title}</Text>
          {address.map((data, index)=>{
            return(
              <AddressCard
                key={index}
                name={data.name}
                address={data.address}
              />
            )
          })}
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    width: width
  },
  formTitle:{
    width: width*.9,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginTop: width*.03,
    marginBottom: width*.03,
    alignSelf: 'center'
  }
})