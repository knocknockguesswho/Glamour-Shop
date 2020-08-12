import React, { useState, useRef, useEffect } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { 
  View, 
  StyleSheet, 
  Dimensions,
  Animated,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  Button,
  TextFieldMedium
} from '../atoms';

export default SortBy = ({title, slideSize, showSlide}) =>{

  const [position, setPosition] = useState({
    top: width*.95,
    bottom: slideSize
  });

  const [sortByButton, setSortByButton] = useState([
    {
      name: 'Popular',
      active: false
    },
    {
      name: 'Newest',
      active: false
    },
    {
      name: 'Customer review',
      active: false
    },
    {
      name: 'Price: lowest to high',
      active: false
    },
    {
      name: 'Price: highest to low',
      active: false
    },
  ])

  const handleSortByButton = (name) => {
    setSortByButton([...sortByButton].map(obj =>{
      if(obj.name===name){
        return{
          ...obj,
          active: true
        }
      } else{
        return{
          ...obj,
          active: false
        }
      }
    }))
  };

  const draggedValue = new Animated.Value(slideSize || position.bottom);
  const ModalRef = useRef(null);

  return(
    <>
      <View style={styles.sheetContainer}>
        <SlidingUpPanel
        ref={ModalRef}
        draggableRange={{top: height-position.top, bottom: 0}}
        animatedValue={draggedValue}
        height={height}
        friction={.5}
        onMomentumDragStart={()=>showSlide()}
        >
          <View style={styles.sheetContent}>
            <TouchableOpacity onPress={showSlide} activeOpacity={1} style={styles.sheetHandle}></TouchableOpacity>
            <Text style={styles.sliderTitle}>{title}</Text>
            <View style={styles.sliderMain}>
              {sortByButton.map((button, index)=>{
                return(
                  <TouchableOpacity activeOpacity={.9} onPress={()=>handleSortByButton(button.name)} style={styles.sortButton(button.active)}>
                    <Text style={styles.buttonTitle(button.active)}>{button.name}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    </>
  )
}

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  sheetContainer:{
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetContent:{
    flex: 1,
    backgroundColor: '#F9F9F9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    elevation: 10,
  },
  sheetHandle:{
    height: 5,
    width: 70,
    backgroundColor: '#bbb',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: width*.03,
    marginBottom: width*.03
  },
  sliderTitle:{
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop: width*.02,
    marginBottom: width*.03
  },
  sliderMain:{
    alignItems: 'center',
    marginBottom: width*.05
  },
  forgotPasswordButton:{
    width: width*.9, 
    alignItems: 'flex-end', 
    marginTop: width*.02, 
    marginBottom: width*.02
  },
  forgotPasswordText:{
    fontSize: 10,
    color: '#22222280'
  },
  sortButton:(active) =>({
    width: width,
    paddingVertical: width*.04,
    paddingHorizontal: width*.04,
    backgroundColor: active? '#DB3022' : 'transparent',
    marginTop: width*.02
  }),
  buttonTitle:(active) =>({
    color: active? 'white' : '#222',
    fontWeight: '600',
    fontSize: width*.035
  })
})