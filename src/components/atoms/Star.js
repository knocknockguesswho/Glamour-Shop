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
    for(let i = 0; i < stars.total; i++){
      stars.push(<Icon
        name='star'
        size={15}
        color='#FFBA49'
      />)
    }
  }

  useEffect(()=>{
    handleSetStars
  }, [])

  console.log(stars.stars)
  

  return(
    <>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name='star'
          size={15}
          color='#FFBA49'
        />
        <Icon
          name='star'
          size={15}
          color='#FFBA49'
        />
        <Icon
          name='star'
          size={15}
          color='#FFBA49'
        />
        <Icon
          name='star'
          size={15}
          color='#FFBA49'
        />
        <Icon
          name='staro'
          size={15}
          color='#22222295'
        />
        {/* {stars.stars.map((star, index)=>{
          return star
        })} */}
        <Text>(10)</Text>
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
