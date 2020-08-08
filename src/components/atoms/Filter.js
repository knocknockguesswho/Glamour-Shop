import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import FilterIcon from '../../../assets/images/filter-icon.svg';

export default Filter = () =>{

  const [active, setActive] = useState(false)

  const handleFilterClick = () =>{
    setActive(!active)
  }
  

  return(
    <>
      <TouchableOpacity activeOpacity={.9} style={{flexDirection: 'row'}}>
        <View style={styles.iconContainer}>
          <FilterIcon 
            width={20}
            height={20}
          />
        </View>
        <Text style={styles.iconTitle}>Filters</Text>
      </TouchableOpacity>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  iconTitle:{
    color: '#222222',
    fontSize: 14,
    marginLeft: width*.02
  }
})
