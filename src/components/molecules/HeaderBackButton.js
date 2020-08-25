import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';

import {
  
} from '../atoms';

/*
midCompTitle: Page Title
rightCompName: 'Icon' name
*/

export default HeaderBackButton = ({submit, leftComp, middleComponent, midCompTitle, rightComponent, rightCompName, rightCompOnPress, backgroundColor}) =>{


  const [comp, setComp] = useState({
    leftComp: leftComp==undefined||leftComp==true? true : false,
    midCompTitle: middleComponent? midCompTitle : '',
    rightCompName: rightComponent? rightCompName : ''
  })

  handleBackButton = () =>{
    submit()
  }

  return(
    <>
      <View style={styles.mainContainer(backgroundColor)}>
        {comp.leftComp?
          <TouchableOpacity onPress={handleBackButton} style={styles.leftComp}>
            <IconFeather 
              name='chevron-left'
              size={25}
              color='#222'
            />
          </TouchableOpacity>: <></>
        }
        <View style={styles.midComp}>
          <Text style={styles.midCompContent}>{comp.midCompTitle}</Text>
        </View>
        <TouchableOpacity activeOpacity={.9} style={styles.rightComp} onPress={rightCompOnPress}>
          {rightComponent?
            <Icon 
              name={rightCompName}
              size={20}
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
  mainContainer: (backgroundColor) =>({
    height: width*.15,
    width: width,
    paddingTop: width*.05,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: backgroundColor || 'white',
    paddingLeft: width*.03,
    paddingRight: width*.03
  }),
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
    width: '10%',
    height: width*.06,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: width*.03
  }
})