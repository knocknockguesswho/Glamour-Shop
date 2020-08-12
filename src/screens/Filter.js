import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import {HeaderBackButton} from '../components/molecules';
import {Button, Gap} from '../components/atoms';


import {
  Colors
} from '../components/molecules'

import {
  Tags
} from '../components/atoms'

const Filter = (props) => {

  const [sizes, setSizes] = useState([
    {
      name: 'XS',
      active: false
    },
    {
      name: 'S',
      active: false
    },
    {
      name: 'M',
      active: false
    },
    {
      name: 'L',
      active: false
    },
    {
      name: 'XL',
      active: false
    }
  ])

  const [categories, setCategories] = useState([
    {
      name: 'All',
      active: false
    },
    {
      name: 'Women',
      active: false
    },
    {
      name: 'Men',
      active: false
    },
    {
      name: 'Boys',
      active: false
    },
    {
      name: 'Girls',
      active: false
    }
  ])


  const handleDiscard = () =>{

  }

  const handleAppy = () =>{

  }

  const handleFilterButton = (name) => {
    setSortByButton([...sortByButton].map(obj =>{
      if(obj.name===name){
        return{
          ...obj,
          active: true
        }
      } else{
        return{
          ...obj,
          active: false
        }
      }
    }))
    if(sortName!==name&&sortName!==''){
      sortNameSubmit(name)
    }
  };

  handleBackButton = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.page}>
      <HeaderBackButton
        midCompTitle="Filters"
        middleComponent={true}
        submit={handleBackButton}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Colors</Text>
      </View>
      <View style={styles.box}>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Colors />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sizes</Text>
      </View>
      <View style={styles.box}>
        <View style={{flexDirection: 'row', width: width*.7, justifyContent:'space-around'}}>
          {sizes.map((size, index)=>{
            return(
              <Tags 
                key={index}
                type='small'
                title={size.name}
              />
            )
          })}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Category</Text>
      </View>
      <View style={styles.box}>
          <View>
           <FlatList 
             data={categories}
             renderItem={({item}) => (
               <View style={{marginRight: width*.02, marginBottom: width*.02}}>
                  <Tags 
                    type='primary'
                    title={item.name}
                  />
               </View>
             )}
             numColumns={4}
             keyExtractor={(item, index) => index}
           />
            {/* {categories.map((category, index)=>{
              return(
              )
            })} */}
          </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button type="outline" title="Discard" />
          <Button type="primary" title="Apply" />
        </View>
      </View> 
    </View>
  );
};

export default Filter;

const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
  page: {backgroundColor: '#F9F9F9', flex: 1},
  container: {padding: 15},
  title: {fontSize: 16, fontWeight: 'bold'},
  box: {
    backgroundColor: 'white', 
    width: width, 
    paddingVertical: width*.07,
    paddingHorizontal: width*.07,
    justifyContent: 'center',
    elevation: 2
  },
  buttonContainer:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: width*.03,
    elevation: 30,
    backgroundColor: 'white'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
    flex: 1,
  },
});
