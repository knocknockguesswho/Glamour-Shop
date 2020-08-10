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

//BUG 
//1. WHEN INPUT is ERROR, IT RETURNS VALUE OF ''; EXPECTED VALUE OF CURRENT VALUE
//2. WHEN DONESUBMITING WITH VALUE OF '',IT CANNOT GETTING BACK TO DEFAULT STATE

/*
placeholder? string
value? string
type? string
secure? boolean
submit? submit(function())
*/

export default TextFieldMedium = ({placeholder, value, type, secure, submit}) =>{

  const [input, setInput] = useState({
    value: value,
    isError: false,
    isTyping: false,
    doneSubmitting: false
  })

  const handleSubmitEditing = () =>{
    if(submit!==undefined){
      submit()
    } else{
      console.log(`variable 'submit' expecting function`)
    }
  }

  return(
    <>
      <View style={styles.container(input.isError)}>
        <Text style={styles.formLabel(input.isError, input.isTyping, input.doneSubmitting, input.value)}>{input.isTyping&&input.doneSubmitting||input.value!==''? placeholder : ''}</Text>
        <View style={styles.formContainer(input.isError)}>
          <TextInput placeholder={placeholder} placeholderTextColor={'#22222250'} value={input.value} onFocus={()=>setInput({...input, isTyping: true})} onBlur={(value)=>setInput({...input, isTyping: false, value: value, doneSubmitting: true})} onChangeText={(value)=>setInput(value)} textContentType={type} secureTextEntry={secure} style={styles.formBar(input.isError)} onSubmitEditing={handleSubmitEditing} />
            {input.value!==''?
              <View style={styles.validation}>
                <Icon 
                  name={input.isError? 'x' : 'check'}
                  size={20}
                  color={input.isError? '#F01F0E' : '#2AA952'}
                />
              </View>:
              <></>
            }
        </View>
      </View>
      {input.isError?
        <Text style={styles.errorMessage}>Error Message</Text>:
        <></>
      }
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  formContainer: (isError) =>({
    width: width*.85,
    height: width*.12,
    backgroundColor: 'white',
    paddingLeft: width*.03,
    marginRight: width*.009,
    marginBottom: width*.003,
    flexDirection: 'row',
  }),
  formBar: (isError) =>({
    width: width*.8,
    color: isError? '#F01F0E' : '#222222', 
  }),
  container: (isError) =>({
    width: width*.9,
    marginTop: width*.01,
    marginBottom: width*.015,
    borderRadius: width*.01,
    backgroundColor: 'white',
    borderColor: isError? '#F01F0E' : 'white',
    borderWidth: isError? 1 : 0,
    elevation: 2,
    overflow: 'hidden'
  }),
  formLabel:(isError, isTyping, doneSubmitting, value)=>({
    zIndex: 1,
    color: isError? '#F01F0E' : '#22222290',
    fontSize: 10,
    marginLeft: width*.04,
    marginBottom: -width*.02,
    marginTop: isTyping&&doneSubmitting||value!==''? width*.01 : -width*.01
  }),
  validation:{
    marginTop: width*.005
  },
  errorMessage:{
    fontSize: 10,
    marginTop: -width*.01,
    marginLeft: width*.04,
    color: '#F01F0E'
  }
})
