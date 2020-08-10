import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

/*
title? 'BUTTON_TITLE'
type? 'primary', 'outline'
big? boolean
withIconLeft? boolean
submit? submit(function())
*/

export default Button = ({title, type, big, withIconLeft, submit}) =>{

  withIconLeft=false

  const handlePressButton = () =>{
    if(submit!==undefined){
      submit()
    } else{
      console.log(`variable 'submit' expecting function`)
    }
  }

  return(
    <>
      {type==='primary'?
        <TouchableOpacity activeOpacity={.8} onPress={handlePressButton} style={styles.buttonPrimary(big, withIconLeft)}>
          {withIconLeft?
            <View style={{marginLeft: -width*.05, marginRight: -width*.05}}>
              <Icon 
                name='pen'
                size={12}
                color='white'
              />
            </View>:
            <></>
          }
          <Text style={styles.buttonPrimaryText(big, withIconLeft)}>{title}</Text>
        </TouchableOpacity>:
        type==='outline'?
        <TouchableOpacity activeOpacity={.5} onPress={handlePressButton} style={styles.buttonOutline(big)}>
          <Text style={styles.buttonOutlineText(big)}>{title}</Text>
        </TouchableOpacity>:
        
        <Text></Text>
      }
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonPrimary: (big, withIconLeft) =>({
    height: big? width*.11 : width*.08,
    width: big? width*.9 : width*.4,
    backgroundColor: '#DB3022',
    alignSelf: big? 'center' : 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: withIconLeft? 'row': 'column',
    borderRadius: 100,
    elevation: 3
  }),
  buttonOutline: (big, withIconLeft)=>({
    height: big? width*.11 : width*.09,
    width: big? width*.9 : width*.4,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: big? 'center' : 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: withIconLeft? 'row': 'column',
    borderRadius: 100,
  }),
  buttonPrimaryText: (big, withIconLeft) =>({
    color: 'white',
    fontWeight: '600',
    fontSize: big? 15 : 10,
    marginRight: withIconLeft? width*.01:0,
  }),
  buttonOutlineText: (big, withIconLeft) =>({
    color: 'black',
    fontWeight: '600',
    fontSize: big? 15 : 10,
    marginRight: withIconLeft? width*.01:0
  })
})
