import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

/*
submit? submit(function())
*/

export default Star = ({submit, color, rating}) =>{

  const [stars, setStars] = useState({
    total: rating,
    stars:[]
  })

  const handleSetStars = () =>{
    const max = 5;
    
  }

  useEffect(()=>{
    handleSetStars()
  }, [])

  console.log(stars.stars)
  

  return(
    <>
      <View style={{flexDirection: 'row'}}>
        <Icon
          key={index}
          name='star'
          size={15}
          color='#FFBA49'
        />
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonColor: (color, active) =>({
    height: width*.09,
    width: width*.09,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: active? width*.009 : 0,
    borderColor: 'white'
  }),
  buttonColorActive: (active) =>({
    height: width*.09,
    width: width*.09,
    borderWidth: active? width*.002 : 0,
    borderColor: '#DB3022',
    borderRadius: 100
  })
})
