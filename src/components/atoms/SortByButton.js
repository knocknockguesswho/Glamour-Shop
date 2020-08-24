import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import FilterIcon from '../../../assets/images/up-and-down-arrow.svg';

/*
submit? submit(function())
*/

export default SortByButton = ({submit, name}) =>{

  const [active, setActive] = useState(false)

  const handlePressFilter = () =>{
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
      <TouchableOpacity activeOpacity={.9} onPress={handlePressFilter} style={{flexDirection: 'row'}}>
        <View style={styles.iconContainer}>
          <FilterIcon 
            width={20}
            height={20}
          />
        </View>
        <Text style={styles.iconTitle}>{name}</Text>
      </TouchableOpacity>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  iconTitle:{
    color: '#222222',
    fontSize: 14,
    marginLeft: width*.02
  }
})
