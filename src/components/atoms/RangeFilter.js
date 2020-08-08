import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

export default RangeFilter = () =>{

  const [active, setActive] = useState({
    left: 0,
    right: 0
  })

  const handleRangeLeftDrag = () =>{
    setActive({
      ...active,
      left: r_width*.1
    })
  }

  const handleRangeRightDrag = () =>{
    setActive({
      ...active,
      right: r_width*.1
    })
  }
  

  return(
    <>
      <View activeOpacity={.9} style={styles.sliderContainer}>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.priceText}>$78</Text>
          <Text style={styles.priceText}>$143</Text>
        </View>
        <View style={styles.sliderBar}>
          <View style={styles.outerSliderBar}>
            <TouchableOpacity
              onPress={()=> console.log(r_width)}
              activeOpacity={1} 
              style={styles.leftRangeIndicator}
            />
            <TouchableOpacity 
              activeOpacity={1} 
              style={styles.rightRangeIndicator}
            />
          </View>
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const r_width = width*.8

const styles = StyleSheet.create({
  sliderContainer:{
    width: width*.9,
    // height: width*.1,
    backgroundColor: 'white',
    paddingLeft: width*.07,
    paddingRight: width*.07,
  },
  priceText:{
    color: '#222',
    fontWeight: '700',
    fontSize: 13
  },
  sliderBar:{
    width: r_width,
    height: width*.007,
    backgroundColor: '#9B9B9B',
    marginTop: width*.03,
    marginBottom: width*.05,
    position: 'relative'
  },
  outerSliderBar:{
    width: r_width,
    height: width*.007,
    backgroundColor: '#DB3022',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    // transform: [{translateX: r_width*.1}]
  },
  leftRangeIndicator:{
    width: width*.05,
    height: width*.05,
    borderRadius: 100,
    backgroundColor: '#DB3022',
    marginTop: -width*.02,
  },
  rightRangeIndicator:{
    width: width*.05,
    height: width*.05,
    borderRadius: 100,
    backgroundColor: '#DB3022',
    marginTop: -width*.02
  }
})
