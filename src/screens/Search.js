import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import {SearchBar, Button, Gap} from '../components/atoms';
import {HeaderBackButton} from '../components/molecules';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Search = () => {

  const [pop, setPop] = useState([
    {
      name: 'work shoes'
    },
    {
      name: 'swimsuit'
    },
    {
      name: 'swimsuit'
    },
    {
      name: 'work shoes'
    },
    {
      name: 'swimsuit'
    },
  ])


  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <SearchBar placeholder='Search' />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Popular search</Text>
          <FlatList 
            data={pop}
            renderItem={({item}) => (
              <View style={{marginRight: width*.02, marginBottom: width*.02}}>
                <TouchableOpacity activeOpacity={.8} style={styles.popButton}>
                    <Text style={{color: 'red', fontSize: 12}}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
      </View>
    </View>
  );
};

export default Search;

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  page: {backgroundColor: '#E5E5E5', flex: 1},
  wrapper: {flexDirection: 'row'},
  container: {padding: 15},
  text: {fontSize: 16, fontWeight: '700', marginBottom: width*.05},
  popButton:{
    borderWidth: width*.0025,
    borderColor: 'red',
    paddingVertical: width*.01,
    paddingHorizontal: width*.03,
    alignSelf: 'flex-start',
    borderRadius: 100,
  }
});
