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

export default GridView = () =>{

  const [active, setActive] = useState(false)

  const handleGridClick = () =>{
    setActive(!active)
  }
  

  return(
    <>
      <TouchableOpacity activeOpacity={.9}>
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
