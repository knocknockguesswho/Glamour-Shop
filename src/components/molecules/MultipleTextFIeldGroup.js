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
  ButtonWithArrow,
  TextFieldMedium,
  MultipleTextField,
} from '../atoms';

export default MultipleTextFieldList = ({title, formGroup, submit}) =>{

  const [form, setForm] = useState([
    [
      {
        placeholder: 'Save address as (ex : home address, office address)',
        value: '',
        type: 'none',
        secure: false
      },
      {
        placeholder: 'Recepient\'s Name',
        value: '',
        type: 'name',
        secure: false
      },
    ],
    [
      {
        placeholder: 'Address',
        value: '',
        type: 'fullStreetAddress',
        secure: false
      },
      {
        placeholder: 'City or Subdistrict',
        value: '',
        type: 'addressCity',
        secure: false
      },
      {
        placeholder: 'Postal Code',
        value: '',
        type: 'postalCode',
        secure: false,
        keyType: 'number-pad'
      },
    ],
    [
      {
        placeholder: 'Recipient\'s telephone number',
        value: '',
        type: 'telephoneNumber',
        secure: false,
        keyType: 'phone-pad'
      },
    ],
  ])

  console.log(form)

  return(
    <>
      <View style={styles.mainContainer}>
        <View style={styles.formGroupContainer}>
          {form.map((data, index)=>{
            return(
              <MultipleTextField formgroup={data} />
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
    width: width*.95,
  },
  formTitle:{
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black',
    marginBottom: width*.12
  },
  formGroupContainer:{
    marginTop: width*.05,
    marginBottom: width*.02, 
    alignItems: 'center'
  }
})