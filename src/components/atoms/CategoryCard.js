import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import CheckBox from './CheckBox'

//persist whitelist

export default CategoryCard = ({category, imgURL}) =>{

  const [active, setActive] = useState(false)

  const handlePopup = () =>{
    setActive(!active)
  }
  
  return(
    <>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <Text style={styles.categoryImage}>
            {imgURL}
          </Text>
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  cardContainer:{
    width: width*.9,
    height: width*.3,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
    marginTop: width*.02,
    marginBottom: width*.02,
    marginRight: width*.009,
    marginLeft: width*.009
  },
  cardContent:{
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  categoryTitle:{
    flex: .5,
    backgroundColor: 'yellow'
  },
  CategoryImage:{
    flex: .5,
    backgroundColor: 'aqua'
  }
})
