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
import IconFeather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Fontisto';

//BUG WHEN INPUT ERROR, IT RETURNS VALUE OF ''; EXPECTED VALUE OF CURRENT VALUE

export default SearchBar = ({placeholder, value, type, navigation}) => {
  const [input, setInput] = useState({
    value: value,
    isError: false,
    isTyping: false,
    doneSubmitting: false,
  });

  const handleSearch = () => {
    console.log('Searching');
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: width * 0.05,
        }}>
        <TouchableOpacity 
          activeOpacity={1}
          onPress={() => navigation.goBack()}
        >
          <IconFeather name="chevron-left" size={25} color="#222" />
        </TouchableOpacity>
        <View style={styles.formContainer(input.isError)}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={'#22222250'}
            value={input.value}
            onFocus={() => setInput({...input, isTyping: true})}
            onBlur={(value) =>
              setInput({
                ...input,
                isTyping: true,
                value: value,
                doneSubmitting: true,
              })
            }
            onChangeText={(value) => setInput(value)}
            // textContentType={type}
            style={styles.formBar(input.isError)}
            onSubmitEditing={(value) =>
              setInput({...input, isError: true, value: value})
            }
            keyboardType="web-search"
          />
          <View style={styles.searchIcon}>
            <Icon name="zoom" size={15} color="#22222280" />
          </View>
        </View>
      </View>
    </>
  );
};

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  formContainer: (isError) => ({
    width: width * 0.9,
    height: width * 0.09,
    backgroundColor: 'white',
    borderRadius: 100,
    marginRight: width * 0.009,
    marginBottom: width * 0.003,
    flexDirection: 'row-reverse',
    elevation: 0.5,
    alignItems: 'center',
  }),
  formBar: (isError) => ({
    width: width * 0.8,
    color: isError ? '#F01F0E' : '#222222',
  }),
  formLabel: (isError, isTyping, doneSubmitting, value) => ({
    // zIndex: 1,
    color: isError ? '#F01F0E' : '#22222290',
    fontSize: 10,
    marginBottom: -width * 0.02,
    marginTop:
      (isTyping && doneSubmitting) || value !== ''
        ? width * 0.01
        : -width * 0.01,
  }),
  searchIcon: {
    marginRight: width * 0.015,
  },
});
