import React, { useState, useEffect } from 'react';
import ReactCheckBox from '@react-native-community/checkbox';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

//persist whitelist
/*
title? 'CHECK_TITLE'
titlePosition? top, right, bottom, left
submit? submit(function())
*/

export default CheckBox = ({title, titlePosition, submit}) =>{

  const [checked, setChecked] = useState(false)

  const handleCheckBox = () =>{
    if(submit!==undefined){
      submit()
      setChecked(!checked)
    } else{
      console.log(`variable 'submit' expecting function`)
      setChecked(!checked)
    }
  }


  return(
    <>
      <View style={styles.checkBoxContainer(titlePosition)}>

          <ReactCheckBox
            disabled={false} 
            value={checked}
            onValueChange={handleCheckBox}
            tintColors={{true: '#222', false: '#222'}}
            style={{marginTop: -width*.015}}
          />
          <Text style={styles.checkText}>{title}</Text>
        </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  checkBoxContainer: (titlePosition) =>({
    width: '100%',
    height: '25%',
    flexDirection: titlePosition=='right'? 'row': titlePosition==='left'? 'row-reverse' : titlePosition==='top'? 'column-reverse' : 'column',
  }),
  checkText:{
    color: '#222',
    fontSize: 12
  }
})
