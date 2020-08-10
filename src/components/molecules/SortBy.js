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

export default PasswordChange = ({title}) =>{

  if(title===''||title===undefined){
    title='Default Slider'
  }

  const [position, setPosition] = useState({
    top: width,
    bottom: 50
  })

  const draggedValue = new Animated.Value(position.bottom);
  const ModalRef = useRef(null);

  return(
    <>
      <View style={styles.sheetContainer}>
        <SlidingUpPanel
        ref={ModalRef}
        draggableRange={{top: height-position.top, bottom: position.bottom}}
        animatedValue={draggedValue}
        height={height}
        friction={.4}
        >
          <View style={styles.sheetContent}>
            <View style={styles.sheetHandle}></View>
            <Text style={styles.sliderTitle}>{title}</Text>
            <View style={styles.sliderMain}></View>
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
  },
  sheetHandle:{
    height: 4,
    width: 35,
    backgroundColor: '#bbb',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6
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
  }
})