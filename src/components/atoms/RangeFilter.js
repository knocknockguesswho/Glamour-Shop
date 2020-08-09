import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import RangeSlider from 'rn-range-slider';

export default RangeFilter = ({maxPoint}) =>{

  const [input, setInput] = useState({
    rangeLow: 0,
    rangeHigh: 0,
    min: 0,
    max: 2000
  })

  useEffect(()=>{

  })
  

  return(
    <>
      <View style={{width: width*.9}}>
        {/* <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingLeft: 10, paddingRight: 10}}>
          <Text>{input.min}</Text>
          <Text>{input.rangeHigh}</Text>
        </View> */}
          <RangeSlider
            style={{width: '100%', height: width*.2}}
            gravity={'center'}
            min={input.min}
            max={input.max}
            step={20}
            selectionColor="#3df"
            blankColor="#f618"
            onValueChanged={(low, high, fromUser) => {
              setInput({...input, rangeLow: low, rangeHigh: high})
          }}/>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const r_width = width*.8

const styles = StyleSheet.create({
  sliderContainer:{
    width: width*.9,
    height: width*.1,
    backgroundColor: 'white',
    paddingLeft: width*.07,
    paddingRight: width*.07,
  }
})
