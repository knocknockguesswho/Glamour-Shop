import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

//BUG WHEN INPUT ERROR, IT RETURNS VALUE OF ''; EXPECTED VALUE OF CURRENT VALUE

export default SearchBar = ({placeholder, value, type}) =>{

  const [input, setInput] = useState({
    value: value,
    isError: false,
    isTyping: false,
    doneSubmitting: false
  })

  return(
    <>
      <View style={styles.formContainer(input.isError)}>
        <TextInput placeholder={placeholder} placeholderTextColor={'#22222250'} value={input.value} onFocus={()=>setInput({...input, isTyping: true})} onBlur={(value)=>setInput({...input, isTyping: true, value: value, doneSubmitting: true})} onChangeText={(value)=>setInput(value)} textContentType={type} style={styles.formBar(input.isError)} onSubmitEditing={(value)=>setInput({...input, isError: true, value: value})} keyboardType='web-search' />
          <View style={styles.searchIcon}>
            <Icon 
              name='zoom'
              size={15}
              color='#22222280'
            />
          </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  formContainer: (isError) =>({
    width: width*.85,
    height: width*.09,
    backgroundColor: 'white',
    borderRadius: 100,
    marginRight: width*.009,
    marginBottom: width*.003,
    flexDirection: 'row-reverse',
    elevation: .5,
    alignItems: 'center'
  }),
  formBar: (isError) =>({
    width: width*.77,
    color: isError? '#F01F0E' : '#222222', 
  }),
  formLabel:(isError, isTyping, doneSubmitting, value)=>({
    zIndex: 1,
    color: isError? '#F01F0E' : '#22222290',
    fontSize: 10,
    marginBottom: -width*.02,
    marginTop: isTyping&&doneSubmitting||value!==''? width*.01 : -width*.01
  }),
  searchIcon:{
    marginRight: width*.015
  }
})
