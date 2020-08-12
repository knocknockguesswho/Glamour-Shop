import React, { useState } from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, Image} from 'react-native';
import {HeaderBackButton} from '../components/molecules';
import {Filter, GridView, LowestToHigh} from '../components/atoms';

import {
  CardWithLeftImageList
} from '../components/molecules'

const Shop = () => {

  const [items, setItems] = useState([
    {
      name: 'Pullover',
      design: 'Mango',
      rating: 4,
      feedBack: 10,
      price: 51,
      image: <Image 
                source={require('../../assets/images/dumy1.png')} 
                style={{flex: 1,  width: null, height: null, resizeMode: 'cover'}} 
              />
    },
    {
      name: 'Pullover',
      design: 'Mango',
      rating: 4,
      feedBack: 10,
      price: 51,
      image: <Image 
                source={require('../../assets/images/dumy1.png')} 
                style={{flex: 1,  width: null, height: null, resizeMode: 'cover'}} 
              />
    },
    {
      name: 'Pullover',
      design: 'Mango',
      rating: 4,
      feedBack: 10,
      price: 51,
      image: <Image 
                source={require('../../assets/images/dumy1.png')} 
                style={{flex: 1,  width: null, height: null, resizeMode: 'cover'}} 
              />
    },
    {
      name: 'Pullover',
      design: 'Mango',
      rating: 4,
      feedBack: 10,
      price: 51,
      image: <Image 
                source={require('../../assets/images/dumy1.png')} 
                style={{flex: 1,  width: null, height: null, resizeMode: 'cover'}} 
              />
    },
  ])

  return (
    <View style={styles.page}>
      <HeaderBackButton rightComponent={true} rightCompName="search" />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Women's tops</Text>
      </View>
      <View style={styles.filterContainer}>
        <View style={styles.wrapperFill}>
          <Filter />
          <LowestToHigh />
          <GridView />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.itemList}>
          {items.map((item, index)=>{
            return(
              <CardWithLeftImageList 
                key={index}
                sourceImg={item.image}
                itemName={item.name}
                itemDesign={item.design}
                itemRating={item.rating}
                itemFeedback={item.feedBack}
                itemPrice={item.price}
                type='filter-list'
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Shop;

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  page: {flex: 1},
  wrapper: {backgroundColor: 'white', paddingHorizontal: 15},
  title: {fontSize: 34, fontWeight: 'bold'},
  wrapperFill: {
    backgroundColor: '#F9F9F9',
    marginHorizontal: 22,
    marginVertical: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterContainer:{
    width: width,
    height: width*.15,
    backgroundColor: 'white'
  },
  itemList:{
  }
});
