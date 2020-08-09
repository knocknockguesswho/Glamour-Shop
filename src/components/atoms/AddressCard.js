import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import CheckBox from './CheckBox'

//persist whitelist
/*
submit? submit(function())
*/


export default AddressCard = ({name, address, submit}) =>{

  const [active, setActive] = useState(false)

  const handleEdit = () =>{
    if(submit!==undefined){
      submit()
      setActive(!active)
    } else{
      console.log(`variable 'submit' expecting function`)
      setActive(!active)
    }
  }



  return(
    <>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.addressDetail}>
            <Text style={styles.userFullName}>{name}</Text>
            <Text style={{lineHeight: width*.04, width: '80%', fontSize: 12}}>{address}</Text>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={handleEdit} style={styles.editButton}>
            <Text style={{color: '#DB3022', fontSize: 12}}>Edit</Text>
          </TouchableOpacity>
        </View>
        <CheckBox title='Use as the shipping address' titlePosition='right' submit={()=>console.log('chekced')} />
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  cardContainer:{
    width: width*.75,
    height: width*.3,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
    paddingTop: width*.04,
    paddingBottom: width*.04,
    paddingLeft: width*.025,
    paddingRight: width*.04,
    marginTop: width*.02,
    marginBottom: width*.02,
    marginRight: width*.009,
    marginLeft: width*.009
  },
  cardContent:{
    height: '80%',
    width: '100%',
    flexDirection: 'row',
    marginLeft: width*.02
  },
  addressDetail:{
    height: '100%',
    width: '90%',
  },
  userFullName:{
    fontSize: 12,
    fontWeight: '700',
    marginBottom: width*.01,
    color: '#222'
  }
})
