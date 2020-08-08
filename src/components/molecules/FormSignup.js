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
  Button,
  TextFieldMedium,
  ButtonRounded,
  SwitchToggle,
  PopupWindow,
  AddressCard,
  TextFieldSmall,
  Filter,
  LowestToHigh,
  GridView,
  RangeFilter
} from '../atoms';

export default FormSignup = () =>{

  const [formLogin, setForm] = useState([
    {
      placeholder: 'Name',
      value: '',
      type: 'none',
      secure: false
    },
    {
      placeholder: 'Email',
      value: '',
      type: 'emailAddress',
      secure: false
    },
    {
      placeholder: 'Password',
      value: '',
      type: 'password',
      secure: true
    },
    {
      placeholder: 'Enter your promo code',
      value: '',
      type: 'none',
      secure: false
    }
  ])

  const [formPromo, setFormPromo] = useState([
    {
      placeholder: 'Enter your promo code',
      value: '',
      type: 'none',
      secure: false
    }
  ])

  return(
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.formTitle}>Sign Up</Text>
        <ScrollView style={{height: height*4}}>
          <ButtonRounded name='AddToBag' big={false} />
          <ButtonRounded name='AddPlus' big={false} />
          <Button title='PRIMARY' type='primary' big={false}/>
          <Button title='OUTLINE' type='outline' big={true}/>
          <Button title='Write a review' type='primary' big={false} withIconLeft={true}/>
          <View style={{marginBottom: 15}}>
            <SwitchToggle toggled={true} />
          </View>
          <PopupWindow topTitle='Add to favorites' bottomTitle='Delete from the list' />
          <AddressCard name='Jane Doe' address='3 Newbridge Court Chino Hills, CA 91709, United States' />
          {formPromo.map((form, index)=>{
            return(
              <TextFieldSmall key={index} placeholder={form.placeholder} value={form.value} type={form.type} secure={form.secure} />
            )
          })}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Filter />
          <LowestToHigh />
          <GridView />
        </View>
        <RangeFilter />
        </ScrollView>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    height: height/1.15,
    width: width*.95,
    position: 'absolute',
    bottom: 0,
    left: width*.025,
    right: width*.025
  },
  formTitle:{
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black'
  }
})