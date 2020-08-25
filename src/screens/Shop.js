import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {HeaderBackButton} from '../components/molecules';
import {Filter, GridView, SortByButton} from '../components/atoms';

import {connect} from 'react-redux';
import {getAllProducts} from '../redux/actions/products';

import {CardWithLeftImageList, SortBy} from '../components/molecules';
import {config} from '../config/baseUrl';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Shop = (props) => {
  console.log(props.products.data, 'product');
  const [items, setItems] = useState([
    {
      name: 'Pullover',
      design: 'Mango',
      rating: 4,
      feedBack: 10,
      price: 51,
      image: (
        <Image
          source={require('../../assets/images/dumy1.png')}
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
        />
      ),
    },
    {
      name: 'Pullover',
      design: 'Mango',
      rating: 4,
      feedBack: 10,
      price: 51,
      image: (
        <Image
          source={require('../../assets/images/dumy2.png')}
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
        />
      ),
    },
    {
      name: 'Pullover',
      design: 'Mango',
      rating: 4,
      feedBack: 10,
      price: 51,
      image: (
        <Image
          source={require('../../assets/images/dumy1.png')}
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
        />
      ),
    },
    {
      name: 'Pullover',
      design: 'Mango',
      rating: 4,
      feedBack: 10,
      price: 51,
      image: (
        <Image
          source={require('../../assets/images/dumy2.png')}
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
        />
      ),
    },
  ]);

  const [slide, setSlide] = useState({
    size: 0,
  });

  const [sortName, setSortName] = useState({
    name: 'Price: lowest to high',
  });

  const handleShowSlide = () => {
    if (slide.size === 0) {
      setSlide({
        ...slide,
        size: width * 1.05,
      });
    } else {
      setSlide({
        ...slide,
        size: 0,
      });
    }
  };

  const handleSortName = (name) => {
    setSortName({
      ...sortName,
      name: name,
    });
  };

  const handleGoToFilter = () => {
    props.navigation.push('Filter');
  };

  const handleBackButton = () => {
    props.navigation.goBack();
  };

  return (
    <>
      <View style={styles.page}>
        <HeaderBackButton
          rightComponent={true}
          rightCompName="search"
          rightCompOnPress={() => props.navigation.push('Search')}
          submit={handleBackButton}
        />
        <View style={styles.wrapper}>
          <Text style={styles.title}> search_result </Text>
        </View>
        <View style={styles.filterContainer}>
          <View style={styles.wrapperFill}>
            <Filter submit={handleGoToFilter} />
            <SortByButton submit={handleShowSlide} name={sortName.name} />
            <GridView />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.itemList}>
            {props.products.data.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    props.navigation.navigate('ProductCard', {id: item.id})
                  }>
                  <CardWithLeftImageList
                    sourceImg={
                      <Image
                        source={{
                          uri: `${config.url}/images/products/${item.image}`,
                        }}
                        style={{
                          flex: 1,
                          width: null,
                          height: null,
                          resizeMode: 'cover',
                        }}
                      />
                    }
                    itemName={item.products}
                    itemDesign={item.color}
                    itemRating={5}
                    itemFeedback={10}
                    itemPrice={item.price}
                    type="filter-list"
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.sliderContainer}>
        <SortBy
          slideSize={slide.size}
          title="Sort By"
          showSlide={handleShowSlide}
          sortName={sortName.name}
          sortNameSubmit={handleSortName}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000010',
          }}></View>
      </View>
    </>
  );
};

const {width, height} = Dimensions.get('screen');

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
  filterContainer: {
    width: width,
    height: width * 0.15,
    backgroundColor: 'white',
  },
  sliderContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  products: state.products,
});

const mapDispatchToProps = {getAllProducts};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
