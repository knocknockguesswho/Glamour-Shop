import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import {AddressCard} from '../atoms';

const AddressList = ({title, address, count, submit}) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.formTitle}>{title}</Text>
          {address !== null &&
            address.map((data, index) => {
              return (
                <AddressCard
                  key={index}
                  name={data.name}
                  address={data.address}
                  submit={submit}
                />
              );
            })}

          {address === null && (
            <Text style={styles.address_empty}>Address is empty</Text>
          )}
        </View>
      </View>
    </>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
  },
  formTitle: {
    width: width * 0.9,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginTop: width * 0.03,
    marginBottom: width * 0.03,
    alignSelf: 'center',
  },
  address_empty: {
    color: 'red',
    textAlign: 'center',
  },
});

export default AddressList;
