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
  Color
} from '../atoms';

export default Colors = () =>{

  const [colors, setColors] = useState([
    {
      name: 'Black',
      color: '#000'
    },
    {
      name: 'Grey',
      color: '#EBEBEB'
    },
    {
      name: 'Red',
      color: '#B82222'
    },
    {
      name: 'Dark Grey',
      color: '#BEA9A9'
    },
    {
      name: 'Brown',
      color: '#E2BB8D'
    },
    {
      name: 'Blue',
      color: '#151867'
    },
  ])

  return(
    <>
      <View style={styles.mainContainer}>
        {colors.map((color, index)=>{
          return(
            <Color key={index} color={color.color} />
          )
        })}
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    height: height/1.15,
    width: width*.95,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})