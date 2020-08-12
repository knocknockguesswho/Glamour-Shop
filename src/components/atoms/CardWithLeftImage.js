import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image
} from 'react-native';

//persist whitelist
/*
submit? submit(function())
*/


export default CardWithLeftImage = ({sourceImg, content, submit}) =>{

  // const [active, setActive] = useState(false)

  // const handleEdit = () =>{
  //   if(submit!==undefined){
  //     submit()
  //     setActive(!active)
  //   } else{
  //     console.log(`variable 'submit' expecting function`)
  //     setActive(!active)
  //   }
  // }



  return(
    <>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.contentImg}>
            {sourceImg}
          </View>
          <View style={styles.mainContent}>
            <View>
              <Text style={{fontWeight: '700', fontSize: width*.04}}>{content.itemName}</Text>
              <Text style={{fontSize: width*.03, color: '#22222280'}}>{content.itemDesign}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: width*.03, color: '#22222280'}}>Color: </Text>
                <Text style={{fontWeight: '700', marginRight: width*.02}}>{content.itemColor}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: width*.03, color: '#22222280'}}>Size: </Text>
                <Text style={{fontWeight: '700'}}>{content.itemSize}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: width*.03, color: '#22222280'}}>Units: </Text>
                <Text style={{fontWeight: '700'}}>{content.itemUnits}</Text>
              </View>
              <Text style={{fontWeight: '700'}}>{content.itemPrice}$</Text>
            </View>
          </View>
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
    marginTop: width*.02,
    marginBottom: width*.02,
    elevation: 2,
    overflow: 'hidden'
  },
  cardContent:{
    height: '100%',
    width: '100%',
    flexDirection: 'row'
  },
  contentImg:{
    flex: .3,
  },
  mainContent:{
    flex: .7,
    paddingVertical: width*.03,
    paddingHorizontal: width*.03,
    justifyContent: 'space-around'
  }
})
