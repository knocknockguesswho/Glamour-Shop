import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  
} from '../atoms';

/*
midCompTitle: Page Title
rightCompName: 'Icon' name
*/

export default HeaderBackButton = ({submit, middleComponent, midCompTitle, rightComponent, rightCompName}) =>{


  const [comp, setComp] = useState({
    midCompTitle: middleComponent? midCompTitle : '',
    rightCompName: rightComponent? rightCompName : ''
  })

  handleBackButton = () =>{
    submit()
  }

  return(
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={handleBackButton} style={styles.leftComp}>
          <Icon 
            name='chevron-left'
            size={25}
            color='#222'
          />
        </TouchableOpacity>
        <View style={styles.midComp}>
          <Text style={styles.midCompContent}>{comp.midCompTitle}</Text>
        </View>
        <TouchableOpacity style={styles.rightComp}>
          {rightComponent?
            <Icon 
              name={rightCompName}
              size={25}
              color='#222'
            />:<Text></Text>
          }
        </TouchableOpacity>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    height: height/1.15,
    width: width*.95,
    paddingTop: width*.05,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftComp:{
    width: '15%',
    height: width*.06,
  },
  midComp:{
    width: '70%',
    height: width*.06,
  },
  midCompContent:{
    textAlign: 'center',
    fontSize: 18,
    color: '#222',
    fontWeight: '700'
  },
  rightComp:{
    width: '15%',
    height: width*.06,
  }
})