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
} from '../atoms';

export default FormSignup = ({title, formGroup, submit}) =>{

  return(
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.formTitle}>{title}</Text>
        <View style={{marginBottom: width*.01, alignItems: 'center'}}>
          {formGroup.map((form, index)=>{
            return(
              <TextFieldMedium key={index} placeholder={form.placeholder} value={form.value} type={form.type} secure={form.secure} submit={()=>console.log('Test Form')} />
            )
          })}
        </View>
        <View style={styles.buttonWithArrow}>
          <ButtonWithArrow title='Already have an account?' submit={()=>console.log('go to login')} />
        </View>
        <Button title='SIGN UP' big={true} type='primary' submit={submit} />
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
    color: 'black',
    marginBottom: width*.12
  },
  buttonWithArrow:{
    width: width*.9,
    alignItems: 'flex-end',
    marginBottom: width*.05
  }
})