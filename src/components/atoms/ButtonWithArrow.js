import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ArrowRight from '../../../assets/images/arrow-right.svg';

/*
submit? submit(function())
*/

export default ButtonWithArrow = ({submit, title}) =>{

  const [active, setActive] = useState(false)

  const handleArrowButton = () =>{
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
      <TouchableOpacity activeOpacity={1} onPress={handleArrowButton} style={styles.buttonColor}>
        <Text style={styles.buttonTitle}>{title}</Text>
        <ArrowRight 
          width={17}
          height={17}
        />
      </TouchableOpacity>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonColor: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonTitle:{
    marginRight: width*.02
  }
})
