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
import Icon from 'react-native-vector-icons/Feather';
import ButtonRounded from './ButtonRounded';

//BUG WHEN INPUT ERROR, IT RETURNS VALUE OF ''; EXPECTED VALUE OF CURRENT VALUE

export default TextFieldSmall = ({placeholder, value, type, secure}) =>{

  const [input, setInput] = useState({
    value: value,
    isError: false,
    isTyping: false
  })

  return(
    <>
      <View style={styles.formContainer(input.isError)}>
        <TextInput placeholder={placeholder} placeholderTextColor={'#22222250'} value={input.value} onFocus={()=>setInput({...input, isTyping: true})} onBlur={()=>setInput({...input, isTyping: false})} onChangeText={(value)=>setInput(value)} secureTextEntry={true} textContentType={type} secureTextEntry={secure} style={styles.formBar(input.isError)} onSubmitEditing={(value)=>setInput({...input, isError: true, value: input.value})} />
        {input.value===''?
          <View style={{justifyContent: 'center'}}>
            <ButtonRounded name='GoWithArrow' big={false}/>
          </View> :
          <TouchableOpacity activeOpacity={1} onPress={()=>setInput({...input, value: ''})} style={{justifyContent: 'center'}}>
            <Icon 
              name='x'
              size={20}
              color={input.isError? '#F01F0E' : '#22222280'}
            />
          </TouchableOpacity>
        }
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  formContainer: (isError) =>({
    width: width*.8,
    height: width*.09,
    backgroundColor: 'white',
    borderWidth: isError? 1 : 0,
    borderColor: isError? '#F01F0E' : 'white',
    borderRadius: width*.03,
    paddingLeft: width*.03,
    elevation: .5,
    marginTop: width*.02,
    marginBottom: width*.02,
    marginRight: width*.009,
    marginLeft: width*.009,
    flexDirection: 'row'
  }),
  formBar: (isError) =>({
    width: width*.7,
    color: isError? '#F01F0E' : '#22222280', 
  })
})
