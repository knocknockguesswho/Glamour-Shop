import React, { useState, useRef, useEffect } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { 
  View, 
  StyleSheet, 
  Dimensions,
  Animated,
} from 'react-native';


export default SlideUp = () =>{

  const [position, setPosition] = useState({
    top: width,
    bottom: width*.6
  })

  const draggedValue = new Animated.Value(position.bottom);
  const ModalRef = useRef(null);

  return(
    <>
      <SlidingUpPanel
      ref={ModalRef}
      draggableRange={{top: height-position.top, bottom: position.bottom}}
      animatedValue={draggedValue}
      backdropOpacity={0}
      // snappingPoints={[height -10]}
      height={height}
      friction={.4}
      >
        <View style={styles.sheetContent}>

        </View>
      </SlidingUpPanel>
    </>
  )
}

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  sheetContainer:{
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  sheetContent:{
    flex: 1,
    backgroundColor: '#ebebeb',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10
  },
  sheetHandle:{
    height: 4,
    width: 35,
    backgroundColor: '#bbb',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6
  },
})