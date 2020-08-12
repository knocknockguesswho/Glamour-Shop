import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import {ButtonWithArrow, TextFieldMedium} from '../atoms';

const FormSignup = ({title, formGroup, link, submit, onPress}) => {
  const [input, setInput] = useState({});

  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.formTitle}>{title}</Text>
        <View style={{marginBottom: width * 0.01, alignItems: 'center'}}>
          {formGroup.map((form, index) => {
            return (
              <TextFieldMedium
                key={index}
                placeholder={form.placeholder}
                value={form.value}
                type={form.type}
                secure={form.secure}
                check={true}
                submit={submit}
              />
            );
          })}
        </View>
        <View style={styles.buttonWithArrow}>
          {link !== null && <ButtonWithArrow title={link} submit={onPress} />}
        </View>
      </View>
    </>
  );
};

export default FormSignup;
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    width: width * 0.95,
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black',
    marginBottom: width * 0.12,
  },
  buttonWithArrow: {
    width: width * 0.9,
    alignItems: 'flex-end',
    marginBottom: width * 0.05,
  },
});
