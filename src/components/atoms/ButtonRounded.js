import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShoppingBag from '../../../assets/images/shopping-bag.svg';
import ShoppingBagActivated from '../../../assets/images/shopping-bag-activated.svg';

/*
name?
1.Search (Big) NOMORE
2.Camera (Big) NOMORE
3.AddToBag (Small)
4.AddToFavorites(Small) NOMORE
5.AddPlus(Small)
*/

/*
big? <bool>
submit? submit(function())
*/

export default ButtonRounded = ({name, color, choose, submit}) =>{

  const [active, setActive] = useState(false)

  const handleToggleButton = () =>{
    if(submit!==undefined){
      submit()
      setActive(!active)
    } else{
      console.log(`variable 'submit' expecting function`)
      setActive(!active)
    }
  }

  const [choice, setChoice] = useState(choose)
  
  const handleChoosing = () =>{
    setChoice(!choice)
  }

  return(
    <>
      {name==='AddToBag'?
        <TouchableOpacity activeOpacity={1} onPress={handleToggleButton} style={!active? styles.buttonAddToBag:styles.buttonAddToBagActive}>
          {!active?
            <ShoppingBag
              width={12}
              height={12}
            />:
            <ShoppingBagActivated 
              width={12}
              height={12}
            />
          }
        </TouchableOpacity>:
      name==='AddPlus'?
        <TouchableOpacity activeOpacity={1} onPress={handleToggleButton} style={!active? styles.buttonAddPlus:styles.buttonAddPlusActive}>
          {!active?
            <Icon
              name='plus'
              size={12}
              color='white'
            />:
            <Icon
              name='plus'
              size={12}
              color='black'
            />
          }
        </TouchableOpacity> :
        name==='GoWithArrow'?
        <TouchableOpacity activeOpacity={1} onPress={handleToggleButton} activeOpacity={.8} style={!active? styles.buttonAddPlus:styles.buttonAddPlusActive}>
          <Icon
            name='arrow-right'
            size={12}
            color='white'
          />
        </TouchableOpacity> :
        name==='roundedColor'?
        <TouchableOpacity activeOpacity={1} onPress={handleChoosing} activeOpacity={.8} style={!choice? styles.buttonRoundedColor:styles.buttonRoundedColorActive(color)}>
        </TouchableOpacity>:
        <Text></Text>
      }
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonAddToBag:{
    height: width*.07,
    width: width*.07,
    backgroundColor: '#DB3022',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  buttonAddToBagActive:{
    height: width*.07,
    width: width*.07,
    backgroundColor: '#14000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  buttonAddPlus:{
    height: width*.07,
    width: width*.07,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  buttonAddPlusActive:{
    height: width*.07,
    width: width*.07,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  buttonText:{
    color: 'white',
    fontSize: 15,
  },
  buttonRoundedColor:{
    height: width*.04,
    width: width*.04,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: width*.001,
    borderColor: '#222'
  },
  buttonRoundedColorActive: (color) =>({
    height: width*.04,
    width: width*.04,
    backgroundColor: color || 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    elevation: 1.25
  })
})
