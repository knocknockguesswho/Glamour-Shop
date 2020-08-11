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
  ButtonWithArrow,
  TextFieldMedium,
} from '../atoms';

export default FormSignup = ({title, formGroup}) =>{

  return(
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.formTitle}>{title}</Text>
        <View style={{marginBottom: width*.01, alignItems: 'center'}}>
          {formGroup.map((form, index)=>{
            return(
              <TextFieldMedium 
                key={index} 
                placeholder={form.placeholder} 
                value={form.value} type={form.type} 
                secure={form.secure} 
                check={true} 
                submit={()=>console.log('Test Form')} 
              />
            )
          })}
        </View>
        <View style={styles.buttonWithArrow}>
          <ButtonWithArrow title='Already have an account?' submit={()=>console.log('go to login')} />
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
  buttonWithArrow:{
    width: width*.9,
    alignItems: 'flex-end',
    marginBottom: width*.05
  }
})