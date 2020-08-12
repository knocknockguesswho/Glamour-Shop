import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
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

const TextFieldMedium = ({
  placeholder,
  value,
  type,
  secure,
  submit,
  check,
  withArrow,
}) => {
  const [input, setInput] = useState({
    value: value,
    isError: false,
    isTyping: false,
    doneSubmitting: false,
  });

  const handleSubmitEditing = () => {
    setInput({...input, isTyping: false, doneSubmitting: true});
    if (submit !== undefined) {
      submit(placeholder, input.value);
    } else {
      console.log(`variable '${submit}' expecting function`);
    }
  };

  return (
    <>
      <View style={styles.container(input.isError)}>
        <Text
          style={styles.formLabel(
            input.isError,
            input.isTyping,
            input.doneSubmitting,
            input.value,
          )}>
          {(input.isTyping && input.doneSubmitting) || input.value !== ''
            ? placeholder
            : ''}
        </Text>
        <View style={styles.formContainer(input.isError)}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={'#22222250'}
            value={input.value}
            onFocus={() => setInput({...input, isTyping: true})}
            onBlur={() => handleSubmitEditing()}
            onChangeText={(val) => setInput({...input, value: val})}
            textContentType={type}
            secureTextEntry={secure}
            style={styles.formBar(input.isError)}
            onSubmitEditing={() => handleSubmitEditing}
          />

          {input.value !== '' && check === true ? (
            <View style={styles.validation}>
              <Icon
                name={input.isError ? 'x' : 'check'}
                size={20}
                color={input.isError ? '#F01F0E' : '#2AA952'}
              />
            </View>
          ) : withArrow ? (
            <TouchableOpacity style={styles.withArrow}>
              <Icon name="chevron-right" size={15} color="#22222280" />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
      {input.isError ? (
        <Text style={styles.errorMessage}>Error Message</Text>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextFieldMedium;
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  formContainer: (isError) => ({
    width: width * 0.85,
    height: width * 0.12,
    backgroundColor: 'white',
    paddingLeft: width * 0.03,
    marginRight: width * 0.009,
    marginBottom: width * 0.003,
    flexDirection: 'row',
  }),
  formBar: (isError) => ({
    width: width * 0.8,
    color: isError ? '#F01F0E' : '#222222',
  }),
  container: (isError) => ({
    width: width * 0.9,
    marginTop: width * 0.01,
    marginBottom: width * 0.015,
    borderRadius: width * 0.01,
    backgroundColor: 'white',
    borderColor: isError ? '#F01F0E' : 'white',
    borderWidth: isError ? 1 : 0,
    elevation: 2,
    overflow: 'hidden',
  }),
  formLabel: (isError, isTyping, doneSubmitting, value) => ({
    zIndex: 1,
    color: isError ? '#F01F0E' : '#22222290',
    fontSize: 10,
    marginLeft: width * 0.04,
    marginBottom: -width * 0.02,
    marginTop:
      (isTyping && doneSubmitting) || value !== ''
        ? width * 0.01
        : -width * 0.01,
  }),
  validation: {
    marginTop: width * 0.005,
  },
  errorMessage: {
    fontSize: 10,
    marginTop: -width * 0.01,
    marginLeft: width * 0.04,
    color: '#F01F0E',
  },
  withArrow: {
    marginTop: width * 0.04,
  },
});
