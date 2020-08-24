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

export default PasswordChange = ({title, slideSize, showSlide}) =>{

  const [position, setPosition] = useState({
    top: width*.95,
    bottom: slideSize
  });

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
              <TextFieldMedium placeholder='Old Password' value='' type='none' secure={true} submit={()=>console.log('test submit oldpass')} />
              <TouchableOpacity activeOpacity={.8} style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
              <TextFieldMedium placeholder='New Password' value='' type='none' secure={true} submit={()=>console.log('test submit newpass')} />
              <TextFieldMedium placeholder='Repeat New Password' value='' type='none' secure={true} submit={()=>console.log('test submit newpass')} />
            </View>
            <Button title='Save Password' type='primary' big={true} submit={()=>console.log('test')} />
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
  }
})