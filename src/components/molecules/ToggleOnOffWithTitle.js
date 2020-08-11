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
  SwitchToggle
} from '../atoms';

export default ToggleOnOffWithTitle = ({title, toggleActive}) =>{

  const [active, setActive] = useState(toggleActive)

  const togglePress = () =>{
    setActive(!active)
  }

  return(
    <>
      <View style={styles.mainContainer}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleTitle}>{title}</Text>
          <View style={styles.toggleButtonContainer}>
            <SwitchToggle 
              toggleActive={active}
              togglePress={togglePress}
            />
          </View>
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    width: width*.95,
    justifyContent: 'space-around',
  },
  toggleContainer:{
    flexDirection: 'row',
    width: width*.9,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: width*.05
  },
  toggleTitle:{
    fontSize: width*.035,
    fontWeight: '700',
    color: '#00000095'
  }
})