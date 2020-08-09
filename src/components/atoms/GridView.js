import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import GridIcon from '../../../assets/images/grid-view.svg';

/*
submit? submit(function())
*/

export default GridView = ({submit}) =>{

  const [active, setActive] = useState(false)

  const handlePressGrid = () =>{
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
      <TouchableOpacity activeOpacity={.9} onPress={handlePressGrid}>
        <View style={styles.iconContainer}>
          <GridIcon 
            width={20}
            height={20}
          />
        </View>
      </TouchableOpacity>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  
})
